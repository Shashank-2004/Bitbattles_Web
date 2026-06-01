const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Portfolio = require("../models/Portfolio");
const connectDB = require("../config/db");

dotenv.config();

const projects = [
  {
    title: "AI Operations Dashboard",
    category: "ai",
    description: "A practical dashboard concept for automating repetitive business workflows.",
    featured: true,
  },
  {
    title: "Mobile Commerce App",
    category: "mobile",
    description: "A fast mobile product experience focused on clarity, retention, and conversion.",
    featured: true,
  },
  {
    title: "Cyber Intake Portal",
    category: "security",
    description: "A secure request and approval portal for internal business operations.",
    featured: true,
  },
];

const seedPortfolio = async () => {
  try {
    await connectDB();
    
    // Clear existing to avoid duplicates
    await Portfolio.deleteMany({});
    
    // Insert new projects
    await Portfolio.insertMany(projects);
    
    console.log("Portfolio seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding portfolio:", error);
    process.exit(1);
  }
};

seedPortfolio();
