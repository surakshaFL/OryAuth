# Ory Auth UI

A React + Vite authentication UI wired to Ory browser flows.

## Features

- Register screen
- Login screen
- Forgot password flow
- Email verification screen
- Reset password flow
- Reset success screen

## Tech Stack

- React
- TypeScript
- Vite
- `@ory/client`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run Ory locally

This project expects the Ory frontend API to be available locally.

The Vite dev server proxies requests from `/ory` to:

```text
http://127.0.0.1:4433
```

That proxy is configured in [vite.config.ts](/home/suraksha/Projects/OryAuth/vite.config.ts:1).

### 3. Start the app

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/   Reusable auth UI pieces
  lib/          Ory client setup
  pages/        Auth screens
  App.tsx       Screen switching logic
```

## Notes

- `dist/` is generated build output and is ignored by Git.
- `node_modules/` is ignored by Git.
- Local environment files such as `.env` are ignored by Git.

## GitHub

If you are pushing this project to GitHub, commit the source files plus:

- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `vite.config.ts`
- `.gitignore`
- `README.md`

Do not commit:

- `node_modules/`
- `dist/`
- local editor files
- private `.env` files
