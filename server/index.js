const express = require("express");
const dotenv = require("dotenv");
const dns = require("dns");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

dns.setDefaultResultOrder("ipv4first");

dotenv.config({
  path: path.join(__dirname, ".env"),
});

// CONNECT DATABASE
connectDB();

const app = express();

app.set("trust proxy", 1);



// =========================
// CORS CONFIG
// =========================
const allowedOrigins = `
${process.env.CLIENT_URL || ""},
http://localhost:5173,
http://localhost:5174,
http://127.0.0.1:5173,
http://127.0.0.1:5174
`
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // ALLOW POSTMAN / MOBILE APPS / SSR
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    credentials: true,
  })
);



// =========================
// MIDDLEWARES
// =========================
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);



// =========================
// API ROUTES
// =========================
app.use(
  "/api/contact",
  require("./routes/contactRoutes")
);

app.use(
  "/api/newsletter",
  require("./routes/newsletterRoutes")
);

app.use(
  "/api/portfolio",
  require("./routes/portfolioRoutes")
);

app.use(
  "/api/blog",
  require("./routes/blogRoutes")
);

app.use(
  "/api/careers",
  require("./routes/careerRoutes")
);



// =========================
// HEALTH CHECK
// =========================
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
    message: "BitBattles API is running",
  });
});



// =========================
// 404 ROUTE HANDLER
// =========================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});



// =========================
// GLOBAL ERROR HANDLER
// =========================
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,
  });
});



// =========================
// START SERVER
// =========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});