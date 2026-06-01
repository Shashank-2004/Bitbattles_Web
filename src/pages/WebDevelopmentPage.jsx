import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/web-development.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────── */
const devProcess = [
  { num: "01", icon: "📋", title: "Discovery & Planning", desc: "Scope, tech stack selection, architecture planning, and project roadmap before a line of code is written." },
  { num: "02", icon: "🎨", title: "Design & Prototyping", desc: "Wire-frames and high-fidelity designs that align with your brand and conversion goals." },
  { num: "03", icon: "⚙️", title: "Development & QA", desc: "Clean, scalable code with continuous testing, code reviews, and performance benchmarking at every sprint." },
  { num: "04", icon: "🚀", title: "Launch & Optimize", desc: "Deploy to production with monitoring, analytics, and a post-launch optimization cycle for peak performance." },
];

const whatWeBuild = [
  {
    icon: "🏠",
    title: "Marketing Websites",
    desc: "High-conversion landing pages and brochure sites that communicate your value proposition in seconds.",
    list: ["SEO-optimized structure", "CRO-focused layouts", "Blazing load speeds"],
  },
  {
    icon: "📊",
    title: "Web Applications",
    desc: "Complex interactive web apps — dashboards, portals, admin tools, and SaaS platforms built to scale.",
    list: ["React / Next.js", "Real-time data", "Role-based access"],
  },
  {
    icon: "🛒",
    title: "E-commerce Platforms",
    desc: "Full-featured online stores with seamless checkout, inventory management, and payment integration.",
    list: ["Custom storefronts", "Payment gateways", "Inventory systems"],
  },
  {
    icon: "📱",
    title: "Progressive Web Apps",
    desc: "App-like experiences in the browser — offline support, push notifications, and native-feel UI.",
    list: ["Service workers", "Offline-first", "App install support"],
  },
  {
    icon: "🔗",
    title: "API & Backend Systems",
    desc: "RESTful and GraphQL APIs, database design, and serverless functions powering your web product.",
    list: ["Node.js / FastAPI", "PostgreSQL / MongoDB", "Serverless functions"],
  },
  {
    icon: "📈",
    title: "Analytics & Dashboards",
    desc: "Data-rich dashboards that surface real-time KPIs, charts, and insights for informed decisions.",
    list: ["Real-time charts", "Custom KPI views", "Export & reporting"],
  },
];

const impactStats = [
  { icon: "🚀", num: "3x", label: "Faster Load Times", desc: "Average performance gain vs. industry benchmarks" },
  { icon: "📈", num: "68%", label: "Conversion Lift", desc: "Average increase in lead capture rates" },
  { icon: "🌍", num: "150+", label: "Sites Launched", desc: "For startups, agencies, and enterprises" },
  { icon: "⭐", num: "4.9", label: "Client Rating", desc: "Average across all web projects delivered" },
];

const otherServices = [
  { emoji: "🧠", title: "AI Solutions", href: "/services/ai-solutions", color: "#ff6a2a" },
  { emoji: "📱", title: "Mobile Apps", href: "/services/mobile-apps", color: "#10b981" },
  { emoji: "🎨", title: "UI/UX Design", href: "/services/ui-ux-design", color: "#a855f7" },
  { emoji: "🛡️", title: "Cyber Security", href: "/services/cyber-security", color: "#ef4444" },
];

/* ─── Shared Section Title ──────────────────────────────── */
function SectionTitle({ eyebrow, children, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="web-eyebrow">{eyebrow}</span>
      <h2 className={`web-section-title ${light ? "web-section-title--light" : "web-section-title--dark"}`}>
        {children}
      </h2>
      <div className="web-divider mx-auto">
        <span className="web-divider__line" />
        <span className={`web-divider__dot ${light ? "web-divider__dot--light" : "web-divider__dot--dark"}`} />
      </div>
    </div>
  );
}

/* ─── Section 1: Hero ───────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".web-hero__badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".web-hero__title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .fromTo(".web-hero__desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".web-hero__cta-group", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(".web-hero__visual", { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" }, "-=0.8");
      gsap.fromTo(".web-code-line", { scaleX: 0 }, { scaleX: 1, duration: 0.5, stagger: 0.07, ease: "power2.out", transformOrigin: "left", delay: 0.8 });
      gsap.fromTo(".web-tech-chip", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)", delay: 1.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const techStack = [
    { icon: "⚛️", label: "React" }, { icon: "▲", label: "Next.js" }, { icon: "🟩", label: "Node.js" },
    { icon: "🐘", label: "PostgreSQL" }, { icon: "🔥", label: "Firebase" }, { icon: "☁️", label: "AWS" },
  ];
  const codeLinesWidths = [85, 60, 72, 45, 90, 55, 78, 65, 50, 88];

  return (
    <section className="web-hero" ref={heroRef}>
      <div className="web-hero__grid" />
      <div className="web-hero__orb web-hero__orb--1" />
      <div className="web-hero__orb web-hero__orb--2" />
      <div className="web-hero__orb web-hero__orb--3" />
      <div className="web-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="web-hero__badge" style={{ opacity: 0 }}><span className="web-hero__badge-dot" />Web Development by BitBattles</span>
            <h1 className="web-hero__title" style={{ opacity: 0 }}>Websites That <span className="web-hero__title-accent">Perform & Convert</span></h1>
            <p className="web-hero__desc" style={{ opacity: 0 }}>High-performance websites and web applications built with clean architecture, modern tooling, and an obsession with speed, usability, and results.</p>
            <div className="web-hero__cta-group" style={{ opacity: 0 }}>
              <a href="/contact?service=web-development" className="web-hero__cta-primary">Start Your Web Project →</a>
              <a href="#web-process" className="web-hero__cta-secondary">See How We Work ↓</a>
            </div>
          </div>
          <div className="web-hero__visual" style={{ opacity: 0 }}>
            <div className="web-browser-bar">
              <div className="web-browser-dot" style={{ background: "#ef4444" }} />
              <div className="web-browser-dot" style={{ background: "#f59e0b" }} />
              <div className="web-browser-dot" style={{ background: "#10b981" }} />
              <div className="web-browser-url">🔒 https://yourproject.bitbattles.in</div>
            </div>
            <div className="web-browser-content">
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
                {techStack.map((tech) => (<div key={tech.label} className="web-tech-chip"><span>{tech.icon}</span><span>{tech.label}</span></div>))}
              </div>
              {codeLinesWidths.map((w, i) => (
                <div key={i} className="web-code-line" style={{ width: `${w}%`, animationDelay: `${i * 0.15}s`, background: i % 3 === 0 ? "rgba(255,106,42,0.2)" : i % 3 === 1 ? "rgba(53,93,104,0.15)" : "rgba(255,255,255,0.06)" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Dev Process ─────────────────────────── */
function DevProcessSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".web-process__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".web-process__header", start: "top 80%" } });
      gsap.fromTo(".web-process-card", { opacity: 0, y: 60, rotateX: 10 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.14, ease: "power3.out", scrollTrigger: { trigger: ".web-process-grid", start: "top 75%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="web-process" className="web-section web-section--soft" ref={sectionRef}>
      <div className="web-container">
        <div className="web-process__header">
          <SectionTitle eyebrow="How We Work">Our Development Process</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">A disciplined, agile development process that keeps your project on time, on budget, and exactly on spec.</p>
        </div>
        <div className="web-process-grid">
          {devProcess.map((step) => (
            <article key={step.num} className="web-process-card">
              <div className="web-process-card__num">{step.num}</div>
              <div className="web-process-card__icon">{step.icon}</div>
              <h3 className="web-process-card__title">{step.title}</h3>
              <p className="web-process-card__desc">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: What We Build ─────────────────────────── */
function WhatWeBuildSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".web-build__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".web-build__header", start: "top 80%" } });
      gsap.fromTo(".web-build-card", { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.11, ease: "power3.out", scrollTrigger: { trigger: ".web-build-grid", start: "top 75%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="web-section web-section--light" ref={sectionRef}>
      <div className="web-container">
        <div className="web-build__header">
          <SectionTitle eyebrow="What We Build">Everything Web</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">From simple landing pages to complex web platforms — if it runs in a browser, we can build it better.</p>
        </div>
        <div className="web-build-grid">
          {whatWeBuild.map((item) => (
            <article key={item.title} className="web-build-card">
              <div className="web-build-card__icon">{item.icon}</div>
              <h3 className="web-build-card__title">{item.title}</h3>
              <p className="web-build-card__desc">{item.desc}</p>
              <ul className="web-build-card__list">
                {item.list.map((li) => (<li key={li} className="web-build-card__list-item"><span className="web-build-card__list-dot" />{li}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Impact at a Glance (scroll card animation) ── */
function ImpactSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".web-impact__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".web-impact__header", start: "top 80%" } });
      // Horizontal scroll card animation
      const cards = gsap.utils.toArray(".web-impact-card");
      cards.forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, x: i % 2 === 0 ? -80 : 80, rotateY: i % 2 === 0 ? 15 : -15 }, {
          opacity: 1, x: 0, rotateY: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%", end: "top 40%", scrub: 1 },
        });
      });
      // Counter animation
      cards.forEach((card) => {
        const numEl = card.querySelector(".web-impact-card__num");
        if (numEl) {
          gsap.fromTo(numEl, { scale: 0.5, opacity: 0 }, {
            scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)",
            scrollTrigger: { trigger: card, start: "top 80%" },
          });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="web-section web-section--gray" ref={ref} style={{ perspective: "1000px" }}>
      <div className="web-container">
        <div className="web-impact__header">
          <SectionTitle eyebrow="Results">Impact at a Glance</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">Real metrics from our web development engagements — outcomes that speak for themselves.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginTop: "56px" }}>
          {impactStats.map((s) => (
            <div key={s.label} className="web-impact-card" style={{
              padding: "36px 24px", borderRadius: "20px", border: "1px solid #f1f5f9",
              background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", textAlign: "center",
              transition: "all 0.3s ease", cursor: "default", transformStyle: "preserve-3d",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.borderColor = "rgba(255,106,42,0.25)"; e.currentTarget.style.boxShadow = "0 18px 48px rgba(255,106,42,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)"; }}
            >
              <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "linear-gradient(135deg, #fff4ee, #ffe8d6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", margin: "0 auto", transition: "all 0.3s" }}>{s.icon}</div>
              <div className="web-impact-card__num" style={{ marginTop: "18px", fontSize: "2.6rem", fontWeight: 900, color: "#243237", lineHeight: 1 }}>{s.num}</div>
              <div style={{ marginTop: "8px", fontSize: "15px", fontWeight: 800, color: "#243237" }}>{s.label}</div>
              <div style={{ marginTop: "6px", fontSize: "12px", lineHeight: 1.65, color: "#94a3b8" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Floating CTA ──────────────────────────── */
function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const h = () => { if (!dismissed) setVisible(window.scrollY > 500); };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [dismissed]);

  return (
    <div className={`web-floating-tab ${visible && !dismissed ? "web-floating-tab--visible" : "web-floating-tab--hidden"}`}>
      <div className="web-floating-tab__card">
        <span style={{ fontSize: "20px" }}>🌐</span>
        <span className="web-floating-tab__text">Ready to build your web product?</span>
        <a href="/contact?service=web-development" className="web-floating-tab__cta">Discuss Your Idea →</a>
        <button className="web-floating-tab__close" onClick={() => { setDismissed(true); setVisible(false); }} aria-label="Close">✕</button>
      </div>
    </div>
  );
}

/* ─── Section 6: Other Services (4 + View All) ─────────── */
function OtherServicesSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".web-other__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".web-other__header", start: "top 80%" } });
      gsap.fromTo(".web-other-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", scrollTrigger: { trigger: ".web-other-grid", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="web-section web-section--light" ref={sectionRef}>
      <div className="web-container">
        <div className="web-other__header">
          <SectionTitle eyebrow="Explore More">Our Other Services</SectionTitle>
        </div>
        <div className="web-other-grid">
          {otherServices.map((s) => (
            <a key={s.href} href={s.href} className="web-other-card">
              <div className="web-other-card__icon" style={{ background: `${s.color}18` }}>{s.emoji}</div>
              <span className="web-other-card__title">{s.title}</span>
              <span className="web-other-card__arrow">→</span>
            </a>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="/services" className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-slate-700 shadow-sm transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600">View All Services →</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─────────────────────────────────────── */
export function WebDevelopmentPage() {
  useEffect(() => { return () => ScrollTrigger.getAll().forEach((t) => t.kill()); }, []);
  return (
    <main>
      <HeroSection />
      <DevProcessSection />
      <WhatWeBuildSection />
      <ImpactSection />
      <FloatingCta />
      <OtherServicesSection />
    </main>
  );
}
