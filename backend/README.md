# Online Course Platform Backend

This is the backend server for the Online Course Platform built with Node.js, Express, and MongoDB.

## Installation

1. Install dependencies:
```bash
cd backend
npm install
```

2. Make sure MongoDB is installed and running on your machine
   - On Windows: Download from https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

3. Create a `.env` file in the backend folder with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/online-course
JWT_SECRET=your_jwt_secret_key_change_this
NODE_ENV=development
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication

**POST /api/auth/signup**
- Register a new user
- Body: `{ name, email, password }`
- Returns: `{ token, user }`

**POST /api/auth/login**
- Login user
- Body: `{ email, password }`
- Returns: `{ token, user }`

## Database

The server uses MongoDB to store user data. Each user has:
- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (hashed with bcryptjs)
- `createdAt`: Date (automatic)

## Security Features

- Passwords are hashed using bcryptjs (10 salt rounds)
- JWT tokens for authentication
- CORS enabled for frontend communication
- Input validation
- Email uniqueness check
