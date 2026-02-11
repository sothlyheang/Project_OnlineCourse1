# BIU Online Course Platform

A full-stack online course platform built with React, Node.js, Express, and MongoDB.

## Features

### ✅ Authentication System
- User Registration (Sign Up)
- User Login
- Logout functionality
- JWT token-based authentication
- Password encryption with bcryptjs
- Session persistence with localStorage

### 📚 Course Features
- Browse courses
- View course details
- Search functionality
- Shopping cart system

## Tech Stack

**Frontend:**
- React 19.2
- Vite
- React Router
- TailwindCSS
- React Icons

**Backend:**
- Node.js
- Express
- MongoDB
- JWT Authentication
- Bcryptjs for password hashing

## Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas cloud)

### Frontend Setup
```bash
npm install
npm run dev
```
Runs on: `http://localhost:5173`

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Runs on: `http://localhost:5000`

## Detailed Setup Guide

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for complete setup instructions including MongoDB configuration.

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
