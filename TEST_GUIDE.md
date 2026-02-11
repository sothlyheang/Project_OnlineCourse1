# Testing the Authentication System

## Prerequisites
- Both frontend and backend servers are running
- MongoDB is running (local or cloud)

## Step-by-Step Testing

### 1. Start MongoDB
**Windows (Local):**
- Open Command Prompt
- Navigate to your MongoDB bin folder
- Run: `mongod`

**Or use MongoDB Atlas (Cloud):**
- Create account at https://www.mongodb.com/cloud/atlas
- Get your connection string
- Update `backend/.env` with your connection string

### 2. Start Backend Server
```bash
cd backend
npm install  # First time only
npm run dev
```
Expected output: `Server running on http://localhost:5000`

### 3. Start Frontend Server  
```bash
# In a new terminal at project root
npm install  # First time only
npm run dev
```
Expected output: `VITE v... ready in ... ms`

### 4. Test Sign Up
1. Open `http://localhost:5173` in browser
2. Click **"Sign Up"** button in navbar
3. Fill in the form:
   - Name: `John Doe`
   - Email: `john@example.com`
   - Password: `password123`
   - Confirm Password: `password123`
4. Click **"Sign Up"**
5. You should be redirected to home page with your name showing in navbar

### 5. Test Logout
1. Click **"Logout"** button in navbar
2. You should be logged out and see Login/Sign Up buttons again

### 6. Test Login
1. Click **"Login"** button
2. Enter credentials:
   - Email: `john@example.com`
   - Password: `password123`
3. Click **"Login"**
4. You should be on home page with your name in navbar

### 7. Test Session Persistence
1. While logged in, refresh the page (F5)
2. You should still be logged in (name visible in navbar)
3. This proves the token is stored in localStorage

## Troubleshooting

### ❌ "Failed to fetch" error
**Problem:** Backend not running or not accessible
**Solution:** 
- Make sure backend is running on `http://localhost:5000`
- Check browser console for the actual error
- Verify MongoDB connection string in `backend/.env`

### ❌ "Email already registered" error
**Problem:** Email already exists in database
**Solution:**
- Use a new email address for testing
- Or check MongoDB directly to delete old test users

### ❌ No response from backend
**Problem:** MongoDB connection failed
**Solution:**
- Get MongoDB logs: Check if MongoDB service is running
- For local: `mongod` should be running in a terminal
- For Atlas: Check your connection string and IP whitelist

### ❌ Port 5000 already in use
**Solution:**
- Change PORT in `backend/.env` (e.g., `PORT=5001`)
- Update frontend API call in `src/context/AuthContext.jsx` if needed

### ❌ CORS error
**Problem:** Frontend and backend blocking each other
**Solution:** Make sure:
- Backend is running on `http://localhost:5000`
- Frontend is running on `http://localhost:5173`
- Both must be running simultaneously

## Checking the Database

### Using MongoDB Compass (GUI)
1. Download MongoDB Compass: https://www.mongodb.com/products/compass
2. Connect to `mongodb://localhost:27017`
3. Navigate to `online-course` database
4. Check `users` collection
5. You should see your registered users here

### Using MongoDB CLI
```bash
# Connect to MongoDB
mongo

# Select database
use online-course

# View all users
db.users.find()

# Clear all users (for testing)
db.users.deleteMany({})
```

## Expected Database Structure

Each user document in MongoDB should look like:
```json
{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "john@example.com",
  "password": "$2a$10$...",  // Hashed password
  "createdAt": "2024-02-11T10:30:00.000Z"
}
```

## Success Indicators

✅ All tests above pass
✅ Sign up creates user in MongoDB
✅ Login retrieves user data correctly
✅ Logout clears session
✅ Page refresh maintains login state
✅ User name appears in navbar when logged in
✅ Login/Sign Up buttons hide when logged in
