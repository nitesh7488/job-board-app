# 💼 MERN Job Board – Full Stack CRUD Application

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![Express](https://img.shields.io/badge/Server-Express-lightgrey?logo=express)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

This is a full-stack **Job Board application** built using the **MERN stack** for the **R1 MERN Stack Developer Task**. It allows users to manage job listings through **Create, Read, Update, and Delete (CRUD)** operations.

---

## 🎯 Features

- ✅ View all job listings (Title, Company, Location)
- ➕ Add a new job
- ✏️ Edit existing jobs (prefilled form)
- 🗑️ Delete jobs with confirmation
- 🔔 Real-time toast notifications using `react-toastify`
- 🧠 Clean & modular component structure
- 💡 Built with best practices in state management (Hooks)

---

## ⚙️ Tech Stack Used

| Layer       | Technology                |
|-------------|---------------------------|
| Frontend    | React + Vite              |
| Backend     | Node.js + Express         |
| Database    | MongoDB (with Mongoose)   |
| Notifications | react-toastify         |
| HTTP Client | Axios                     |
| Styles      | Custom CSS                |

---

## 🖼️ Screenshots

### 1. Job Listings Page
![Job List](screenshots/view-jobs.png)

### 2. Add Job
![Add Job](screenshots/add-job.png)

### 3. Edit Job
![Edit Job](screenshots/edit-job.png)

---

## 🛠️ Project Structure


job-board-app/
├── backend/
│ ├── models/ # Mongoose Schema
│ ├── routes/ # Express Routes
│ ├── server.js # Express App Setup
│ └── .env # Environment Variables
├── frontend/
│ ├── src/
│ │ ├── components/ # React Components (JobForm, JobList, JobCard)
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── vite.config.js
├── screenshots/ # Screenshot Images
└── README.md

