const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const Career = require("../models/Career");
const connectDB = require("../config/db");

dotenv.config({ path: path.join(__dirname, "../.env") });

const careers = [
  {
    title: "Web Development Intern",
    department: "Engineering",
    location: "Remote / India",
    experience: "0-1 years",
    type: "Intern",
    description:
      "Build and maintain responsive web interfaces using modern frameworks. Work on real client projects and learn industry-standard development workflows.",
    tags: ["React", "JavaScript", "HTML/CSS"],
    moreCount: 2,
    icon: "🌐",
  },
  {
    title: "Data Science Intern",
    department: "AI & Analytics",
    location: "Remote / India",
    experience: "0-1 years",
    type: "Intern",
    description:
      "Analyze datasets, build predictive models, and create data visualizations. Explore machine learning pipelines and work with real-world business data.",
    tags: ["Python", "ML", "Data Analysis"],
    moreCount: 2,
    icon: "📊",
  },
  {
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Remote / India",
    experience: "0-1 years",
    type: "Intern",
    description:
      "Create intuitive and beautiful user experiences. Conduct user research and translate insights into clean, functional interface designs.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    moreCount: 1,
    icon: "🎨",
  },
  {
    title: "App Development Intern",
    department: "Engineering",
    location: "Remote / India",
    experience: "0-1 years",
    type: "Intern",
    description:
      "Develop cross-platform mobile applications from the ground up. Learn industry-standard tools and contribute to production-ready codebases.",
    tags: ["Flutter", "Dart", "Mobile UI"],
    moreCount: 1,
    icon: "📱",
  },
  {
    title: "Flutter Developer",
    department: "Engineering",
    location: "Remote / India",
    experience: "1-3 years",
    type: "Full-time",
    description:
      "Build high-performance cross-platform mobile apps with Flutter. Collaborate with designers and backend engineers to deliver polished user experiences.",
    tags: ["Flutter", "Dart", "Firebase"],
    moreCount: 2,
    icon: "⚡",
  },
  {
    title: "App Developer",
    department: "Engineering",
    location: "Remote / India",
    experience: "2-4 years",
    type: "Full-time",
    description:
      "Design, develop, and deploy native and hybrid mobile applications. Drive technical architecture decisions for app projects across Android and iOS.",
    tags: ["React Native", "Swift", "Kotlin"],
    moreCount: 2,
    icon: "📲",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / India",
    experience: "1-3 years",
    type: "Full-time",
    description:
      "Manage CI/CD pipelines, cloud infrastructure, and deployment workflows. Ensure scalable, reliable, and secure delivery across all engineering teams.",
    tags: ["AWS", "Docker", "CI/CD"],
    moreCount: 2,
    icon: "🔧",
  },
];

const seedCareers = async () => {
  try {
    await connectDB();
    
    // Clear existing careers to prevent duplicates
    await Career.deleteMany({});
    
    // Insert new careers
    await Career.insertMany(careers);
    
    console.log("Careers seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding careers:", error);
    process.exit(1);
  }
};

seedCareers();
