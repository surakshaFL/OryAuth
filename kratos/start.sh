#!/bin/sh

set -eu

if [ -z "${GOOGLE_CLIENT_ID:-}" ]; then
  echo "GOOGLE_CLIENT_ID is required" >&2
  exit 1
fi

if [ -z "${GOOGLE_CLIENT_SECRET:-}" ]; then
  echo "GOOGLE_CLIENT_SECRET is required" >&2
  exit 1
fi

PROVIDERS_FILE=/tmp/kratos.oidc.providers.yml

OIDC_PROVIDERS=$(cat <<EOF
          - id: google
            provider: google
            client_id: ${GOOGLE_CLIENT_ID}
            client_secret: ${GOOGLE_CLIENT_SECRET}
            issuer_url: https://accounts.google.com
            mapper_url: file:///etc/config/kratos/google.mapper.jsonnet
            scope:
              - openid
              - email
              - profile
            requested_claims:
              id_token:
                email:
                  essential: true
                email_verified:
                  essential: true
                given_name:
                  essential: true
                family_name: null
EOF
)

if [ -n "${GITHUB_CLIENT_ID:-}" ] || [ -n "${GITHUB_CLIENT_SECRET:-}" ]; then
  if [ -z "${GITHUB_CLIENT_ID:-}" ]; then
    echo "GITHUB_CLIENT_ID is required when enabling GitHub OIDC" >&2
    exit 1
  fi

  if [ -z "${GITHUB_CLIENT_SECRET:-}" ]; then
    echo "GITHUB_CLIENT_SECRET is required when enabling GitHub OIDC" >&2
    exit 1
  fi

  OIDC_PROVIDERS="${OIDC_PROVIDERS}
          - id: github
            provider: github
            client_id: ${GITHUB_CLIENT_ID}
            client_secret: ${GITHUB_CLIENT_SECRET}
            mapper_url: file:///etc/config/kratos/github.mapper.jsonnet
            scope:
              - user:email
"
fi

printf '%s\n' "$OIDC_PROVIDERS" > "$PROVIDERS_FILE"

# Render the runtime config from the checked-in template so secrets stay out of git.
awk -v providers_file="$PROVIDERS_FILE" '
  $0 == "__OIDC_PROVIDERS__" {
    while ((getline line < providers_file) > 0) {
      print line
    }
    close(providers_file)
    next
  }
  { print }
' /etc/config/kratos/kratos.yml > /tmp/kratos.rendered.yml

exec kratos serve -c /tmp/kratos.rendered.yml --dev
