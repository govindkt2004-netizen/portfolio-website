# Personal Portfolio Website

A modern, responsive full-stack portfolio website built with React, Vite, Node.js, Express, MongoDB, JWT, bcrypt, and Framer Motion.

## Features
- Dark/light mode
- Animated hero, skills, projects, certificates, resume, and contact pages
- Admin dashboard with JWT authentication
- Project and certificate CRUD APIs
- Contact form storing messages in MongoDB and sending email notifications
- Resume upload and download support
- SEO metadata and polished responsive UI

## Installation
1. Install dependencies at the project root:
   npm install
2. Copy the environment example file and update the values:
   cp .env.example .env
3. Start the application:
   npm run dev

The frontend will run on http://localhost:5173 and the backend on http://localhost:5000.

## Deployment Notes
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Default Admin Credentials
- Email: admin@example.com
- Password: Admin@12345

You can change these values in the environment variables.
