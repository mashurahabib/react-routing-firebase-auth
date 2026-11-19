# React Routing & Firebase Authentication

A simple React application demonstrating React Router, Firebase Email/Password Authentication, and protected routes.

## Pages and routes
- `/` — Home (public)
- `/login` — Login (public)
- `/register` — Register (public)
- `/dashboard` — Dashboard (protected)
- `/profile` — Profile (protected)

## Requirements
- Node.js (LTS recommended)
- A Firebase project

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. In Firebase Console, create a project and enable **Authentication → Sign-in method → Email/Password**.
3. Register a Web App in Firebase and copy its configuration.
4. Copy `.env.example` to `.env` and replace each placeholder with your Firebase project values.
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the local URL shown in the terminal.

## Build
```bash
npm run build
```

## Important
- Do not commit your `.env` file or share private project credentials.
- Firebase Authentication handles user registration, login, logout, and authentication state.
- Take your own screenshots after running the application and add them to the submission.
- Replace the student/course details in the lab report before submitting.
