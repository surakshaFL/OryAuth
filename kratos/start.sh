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

# Render the runtime config from the checked-in template so secrets stay out of git.
sed \
  -e "s|__GOOGLE_CLIENT_ID__|$GOOGLE_CLIENT_ID|g" \
  -e "s|__GOOGLE_CLIENT_SECRET__|$GOOGLE_CLIENT_SECRET|g" \
  /etc/config/kratos/kratos.yml > /tmp/kratos.rendered.yml

exec kratos serve -c /tmp/kratos.rendered.yml --dev
