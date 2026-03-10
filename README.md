# UniLearnHub

A MERN stack learning management platform built for SLIIT students.

---

## Folder Structure

```
UniLearn/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── config/
│       │   ├── db.js
│       │   ├── cors.js
│       │   └── mailer.js            ← placeholder (email not implemented yet)
│       ├── middlewares/
│       │   ├── auth.middleware.js
│       │   ├── error.middleware.js
│       │   └── validate.middleware.js
│       ├── models/
│       │   └── User.js
│       ├── modules/
│       │   └── auth/
│       │       ├── auth.routes.js
│       │       ├── auth.controller.js
│       │       ├── auth.service.js
│       │       ├── auth.validators.js
│       │       └── auth.mailTemplates.js  ← placeholder
│       ├── routes/
│       │   └── index.js
│       └── utils/
│           ├── ApiError.js
│           ├── asyncHandler.js
│           └── generateToken.js
│
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── .env.example
    └── src/
        ├── api/
        │   ├── axios.js
        │   └── authApi.js
        ├── components/
        │   ├── Loader.jsx
        │   ├── ProtectedRoute.jsx
        │   └── layout/
        │       ├── MainLayout.jsx
        │       ├── Navbar.jsx
        │       └── ProfileDropdown.jsx
        ├── context/
        │   └── AuthContext.jsx
        ├── features/
        │   ├── auth/
        │   │   ├── components/
        │   │   │   └── AuthForm.jsx
        │   │   └── pages/
        │   │       ├── Login.jsx
        │   │       └── Signup.jsx
        │   ├── home/
        │   │   └── pages/
        │   │       └── Home.jsx
        │   └── placeholders/
        │       └── pages/
        │           ├── ResourcePage.jsx
        │           ├── ResourceRequestPage.jsx
        │           ├── LiveClassPage.jsx
        │           └── StudyPlanPage.jsx
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        └── routes.jsx
```

---

## Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Run in development mode
npm run dev

# Run in production
npm start
```

### Backend .env variables

| Variable     | Description                 | Example                                 |
|--------------|-----------------------------|-----------------------------------------|
| PORT         | Server port                 | 5000                                    |
| MONGO_URI    | MongoDB connection string   | mongodb://localhost:27017/unilearnhub   |
| JWT_SECRET   | Secret key for signing JWTs | change_this_to_a_long_random_string     |
| CLIENT_URL   | Frontend origin (CORS)      | http://localhost:5173                   |

---

## Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env — set VITE_API_URL to your backend URL

# Start development server
npm run dev

# Build for production
npm run build
```

### Frontend .env variables

| Variable       | Description           | Example                     |
|----------------|-----------------------|-----------------------------|
| VITE_API_URL   | Backend API base URL  | http://localhost:5000/api   |

---

## API Routes

| Method | Route              | Auth Required | Description              |
|--------|--------------------|---------------|--------------------------|
| POST   | /api/auth/signup   | No            | Register a new student   |
| POST   | /api/auth/login    | No            | Login and receive JWT    |
| GET    | /api/auth/me       | Yes (Bearer)  | Get current user profile |

---

## Auth Rules

- Only SLIIT campus emails (`@my.sliit.lk`) are accepted at signup.
- Passwords are hashed with bcryptjs (salt rounds: 10).
- JWT tokens expire in 7 days.
- Token is stored in `localStorage` on the frontend.
- Protected routes redirect unauthenticated users to `/login`.

---

## Route Access

| Route          | Public | Protected |
|----------------|--------|-----------|
| /              | ✅     |           |
| /login         | ✅     |           |
| /signup        | ✅     |           |
| /resources     |        | ✅        |
| /requests      |        | ✅        |
| /live-class    |        | ✅        |
| /study-plan    |        | ✅        |

---

## Tech Stack

**Backend:** Node.js · Express · MongoDB · Mongoose · JWT · bcryptjs · express-validator  
**Frontend:** React · React Router v6 · Axios · Context API · TailwindCSS · Vite

---

## Coming Soon

- Email verification (Nodemailer + SLIIT email flow)
- Resource upload & browsing
- Resource request system
- Live class scheduling
- Study plan builder