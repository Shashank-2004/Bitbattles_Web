const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config({ path: path.join(__dirname, ".env") });

connectDB();

const app = express();

// Middleware
const allowedOrigins = `${process.env.CLIENT_URL || ""},http://localhost:5173,http://localhost:5174,http://127.0.0.1:5173,http://127.0.0.1:5174`
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/portfolio", require("./routes/portfolioRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/careers", require("./routes/careerRoutes"));

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "BitBattles API is running" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
