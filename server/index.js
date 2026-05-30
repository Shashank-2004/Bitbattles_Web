const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/portfolio", require("./routes/portfolioRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "BitBattles API is running" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
