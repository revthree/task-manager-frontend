# Task Manager — Login (React)

A React frontend for my [Node.js/Express Task Manager API](https://github.com/revthree/TaskManager-rest-API-nodejs) — a controlled login form that authenticates against the live, deployed backend and returns a JWT.

## Stack

- **React** (JavaScript, not TypeScript)
- **Vite** — dev server and build tooling
- Native **`fetch`** — no HTTP client library

## What it does

- Controlled form with `username`/`password` inputs, backed by `useState`
- On submit, prevents the default page reload and sends a `POST` request to the Task Manager API's `/api/auth/login` route
- Logs the response (`{ username, role, token }`) to the console on success, or the error on failure

## Architecture

Single-component app (`App.jsx`):
- `useState` holds `username` and `password`
- Each input is "controlled" — its `value` comes from state, and `onChange` updates that state on every keystroke
- `handleSubmit` calls `e.preventDefault()` (stopping the browser's default full-page-reload form behavior), then calls `fetch` with the form data as a JSON body

## Running locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173` by default.

## Notes

- Talks to the deployed backend at `https://taskmanager-rest-api-nodejs.onrender.com` — no local backend setup needed to test it.
- CORS is enabled on the backend specifically for `http://localhost:5173`; if you fork this and run it on a different port, the backend's CORS config will need updating to match.
- Known issue (backend-side, not this app): a failed login due to an unhandled error path can return an HTML error page instead of JSON — a fix pending in the Node API's error handling, not this project.
