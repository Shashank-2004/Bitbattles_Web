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

const faqs = [
  { q: "What technologies do you use for web development?", a: "We primarily build with React, Next.js, Node.js, and PostgreSQL/MongoDB. We match the stack to your project needs — not to our comfort zone." },
  { q: "How long does a typical web project take?", a: "A landing page takes 1–3 weeks. A full web application takes 8–20 weeks depending on scope and complexity. We'll give you a precise timeline after scoping." },
  { q: "Do you handle SEO and performance optimization?", a: "Yes — SEO best practices, Core Web Vitals optimization, image compression, caching strategies, and Lighthouse audits are part of every web project we deliver." },
  { q: "Will my website be mobile-responsive?", a: "Always. Every website we build is mobile-first, tested across devices, and achieves a 100% responsive score. No exceptions." },
  { q: "Can you migrate an existing website?", a: "Absolutely. We handle CMS migrations, platform migrations (e.g., WordPress → Next.js), and codebase modernizations with zero data loss and minimal downtime." },
  { q: "Do you provide ongoing maintenance after launch?", a: "Yes — we offer monthly maintenance retainers covering security updates, bug fixes, performance monitoring, and feature additions." },
];

const otherServices = [
  { emoji: "🧠", title: "AI Solutions", desc: "Intelligent workflows & assistants", href: "/services/ai-solutions", color: "#ff6a2a" },
  { emoji: "📱", title: "Mobile Apps", desc: "iOS & Android app development", href: "/services/mobile-apps", color: "#10b981" },
  { emoji: "🎨", title: "UI/UX Design", desc: "User-centered product design", href: "/services/ui-ux-design", color: "#a855f7" },
  { emoji: "🏗️", title: "SaaS Development", desc: "Subscription platforms & dashboards", href: "/services/saas-development", color: "#6366f1" },
  { emoji: "☁️", title: "Cloud Implementation", desc: "Cloud infra & DevOps pipelines", href: "/services/cloud-implementation", color: "#38bdf8" },
  { emoji: "⚡", title: "Automation", desc: "Workflow automation & AI pipelines", href: "/services/automation", color: "#f59e0b" },
  { emoji: "✅", title: "QA & Testing", desc: "Rigorous quality assurance", href: "/services/qa-testing", color: "#14b8a6" },
  { emoji: "🛡️", title: "Cyber Security", desc: "Secure digital product experiences", href: "/services/cyber-security", color: "#ef4444" },
  { emoji: "🥽", title: "AR/VR Development", desc: "Immersive digital experiences", href: "/services/ar-vr-development", color: "#ec4899" },
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

      // Browser code lines
      gsap.fromTo(".web-code-line", { scaleX: 0 }, {
        scaleX: 1, duration: 0.5, stagger: 0.07, ease: "power2.out", transformOrigin: "left",
        delay: 0.8,
      });

      // Tech chips
      gsap.fromTo(".web-tech-chip", { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)", delay: 1.2,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const techStack = [
    { icon: "⚛️", label: "React" },
    { icon: "▲", label: "Next.js" },
    { icon: "🟩", label: "Node.js" },
    { icon: "🐘", label: "PostgreSQL" },
    { icon: "🔥", label: "Firebase" },
    { icon: "☁️", label: "AWS" },
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
          {/* Left */}
          <div>
            <span className="web-hero__badge" style={{ opacity: 0 }}>
              <span className="web-hero__badge-dot" />
              Web Development by BitBattles
            </span>
            <h1 className="web-hero__title" style={{ opacity: 0 }}>
              Websites That{" "}
              <span className="web-hero__title-accent">Perform & Convert</span>
            </h1>
            <p className="web-hero__desc" style={{ opacity: 0 }}>
              High-performance websites and web applications built with clean architecture,
              modern tooling, and an obsession with speed, usability, and results.
            </p>
            <div className="web-hero__cta-group" style={{ opacity: 0 }}>
              <a href="/proposal?service=web-development" className="web-hero__cta-primary">
                Start Your Web Project →
              </a>
              <a href="#web-process" className="web-hero__cta-secondary">
                See How We Work ↓
              </a>
            </div>
          </div>

          {/* Right — Browser mockup */}
          <div className="web-hero__visual" style={{ opacity: 0 }}>
            <div className="web-browser-bar">
              <div className="web-browser-dot" style={{ background: "#ef4444" }} />
              <div className="web-browser-dot" style={{ background: "#f59e0b" }} />
              <div className="web-browser-dot" style={{ background: "#10b981" }} />
              <div className="web-browser-url">
                🔒 https://yourproject.bitbattles.in
              </div>
            </div>
            <div className="web-browser-content">
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
                {techStack.map((tech) => (
                  <div key={tech.label} className="web-tech-chip">
                    <span>{tech.icon}</span>
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
              {codeLinesWidths.map((w, i) => (
                <div
                  key={i}
                  className="web-code-line"
                  style={{
                    width: `${w}%`,
                    animationDelay: `${i * 0.15}s`,
                    background: i % 3 === 0
                      ? "rgba(14,165,233,0.2)"
                      : i % 3 === 1
                        ? "rgba(20,184,166,0.12)"
                        : "rgba(255,255,255,0.06)",
                  }}
                />
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
      gsap.fromTo(".web-process__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".web-process__header", start: "top 80%" },
      });
      gsap.fromTo(".web-process-card", { opacity: 0, y: 60, rotateX: 10 }, {
        opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: ".web-process-grid", start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="web-process" className="web-section web-section--soft" ref={sectionRef}>
      <div className="web-container">
        <div className="web-process__header">
          <SectionTitle eyebrow="How We Work">Our Development Process</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            A disciplined, agile development process that keeps your project on time,
            on budget, and exactly on spec.
          </p>
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
      gsap.fromTo(".web-build__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".web-build__header", start: "top 80%" },
      });
      gsap.fromTo(".web-build-card", { opacity: 0, y: 50, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.11,
        ease: "power3.out",
        scrollTrigger: { trigger: ".web-build-grid", start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="web-section web-section--light" ref={sectionRef}>
      <div className="web-container">
        <div className="web-build__header">
          <SectionTitle eyebrow="What We Build">Everything Web</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            From simple landing pages to complex web platforms — if it runs in a browser,
            we can build it better.
          </p>
        </div>
        <div className="web-build-grid">
          {whatWeBuild.map((item) => (
            <article key={item.title} className="web-build-card">
              <div className="web-build-card__icon">{item.icon}</div>
              <h3 className="web-build-card__title">{item.title}</h3>
              <p className="web-build-card__desc">{item.desc}</p>
              <ul className="web-build-card__list">
                {item.list.map((li) => (
                  <li key={li} className="web-build-card__list-item">
                    <span className="web-build-card__list-dot" />
                    {li}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Floating CTA ──────────────────────────── */
function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    <div className={`web-floating-tab ${visible && !dismissed ? "web-floating-tab--visible" : "web-floating-tab--hidden"}`}>
      <div className="web-floating-tab__card">
        <span style={{ fontSize: "20px" }}>🌐</span>
        <span className="web-floating-tab__text">Ready to build your web product?</span>
        <a href="/proposal?service=web-development" className="web-floating-tab__cta">
          Discuss Your Idea →
        </a>
        <button
          className="web-floating-tab__close"
          onClick={() => { setDismissed(true); setVisible(false); }}
          aria-label="Close"
        >✕</button>
      </div>
    </div>
  );
}

/* ─── Section 5: FAQ ───────────────────────────────────── */
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".web-faq__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".web-faq__header", start: "top 80%" },
      });
      gsap.fromTo(".web-faq-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".web-faq-list", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="web-section web-section--gray" ref={sectionRef}>
      <div className="web-container">
        <div className="web-faq__header">
          <SectionTitle eyebrow="Questions?">Frequently Asked Questions</SectionTitle>
        </div>
        <div className="web-faq-list">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={`web-faq-item ${openIndex === index ? "web-faq-item--open" : ""}`}
            >
              <button
                className="web-faq-item__trigger"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="web-faq-item__question">{faq.q}</span>
                <span className="web-faq-item__icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="web-faq-item__answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Other Services ─────────────────────────── */
function OtherServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".web-other__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".web-other__header", start: "top 80%" },
      });
      gsap.fromTo(".web-other-card", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
        scrollTrigger: { trigger: ".web-other-grid", start: "top 80%" },
      });
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
              <div className="web-other-card__icon" style={{ background: `${s.color}18` }}>
                {s.emoji}
              </div>
              <span className="web-other-card__title">{s.title}</span>
              <span className="web-other-card__arrow">→</span>
            </a>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─────────────────────────────────────── */
export function WebDevelopmentPage() {
  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main>
      <HeroSection />
      <DevProcessSection />
      <WhatWeBuildSection />
      <FloatingCta />
      <FaqSection />
      <OtherServicesSection />
    </main>
  );
}
