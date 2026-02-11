# Online Course Platform - Complete Setup Guide

## Frontend & Backend Setup

This project has two parts:
1. **Frontend**: React + Vite (port 5173)
2. **Backend**: Node.js + Express + MongoDB (port 5000)

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas cloud)

## Frontend Setup

```bash
# From the root directory
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

## Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Make sure MongoDB is running, then start the server
npm run dev
```

Backend runs on: `http://localhost:5000`

## MongoDB Setup

### Option 1: Local MongoDB
1. Download and install from: https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Backend will connect to `mongodb://localhost:27017/online-course`

### Option 2: MongoDB Atlas (Cloud - Recommended)
1. Create account at: https://www.mongodb.com/cloud/atlas
2. Create a cluster and get your connection string
3. Update `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/online-course
   ```

## Features Implemented

### Authentication
- ✅ User Registration (Sign Up)
- ✅ User Login
- ✅ Logout
- ✅ JWT Token-based authentication
- ✅ Password hashing with bcryptjs
- ✅ Session persistence with localStorage

### Components
- ✅ AuthContext for state management
- ✅ Login page (`/login`)
- ✅ Signup page (`/signup`)
- ✅ Navbar with auth buttons
- ✅ Protected user session

### Database
- ✅ MongoDB user model
- ✅ User data storage (name, email, password)
- ✅ Email validation
- ✅ Password hashing

## API Endpoints

### Authentication Routes
- **POST** `/api/auth/signup` - Register new user
  - Body: `{ name, email, password }`
  
- **POST** `/api/auth/login` - User login
  - Body: `{ email, password }`

## Testing the Authentication

1. Start both frontend and backend servers
2. Go to `http://localhost:5173`
3. Click "Sign Up" to create an account
4. Login with your credentials
5. You'll see your name in the navbar
6. Click "Logout" to sign out

## Project Structure

```
Project_OnlineCourse/
├── src/
│   ├── context/
│   │   ├── AuthContext.jsx       (NEW)
│   │   └── CartContext.jsx
│   ├── routes/
│   │   ├── Login.jsx             (NEW)
│   │   ├── Signup.jsx            (NEW)
│   │   └── ... other routes
│   ├── components/
│   │   └── Navbar.jsx            (UPDATED)
│   ├── App.jsx                   (UPDATED)
│   └── main.jsx
├── backend/                      (NEW)
│   ├── models/
│   │   └── User.js              (NEW)
│   ├── routes/
│   │   └── authRoutes.js        (NEW)
│   ├── server.js                (NEW)
│   ├── .env                     (NEW)
│   ├── package.json             (NEW)
│   └── README.md                (NEW)
└── ...
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check connection string in `backend/.env`
- For MongoDB Atlas, ensure IP whitelist includes your IP

### CORS Error
- Frontend and backend both need to be running
- Check that backend is accessible on `http://localhost:5000`

### Port Already in Use
- Change PORT in `backend/.env` if 5000 is already in use
- Change Vite port if 5173 is in use (in `vite.config.js`)

## Next Steps

You can extend this authentication system by:
- Adding user profile management
- Implementing password reset
- Adding email verification
- Creating protected routes for authenticated users
- Adding role-based access control
