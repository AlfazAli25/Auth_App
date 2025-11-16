# Backend (Express + MongoDB + JWT)

Copy `.env.example` to `.env` and fill values. Then install and run:

```powershell
cd backend
npm install
npm run dev
```

API endpoints:
- POST /api/auth/register { name, email, password }
- POST /api/auth/login { email, password }
- GET /api/auth/me (Authorization: Bearer <token>)
- POST /api/auth/logout (Authorization: Bearer <token>)

Notes: This is a minimal demo. In production, use secure cookies, token revocation, and stronger validation.
