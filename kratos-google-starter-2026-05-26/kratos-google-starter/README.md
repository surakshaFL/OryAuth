## Kratos Google Starter

Created on 2026-05-26 as a clean self-hosted Ory Kratos starter for:

- email/password login
- Google social sign-in
- browser-based self-service flows

What this includes:

- `docker-compose.yml`
- `kratos.yml`
- `identity/identity.schema.json`
- `oidc/google.jsonnet`

What you need to replace:

- `YOUR_GOOGLE_CLIENT_ID`
- `YOUR_GOOGLE_CLIENT_SECRET`
- UI URLs if your frontend is not `http://127.0.0.1:3000`

Google redirect URI to register in Google Cloud:

- `http://127.0.0.1:4433/self-service/methods/oidc/callback/google`

Local URLs:

- Kratos public: `http://127.0.0.1:4433`
- Kratos admin: `http://127.0.0.1:4434`
- MailSlurper UI: `http://127.0.0.1:4436`
- Login UI: `http://127.0.0.1:3000/login`
- Registration UI: `http://127.0.0.1:3000/registration`
- Recovery UI: `http://127.0.0.1:3000/recovery`
- Settings UI: `http://127.0.0.1:3000/settings`

Start:

```bash
docker compose up -d
docker compose logs -f kratos
```

Bootstrap database:

```bash
docker compose run --rm kratos migrate sql -e --yes
```

Then start Kratos again:

```bash
docker compose up -d kratos
```
