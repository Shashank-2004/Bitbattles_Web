import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ui-ux-design.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────── */
const designApproach = [
  {
    step: "01",
    icon: "🔍",
    title: "Research & Discovery",
    desc: "Deep-dive into your users, competitors, and goals. We map pain points and opportunities before drawing a single pixel.",
  },
  {
    step: "02",
    icon: "🗺️",
    title: "Strategy & Wireframes",
    desc: "Information architecture, user flows, and low-fidelity wireframes that validate structure before visual design begins.",
  },
  {
    step: "03",
    icon: "🎨",
    title: "Visual Design",
    desc: "High-fidelity UI with a cohesive design system — typography, color, spacing, and component libraries built to scale.",
  },
  {
    step: "04",
    icon: "🚀",
    title: "Prototype & Iterate",
    desc: "Interactive prototypes tested with real users. Rapid iterations based on feedback until the experience feels effortless.",
  },
];

const offerings = [
  {
    icon: "📐",
    title: "Product Design",
    desc: "End-to-end product design from concept to pixel-perfect specs — dashboards, web apps, e-commerce, and internal tools.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: "🧭",
    title: "UX Research",
    desc: "User interviews, usability tests, heatmap analysis, and journey mapping to surface what your users truly need.",
    tags: ["User Testing", "Analytics", "Journey Maps"],
  },
  {
    icon: "🖥️",
    title: "Website & Landing Pages",
    desc: "Conversion-optimized, visually stunning marketing sites that communicate your brand value in seconds.",
    tags: ["Landing Pages", "CRO", "Brand Identity"],
  },
  {
    icon: "📱",
    title: "Mobile App UI",
    desc: "iOS and Android native interfaces that feel at home on every device — smooth, intuitive, and on-brand.",
    tags: ["iOS", "Android", "Responsive"],
  },
  {
    icon: "🎯",
    title: "Design Systems",
    desc: "Scalable component libraries and design tokens that keep your product consistent as it grows.",
    tags: ["Components", "Tokens", "Storybook"],
  },
  {
    icon: "🔄",
    title: "UX Audits & Redesigns",
    desc: "Identify conversion blockers, usability issues, and design debt — then fix them with a systematic redesign plan.",
    tags: ["Audit", "Heuristics", "Conversion"],
  },
];

const faqs = [
  {
    q: "What's the difference between UI and UX design?",
    a: "UX (User Experience) covers research, structure, and how users navigate — the logic. UI (User Interface) covers how it looks — the aesthetics. We do both, ensuring your product is both intuitive and beautiful.",
  },
  {
    q: "How long does a typical UI/UX design project take?",
    a: "A landing page design takes 1–2 weeks. A full product design (web app, mobile app) typically takes 4–10 weeks depending on scope. We'll scope your project precisely in our first call.",
  },
  {
    q: "Do you provide design files I can hand off to developers?",
    a: "Absolutely. You'll receive production-ready Figma files with organized layers, design tokens, a component library, and developer handoff notes so nothing gets lost in translation.",
  },
  {
    q: "Can you redesign an existing product?",
    a: "Yes — redesigns are one of our specialities. We start with a UX audit to identify what's working and what isn't, then propose targeted improvements backed by data.",
  },
  {
    q: "Do you work with startups or enterprise companies?",
    a: "Both! We've designed for pre-seed startups launching their first product and for established companies scaling their platforms. We adapt our process to your stage and budget.",
  },
  {
    q: "Can you also help with branding?",
    a: "Yes. We offer brand identity design (logo, color, typography, voice) as a standalone or as part of a broader product design engagement.",
  },
];

const otherServices = [
  { emoji: "🧠", title: "AI Solutions", desc: "Intelligent AI workflows & assistants", href: "/services/ai-solutions", color: "#ff6a2a" },
  { emoji: "🌐", title: "Web Development", desc: "High-performance websites & apps", href: "/services/web-development", color: "#0ea5e9" },
  { emoji: "📱", title: "Mobile Apps", desc: "iOS & Android app development", href: "/services/mobile-apps", color: "#10b981" },
  { emoji: "✅", title: "QA & Testing", desc: "Quality assurance & automated testing", href: "/services/qa-testing", color: "#14b8a6" },
  { emoji: "🛡️", title: "Cyber Security", desc: "Secure digital product experiences", href: "/services/cyber-security", color: "#ef4444" },
  { emoji: "⚡", title: "Automation", desc: "Workflow automation & AI pipelines", href: "/services/automation", color: "#f59e0b" },
  { emoji: "✅", title: "QA & Testing", desc: "Rigorous quality assurance", href: "/services/qa-testing", color: "#14b8a6" },
  { emoji: "☁️", title: "Cloud Implementation", desc: "Cloud infra & DevOps", href: "/services/cloud-implementation", color: "#38bdf8" },
  { emoji: "🥽", title: "AR/VR Development", desc: "Immersive digital experiences", href: "/services/ar-vr-development", color: "#ec4899" },
];

/* ─── Shared Section Title ─────────────────────────────── */
function SectionTitle({ eyebrow, children, light = false, center = true }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="ux-eyebrow">{eyebrow}</span>
      <h2 className={`ux-section-title ${light ? "ux-section-title--light" : "ux-section-title--dark"}`}>
        {children}
      </h2>
      <div className={`ux-divider ${center ? "mx-auto" : ""}`}>
        <span className="ux-divider__line" />
        <span className={`ux-divider__dot ${light ? "ux-divider__dot--light" : "ux-divider__dot--dark"}`} />
      </div>
    </div>
  );
}

/* ─── Section 1: Hero ──────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".ux-hero__badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".ux-hero__title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .fromTo(".ux-hero__desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".ux-hero__cta-group", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(".ux-hero__visual", { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" }, "-=0.9");

      // Tool cards stagger
      gsap.fromTo(".ux-tool-card", { opacity: 0, scale: 0.8 }, {
        opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: "back.out(1.5)", delay: 0.6,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const toolCards = [
    { icon: "🎨", label: "Figma", style: { top: "12%", left: "8%", animationDuration: "5s" } },
    { icon: "🔲", label: "Wireframes", style: { top: "20%", right: "6%", animationDuration: "6.5s", animationDelay: "1s" } },
    { icon: "🧩", label: "Components", style: { top: "45%", left: "5%", animationDuration: "7s", animationDelay: "0.5s" } },
    { icon: "🎭", label: "Prototypes", style: { top: "55%", right: "5%", animationDuration: "5.5s", animationDelay: "1.5s" } },
    { icon: "📐", label: "Design System", style: { bottom: "15%", left: "12%", animationDuration: "6s", animationDelay: "2s" } },
    { icon: "✨", label: "Animations", style: { bottom: "18%", right: "10%", animationDuration: "7.5s", animationDelay: "0.8s" } },
  ];

  return (
    <section className="ux-hero" ref={heroRef}>
      <div className="ux-hero__grid" />
      <div className="ux-hero__orb ux-hero__orb--1" />
      <div className="ux-hero__orb ux-hero__orb--2" />
      <div className="ux-hero__orb ux-hero__orb--3" />

      <div className="ux-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <span className="ux-hero__badge" style={{ opacity: 0 }}>
              <span className="ux-hero__badge-dot" />
              UI/UX Design by BitBattles
            </span>
            <h1 className="ux-hero__title" style={{ opacity: 0 }}>
              Designs That{" "}
              <span className="ux-hero__title-accent">Convert & Delight</span>
            </h1>
            <p className="ux-hero__desc" style={{ opacity: 0 }}>
              Beautiful, user-centered interfaces and experiences built to turn visitors
              into loyal users — with research-backed design that actually works.
            </p>
            <div className="ux-hero__cta-group" style={{ opacity: 0 }}>
              <a href="/proposal?service=ui-ux-design" className="ux-hero__cta-primary">
                Start Your Design Project →
              </a>
              <a href="#ux-approach" className="ux-hero__cta-secondary">
                See Our Process ↓
              </a>
            </div>
          </div>

          {/* Right — Design visual */}
          <div className="ux-hero__visual" style={{ opacity: 0 }}>
            <div style={{ position: "relative", width: "100%", height: "480px" }}>
              {toolCards.map((card) => (
                <div key={card.label} className="ux-tool-card" style={card.style}>
                  <span className="ux-tool-card__icon">{card.icon}</span>
                  <span>{card.label}</span>
                </div>
              ))}
              {/* Center design circle */}
              <div
                style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                }}
              >
                <div className="ux-center-circle">
                  <span style={{ fontSize: "36px" }}>🎨</span>
                  <span style={{ fontSize: "11px", fontWeight: 900, color: "#d8b4fe", marginTop: "8px", letterSpacing: "0.1em" }}>
                    UI/UX
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Design Approach ──────────────────────── */
function ApproachSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ux-approach__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ux-approach__header", start: "top 80%" },
      });
      gsap.fromTo(".ux-approach-card", { opacity: 0, y: 60, scale: 0.93 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15,
        ease: "back.out(1.3)",
        scrollTrigger: { trigger: ".ux-approach-grid", start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ux-approach" className="ux-section ux-section--light" ref={sectionRef}>
      <div className="ux-container">
        <div className="ux-approach__header">
          <SectionTitle eyebrow="How We Work">Our Design Approach</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            A repeatable, research-driven process that removes guesswork and delivers
            designs your users will love from day one.
          </p>
        </div>
        <div className="ux-approach-grid">
          {designApproach.map((step) => (
            <article key={step.step} className="ux-approach-card">
              <div className="ux-approach-card__step">{step.step}</div>
              <div className="ux-approach-card__icon">{step.icon}</div>
              <h3 className="ux-approach-card__title">{step.title}</h3>
              <p className="ux-approach-card__desc">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: What We Offer ─────────────────────────── */
function WhatWeOfferSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ux-offer__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ux-offer__header", start: "top 80%" },
      });
      gsap.fromTo(".ux-offer-card", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".ux-offer-grid", start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ux-section ux-section--soft" ref={sectionRef}>
      <div className="ux-container">
        <div className="ux-offer__header">
          <SectionTitle eyebrow="Services">What We Offer</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            From initial wireframes to launch-ready design systems — every
            design deliverable your product team needs.
          </p>
        </div>
        <div className="ux-offer-grid">
          {offerings.map((item) => (
            <article key={item.title} className="ux-offer-card">
              <div className="ux-offer-card__icon">{item.icon}</div>
              <h3 className="ux-offer-card__title">{item.title}</h3>
              <p className="ux-offer-card__desc">{item.desc}</p>
              <div className="ux-offer-card__tags">
                {item.tags.map((t) => (
                  <span key={t} className="ux-offer-card__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Floating CTA Tab ─────────────────────── */
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
    <div className={`ux-floating-tab ${visible && !dismissed ? "ux-floating-tab--visible" : "ux-floating-tab--hidden"}`}>
      <div className="ux-floating-tab__card">
        <span style={{ fontSize: "20px" }}>🎨</span>
        <span className="ux-floating-tab__text">Ready to upgrade your designs?</span>
        <a href="/proposal?service=ui-ux-design" className="ux-floating-tab__cta">
          Discuss Your Idea →
        </a>
        <button
          className="ux-floating-tab__close"
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
      gsap.fromTo(".ux-faq__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ux-faq__header", start: "top 80%" },
      });
      gsap.fromTo(".ux-faq-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".ux-faq-list", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ux-section ux-section--gray" ref={sectionRef}>
      <div className="ux-container">
        <div className="ux-faq__header">
          <SectionTitle eyebrow="Got Questions?">Frequently Asked Questions</SectionTitle>
        </div>
        <div className="ux-faq-list">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={`ux-faq-item ${openIndex === index ? "ux-faq-item--open" : ""}`}
            >
              <button
                className="ux-faq-item__trigger"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="ux-faq-item__question">{faq.q}</span>
                <span className="ux-faq-item__icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="ux-faq-item__answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Other Services ───────────────────────── */
function OtherServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ux-other__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".ux-other__header", start: "top 80%" },
      });
      gsap.fromTo(".ux-other-card", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
        scrollTrigger: { trigger: ".ux-other-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ux-section ux-section--light" ref={sectionRef}>
      <div className="ux-container">
        <div className="ux-other__header">
          <SectionTitle eyebrow="Explore More">Our Other Services</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            Design is just one piece. BitBattles delivers across the full digital product stack.
          </p>
        </div>
        <div className="ux-other-grid">
          {otherServices.map((s) => (
            <a key={s.href} href={s.href} className="ux-other-card">
              <div
                className="ux-other-card__icon"
                style={{ background: `${s.color}18` }}
              >
                {s.emoji}
              </div>
              <div className="ux-other-card__text">
                <div className="ux-other-card__title">{s.title}</div>
                <div className="ux-other-card__desc">{s.desc}</div>
              </div>
              <span className="ux-other-card__arrow">→</span>
            </a>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-slate-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ──────────────────────────────────────── */
export function UiUxDesignPage() {
  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main>
      <HeroSection />
      <ApproachSection />
      <WhatWeOfferSection />
      <FloatingCta />
      <FaqSection />
      <OtherServicesSection />
    </main>
  );
}
