# Todo App

React (Vite) + Django REST Framework + SQLite, in Docker.

| | |
|---|---|
| Frontend | http://localhost:21000/ |
| API | http://localhost:21001/api/health/ |
| Django admin | http://localhost:21001/admin/ |

Admin credentials are in `.env`.

```bash
docker compose up -d --build
docker compose exec backend python manage.py migrate
docker compose logs -f
docker compose down
```

The Vite dev server proxies `/api` to the backend container, so the browser
makes same-origin requests and CORS is not involved in development.
