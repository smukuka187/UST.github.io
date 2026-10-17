# Baby Care World — static site

Static HTML website (pregnancy/baby-care content). No build step, no backend, no external credentials.

## Running in the sandbox

```
docker compose -f docker-compose.base44.yml up -d
```

- nginx:alpine serves the repo root on host port 3000.
- The repo root directory must be world-readable (chmod 755) so the nginx worker user can traverse it; the sandbox checkout defaults to 700.
- No live-reload dev server (static files). Call `reload_preview` after edits if the iframe doesn't refresh.
- External client-side scripts (Google Analytics, Cookiebot) need no server credentials.
