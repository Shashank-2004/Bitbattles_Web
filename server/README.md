# BitBattles ESP — Backend Server

This is the Express.js & MongoDB backend for the BitBattles ESP Website. It provides a secure REST API for the frontend to save contact forms, fetch portfolio projects, read blogs, and authenticate admins.

---

## 🚀 How to Run the Backend Locally

If you are working on the frontend and need the backend APIs to work on your local machine, follow these steps:

### 1. Prerequisites
Make sure you have Node.js installed on your computer.

### 2. Install Dependencies
Open a terminal, navigate into this `server` folder, and install the required packages:
```bash
cd server
npm install
```

### 3. Setup Environment Variables
You need a `.env` file to connect to the database.
1. Create a file named `.env` inside the `server/` folder (DO NOT commit this to GitHub).
2. Ask **Shashank** for the `MONGO_URI` and `JWT_SECRET` values.
3. Your `.env` should look like this:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://bitbattles-admin:<ask-shashank-for-password>@cluster0.oioqpcf.mongodb.net/bitbattles?appName=Cluster0
JWT_SECRET=<ask-shashank-for-secret>
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
```

### 4. Start the Server
Run the development server using nodemon (it will auto-restart when you save files):
```bash
npm run dev
```

You should see this in your terminal:
```text
Server running on port 5000
MongoDB Connected: cluster0...
```
*(Leave this terminal running in the background while you work on the frontend!)*

---

## 📡 API Endpoints (For the Frontend Team)

Here are the active endpoints you can `fetch` from the React frontend. 
**Base URL:** `http://localhost:5000`

### 📞 Contact
* **Submit Form (Public):** `POST /api/contact`
  * **Body:** `{ "name": "...", "email": "...", "subject": "...", "message": "..." }`
  * **Note:** This is currently integrated into `ContactPage.jsx`.

### 💼 Portfolio
* **Get All Projects (Public):** `GET /api/portfolio`
* **Get Featured Projects (Public):** `GET /api/portfolio/featured`

### 📝 Blog
* **Get All Published Blogs (Public):** `GET /api/blog`
* **Get Single Blog (Public):** `GET /api/blog/:slug`

*(Note: Creating, updating, or deleting portfolios/blogs currently requires an Admin JWT Token. For now, Shashank will manage the data directly in MongoDB Atlas until the Admin Dashboard UI is built).*

---

## 🏗️ Folder Structure

```text
server/
├── config/
│   └── db.js                 # MongoDB connection setup
├── controllers/
│   └── ...                   # Business logic (e.g., authController.js)
├── middleware/
│   └── authMiddleware.js     # JWT security guard for admin routes
├── models/
│   └── ...                   # Database schemas (User, Contact, Portfolio, Blog)
├── routes/
│   └── ...                   # API url definitions
├── index.js                  # Main server entry point
└── package.json
```

---

## 🛠️ Next Steps / Proceedings for Teammates

**@Sannidhya & Frontend Team:**
1. Now that the backend is running, you can connect the **Portfolio Page** and **Blog Page** (when ready) to fetch real data from these APIs instead of using static hardcoded arrays.
2. The **Contact Page** is already wired up as an example! Look at `src/pages/ContactPage.jsx` to see how we used `fetch()` to send data to the backend.

**@Backend Team:**
1. The next major milestone is building the **Admin Dashboard UI** on the frontend so the client can log in and manage data themselves without needing MongoDB Atlas.
2. Ensure you never commit the `.env` file!
