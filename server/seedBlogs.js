const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const Blog = require("./models/Blog");

dotenv.config({ path: path.join(__dirname, ".env") });

const dummyBlogs = [
  {
    title: "The Evolution of Web Development: What's Next in 2025?",
    slug: "evolution-of-web-development-2025",
    content: "Explore the cutting-edge frameworks, AI-driven development tools, and new paradigms shaping the modern web. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["Web Dev", "Trends", "React"],
    author: "Alex Morgan",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    published: true
  },
  {
    title: "Mastering UI/UX: Creating Interfaces that Convert",
    slug: "mastering-ui-ux-creating-interfaces",
    content: "Discover the psychological principles and design systems behind high-converting user interfaces. <br/><br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Design", "UI/UX", "Frontend"],
    author: "Samantha Lee",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    published: true
  },
  {
    title: "Deploying AI Models at Scale",
    slug: "deploying-ai-models-at-scale",
    content: "A comprehensive guide to taking your machine learning models from Jupyter notebooks to production-ready APIs. <br/><br/>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    tags: ["AI", "Machine Learning", "DevOps"],
    author: "David Chen",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965",
    published: true
  },
  {
    title: "The Rise of Edge Computing",
    slug: "rise-of-edge-computing",
    content: "Why processing data closer to where it's generated is becoming critical for next-gen web applications. <br/><br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
    tags: ["Cloud", "Architecture", "Performance"],
    author: "Elena Rodriguez",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034",
    published: true
  }
];

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bitbattles")
.then(async () => {
  console.log("Connected to MongoDB.");
  
  // Create blogs if they don't exist
  for (const blogData of dummyBlogs) {
    const existing = await Blog.findOne({ slug: blogData.slug });
    if (!existing) {
      await Blog.create(blogData);
    }
  }
  
  console.log("Database seeded successfully!");
  process.exit(0);
}).catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});
