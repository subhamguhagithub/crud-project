# 🚀 **MERN CRUD APPLICATION**

**A full-stack CRUD (Create, Read, Update, Delete) web application built using the MERN stack.**

---

## 🛡️ **BADGES**

**![Node.js](https://img.shields.io/badge/Node.js-18.x-green)**
**![React](https://img.shields.io/badge/React-Vite-blue)**
**![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)**
**![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI-blueviolet)**
**![License](https://img.shields.io/badge/License-MIT-yellow)**

---

## 📌 **TECH STACK**

- **Frontend:** React.js (Vite)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Styling:** CSS  
- **Version Control:** Git & GitHub  

---

## ✨ **FEATURES**

- ➕ **Add new records**
- 📄 **View all records**
- ✏️ **Edit existing records**
- ❌ **Delete records**
- 🔄 **Real-time data updates**
- 📱 **Responsive UI**

---

## 🎥 **DEMO (GIF PREVIEW)**

**Below is a quick demo of the application workflow:**

```md
![MERN CRUD Demo](demo/demo.gif)
```

**👉 Tip:** Create a `demo/` folder and place a screen-recorded GIF of your app.

---

## 📁 **PROJECT STRUCTURE**

```text
crud-project/
│
├── backend/
│   │
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   └── src/
│       │
│       ├── assets/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ **INSTALLATION & SETUP**

### **1️⃣ CLONE THE REPOSITORY**

```bash
git clone https://github.com/subhamguhagithub/crud-project.git
cd crud-project
```

---

### **2️⃣ BACKEND SETUP**

```bash
cd backend
npm install
npm start
```

**Server will run on:**  
**http://localhost:5000**

---

### **3️⃣ FRONTEND SETUP**

```bash
cd frontend
npm install
npm run dev
```

**Frontend will run on:**  
**http://localhost:5173**

---

## 🔌 **API ENDPOINTS (BACKEND)**

| **METHOD** | **ENDPOINT** | **DESCRIPTION** |
|----------|------------|----------------|
| **GET** | `/api/users` | **Fetch all records** |
| **GET** | `/api/users/:id` | **Fetch single record** |
| **POST** | `/api/users` | **Create a new record** |
| **PUT** | `/api/users/:id` | **Update an existing record** |
| **DELETE** | `/api/users/:id` | **Delete a record** |

---

## 🗄️ **DATABASE CONFIGURATION**

**This project uses MongoDB for data storage.**

**Create a `.env` file inside the `backend` folder and add:**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

**Make sure MongoDB is running locally or use MongoDB Atlas.**

---

## 🔄 **GITHUB ACTIONS (CI WORKFLOW)**

**This repository includes a Node.js GitHub Actions workflow for Continuous Integration.**

**Workflow file location:**

```text
.github/workflows/nodejs.yml
```

**What it does:**
- **Installs dependencies**
- **Checks build errors**
- **Runs automatically on push & pull requests**

**⚠️ This does NOT modify your code or project structure.**

---

## 🌱 **FUTURE ENHANCEMENTS**

- 🔐 **JWT Authentication**
- 🔍 **Search & Filtering**
- 📦 **Pagination**
- 🧪 **Unit & Integration Testing**
- ☁️ **Deployment (Vercel + Render)**

---

## 🤝 **CONTRIBUTING**

**Contributions are welcome!**

1. **Fork the repository**
2. **Create a new branch**
3. **Commit your changes**
4. **Push to the branch**
5. **Open a Pull Request**

---

## 📜 **LICENSE**

**This project is licensed under the MIT License.**

---

## 🙌 **ACKNOWLEDGEMENTS**

- **MongoDB**
- **Express.js**
- **React.js**
- **Node.js**
- **GitHub Actions**

---

## 📬 **CONTACT**

**👤 Shubham Guha**  
**🔗 GitHub:** https://github.com/subhamguhagithub  

---

⭐ **If you like this project, don’t forget to star the repository!**
