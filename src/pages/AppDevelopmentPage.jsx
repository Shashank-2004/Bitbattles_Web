import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/app-development.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────── */
const whatWeBuild = [
  { icon: "🛒", title: "Consumer Apps", desc: "Engaging consumer apps for iOS and Android — social, lifestyle, entertainment, and productivity.", platforms: ["iOS", "Android", "Tablet"] },
  { icon: "🏢", title: "Enterprise Mobile", desc: "Internal enterprise apps for field teams, inventory management, HR tools, and business operations.", platforms: ["MDM Ready", "SSO", "Offline Mode"] },
  { icon: "🛍️", title: "Commerce & Retail", desc: "Mobile commerce apps with seamless checkout, loyalty programs, and real-time inventory.", platforms: ["Shopify", "WooCommerce", "Custom"] },
  { icon: "❤️", title: "Health & Fitness", desc: "HIPAA-aware health apps with wearable integrations, tracking, and personalized dashboards.", platforms: ["HealthKit", "Google Fit", "Wearables"] },
  { icon: "🎮", title: "On-Demand Services", desc: "Uber-style on-demand apps with real-time maps, driver/user flows, and push notifications.", platforms: ["GPS", "Push Notifications", "Payments"] },
  { icon: "🤝", title: "Cross-Platform Apps", desc: "React Native and Flutter apps that ship on iOS and Android from a single codebase — faster and leaner.", platforms: ["React Native", "Flutter", "Expo"] },
];

const appDevProcess = [
  { num: "01", icon: "💡", title: "Ideation & Research", desc: "User interviews, market research, and feature prioritization to define what your app really needs to succeed." },
  { num: "02", icon: "📐", title: "UX Design & Prototype", desc: "Interactive prototypes for iOS and Android tested with real users before development begins." },
  { num: "03", icon: "💻", title: "Backend Architecture", desc: "Scalable API design, database schema, and cloud infrastructure setup to power your app's data layer." },
  { num: "04", icon: "📱", title: "Native Development", desc: "Platform-optimized code for iOS (Swift) and Android (Kotlin) — or cross-platform with React Native / Flutter." },
  { num: "05", icon: "🧪", title: "QA & Testing", desc: "Device-specific testing across iOS/Android, screen sizes, OS versions, and real-device cloud labs." },
  { num: "06", icon: "🏪", title: "Store Launch & Growth", desc: "App Store and Google Play submission, ASO optimization, and post-launch analytics monitoring." },
];

const whyChooseUs = [
  { icon: "🚀", title: "MVP in 10 Weeks", desc: "We ship production-ready MVPs faster than any competitor — without cutting corners on quality.", points: ["Rapid prototyping", "Weekly demos", "Launch-ready code"] },
  { icon: "📱", title: "Platform Experts", desc: "Deep expertise in both native (Swift/Kotlin) and cross-platform (React Native/Flutter) — we pick the right tool for your project.", points: ["iOS & Android native", "React Native", "Flutter"] },
  { icon: "🔒", title: "Security First", desc: "SSL pinning, encrypted storage, biometric auth, and security audits baked into every app from day one.", points: ["Biometric auth", "Data encryption", "Regular audits"] },
  { icon: "📈", title: "Post-Launch Growth", desc: "We don't disappear after launch. ASO optimization, analytics, A/B testing, and feature iterations keep your app growing.", points: ["ASO optimization", "A/B testing", "Analytics dashboards"] },
];

const otherServices = [
  { emoji: "🧠", title: "AI Solutions", href: "/services/ai-solutions", color: "#ff6a2a" },
  { emoji: "🌐", title: "Web Development", href: "/services/web-development", color: "#0ea5e9" },
  { emoji: "🎨", title: "UI/UX Design", href: "/services/ui-ux-design", color: "#a855f7" },
  { emoji: "🛡️", title: "Cyber Security", href: "/services/cyber-security", color: "#ef4444" },
];

/* ─── Shared Section Title ──────────────────────────────── */
function SectionTitle({ eyebrow, children, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="app-eyebrow">{eyebrow}</span>
      <h2 className={`app-section-title ${light ? "app-section-title--light" : "app-section-title--dark"}`}>{children}</h2>
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
      gsap.fromTo(".app-phone", { opacity: 0, y: 80, scale: 0.85 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.15, ease: "back.out(1.2)", delay: 0.5 });
      gsap.fromTo(".app-phone--left", { opacity: 0, x: -60, rotate: -12 }, { opacity: 0.7, x: 0, rotate: -8, duration: 0.9, ease: "power3.out", delay: 0.7 });
      gsap.fromTo(".app-phone--right", { opacity: 0, x: 60, rotate: 12 }, { opacity: 0.7, x: 0, rotate: 8, duration: 0.9, ease: "power3.out", delay: 0.85 });
      gsap.fromTo(".app-screen-card", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 1.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const screenCards = [{ icon: "📊" }, { icon: "🔔" }, { icon: "💬" }, { icon: "📍" }];

  return (
    <section className="app-hero" ref={heroRef}>
      <div className="app-hero__grid" />
      <div className="app-hero__orb app-hero__orb--1" />
      <div className="app-hero__orb app-hero__orb--2" />
      <div className="app-hero__orb app-hero__orb--3" />
      <div className="app-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <span className="app-hero__badge" style={{ opacity: 0 }}><span className="app-hero__badge-dot" />Mobile App Development by BitBattles</span>
            <h1 className="app-hero__title" style={{ opacity: 0 }}>Apps That Users <span className="app-hero__title-accent">Can't Put Down</span></h1>
            <p className="app-hero__desc" style={{ opacity: 0 }}>iOS and Android apps crafted for real users — smooth, fast, and built to retain. From MVP to production-ready in weeks, not months.</p>
            <div className="app-hero__cta-group" style={{ opacity: 0 }}>
              <a href="/contact?service=mobile-apps" className="app-hero__cta-primary">Build Your App →</a>
              <a href="#app-industries" className="app-hero__cta-secondary">See Industries ↓</a>
            </div>
            <div style={{ marginTop: "40px", display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {[{ num: "40+", label: "Apps Shipped" }, { num: "4.8★", label: "Avg App Rating" }, { num: "2M+", label: "Combined Users" }].map((s) => (
                <div key={s.label}><div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff" }}>{s.num}</div><div style={{ fontSize: "11px", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div></div>
              ))}
            </div>
          </div>
          <div className="app-hero__visual">
            <div className="app-phone app-phone--left">
              <div className="app-phone__notch"><div className="app-phone__notch-bar" /></div>
              <div className="app-phone__screen"><div className="app-phone__screen-header"><div className="app-phone__screen-dot" /><span style={{ fontSize: "10px", color: "#fdba8c", fontWeight: 700 }}>Analytics</span></div>
                {[70, 45, 85].map((w, i) => (<div key={i} className="app-screen-card"><div className="app-screen-card__icon">📊</div><div className="app-screen-card__line"><div className="app-screen-card__line-1" style={{ width: `${w}%` }} /><div className="app-screen-card__line-2" /></div></div>))}
              </div>
            </div>
            <div className="app-phone">
              <div className="app-phone__notch"><div className="app-phone__notch-bar" /></div>
              <div className="app-phone__screen"><div className="app-phone__screen-header"><div className="app-phone__screen-dot" /><span style={{ fontSize: "10px", color: "#fdba8c", fontWeight: 700 }}>Dashboard</span></div>
                {screenCards.map((card) => (<div key={card.icon} className="app-screen-card"><div className="app-screen-card__icon">{card.icon}</div><div className="app-screen-card__line"><div className="app-screen-card__line-1" /><div className="app-screen-card__line-2" /></div></div>))}
              </div>
            </div>
            <div className="app-phone app-phone--right">
              <div className="app-phone__notch"><div className="app-phone__notch-bar" /></div>
              <div className="app-phone__screen"><div className="app-phone__screen-header"><div className="app-phone__screen-dot" /><span style={{ fontSize: "10px", color: "#fdba8c", fontWeight: 700 }}>Commerce</span></div>
                {[55, 80, 40].map((w, i) => (<div key={i} className="app-screen-card"><div className="app-screen-card__icon">🛒</div><div className="app-screen-card__line"><div className="app-screen-card__line-1" style={{ width: `${w}%` }} /><div className="app-screen-card__line-2" /></div></div>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Apps For Every Industry (moved up) ────── */
function WhatWeBuildSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".app-build__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".app-build__header", start: "top 80%" } });
      gsap.fromTo(".app-build-card", { opacity: 0, y: 50, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.11, ease: "power3.out", scrollTrigger: { trigger: ".app-build-grid", start: "top 75%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="app-industries" className="app-section app-section--light" ref={sectionRef}>
      <div className="app-container">
        <div className="app-build__header">
          <SectionTitle eyebrow="What We Build">Apps For Every Industry</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">Whatever your market — consumer, enterprise, health, or commerce — we've built it before and we know what it takes to win.</p>
        </div>
        <div className="app-build-grid">
          {whatWeBuild.map((item) => (
            <article key={item.title} className="app-build-card">
              <div className="app-build-card__icon">{item.icon}</div>
              <h3 className="app-build-card__title">{item.title}</h3>
              <p className="app-build-card__desc">{item.desc}</p>
              <div className="app-build-card__platforms">{item.platforms.map((p) => (<span key={p} className="app-build-card__platform">{p}</span>))}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Dev Process (6 steps with arrow animation) ── */
function DevProcessSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".app-process__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".app-process__header", start: "top 80%" } });
      // Cards stagger in
      gsap.fromTo(".app-step-card", { opacity: 0, y: 60, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.12, ease: "back.out(1.3)", scrollTrigger: { trigger: ".app-steps-grid", start: "top 75%" } });
      // Arrows pulse
      gsap.fromTo(".app-step-arrow", { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.12, delay: 0.6, scrollTrigger: { trigger: ".app-steps-grid", start: "top 75%" } });
      gsap.to(".app-step-arrow", { x: 5, repeat: -1, yoyo: true, duration: 0.8, ease: "sine.inOut", delay: 1.5 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="app-process" className="app-section app-section--soft" ref={sectionRef}>
      <div className="app-container">
        <div className="app-process__header">
          <SectionTitle eyebrow="How We Build">Our Development Process</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">From first idea to App Store listing — a clear, 6-step process that keeps you informed at every stage.</p>
        </div>
        <div className="app-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "0", marginTop: "56px" }}>
          {appDevProcess.map((step, i) => (
            <div key={step.num} style={{ display: "flex", alignItems: "center" }}>
              <div className="app-step-card" style={{
                flex: 1, padding: "28px", borderRadius: "20px", border: "1px solid rgba(255,106,42,0.1)", background: "rgba(255,106,42,0.02)",
                transition: "all 0.3s ease", cursor: "default", position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.borderColor = "rgba(255,106,42,0.28)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(255,106,42,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,106,42,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(255,106,42,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{step.icon}</div>
                  <span style={{ fontSize: "36px", fontWeight: 900, color: "rgba(255,106,42,0.1)", lineHeight: 1 }}>{step.num}</span>
                </div>
                <h3 style={{ marginTop: "16px", fontSize: "15px", fontWeight: 900, color: "#243237" }}>{step.title}</h3>
                <p style={{ marginTop: "8px", fontSize: "13px", lineHeight: 1.7, color: "#64748b" }}>{step.desc}</p>
              </div>
              {i < appDevProcess.length - 1 && (
                <div className="app-step-arrow" style={{ padding: "0 6px", fontSize: "20px", color: "#ff6a2a", fontWeight: 900, flexShrink: 0, opacity: 0 }}>→</div>
              )}
            </div>
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
    const h = () => { if (!dismissed) setVisible(window.scrollY > 500); };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [dismissed]);

  return (
    <div className={`app-floating-tab ${visible && !dismissed ? "app-floating-tab--visible" : "app-floating-tab--hidden"}`}>
      <div className="app-floating-tab__card">
        <span style={{ fontSize: "20px" }}>📱</span>
        <span className="app-floating-tab__text">Ready to build your mobile app?</span>
        <a href="/contact?service=mobile-apps" className="app-floating-tab__cta">Discuss Your Idea →</a>
        <button className="app-floating-tab__close" onClick={() => { setDismissed(true); setVisible(false); }} aria-label="Close">✕</button>
      </div>
    </div>
  );
}

/* ─── Section 5: Why Choose Us (replaces FAQ) ─────────── */
function WhyChooseSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".app-why__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".app-why__header", start: "top 80%" } });
      gsap.fromTo(".app-why-card", { opacity: 0, y: 50, scale: 0.93 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.14, ease: "back.out(1.3)", scrollTrigger: { trigger: ".app-why-grid", start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="app-section app-section--gray" ref={ref}>
      <div className="app-container">
        <div className="app-why__header">
          <SectionTitle eyebrow="Why Us">Why Choose BitBattles?</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">We don't just build apps — we build app businesses. Here's what sets us apart.</p>
        </div>
        <div className="app-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "20px", marginTop: "56px" }}>
          {whyChooseUs.map((w) => (
            <article key={w.title} className="app-why-card" style={{
              padding: "28px", borderRadius: "20px", border: "1px solid #f1f5f9", background: "#fff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)", transition: "all 0.3s ease", position: "relative", overflow: "hidden",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.borderColor = "rgba(255,106,42,0.22)"; e.currentTarget.style.boxShadow = "0 18px 44px rgba(255,106,42,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)"; }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, #fff4ee, #ffe8d6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>{w.icon}</div>
              <h3 style={{ marginTop: "18px", fontSize: "16px", fontWeight: 900, color: "#243237" }}>{w.title}</h3>
              <p style={{ marginTop: "10px", fontSize: "13px", lineHeight: 1.72, color: "#64748b" }}>{w.desc}</p>
              <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {w.points.map((p) => (
                  <div key={p} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,106,42,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#ff6a2a", fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#475569" }}>{p}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Other Services (4 + View All) ─────────── */
function OtherServicesSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".app-other__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".app-other__header", start: "top 80%" } });
      gsap.fromTo(".app-other-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", scrollTrigger: { trigger: ".app-other-grid", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="app-section app-section--light" ref={sectionRef}>
      <div className="app-container">
        <div className="app-other__header"><SectionTitle eyebrow="Explore More">Our Other Services</SectionTitle></div>
        <div className="app-other-grid">
          {otherServices.map((s) => (
            <a key={s.href} href={s.href} className="app-other-card">
              <div className="app-other-card__icon" style={{ background: `${s.color}18` }}>{s.emoji}</div>
              <span className="app-other-card__title">{s.title}</span>
              <span className="app-other-card__arrow">→</span>
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
export function AppDevelopmentPage() {
  useEffect(() => { return () => ScrollTrigger.getAll().forEach((t) => t.kill()); }, []);
  return (
    <main>
      <HeroSection />
      <WhatWeBuildSection />
      <DevProcessSection />
      <FloatingCta />
      <WhyChooseSection />
      <OtherServicesSection />
    </main>
  );
}
