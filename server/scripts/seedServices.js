const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

const Service = require("../models/Service");

const servicesData = [
  {
    serviceId: "ai-solutions",
    title: "AI Solutions",
    heroTitle: "AI Solutions for Modern Teams",
    heroDescription:
      "Practical AI workflows, assistants, and automation systems designed around real business needs.",
    description:
      "AI tools, assistants, and workflow automation that help teams move faster without adding unnecessary complexity.",
    icon: "brain",
    href: "/services/ai-solutions",
    emoji: "🧠",
    shortCode: "AI",
    color: "#ff6a2a",
    isActive: true,
  },
  {
    serviceId: "web-development",
    title: "Web Development",
    heroTitle: "Web Development Services",
    heroDescription:
      "High-performance websites and web apps built with clean UX, strong frontend systems, and room to scale.",
    description:
      "Marketing websites, web applications, landing pages, dashboards, and frontend systems built for clarity.",
    icon: "design",
    href: "/services/web-development",
    emoji: "🌐",
    shortCode: "Web",
    color: "#0ea5e9",
    isActive: true,
  },
  {
    serviceId: "mobile-apps",
    title: "Mobile Apps",
    heroTitle: "Mobile App Development Services",
    heroDescription:
      "Mobile-first product experiences for startups, internal teams, commerce, and service platforms.",
    description:
      "Mobile application interfaces and product flows that are simple, responsive, and launch-ready.",
    icon: "product",
    href: "/services/mobile-apps",
    emoji: "📱",
    shortCode: "App",
    color: "#10b981",
    isActive: true,
  },
  {
    serviceId: "cyber-security",
    title: "Cyber Security",
    heroTitle: "Cyber Security Product Services",
    heroDescription:
      "Security-aware portals, dashboards, workflows, and digital systems for safer business operations.",
    description:
      "Security-focused interfaces, portals, monitoring workflows, and cyber-aware product experiences.",
    icon: "shield",
    href: "/services/cyber-security",
    emoji: "🛡️",
    shortCode: "Sec",
    color: "#ef4444",
    isActive: true,
  },
  {
    serviceId: "automation",
    title: "Automation",
    heroTitle: "Automation Services",
    heroDescription:
      "Lean automations for business workflows, operations, reporting, approvals, and AI-assisted execution.",
    description:
      "Workflow automation, internal tools, data routing, and operational systems that reduce repetitive work.",
    icon: "agent",
    href: "/services/automation",
    emoji: "⚡",
    shortCode: "Auto",
    color: "#f59e0b",
    isActive: true,
  },
  {
    serviceId: "ui-ux-design",
    title: "UI/UX Design",
    heroTitle: "UI/UX Design Services",
    heroDescription:
      "Beautiful, user-centered interfaces and experiences that convert visitors into loyal customers.",
    description:
      "Product design, user research, prototyping, design systems, and UX audits for digital products.",
    icon: "design",
    href: "/services/ui-ux-design",
    emoji: "🎨",
    shortCode: "UX",
    color: "#a855f7",
    isActive: true,
  },
  {
    serviceId: "qa-testing",
    title: "QA & Testing",
    heroTitle: "QA & Software Testing Services",
    heroDescription:
      "Rigorous quality assurance and testing pipelines that ship bug-free, reliable software every time.",
    description:
      "Manual testing, automated QA pipelines, performance testing, and end-to-end quality assurance.",
    icon: "shield",
    href: "/services/qa-testing",
    emoji: "✅",
    shortCode: "QA",
    color: "#14b8a6",
    isActive: true,
  },
  {
    serviceId: "cloud-implementation",
    title: "Cloud Implementation",
    heroTitle: "Cloud Implementation Services",
    heroDescription:
      "Scalable cloud infrastructure, migration, and DevOps pipelines built for modern teams.",
    description:
      "Cloud architecture, AWS/GCP/Azure deployments, CI/CD pipelines, and infrastructure-as-code.",
    icon: "enterprise",
    href: "/services/cloud-implementation",
    emoji: "☁️",
    shortCode: "Ops",
    color: "#38bdf8",
    isActive: true,
  },
  {
    serviceId: "ar-vr-development",
    title: "AR/VR Development",
    heroTitle: "AR/VR Development Services",
    heroDescription:
      "Immersive augmented and virtual reality experiences that redefine how users interact with your product.",
    description:
      "AR/VR applications, 3D experiences, mixed reality interfaces, and spatial computing solutions.",
    icon: "product",
    href: "/services/ar-vr-development",
    emoji: "🥽",
    shortCode: "VR",
    color: "#ff6a2a",
    isActive: true,
  },
];

const seedServices = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");

    await Service.deleteMany();
    console.log("Old Services deleted");

    await Service.insertMany(servicesData);
    console.log("Services seeded successfully");

    process.exit();
  } catch (error) {
    console.error("Error seeding services: ", error);
    process.exit(1);
  }
};

seedServices();
