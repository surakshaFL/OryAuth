## Kratos-Only Candidate Extract

Created on 2026-05-26 from these local repo copies:

- `raksha-fl/ory-bridge-ui`
- `raksha-fl/ory-end-to-end`

Scan result:

- No standalone Ory Kratos service files were found.
- No `kratos.yml`, Kratos courier config, Kratos self-service config, or Google OIDC provider config were found.
- No dedicated Kratos deployment manifests were found.

Only reusable Kratos-adjacent asset found:

- `from-ory-end-to-end/config/identity.schema.json`

Interpretation:

- `ory-bridge-ui` is a Hydra login/consent bridge, not Kratos.
- `ory-end-to-end` contains Hydra and Keto config plus a bridge UI, but not a Kratos runtime setup in the scanned repo copy.

This archive is intentionally small because there was no real Kratos-only backend to extract from these two repos.
