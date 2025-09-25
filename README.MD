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

Test APIs

### Frontend
```
cd frontend
npm install
npm run dev
```
Open the printed localhost URL.

