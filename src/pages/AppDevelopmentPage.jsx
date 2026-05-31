import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/app-development.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────── */
const appDevProcess = [
  { num: "01", icon: "💡", title: "Ideation & Research", desc: "User interviews, market research, and feature prioritization to define what your app really needs to succeed." },
  { num: "02", icon: "📐", title: "UX Design & Prototype", desc: "Interactive prototypes for iOS and Android tested with real users before development begins." },
  { num: "03", icon: "📱", title: "Native Development", desc: "Platform-optimized code for iOS (Swift) and Android (Kotlin) — or cross-platform with React Native / Flutter." },
  { num: "04", icon: "🏪", title: "Store Launch & Growth", desc: "App Store and Google Play submission, ASO optimization, and post-launch analytics monitoring." },
];

const whatWeBuild = [
  {
    icon: "🛒",
    title: "Consumer Apps",
    desc: "Engaging consumer apps for iOS and Android — social, lifestyle, entertainment, and productivity.",
    platforms: ["iOS", "Android", "Tablet"],
  },
  {
    icon: "🏢",
    title: "Enterprise Mobile",
    desc: "Internal enterprise apps for field teams, inventory management, HR tools, and business operations.",
    platforms: ["MDM Ready", "SSO", "Offline Mode"],
  },
  {
    icon: "🛍️",
    title: "Commerce & Retail",
    desc: "Mobile commerce apps with seamless checkout, loyalty programs, and real-time inventory.",
    platforms: ["Shopify", "WooCommerce", "Custom"],
  },
  {
    icon: "❤️",
    title: "Health & Fitness",
    desc: "HIPAA-aware health apps with wearable integrations, tracking, and personalized dashboards.",
    platforms: ["HealthKit", "Google Fit", "Wearables"],
  },
  {
    icon: "🎮",
    title: "On-Demand Services",
    desc: "Uber-style on-demand apps with real-time maps, driver/user flows, and push notifications.",
    platforms: ["GPS", "Push Notifications", "Payments"],
  },
  {
    icon: "🤝",
    title: "Cross-Platform Apps",
    desc: "React Native and Flutter apps that ship on iOS and Android from a single codebase — faster and leaner.",
    platforms: ["React Native", "Flutter", "Expo"],
  },
];

const faqs = [
  { q: "Should I build a native app or a cross-platform app?", a: "It depends on your budget, timeline, and performance requirements. Native (Swift/Kotlin) is best for maximum performance. React Native or Flutter is ideal for faster delivery and shared codebase. We'll recommend the right approach for your project in our first call." },
  { q: "How long does it take to build a mobile app?", a: "An MVP typically takes 10–16 weeks. A full-featured app with backend takes 20–32 weeks. We scope aggressively to get you to market fast without cutting corners." },
  { q: "Do you handle App Store and Google Play submissions?", a: "Yes — we handle everything: app store metadata, screenshots, icons, privacy policies, review submission, and rejection resolution. Your only job is to approve the listings." },
  { q: "Can you add features to an existing app?", a: "Absolutely. We take over existing codebases (React Native, Flutter, or native), improve the code quality, and add new features. We always start with a code audit so you know exactly what you're working with." },
  { q: "Do you integrate third-party APIs and SDKs?", a: "Yes — payment gateways (Stripe, Razorpay), maps (Google Maps, Mapbox), analytics (Firebase, Mixpanel), authentication (Auth0, Firebase Auth), and virtually any REST or GraphQL API." },
  { q: "How do you handle app security?", a: "We implement SSL pinning, encrypted local storage, secure token handling, biometric authentication, and regular security audits to keep your app and user data safe." },
];

const otherServices = [
  { emoji: "🧠", title: "AI Solutions", desc: "Intelligent workflows & assistants", href: "/services/ai-solutions", color: "#ff6a2a" },
  { emoji: "🌐", title: "Web Development", desc: "High-performance websites & apps", href: "/services/web-development", color: "#0ea5e9" },
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
      <span className="app-eyebrow">{eyebrow}</span>
      <h2 className={`app-section-title ${light ? "app-section-title--light" : "app-section-title--dark"}`}>
        {children}
      </h2>
      <div className="app-divider mx-auto">
        <span className="app-divider__line" />
        <span className={`app-divider__dot ${light ? "app-divider__dot--light" : "app-divider__dot--dark"}`} />
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
      tl.fromTo(".app-hero__badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".app-hero__title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .fromTo(".app-hero__desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".app-hero__cta-group", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

      // Phone mockups stagger
      gsap.fromTo(".app-phone", { opacity: 0, y: 80, scale: 0.85 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.15,
        ease: "back.out(1.2)", delay: 0.5,
      });

      gsap.fromTo(".app-phone--left", { opacity: 0, x: -60, rotate: -12 }, {
        opacity: 0.7, x: 0, rotate: -8, duration: 0.9, ease: "power3.out", delay: 0.7,
      });

      gsap.fromTo(".app-phone--right", { opacity: 0, x: 60, rotate: 12 }, {
        opacity: 0.7, x: 0, rotate: 8, duration: 0.9, ease: "power3.out", delay: 0.85,
      });

      // Screen cards bounce in
      gsap.fromTo(".app-screen-card", { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 1.2,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const screenCards = [
    { icon: "📊", delay: "0s" },
    { icon: "🔔", delay: "0.3s" },
    { icon: "💬", delay: "0.6s" },
    { icon: "📍", delay: "0.9s" },
  ];

  return (
    <section className="app-hero" ref={heroRef}>
      <div className="app-hero__grid" />
      <div className="app-hero__orb app-hero__orb--1" />
      <div className="app-hero__orb app-hero__orb--2" />
      <div className="app-hero__orb app-hero__orb--3" />

      <div className="app-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left */}
          <div>
            <span className="app-hero__badge" style={{ opacity: 0 }}>
              <span className="app-hero__badge-dot" />
              Mobile App Development by BitBattles
            </span>
            <h1 className="app-hero__title" style={{ opacity: 0 }}>
              Apps That Users{" "}
              <span className="app-hero__title-accent">Can't Put Down</span>
            </h1>
            <p className="app-hero__desc" style={{ opacity: 0 }}>
              iOS and Android apps crafted for real users — smooth, fast, and built
              to retain. From MVP to production-ready in weeks, not months.
            </p>
            <div className="app-hero__cta-group" style={{ opacity: 0 }}>
              <a href="/proposal?service=mobile-apps" className="app-hero__cta-primary">
                Build Your App →
              </a>
              <a href="#app-process" className="app-hero__cta-secondary">
                Our Process ↓
              </a>
            </div>

            {/* Stats row */}
            <div style={{ marginTop: "40px", display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {[
                { num: "40+", label: "Apps Shipped" },
                { num: "4.8★", label: "Avg App Rating" },
                { num: "2M+", label: "Combined Users" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff" }}>{s.num}</div>
                  <div style={{ fontSize: "11px", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Phone mockup cluster */}
          <div className="app-hero__visual">
            {/* Left phone */}
            <div className="app-phone app-phone--left">
              <div className="app-phone__notch">
                <div className="app-phone__notch-bar" />
              </div>
              <div className="app-phone__screen">
                <div className="app-phone__screen-header">
                  <div className="app-phone__screen-dot" />
                  <span style={{ fontSize: "10px", color: "#6ee7b7", fontWeight: 700 }}>Analytics</span>
                </div>
                {[70, 45, 85].map((w, i) => (
                  <div key={i} className="app-screen-card">
                    <div className="app-screen-card__icon">📊</div>
                    <div className="app-screen-card__line">
                      <div className="app-screen-card__line-1" style={{ width: `${w}%` }} />
                      <div className="app-screen-card__line-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center phone */}
            <div className="app-phone">
              <div className="app-phone__notch">
                <div className="app-phone__notch-bar" />
              </div>
              <div className="app-phone__screen">
                <div className="app-phone__screen-header">
                  <div className="app-phone__screen-dot" />
                  <span style={{ fontSize: "10px", color: "#6ee7b7", fontWeight: 700 }}>Dashboard</span>
                </div>
                {screenCards.map((card) => (
                  <div key={card.icon} className="app-screen-card">
                    <div className="app-screen-card__icon">{card.icon}</div>
                    <div className="app-screen-card__line">
                      <div className="app-screen-card__line-1" />
                      <div className="app-screen-card__line-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right phone */}
            <div className="app-phone app-phone--right">
              <div className="app-phone__notch">
                <div className="app-phone__notch-bar" />
              </div>
              <div className="app-phone__screen">
                <div className="app-phone__screen-header">
                  <div className="app-phone__screen-dot" />
                  <span style={{ fontSize: "10px", color: "#6ee7b7", fontWeight: 700 }}>Commerce</span>
                </div>
                {[55, 80, 40].map((w, i) => (
                  <div key={i} className="app-screen-card">
                    <div className="app-screen-card__icon">🛒</div>
                    <div className="app-screen-card__line">
                      <div className="app-screen-card__line-1" style={{ width: `${w}%` }} />
                      <div className="app-screen-card__line-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: App Dev Process ────────────────────────── */
function DevProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".app-process__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".app-process__header", start: "top 80%" },
      });
      gsap.fromTo(".app-process-card", { opacity: 0, y: 60, scale: 0.93 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.14,
        ease: "back.out(1.2)",
        scrollTrigger: { trigger: ".app-process-grid", start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="app-process" className="app-section app-section--soft" ref={sectionRef}>
      <div className="app-container">
        <div className="app-process__header">
          <SectionTitle eyebrow="How We Build">Our Development Process</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            From first idea to App Store listing — a clear, milestone-driven process
            that keeps you informed and in control at every stage.
          </p>
        </div>
        <div className="app-process-grid">
          {appDevProcess.map((step) => (
            <article key={step.num} className="app-process-card">
              <div className="app-process-card__num">{step.num}</div>
              <div className="app-process-card__icon">{step.icon}</div>
              <h3 className="app-process-card__title">{step.title}</h3>
              <p className="app-process-card__desc">{step.desc}</p>
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
      gsap.fromTo(".app-build__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".app-build__header", start: "top 80%" },
      });
      gsap.fromTo(".app-build-card", { opacity: 0, y: 50, scale: 0.94 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.11,
        ease: "power3.out",
        scrollTrigger: { trigger: ".app-build-grid", start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="app-section app-section--light" ref={sectionRef}>
      <div className="app-container">
        <div className="app-build__header">
          <SectionTitle eyebrow="What We Build">Apps For Every Industry</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            Whatever your market — consumer, enterprise, health, or commerce — we've
            built it before and we know what it takes to win.
          </p>
        </div>
        <div className="app-build-grid">
          {whatWeBuild.map((item) => (
            <article key={item.title} className="app-build-card">
              <div className="app-build-card__icon">{item.icon}</div>
              <h3 className="app-build-card__title">{item.title}</h3>
              <p className="app-build-card__desc">{item.desc}</p>
              <div className="app-build-card__platforms">
                {item.platforms.map((p) => (
                  <span key={p} className="app-build-card__platform">{p}</span>
                ))}
              </div>
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
    <div className={`app-floating-tab ${visible && !dismissed ? "app-floating-tab--visible" : "app-floating-tab--hidden"}`}>
      <div className="app-floating-tab__card">
        <span style={{ fontSize: "20px" }}>📱</span>
        <span className="app-floating-tab__text">Ready to build your mobile app?</span>
        <a href="/proposal?service=mobile-apps" className="app-floating-tab__cta">
          Discuss Your Idea →
        </a>
        <button
          className="app-floating-tab__close"
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
      gsap.fromTo(".app-faq__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".app-faq__header", start: "top 80%" },
      });
      gsap.fromTo(".app-faq-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".app-faq-list", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="app-section app-section--gray" ref={sectionRef}>
      <div className="app-container">
        <div className="app-faq__header">
          <SectionTitle eyebrow="Questions?">Frequently Asked Questions</SectionTitle>
        </div>
        <div className="app-faq-list">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={`app-faq-item ${openIndex === index ? "app-faq-item--open" : ""}`}
            >
              <button
                className="app-faq-item__trigger"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="app-faq-item__question">{faq.q}</span>
                <span className="app-faq-item__icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="app-faq-item__answer">{faq.a}</div>
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
      gsap.fromTo(".app-other__header", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".app-other__header", start: "top 80%" },
      });
      gsap.fromTo(".app-other-card", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
        scrollTrigger: { trigger: ".app-other-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="app-section app-section--light" ref={sectionRef}>
      <div className="app-container">
        <div className="app-other__header">
          <SectionTitle eyebrow="Explore More">Our Other Services</SectionTitle>
        </div>
        <div className="app-other-grid">
          {otherServices.map((s) => (
            <a key={s.href} href={s.href} className="app-other-card">
              <div className="app-other-card__icon" style={{ background: `${s.color}18` }}>
                {s.emoji}
              </div>
              <span className="app-other-card__title">{s.title}</span>
              <span className="app-other-card__arrow">→</span>
            </a>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-slate-700 shadow-sm transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─────────────────────────────────────── */
export function AppDevelopmentPage() {
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
