# 🚀 Task Manager API with Role-Based Access Control (RBAC)

## 🔗 Live Demo

Frontend: [https://your-app.vercel.app](https://task-manager-app-gamma-hazel.vercel.app/)
Backend: [https://your-api.onrender.com](https://task-manager-app-2-ui1i.onrender.com)
---

## 📌 Overview

This is a full-stack Task Manager application built with a focus on secure backend development, scalable API design, and role-based access control. The project includes a RESTful backend and a basic React frontend to interact with APIs.

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)
* bcryptjs (Password hashing)

### Frontend

* React (Vite)
* Axios
* React Router DOM

### Other Tools

* Swagger (API Documentation)

---

## ✨ Features

### 🔐 Authentication & Authorization

* User registration & login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes
* Role-based access (User vs Admin)

### 📋 Task Management

* Create task
* Get all tasks (user-specific)
* Get single task
* Update task
* Delete task

### 👑 Admin Features

* View all users
* View all tasks
* Restricted access (admin only)

### 🌐 Frontend

* Register & Login UI
* Dashboard (user & admin views)
* Task management interface
* API integration with Axios

### 📄 API Documentation

* Swagger UI for testing endpoints

---

## 📡 API Endpoints

### 🔐 Auth Routes

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`
* GET `/api/v1/auth/me`

### 📋 Task Routes (Protected)

* GET `/api/v1/tasks`
* POST `/api/v1/tasks`
* GET `/api/v1/tasks/:id`
* PUT `/api/v1/tasks/:id`
* DELETE `/api/v1/tasks/:id`

### 👑 Admin Routes (Admin Only)

* GET `/api/v1/admin/users`
* GET `/api/v1/admin/tasks`

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
NODE_ENV=development
```

---

## 📘 API Documentation

Swagger UI available at:

http://localhost:5000/api-docs

---

## 👤 Demo Users

### Admin

* Email: [admin@example.com](mailto:admin@example.com)
* Password: 123456

### Normal User

* Email: [raghav@example.com](mailto:raghav@example.com)
* Password: 123456

---

## 📁 Project Structure

```
task-manager-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── config/
│   │   └── docs/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🔒 Security Practices

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes using middleware
* Role-based access control

---

## 📈 Scalability Note

This project follows a modular and scalable architecture:

* Separation of concerns (routes, controllers, models, middleware)
* Easily extendable structure

### Future Improvements:

* Redis caching for performance optimization
* Docker containerization for deployment
* Rate limiting and logging
* Load balancing for high traffic
* Microservices architecture for large-scale systems

---

## 🚀 Deployment

* Backend: Render
* Frontend: Vercel
* Database: MongoDB Atlas

---

## 📌 Conclusion

This project demonstrates:

* Secure API development
* Authentication & authorization
* Real-world backend structure
* Full-stack integration

---

## 🙌 Author

Raghav Sharma
