import { useEffect } from "react";
import "../styles/solutions.css";

/* ─── Data ─────────────────────────────────────────────────────── */

const solutionCards = [
  {
    id: "startups",
    icon: "🚀",
    label: "Early-Stage",
    title: "Startups",
    desc: "Launch fast with lean, scalable MVPs. We help founders validate ideas, build investor-ready products, and iterate at startup speed.",
    tags: ["MVP Development", "Product-Market Fit", "Rapid Prototyping"],
    href: "/solutions/startups",
  },
  {
    id: "enterprises",
    icon: "🏢",
    label: "Enterprise-Grade",
    title: "Enterprises",
    desc: "Modernize legacy systems, automate workflows, and deploy secure, high-availability platforms that scale across global operations.",
    tags: ["Legacy Migration", "Workflow Automation", "High Availability"],
    href: "/solutions/enterprises",
  },
  {
    id: "saas",
    icon: "☁️",
    label: "Cloud-Native",
    title: "SaaS Products",
    desc: "End-to-end SaaS engineering — multi-tenant architectures, subscription billing, analytics dashboards, and API ecosystems.",
    tags: ["Multi-Tenant", "Subscription Billing", "API Ecosystems"],
    href: "/solutions/saas",
  },
  {
    id: "automation",
    icon: "⚙️",
    label: "Intelligent",
    title: "Automation",
    desc: "Eliminate repetitive tasks with AI-powered automation pipelines, RPA integrations, and intelligent process orchestration.",
    tags: ["AI Pipelines", "RPA", "Process Orchestration"],
    href: "/solutions/automation",
  },
];

const detailSections = [
  {
    num: "01",
    tag: "Startups",
    title: "From Idea to Launch — at Warp Speed",
    desc: "We partner with ambitious founders to ship investor-ready MVPs in weeks, not months. Our lean engineering approach focuses on rapid validation, user feedback loops, and scalable architecture that grows with your traction.",
    features: [
      "Rapid MVP development & iteration cycles",
      "Scalable cloud-native architecture from day one",
      "Investor-ready product demos & pitch support",
      "User analytics & engagement tracking",
      "Post-launch growth engineering & optimization",
    ],
    visual: {
      header: "Startup Launch Pipeline",
      rows: [
        { icon: "💡", label: "Ideation & Validation", status: "Complete" },
        { icon: "🎨", label: "UI/UX Design Sprint", status: "Complete" },
        { icon: "⚡", label: "MVP Engineering", status: "Active" },
        { icon: "🚀", label: "Beta Launch & Feedback", status: "Pending" },
      ],
    },
    reverse: false,
    href: "/solutions/startups",
  },
  {
    num: "02",
    tag: "Enterprises",
    title: "Transform Operations at Enterprise Scale",
    desc: "We help established organizations modernize their tech stack, integrate AI-driven automation, and build secure platforms that handle millions of transactions with zero downtime.",
    features: [
      "Legacy system modernization & migration",
      "Enterprise-grade security & compliance (SOC2, GDPR)",
      "Microservices architecture & API gateway design",
      "Real-time data pipelines & analytics platforms",
      "24/7 managed infrastructure & DevOps",
    ],
    visual: {
      header: "Enterprise Architecture",
      rows: [
        { icon: "🔒", label: "Security & Compliance Layer", status: "Active" },
        { icon: "🔗", label: "API Gateway & Microservices", status: "Active" },
        { icon: "📊", label: "Analytics & BI Platform", status: "Active" },
        { icon: "☁️", label: "Cloud Infrastructure (AWS/GCP)", status: "Active" },
      ],
    },
    reverse: true,
    href: "/solutions/enterprises",
  },
  {
    num: "03",
    tag: "SaaS Products",
    title: "Build SaaS That Scales & Converts",
    desc: "From multi-tenant backends to polished user dashboards, we engineer SaaS platforms that delight users and drive recurring revenue through intelligent product design.",
    features: [
      "Multi-tenant architecture with role-based access",
      "Stripe/Razorpay subscription billing integration",
      "Admin dashboards & real-time analytics",
      "REST & GraphQL API ecosystem design",
      "Automated onboarding & in-app engagement",
    ],
    visual: {
      header: "SaaS Platform Stack",
      rows: [
        { icon: "👥", label: "Multi-Tenant User Management", status: "Active" },
        { icon: "💳", label: "Subscription & Billing Engine", status: "Active" },
        { icon: "📈", label: "Analytics Dashboard", status: "Active" },
        { icon: "🔌", label: "API Ecosystem & Webhooks", status: "Active" },
      ],
    },
    reverse: false,
    href: "/solutions/saas",
  },
  {
    num: "04",
    tag: "Automation",
    title: "Automate Everything, Intelligently",
    desc: "Our AI-powered automation solutions eliminate manual bottlenecks, reduce operational costs by up to 70%, and free your team to focus on high-impact strategic work.",
    features: [
      "AI/ML-powered intelligent workflows",
      "Robotic Process Automation (RPA) integration",
      "Document processing & data extraction pipelines",
      "Custom chatbots & conversational AI",
      "End-to-end process orchestration & monitoring",
    ],
    visual: {
      header: "Automation Pipeline",
      rows: [
        { icon: "🤖", label: "AI Model Training & Deployment", status: "Active" },
        { icon: "📄", label: "Document Processing Engine", status: "Active" },
        { icon: "💬", label: "Conversational AI Layer", status: "Active" },
        { icon: "📡", label: "Monitoring & Alerting System", status: "Active" },
      ],
    },
    reverse: true,
    href: "/solutions/automation",
  },
];

const metrics = [
  { icon: "🚀", num: "50+", label: "Projects Delivered", sub: "Across startups, SMBs & enterprises" },
  { icon: "⏱️", num: "40%", label: "Faster Time-to-Market", sub: "Compared to traditional development" },
  { icon: "📈", num: "99.9%", label: "Platform Uptime", sub: "Enterprise-grade reliability SLAs" },
  { icon: "🤝", num: "95%", label: "Client Retention", sub: "Long-term partnerships that deliver" },
];

const industries = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "💰", label: "Fintech" },
  { icon: "🛒", label: "E-Commerce" },
  { icon: "🎓", label: "EdTech" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🚚", label: "Logistics" },
  { icon: "🏗️", label: "Real Estate" },
  { icon: "⚡", label: "Energy" },
  { icon: "🎮", label: "Gaming" },
  { icon: "📱", label: "Social Media" },
  { icon: "🛡️", label: "Cybersecurity" },
  { icon: "🌾", label: "AgriTech" },
];

const processSteps = [
  { icon: "🔍", num: "01", title: "Discovery", desc: "Deep-dive into your business goals, user needs, and technical requirements." },
  { icon: "🎨", num: "02", title: "Design & Architect", desc: "Craft pixel-perfect designs and robust system architectures." },
  { icon: "⚡", num: "03", title: "Build & Iterate", desc: "Agile sprints with continuous delivery and real-time feedback." },
  { icon: "🚀", num: "04", title: "Launch & Scale", desc: "Deploy, monitor, and optimize for growth and performance." },
];

const testimonials = [
  {
    stars: 5,
    quote: "BitBattles transformed our startup idea into a fully functional MVP in just 6 weeks. Their engineering quality and speed are unmatched.",
    name: "Aarav Mehta",
    role: "Founder, NexaFlow",
    avatar: "🧑‍💼",
  },
  {
    stars: 5,
    quote: "The automation pipeline they built reduced our manual workload by 65%. Our team can now focus on strategy instead of repetitive tasks.",
    name: "Priya Sharma",
    role: "COO, TechVantage Corp",
    avatar: "👩‍💻",
  },
  {
    stars: 5,
    quote: "Their SaaS architecture expertise helped us scale from 100 to 10,000 users without a single infrastructure hiccup. Truly enterprise-grade.",
    name: "Rohan Kapoor",
    role: "CTO, CloudStack Solutions",
    avatar: "👨‍🔬",
  },
];

/* ─── Hero Visual Items ──────────────────────────────────────── */
const heroVisualItems = [
  { icon: "🚀", label: "Startup MVPs", sub: "Idea → Launch in weeks", chip: "FAST" },
  { icon: "🏢", label: "Enterprise Systems", sub: "Scale to millions", chip: "SCALE" },
  { icon: "☁️", label: "SaaS Platforms", sub: "Multi-tenant ready", chip: "CLOUD" },
  { icon: "⚙️", label: "AI Automation", sub: "70% cost reduction", chip: "AI" },
];

/* ─── Component ──────────────────────────────────────────────── */

export function SolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* ────── HERO ────── */}
      <section className="sol-hero" id="solutions-hero">
        <div className="sol-hero__grid-bg" />
        <div className="sol-hero__orb sol-hero__orb--1" />
        <div className="sol-hero__orb sol-hero__orb--2" />
        <div className="sol-hero__orb sol-hero__orb--3" />

        <div className="sol-container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gap: "3rem", alignItems: "center", gridTemplateColumns: "1fr" }}>
            {/* Left Content */}
            <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr", alignItems: "center" }}
                 className="sol-hero__layout">
              <div>
                <div className="sol-hero__badge">
                  <span className="sol-hero__badge-dot" />
                  Tailored Solutions
                </div>

                <h1 className="sol-hero__title">
                  Solutions Engineered for{" "}
                  <span className="sol-hero__title-accent">Every Stage</span> of Growth
                </h1>

                <p className="sol-hero__desc">
                  Whether you're a scrappy startup validating an idea or a global enterprise
                  transforming operations — we build technology that scales with your ambition.
                </p>

                <div className="sol-hero__cta-group">
                  <a href="/proposal" className="sol-hero__cta-primary">
                    Get a Free Proposal →
                  </a>
                  <a href="/portfolio" className="sol-hero__cta-secondary">
                    View Our Work →
                  </a>
                </div>

                <div className="sol-hero__stats">
                  <div>
                    <span className="sol-hero__stat-num">50+</span>
                    <span className="sol-hero__stat-label">Projects Shipped</span>
                  </div>
                  <div>
                    <span className="sol-hero__stat-num">4</span>
                    <span className="sol-hero__stat-label">Solution Verticals</span>
                  </div>
                  <div>
                    <span className="sol-hero__stat-num">12+</span>
                    <span className="sol-hero__stat-label">Industries Served</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Panel */}
              <div className="sol-hero__visual">
                <div className="sol-hero__visual-tag">What We Build</div>
                {heroVisualItems.map((item) => (
                  <div className="sol-hero__visual-item" key={item.label}>
                    <div className="sol-hero__visual-icon">{item.icon}</div>
                    <div>
                      <div className="sol-hero__visual-label">{item.label}</div>
                      <div className="sol-hero__visual-sublabel">{item.sub}</div>
                    </div>
                    <span className="sol-hero__visual-chip">{item.chip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── SOLUTION CATEGORIES ────── */}
      <section className="sol-section sol-section--dark" id="solutions-categories">
        <div className="sol-container" style={{ textAlign: "center" }}>
          <span className="sol-eyebrow">Our Solutions</span>
          <h2 className="sol-section-title">
            Technology Solutions for Every Business Model
          </h2>
          <p className="sol-section-desc">
            From early-stage startups to Fortune 500 enterprises — we deliver custom
            technology that fits your unique challenges and growth trajectory.
          </p>
          <div className="sol-section-divider">
            <span className="sol-section-divider__line" />
            <span className="sol-section-divider__dot" />
            <span className="sol-section-divider__line sol-section-divider__line--right" />
          </div>

          <div className="sol-cards-grid" style={{ marginTop: "3rem" }}>
            {solutionCards.map((card) => (
              <a href={card.href} className="sol-card" key={card.id} id={`sol-card-${card.id}`}>
                <div className="sol-card__icon-wrap">{card.icon}</div>
                <span className="sol-card__label">{card.label}</span>
                <h3 className="sol-card__title">{card.title}</h3>
                <p className="sol-card__desc">{card.desc}</p>
                <div className="sol-card__tag-row">
                  {card.tags.map((tag) => (
                    <span className="sol-card__tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="sol-card__cta">
                  Learn More <span>→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────── DEEP-DIVE DETAIL SECTIONS ────── */}
      <section className="sol-section sol-section--deep" id="solutions-details">
        <div className="sol-container">
          <div style={{ textAlign: "center" }}>
            <span className="sol-eyebrow">Deep Dive</span>
            <h2 className="sol-section-title">How We Deliver Results</h2>
            <p className="sol-section-desc">
              Each solution vertical is purpose-built with industry best practices,
              battle-tested frameworks, and a relentless focus on measurable outcomes.
            </p>
            <div className="sol-section-divider">
              <span className="sol-section-divider__line" />
              <span className="sol-section-divider__dot" />
              <span className="sol-section-divider__line sol-section-divider__line--right" />
            </div>
          </div>

          <div className="sol-detail-list">
            {detailSections.map((item) => (
              <div
                className={`sol-detail-item${item.reverse ? " sol-detail-item--reverse" : ""}`}
                key={item.num}
                id={`sol-detail-${item.tag.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Content */}
                <div className="sol-detail-item__content">
                  <div className="sol-detail-item__num">{item.num}</div>
                  <span className="sol-detail-item__tag">{item.tag}</span>
                  <h3 className="sol-detail-item__title">{item.title}</h3>
                  <p className="sol-detail-item__desc">{item.desc}</p>
                  <ul className="sol-detail-item__features">
                    {item.features.map((feat) => (
                      <li className="sol-detail-item__feature" key={feat}>{feat}</li>
                    ))}
                  </ul>
                  <a href={item.href} className="sol-detail-item__cta">
                    Explore {item.tag} Solutions <span>→</span>
                  </a>
                </div>

                {/* Visual */}
                <div className="sol-detail-item__visual">
                  <div className="sol-detail-item__visual-header">
                    <span>{item.visual.header}</span>
                    <span className="sol-detail-item__visual-check">✓</span>
                  </div>
                  {item.visual.rows.map((row, idx) => (
                    <div className="sol-detail-item__visual-row" key={row.label}>
                      <span
                        className="sol-detail-item__visual-row-num"
                        style={{
                          background: row.status === "Active"
                            ? "rgba(255,106,42,0.2)"
                            : row.status === "Complete"
                              ? "rgba(34,197,94,0.2)"
                              : "rgba(255,255,255,0.08)",
                          border: "1px solid",
                          borderColor: row.status === "Active"
                            ? "rgba(255,106,42,0.5)"
                            : row.status === "Complete"
                              ? "rgba(34,197,94,0.4)"
                              : "rgba(255,255,255,0.12)",
                        }}
                      >
                        {row.icon}
                      </span>
                      <span className="sol-detail-item__visual-row-label">{row.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── WHY CHOOSE BITBATTLES — METRICS ────── */}
      <section className="sol-section sol-section--mid" id="solutions-metrics">
        <div className="sol-container">
          <div style={{ textAlign: "center" }}>
            <span className="sol-eyebrow">Why BitBattles</span>
            <h2 className="sol-section-title">Numbers That Speak for Themselves</h2>
            <p className="sol-section-desc">
              We measure success by the impact we create for our partners —
              faster launches, higher uptime, and lasting relationships.
            </p>
            <div className="sol-section-divider">
              <span className="sol-section-divider__line" />
              <span className="sol-section-divider__dot" />
              <span className="sol-section-divider__line sol-section-divider__line--right" />
            </div>
          </div>

          <div className="sol-metrics-grid" style={{ marginTop: "3rem" }}>
            {metrics.map((m) => (
              <div className="sol-metric-card" key={m.label}>
                <div className="sol-metric-card__icon">{m.icon}</div>
                <div className="sol-metric-card__num">{m.num}</div>
                <div className="sol-metric-card__label">{m.label}</div>
                <div className="sol-metric-card__sub">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── INDUSTRIES ────── */}
      <section className="sol-section sol-section--dark" id="solutions-industries">
        <div className="sol-container">
          <div style={{ textAlign: "center" }}>
            <span className="sol-eyebrow">Industries We Serve</span>
            <h2 className="sol-section-title">Expertise Across Verticals</h2>
            <p className="sol-section-desc">
              Our solutions span healthcare, fintech, e-commerce, education, and beyond —
              each tailored to the domain's unique regulatory and technical demands.
            </p>
            <div className="sol-section-divider">
              <span className="sol-section-divider__line" />
              <span className="sol-section-divider__dot" />
              <span className="sol-section-divider__line sol-section-divider__line--right" />
            </div>
          </div>

          <div className="sol-industries-grid" style={{ marginTop: "3rem" }}>
            {industries.map((ind) => (
              <div className="sol-industry-chip" key={ind.label}>
                <span className="sol-industry-chip__icon">{ind.icon}</span>
                <span className="sol-industry-chip__label">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── PROCESS / HOW IT WORKS ────── */}
      <section className="sol-section sol-section--deep" id="solutions-process">
        <div className="sol-container">
          <div style={{ textAlign: "center" }}>
            <span className="sol-eyebrow">Our Process</span>
            <h2 className="sol-section-title">How We Bring Your Vision to Life</h2>
            <p className="sol-section-desc">
              A proven four-phase approach that takes you from discovery to deployment —
              with full transparency and agile iteration at every step.
            </p>
            <div className="sol-section-divider">
              <span className="sol-section-divider__line" />
              <span className="sol-section-divider__dot" />
              <span className="sol-section-divider__line sol-section-divider__line--right" />
            </div>
          </div>

          <div className="sol-process-steps">
            {processSteps.map((step) => (
              <div className="sol-process-step" key={step.num}>
                <div className="sol-process-step__node">
                  {step.icon}
                  <span className="sol-process-step__num">{step.num}</span>
                </div>
                <div className="sol-process-step__title">{step.title}</div>
                <div className="sol-process-step__desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── TESTIMONIALS ────── */}
      <section className="sol-section sol-section--mid" id="solutions-testimonials">
        <div className="sol-container">
          <div style={{ textAlign: "center" }}>
            <span className="sol-eyebrow">Client Stories</span>
            <h2 className="sol-section-title">Trusted by Ambitious Teams</h2>
            <p className="sol-section-desc">
              Hear from founders and executives who partnered with BitBattles
              to transform their digital operations.
            </p>
            <div className="sol-section-divider">
              <span className="sol-section-divider__line" />
              <span className="sol-section-divider__dot" />
              <span className="sol-section-divider__line sol-section-divider__line--right" />
            </div>
          </div>

          <div className="sol-testimonials-grid" style={{ marginTop: "3rem" }}>
            {testimonials.map((t) => (
              <div className="sol-testimonial-card" key={t.name}>
                <div className="sol-testimonial-card__stars">
                  {"★".repeat(t.stars)}
                </div>
                <p className="sol-testimonial-card__quote">"{t.quote}"</p>
                <div className="sol-testimonial-card__author">
                  <div className="sol-testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <div className="sol-testimonial-card__name">{t.name}</div>
                    <div className="sol-testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── CTA BANNER ────── */}
      <section className="sol-section sol-section--deep" id="solutions-cta">
        <div className="sol-container">
          <div className="sol-cta-banner">
            <h2 className="sol-cta-banner__title">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="sol-cta-banner__desc">
              Tell us about your project and get a custom proposal within 48 hours.
              No commitment, no BS — just clear engineering insights.
            </p>
            <div className="sol-cta-banner__actions">
              <a href="/proposal" className="sol-cta-banner__btn-primary">
                Get a Free Proposal →
              </a>
              <a href="/contact" className="sol-cta-banner__btn-secondary">
                Schedule a Call →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
