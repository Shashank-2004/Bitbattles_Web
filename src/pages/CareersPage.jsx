import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { fadeUp, staggerContainer } from "../lib/motion";
import "../styles/careers.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const oldInternRoles = [
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
];

const oldFulltimeRoles = [
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

const benefits = [
  {
    icon: "💰",
    title: "Competitive Compensation",
    desc: "Industry-leading stipends and salaries with performance bonuses and growth incentives.",
    bg: "#fff8f4",
  },
  {
    icon: "🏠",
    title: "Flexible Work Culture",
    desc: "Hybrid & remote options with flexible working hours. Work from anywhere that inspires you.",
    bg: "#f0fdf4",
  },
  {
    icon: "🌍",
    title: "Global Opportunities",
    desc: "Work with international clients and collaborate with diverse teams across the globe.",
    bg: "#eff6ff",
  },
  {
    icon: "🚀",
    title: "Fast Career Growth",
    desc: "Clear promotion paths, mentorship programs, and opportunities to lead real projects early.",
    bg: "#fdf4ff",
  },
  {
    icon: "📚",
    title: "Learning & Development",
    desc: "Access to courses, conferences, and workshops. We invest in your continuous professional growth.",
    bg: "#fefce8",
  },
  {
    icon: "🎯",
    title: "Impactful Work",
    desc: "Work on cutting-edge products solving real business challenges. Your contributions matter from day one.",
    bg: "#f0fdfa",
  },
];

// old total roles

function RoleCard({ role, index }) {
  const isIntern = role.type === "Intern";
  return (
    <motion.article
      className="role-card"
      variants={fadeUp}
      whileHover={{ y: -6 }}
    >
      <div className="role-card-header">
        <div className={`role-icon ${isIntern ? "intern-icon" : "fulltime-icon"}`}>
          {role.icon}
        </div>
        <span className={`role-type-badge ${isIntern ? "intern" : "fulltime"}`}>
          {role.type}
        </span>
      </div>

      <h3>{role.title}</h3>
      <p className="role-department">{role.department}</p>

      <div className="role-meta">
        <span>
          <span className="meta-icon">📍</span>
          {role.location}
        </span>
        <span>
          <span className="meta-icon">⏱️</span>
          {role.experience}
        </span>
      </div>

      <p className="role-desc">{role.description}</p>

      <div className="role-tags">
        {role.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
        {role.moreCount > 0 && (
          <span className="more-tag">+{role.moreCount}</span>
        )}
      </div>

      <div className="role-card-footer">
        <a className="apply-link" href="/contact">
          Apply Now <span>→</span>
        </a>
        <span className="posted-date">Posted recently</span>
      </div>
    </motion.article>
  );
}

export function CareersPage() {
  const [internJobs, setInternJobs] = useState([]);
  const [fulltimeJobs, setFulltimeJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hr@bitbattles.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/careers`);
        if (response.ok) {
          const data = await response.json();
          setInternJobs(data.filter(job => job.type === 'Intern'));
          setFulltimeJobs(data.filter(job => job.type === 'Full-time'));
          setTotalJobs(data.length);
        }
      } catch (error) {
        console.error("Error fetching careers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  return (
    <main className="bg-white">
      {/* ====== HERO ====== */}
      <section className="careers-hero">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-center">
            

            <h1>
              Build Your Career at{" "}
              <span className="highlight">BitBattles</span>
            </h1>

            <p className="hero-desc">
              Join us in building the future of digital solutions. Work on
              challenging projects, learn from industry experts, and grow your
              career in a supportive environment.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#positions">
                Explore {totalJobs} Open Roles <span>→</span>
              </a>
              <a className="btn-secondary" href="/contact">
                General Application
              </a>
            </div>
          </Reveal>

          {/* Stats */}
          <motion.div
            className="careers-stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              ["20+", "Team Members"],
              ["5+", "Countries Served"],
              ["50+", "Projects Delivered"],
              ["4.9★", "Client Rating"],
            ].map(([value, label]) => (
              <motion.div className="stat-card" key={label} variants={fadeUp}>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====== OPEN POSITIONS ====== */}
      <section id="positions" className="careers-positions">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal className="section-header">
            <h2>Open Positions ({totalJobs} Roles)</h2>
            <p>
              Explore our current openings and find the perfect role to match
              your skills and ambitions.
            </p>
          </Reveal>

          {/* Intern Roles */}
          <div className="positions-category">
            <Reveal>
              <span className="category-label intern">🎓 Internship Roles</span>
            </Reveal>
            <motion.div
              className="positions-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {internJobs.map((role, i) => (
                <RoleCard role={role} index={i} key={role.title} />
              ))}
            </motion.div>
          </div>

          {/* Full-time Roles */}
          <div className="positions-category" style={{ marginTop: "2.5rem" }}>
            <Reveal>
              <span className="category-label fulltime">
                💼 Full-time Roles
              </span>
            </Reveal>
            <motion.div
              className="positions-grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {fulltimeJobs.map((role, i) => (
                <RoleCard role={role} index={i} key={role.title} />
              ))}
            </motion.div>
          </div>

          {/* General Application CTA */}
          <Reveal>
            <div className="careers-general-cta" style={{ marginTop: "3rem" }}>
              <h3>Don't see the perfect role?</h3>
              <p>
                We're always looking for talented people. Send us your resume and
                we'll contact you when a matching position opens up.
              </p>
              <a className="btn-submit" href="/contact">
                Submit General Application
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="careers-why-join">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal className="section-header">
            <h2>Why Join BitBattles?</h2>
            <p>
              We invest in our team's growth and well-being with comprehensive
              benefits and a supportive culture.
            </p>
          </Reveal>

          <motion.div
            className="benefits-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((b) => (
              <motion.div
                className="benefit-card"
                key={b.title}
                variants={fadeUp}
              >
                <div
                  className="benefit-icon"
                  style={{ background: b.bg }}
                >
                  {b.icon}
                </div>
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HR CONTACT  */}
      <section className="careers-hr">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <Reveal className="section-header">
            <h2>Get in Touch with HR</h2>
            <p>
              Have questions about our hiring process or want to discuss career
              opportunities? Our HR team is here to help.
            </p>
          </Reveal>

          <Reveal>
            <div className="hr-cards-wrapper">
              <div className="hr-cards-grid">
                <div className="hr-card">
                  <div className="hr-card-icon">✉️</div>
                  <h4>Email Us</h4>
                  <p 
                    onClick={handleCopyEmail} 
                    style={{ cursor: 'pointer' }} 
                    title="Click to copy email"
                  >
                    hr@bitbattles.in
                  </p>
                  <span 
                    className="hr-highlight" 
                    onClick={handleCopyEmail}
                    style={{ cursor: 'pointer' }}
                  >
                    {copied ? "Copied!" : "Click to copy"}
                  </span>
                  <a
                    className="btn-send-email"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@bitbattles.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send Email
                  </a>
                </div>

                <div className="hr-card">
                  <div className="hr-card-icon">💬</div>
                  <h4>Quick Response</h4>
                  <p>
                    We typically respond to all career inquiries within 24-48
                    hours
                  </p>
                  <span className="hr-highlight">
                    Mon – Fri, 9AM – 6PM IST
                  </span>
                </div>

                <div className="hr-card">
                  <div className="hr-card-icon">🤝</div>
                  <h4>Application Support</h4>
                  <p>
                    Need help with your application? We're here to assist you
                    through the process.
                  </p>
                  <span className="hr-highlight">
                    Resume reviews & interview prep
                  </span>
                </div>
              </div>

              <div className="hr-email-footer">
                <p>
                  Prefer to apply via email? Send your resume and cover letter to{" "}
                  <a href="mailto:hr@bitbattles.in">hr@bitbattles.in</a>{" "}
                  with the position title in the subject line.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
