#  Portfolio Evaluator

A full-stack web application that analyzes a GitHub user's profile and provides insights like top repositories, language usage, and overall portfolio score.

---

## Features

- 🔍 Fetch GitHub user profile data
- 📊 Analyze repositories and contributions
- 🧠 Generate portfolio scores (activity, code quality, etc.)
- 📈 Display top repositories and languages
- ⚡ Fast and responsive UI

---

## Tech Stack

### Frontend
- React (Vite)
- CSS / Tailwind (if used)

### Backend
- Node.js
- Express.js

### Database
- MongoDB (for caching)

### API
- GitHub REST API

---

## Project Structure
```
Portfolio-evaluator/
│
├── client/ # Frontend (React + Vite)
├── server/ # Backend (Node + Express)
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── services/

```

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ananya-kushi07/Portfolio-evaluator.git
cd Portfolio-evaluator
```

### 2️⃣ Backend Setup
- cd server
- npm install

- Create .env file:
- PORT=5000
- MONGODB_URI=your_mongodb_connection_string
- CLIENT_URL=http://localhost:5173

Run backend:
- npm run dev

### 3️⃣ Frontend Setup
- cd client
- npm install
- npm run dev

🌐 Deployment
- Frontend (Vercel)
- Root Directory: client
- Build Command: npm run build
- Output Directory: dist

Backend (Render)
- Root Directory: server
- Start Command: node app.js

Example Output
- Top repositories with stars ⭐
- Language distribution 📚
- Portfolio score breakdown 📈

### Future Improvements:
- Authentication system
- Downloadable report
- Advanced analytics
- Multi-user comparison

👩‍💻 Author
Srishti Rai M
