import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/qa-testing.css";
import "../styles/service-theme.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────── */
const capabilities = [
  { icon: "🤖", title: "Automated Testing", desc: "CI/CD-integrated test suites with Selenium, Cypress, and Playwright — running on every commit so bugs never reach production.", tag: "Automation" },
  { icon: "🔍", title: "Manual QA", desc: "Human-driven exploratory testing, regression testing, and edge-case hunting by senior QA engineers who think like users.", tag: "Manual" },
  { icon: "⚡", title: "Performance Testing", desc: "Load, stress, and endurance testing with JMeter and k6 — ensuring your app handles 10x traffic spikes effortlessly.", tag: "Performance" },
  { icon: "🔐", title: "Security Testing", desc: "OWASP-based penetration testing, vulnerability scanning, and security audits to harden your application against threats.", tag: "Security" },
  { icon: "📱", title: "Mobile QA", desc: "Device-specific testing across iOS/Android, screen sizes, OS versions, and real-device cloud labs for pixel-perfect quality.", tag: "Mobile" },
  { icon: "♿", title: "Accessibility Testing", desc: "WCAG 2.1 compliance audits, screen reader testing, and inclusive design validation so every user can access your product.", tag: "A11y" },
];

const impactStats = [
  { icon: "🐛", num: "99.7", unit: "%", label: "Bug Detection Rate", desc: "Bugs caught before they reach users" },
  { icon: "⏱️", num: "60", unit: "%", label: "Faster Releases", desc: "CI/CD pipeline time reduction" },
  { icon: "📉", num: "85", unit: "%", label: "Fewer Production Bugs", desc: "Post-launch defect reduction" },
  { icon: "💰", num: "3", unit: "x", label: "ROI on Testing", desc: "Saved vs. cost of post-launch fixes" },
];

const offerings = [
  { icon: "🧪", title: "End-to-End Testing", desc: "Full user-journey testing that validates every flow — signup, checkout, dashboards, and everything in between.", features: ["User flow validation", "Cross-browser testing", "Regression suites"] },
  { icon: "🔄", title: "CI/CD Integration", desc: "Automated test pipelines wired into your GitHub/GitLab workflow — tests run on every PR, blocking broken code automatically.", features: ["GitHub Actions", "GitLab CI", "Jenkins pipelines"] },
  { icon: "📊", title: "Test Reporting & Analytics", desc: "Rich dashboards showing test coverage, pass/fail trends, flaky test detection, and actionable insights for your dev team.", features: ["Allure reports", "Coverage tracking", "Trend analysis"] },
  { icon: "🌐", title: "API Testing", desc: "Contract testing, load testing, and functional validation for REST and GraphQL APIs with Postman and custom scripts.", features: ["REST / GraphQL", "Contract testing", "Schema validation"] },
  { icon: "🏗️", title: "QA Strategy & Consulting", desc: "Test architecture design, framework selection, team training, and quality roadmaps for startups scaling fast.", features: ["Test strategy", "Framework setup", "Team training"] },
  { icon: "🔁", title: "Continuous QA Retainer", desc: "Ongoing QA support embedded in your sprint cycles — sprint testing, regression, and release-ready certification.", features: ["Sprint testing", "Release sign-off", "Bug triage"] },
];

const whyChooseUs = [
  { icon: "🎯", title: "Shift-Left Approach", desc: "We embed testing early in the SDLC — catching bugs in design and dev, not after deployment." },
  { icon: "🧑‍💻", title: "Senior QA Engineers", desc: "No juniors running scripts. Our testers have 5+ years of domain expertise in SaaS, fintech, and e-commerce." },
  { icon: "📐", title: "Custom Frameworks", desc: "We build test frameworks tailored to your stack — not one-size-fits-all. Maintainable, scalable, and fast." },
  { icon: "🤝", title: "Embedded in Your Team", desc: "We work inside your Slack, attend standups, and feel like your internal QA team — not an outsourced vendor." },
];

const mainOtherServices = [
  { emoji: "🧠", title: "AI Solutions", href: "/services/ai-solutions", color: "#ff6a2a" },
  { emoji: "🌐", title: "Web Development", href: "/services/web-development", color: "#0ea5e9" },
  { emoji: "📱", title: "Mobile Apps", href: "/services/mobile-apps", color: "#10b981" },
  { emoji: "🎨", title: "UI/UX Design", href: "/services/ui-ux-design", color: "#a855f7" },

];

/* ─── Shared Section Title ─────────────────────────────── */
function SectionTitle({ eyebrow, children, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="svc-eyebrow">{eyebrow}</span>
      <h2 className={`svc-section-title ${light ? "svc-section-title--light" : "svc-section-title--dark"}`}>{children}</h2>
      <div className="svc-divider mx-auto">
        <span className="svc-divider__line" />
        <span className={`svc-divider__dot ${light ? "svc-divider__dot--light" : "svc-divider__dot--dark"}`} />
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
      tl.fromTo(".qa-hero .svc-badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".qa-hero .svc-hero__title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .fromTo(".qa-hero .svc-hero__desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".qa-hero__cta-group", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(".qa-dashboard", { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" }, "-=0.8");
      // Test rows
      gsap.fromTo(".qa-test-row", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 1 });
      // Metric cards
      gsap.fromTo(".qa-metric-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.12, ease: "back.out(1.3)", delay: 1.4 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const testRows = [
    { status: "pass", name: "Auth flow — login / signup", time: "1.2s" },
    { status: "pass", name: "Payment — checkout pipeline", time: "3.4s" },
    { status: "run", name: "Dashboard — data rendering", time: "..." },
    { status: "pass", name: "API — /users endpoint", time: "0.8s" },
    { status: "fail", name: "Edge — concurrent sessions", time: "2.1s" },
    { status: "pass", name: "Mobile — responsive layout", time: "1.5s" },
  ];

  return (
    <section className="qa-hero" ref={heroRef}>
      <div className="qa-hero__grid" />
      <div className="qa-hero__orb qa-hero__orb--1" />
      <div className="qa-hero__orb qa-hero__orb--2" />

      <div className="svc-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="svc-badge" style={{ opacity: 0 }}>
              <span className="svc-badge__dot" />
              QA & Testing by BitBattles
            </span>
            <h1 className="svc-hero__title" style={{ opacity: 0 }}>
              Ship <span className="svc-hero__title-accent">Bug-Free Software</span> Every Time
            </h1>
            <p className="svc-hero__desc" style={{ opacity: 0 }}>
              Rigorous quality assurance and automated testing pipelines that catch bugs before your users do — so you ship with confidence.
            </p>
            <div className="qa-hero__cta-group" style={{ opacity: 0, display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "40px" }}>
              <a href="/contact?service=qa-testing" className="svc-hero__cta-primary">Start QA Audit →</a>
              <a href="#qa-capabilities" className="svc-hero__cta-secondary">See Capabilities ↓</a>
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="qa-dashboard" style={{ opacity: 0 }}>
            <div className="qa-dashboard__topbar">
              <div className="qa-dashboard__dot" style={{ background: "#ef4444" }} />
              <div className="qa-dashboard__dot" style={{ background: "#f59e0b" }} />
              <div className="qa-dashboard__dot" style={{ background: "#10b981" }} />
              <span style={{ marginLeft: "10px", fontSize: "11px", color: "#64748b", fontWeight: 700 }}>Test Runner — CI Pipeline</span>
            </div>
            <div className="qa-dashboard__body">
              {testRows.map((row) => (
                <div key={row.name} className="qa-test-row">
                  <div className={`qa-test-row__status qa-test-row__status--${row.status}`}>
                    {row.status === "pass" ? "✓" : row.status === "fail" ? "✗" : "⟳"}
                  </div>
                  <span className="qa-test-row__name">{row.name}</span>
                  <span className="qa-test-row__time">{row.time}</span>
                </div>
              ))}
              <div className="qa-progress-bar">
                <div className="qa-progress-bar__fill" style={{ "--qa-bar-w": "83%" }} />
              </div>
              <div className="qa-metric-grid">
                <div className="qa-metric-card"><div className="qa-metric-card__num">48</div><div className="qa-metric-card__label">Tests Run</div></div>
                <div className="qa-metric-card"><div className="qa-metric-card__num" style={{ color: "#10b981" }}>46</div><div className="qa-metric-card__label">Passed</div></div>
                <div className="qa-metric-card"><div className="qa-metric-card__num" style={{ color: "#ef4444" }}>1</div><div className="qa-metric-card__label">Failed</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Core Capabilities ─────────────────────── */
function CapabilitiesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".qa-cap__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".qa-cap__header", start: "top 80%" } });
      gsap.fromTo(".qa-cap-card", { opacity: 0, y: 60, scale: 0.93 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: "back.out(1.2)", scrollTrigger: { trigger: ".qa-cap-grid", start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="qa-capabilities" className="svc-section svc-section--dark" ref={ref}>
      <div className="svc-container">
        <div className="qa-cap__header">
          <SectionTitle eyebrow="Core Capabilities" light>QA & Testing Expertise</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-400">Every testing discipline your product needs — from automated pipelines to manual exploratory testing.</p>
        </div>
        <div className="qa-cap-grid">
          {capabilities.map((c) => (
            <article key={c.title} className="qa-cap-card">
              <div className="qa-cap-card__icon">{c.icon}</div>
              <h3 className="qa-cap-card__title">{c.title}</h3>
              <p className="qa-cap-card__desc">{c.desc}</p>
              <span className="qa-cap-card__tag">{c.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Impact at a Glance ────────────────────── */
function ImpactSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".qa-impact__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".qa-impact__header", start: "top 80%" } });
      gsap.fromTo(".qa-impact-card", { opacity: 0, y: 50, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.13, ease: "back.out(1.4)", scrollTrigger: { trigger: ".qa-impact-grid", start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--light" ref={ref}>
      <div className="svc-container">
        <div className="qa-impact__header">
          <SectionTitle eyebrow="Results">Impact at a Glance</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">Real metrics from our QA engagements — not projections, but actual outcomes.</p>
        </div>
        <div className="qa-impact-grid">
          {impactStats.map((s) => (
            <article key={s.label} className="qa-impact-card">
              <div className="qa-impact-card__icon">{s.icon}</div>
              <div className="qa-impact-card__num">{s.num}<span className="qa-impact-card__unit">{s.unit}</span></div>
              <div className="qa-impact-card__label">{s.label}</div>
              <div className="qa-impact-card__desc">{s.desc}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: What We Offer ─────────────────────────── */
function OfferSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".qa-offer__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".qa-offer__header", start: "top 80%" } });
      gsap.fromTo(".qa-offer-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.11, scrollTrigger: { trigger: ".qa-offer-grid", start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--soft" ref={ref}>
      <div className="svc-container">
        <div className="qa-offer__header">
          <SectionTitle eyebrow="Services">What We Offer</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">From one-time audits to embedded QA teams — every quality service your product needs.</p>
        </div>
        <div className="qa-offer-grid">
          {offerings.map((o) => (
            <article key={o.title} className="qa-offer-card">
              <div className="qa-offer-card__icon">{o.icon}</div>
              <h3 className="qa-offer-card__title">{o.title}</h3>
              <p className="qa-offer-card__desc">{o.desc}</p>
              <div className="qa-offer-card__features">
                {o.features.map((f) => (
                  <div key={f} className="qa-offer-card__feat"><span className="qa-offer-card__feat-dot" />{f}</div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Why Choose Us ─────────────────────────── */
function WhyChooseSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".qa-why__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".qa-why__header", start: "top 80%" } });
      gsap.fromTo(".qa-why-card", { opacity: 0, y: 60, scale: 0.93 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.14, ease: "back.out(1.2)", scrollTrigger: { trigger: ".qa-why-grid", start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--dark" ref={ref}>
      <div className="svc-container">
        <div className="qa-why__header">
          <SectionTitle eyebrow="Why Us" light>Why Choose BitBattles for QA?</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-400">We're not just testers — we're quality partners embedded in your product lifecycle.</p>
        </div>
        <div className="qa-why-grid">
          {whyChooseUs.map((w) => (
            <article key={w.title} className="qa-why-card">
              <div className="qa-why-card__icon">{w.icon}</div>
              <h3 className="qa-why-card__title">{w.title}</h3>
              <p className="qa-why-card__desc">{w.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Floating CTA Tab ─────────────────────── */
function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const h = () => { if (!dismissed) setVisible(window.scrollY > 500); };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [dismissed]);

  return (
    <div className={`svc-float ${visible && !dismissed ? "svc-float--visible" : "svc-float--hidden"}`}>
      <div className="svc-float__card">
        <span className="svc-float__emoji">✅</span>
        <span className="svc-float__text">Join advance testing session →</span>
        <a href="/contact?service=qa-testing" className="svc-float__cta">Join Now</a>
        <button className="svc-float__close" onClick={() => { setDismissed(true); setVisible(false); }} aria-label="Close">✕</button>
      </div>
    </div>
  );
}

/* ─── Section 7: Other Services ───────────────────────── */
function OtherServicesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".qa-others__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".qa-others__header", start: "top 80%" } });
      gsap.fromTo(".svc-other-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, scrollTrigger: { trigger: ".svc-others-grid", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--light" ref={ref}>
      <div className="svc-container">
        <div className="qa-others__header">
          <SectionTitle eyebrow="Explore More">Our Other Services</SectionTitle>
        </div>
        <div className="svc-others-grid">
          {mainOtherServices.map((s) => (
            <a key={s.href} href={s.href} className="svc-other-card">
              <div className="svc-other-card__icon" style={{ background: `${s.color}18` }}>{s.emoji}</div>
              <span className="svc-other-card__title">{s.title}</span>
              <span className="svc-other-card__arrow">→</span>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/services" className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-slate-700 shadow-sm transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600">View All Services →</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Export ───────────────────────────────────────────── */
export function QaTestingPage() {
  useEffect(() => { return () => ScrollTrigger.getAll().forEach((t) => t.kill()); }, []);
  return (
    <main>
      <HeroSection />
      <CapabilitiesSection />
      <ImpactSection />
      <OfferSection />
      <WhyChooseSection />
      <FloatingCta />
      <OtherServicesSection />
    </main>
  );
}
