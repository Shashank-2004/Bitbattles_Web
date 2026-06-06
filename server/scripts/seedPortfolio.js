const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("../config/db");
const Portfolio = require("../models/Portfolio");

dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

const projects = [
  {
    id: "enixta",
    title: "Enixta",
    category: "AI",
    description: "Semantic sentiment models and automated recommendation pipelines for enterprise ecommerce.",
    color: "#ff6a2a",
    bgClass: "from-[#0a1c3c] to-[#040e1c]",
    tag: "AI Sentiment Analysis",
    featured: true,
  },
  {
    id: "karmeq",
    title: "Karmeq",
    category: "Design",
    description: "Collaborative wealth management workspace, asset tracking, and onboarding system.",
    color: "#10b981",
    bgClass: "from-[#059669] to-[#044e37]",
    tag: "UI/UX Design & System",
    featured: true,
  },
  {
    id: "abinbev",
    title: "ABInBev GRA",
    category: "Development",
    description: "Logistics tracking, allocation matrices, and fleet performance monitoring dashboards.",
    color: "#eab308",
    bgClass: "from-[#3e2b1b] to-[#1e130a]",
    tag: "Enterprise System Dev",
    featured: true,
  },
  {
    id: "etherflow",
    title: "Etherflow",
    category: "Blockchain",
    description: "DeFi liquidity aggregator and transaction router built for low-gas multi-asset token swaps.",
    color: "#8b5cf6",
    bgClass: "from-[#3b1772] to-[#1a0833]",
    tag: "DeFi Liquidity Swaps",
    featured: true,
  },
  {
    id: "novacloud",
    title: "Nova Cloud",
    category: "Development",
    description: "Multi-cloud container operations panel with auto-scaling metrics and region diagnostics.",
    color: "#06b6d4",
    bgClass: "from-[#111c2e] to-[#070c14]",
    tag: "Cloud Operations Console",
    featured: false,
  },
  {
    id: "auraai",
    title: "Aura AI",
    category: "AI",
    description: "Generative neural soundstage waveform editor and parametric synth workspace.",
    color: "#d946ef",
    bgClass: "from-[#5a135f] to-[#28042b]",
    tag: "Neural Sound Generator",
    featured: false,
  },
];

async function seedPortfolio() {
  await connectDB();

  for (const project of projects) {
    await Portfolio.findOneAndUpdate({ id: project.id }, project, {
      new: true,
      upsert: true,
      runValidators: true,
    });
  }

  console.log(`Seeded ${projects.length} portfolio projects.`);
  process.exit(0);
}

seedPortfolio().catch((error) => {
  console.error("Portfolio seed failed:", error);
  process.exit(1);
});
