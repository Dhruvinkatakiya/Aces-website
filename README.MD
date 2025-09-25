## ACES Website (Monorepo)

Short guide to run the project locally.

### Stack
- Backend: Node.js, Express, Mongoose
- Frontend: React (Vite)

### Prerequisites
- Node.js 18+
- MongoDB connection string (local or Atlas)

### Backend
1) Create `backend/.env`:
```
MONGO_URI=your-mongodb-connection-string
PORT=5000
```
2) Install & run:
```
cd backend
npm install
node server.js
```
You should see: "Server running on 5000" and "MongoDB connected".

Test APIs:
```
curl -i -X POST http://localhost:5000/api/join \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada","email":"ada@example.com","branch":"CSE","year":"3","why":"I love building"}'

curl -i -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Grace","email":"grace@example.com","message":"Hello"}'
```
Notes: Emails are hashed; routes are public (no JWT).

### Frontend
```
cd frontend
npm install
npm run dev
```
Open the printed localhost URL.

### Troubleshooting
- If MongoDB fails to connect, recheck `MONGO_URI` and Atlas IP allowlist.
- If push is rejected: `git pull --rebase origin main`.
