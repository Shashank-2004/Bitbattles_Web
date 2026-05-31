import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/cyber-security.css";
import "../styles/service-theme.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────── */
const cyberServices = [
  { icon: "🔒", title: "Penetration Testing", desc: "Simulated attacks on your web, mobile, and API infrastructure to find vulnerabilities before malicious actors do.", tag: "Offensive" },
  { icon: "🛡️", title: "Security Audits", desc: "Comprehensive code reviews, infrastructure audits, and compliance checks against OWASP, SOC 2, and ISO 27001.", tag: "Compliance" },
  { icon: "📡", title: "Threat Monitoring", desc: "24/7 real-time threat detection, SIEM integration, and incident response playbooks to contain breaches fast.", tag: "Monitoring" },
  { icon: "🔐", title: "Identity & Access", desc: "SSO, MFA, RBAC, and zero-trust architecture implementation — ensuring only the right people access the right data.", tag: "IAM" },
  { icon: "☁️", title: "Cloud Security", desc: "AWS / GCP / Azure security hardening, IAM policy audits, network segmentation, and encryption-at-rest configurations.", tag: "Cloud" },
  { icon: "📋", title: "Compliance & Governance", desc: "GDPR, HIPAA, PCI-DSS, and SOC 2 readiness programs — documentation, controls, and audit preparation.", tag: "Governance" },
];

const solutions = [
  {
    num: "01", tag: "Web Security", title: "Web Application Security",
    desc: "End-to-end protection for your web applications — from input validation and XSS prevention to CSRF tokens and secure headers.",
    feats: ["SQL injection prevention", "XSS & CSRF protection", "Content Security Policy", "Rate limiting & DDoS defense"],
  },
  {
    num: "02", tag: "Data Protection", title: "Data Encryption & Privacy",
    desc: "Encrypt data at rest, in transit, and in use. We implement AES-256, TLS 1.3, and field-level encryption for sensitive data.",
    feats: ["AES-256 encryption", "TLS 1.3 enforcement", "Key management (KMS)", "Data masking & tokenization"],
  },
  {
    num: "03", tag: "Incident Response", title: "Security Incident Response",
    desc: "When breaches happen, speed matters. We provide incident response playbooks, forensic analysis, and recovery protocols.",
    feats: ["Incident playbooks", "Forensic analysis", "Root cause reports", "Recovery & hardening"],
  },
];

const topFeatures = [
  { icon: "🔍", stat: "500+", unit: "", title: "Vulnerabilities Found", desc: "Across client applications" },
  { icon: "⏱️", stat: "< 4", unit: "hrs", title: "Avg Response Time", desc: "For critical incidents" },
  { icon: "🛡️", stat: "99.9", unit: "%", title: "Uptime Protected", desc: "For monitored systems" },
  { icon: "📜", stat: "100", unit: "%", title: "Compliance Rate", desc: "SOC 2 / GDPR / HIPAA audits" },
];

const approachSteps = [
  { icon: "🔍", num: "1", title: "Assess", desc: "Full security audit and threat modeling" },
  { icon: "📋", num: "2", title: "Plan", desc: "Risk-prioritized remediation roadmap" },
  { icon: "🛠️", num: "3", title: "Implement", desc: "Deploy fixes, controls, and monitoring" },
  { icon: "✅", num: "4", title: "Validate", desc: "Re-test and certify with reports" },
  { icon: "📡", num: "5", title: "Monitor", desc: "Ongoing 24/7 threat surveillance" },
];

const mainOtherServices = [
  { emoji: "🧠", title: "AI Solutions", href: "/services/ai-solutions", color: "#ff6a2a" },
  { emoji: "🌐", title: "Web Development", href: "/services/web-development", color: "#0ea5e9" },
  { emoji: "📱", title: "Mobile Apps", href: "/services/mobile-apps", color: "#10b981" },
  { emoji: "🎨", title: "UI/UX Design", href: "/services/ui-ux-design", color: "#a855f7" },
  { emoji: "✅", title: "QA & Testing", href: "/services/qa-testing", color: "#14b8a6" },
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
      tl.fromTo(".cy-hero .svc-badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".cy-hero .svc-hero__title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .fromTo(".cy-hero .svc-hero__desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".cy-hero__cta-group", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

      // Shield entrance
      gsap.fromTo(".cy-shield", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.3)", delay: 0.5 });
      // Rings
      gsap.fromTo(".cy-ring", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.9, stagger: 0.15, ease: "power2.out", delay: 0.7 });
      // Threat tags
      gsap.fromTo(".cy-threat-tag", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: "back.out(1.5)", delay: 1.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const threats = [
    { icon: "red", label: "DDoS Attack", style: { top: "8%", left: "6%", animationDuration: "4s" } },
    { icon: "orange", label: "SQL Injection", style: { top: "18%", right: "4%", animationDuration: "5s", animationDelay: "0.5s" } },
    { icon: "green", label: "Firewall Active", style: { bottom: "22%", left: "3%", animationDuration: "4.5s", animationDelay: "1s" } },
    { icon: "red", label: "Phishing Alert", style: { bottom: "12%", right: "6%", animationDuration: "5.5s", animationDelay: "0.7s" } },
    { icon: "orange", label: "XSS Detected", style: { top: "50%", left: "2%", animationDuration: "4.2s", animationDelay: "1.3s" } },
  ];

  return (
    <section className="cy-hero" ref={heroRef}>
      <div className="cy-hero__grid" />
      <div className="cy-hero__orb cy-hero__orb--1" />
      <div className="cy-hero__orb cy-hero__orb--2" />

      <div className="svc-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <span className="svc-badge" style={{ opacity: 0 }}>
              <span className="svc-badge__dot" />
              Cyber Security by BitBattles
            </span>
            <h1 className="svc-hero__title" style={{ opacity: 0 }}>
              Protect Your <span className="svc-hero__title-accent">Digital Assets</span>
            </h1>
            <p className="svc-hero__desc" style={{ opacity: 0 }}>
              Enterprise-grade cyber security services — penetration testing, threat monitoring, and compliance readiness to keep your business safe from evolving threats.
            </p>
            <div className="cy-hero__cta-group" style={{ opacity: 0, display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "40px" }}>
              <a href="/proposal?service=cyber-security" className="svc-hero__cta-primary">Get Security Audit →</a>
              <a href="#cy-services" className="svc-hero__cta-secondary">Our Services ↓</a>
            </div>
          </div>

          {/* Shield visual */}
          <div className="cy-shield-wrap">
            <div className="cy-ring cy-ring--1" />
            <div className="cy-ring cy-ring--2" />
            <div className="cy-ring cy-ring--3" />
            <div className="cy-shield">
              <div className="cy-shield__body">
                <span className="cy-shield__icon">🛡️</span>
                <span className="cy-shield__label">Protected</span>
              </div>
            </div>
            {threats.map((t) => (
              <div key={t.label} className="cy-threat-tag" style={t.style}>
                <span className={`cy-threat-tag__dot cy-threat-tag__dot--${t.icon}`} />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Cyber Security Services ─────────────── */
function CyberServicesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cy-serv__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cy-serv__header", start: "top 80%" } });
      gsap.fromTo(".cy-serv-card", { opacity: 0, y: 60, scale: 0.93 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: "back.out(1.2)", scrollTrigger: { trigger: ".cy-services-grid", start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cy-services" className="svc-section svc-section--dark" ref={ref}>
      <div className="svc-container">
        <div className="cy-serv__header">
          <SectionTitle eyebrow="Our Services" light>Cyber Security Services</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-400">Comprehensive security coverage from offensive testing to compliance governance.</p>
        </div>
        <div className="cy-services-grid">
          {cyberServices.map((s) => (
            <article key={s.title} className="cy-serv-card">
              <div className="cy-serv-card__icon">{s.icon}</div>
              <h3 className="cy-serv-card__title">{s.title}</h3>
              <p className="cy-serv-card__desc">{s.desc}</p>
              <span className="cy-serv-card__tag">{s.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Cyber Security Solutions ─────────────── */
function SolutionsSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cy-sol__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cy-sol__header", start: "top 80%" } });
      gsap.utils.toArray(".cy-solution-item").forEach((el, i) => {
        const direction = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(el.querySelector(".cy-solution-item__content"), { opacity: 0, x: direction }, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 75%" } });
        gsap.fromTo(el.querySelector(".cy-solution-item__visual"), { opacity: 0, x: -direction }, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 75%" } });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--light" ref={ref}>
      <div className="svc-container">
        <div className="cy-sol__header">
          <SectionTitle eyebrow="Solutions">Cyber Security Solutions</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">Proven solutions for the most critical security challenges your business faces.</p>
        </div>
        <div className="cy-solutions-list">
          {solutions.map((sol, i) => (
            <div key={sol.title} className={`cy-solution-item ${i % 2 !== 0 ? "cy-solution-item--rev" : ""}`}>
              <div className="cy-solution-item__content">
                <div className="cy-solution-item__num">{sol.num}</div>
                <span className="cy-solution-item__tag">{sol.tag}</span>
                <h3 className="cy-solution-item__title">{sol.title}</h3>
                <p className="cy-solution-item__desc">{sol.desc}</p>
                <div className="cy-solution-item__feats">
                  {sol.feats.map((f) => (
                    <div key={f} className="cy-solution-item__feat"><span className="cy-solution-item__feat-dot" />{f}</div>
                  ))}
                </div>
              </div>
              <div className={`cy-solution-item__visual ${i % 2 !== 0 ? "cy-solution-item__visual--dark" : ""}`}>
                <div style={{ fontSize: "56px", textAlign: "center", marginBottom: "16px" }}>{i === 0 ? "🌐" : i === 1 ? "🔐" : "🚨"}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {sol.feats.map((f, j) => (
                    <div key={f} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "10px 14px", borderRadius: "10px",
                      background: i % 2 !== 0 ? "rgba(255,106,42,0.08)" : "rgba(36,50,55,0.06)",
                      border: `1px solid ${i % 2 !== 0 ? "rgba(255,106,42,0.15)" : "rgba(36,50,55,0.1)"}`,
                    }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff6a2a", flexShrink: 0 }} />
                      <span style={{ fontSize: "12px", fontWeight: 700, color: i % 2 !== 0 ? "#fdba8c" : "#243237" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Top Features ─────────────────────────── */
function TopFeaturesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cy-feat__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cy-feat__header", start: "top 80%" } });
      gsap.fromTo(".cy-feat-card", { opacity: 0, y: 50, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.13, ease: "back.out(1.4)", scrollTrigger: { trigger: ".cy-features-grid", start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--gray" ref={ref}>
      <div className="svc-container">
        <div className="cy-feat__header">
          <SectionTitle eyebrow="By the Numbers">Top Features</SectionTitle>
        </div>
        <div className="cy-features-grid">
          {topFeatures.map((f) => (
            <article key={f.title} className="cy-feat-card">
              <div className="cy-feat-card__icon">{f.icon}</div>
              <div className="cy-feat-card__stat">{f.stat}<span className="cy-feat-card__unit">{f.unit}</span></div>
              <div className="cy-feat-card__title">{f.title}</div>
              <div className="cy-feat-card__desc">{f.desc}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5: Our Approach Model ───────────────────── */
function ApproachSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cy-approach__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cy-approach__header", start: "top 80%" } });
      gsap.fromTo(".svc-approach-step", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".svc-approach-timeline", start: "top 75%" } });
      // Node pulse
      gsap.to(".svc-approach-node", { boxShadow: "0 0 28px rgba(255,106,42,0.4)", repeat: -1, yoyo: true, duration: 1.5, ease: "sine.inOut" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--light" ref={ref}>
      <div className="svc-container">
        <div className="cy-approach__header">
          <SectionTitle eyebrow="Our Process">Our Approach Model</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">A battle-tested 5-phase approach to securing your digital infrastructure.</p>
        </div>
        <div className="svc-approach-timeline">
          {approachSteps.map((step) => (
            <div key={step.num} className="svc-approach-step">
              <div className="svc-approach-node">
                <span className="svc-approach-num">{step.num}</span>
                <span style={{ fontSize: "22px" }}>{step.icon}</span>
              </div>
              <div className="svc-approach-step-body">
                <div className="svc-approach-step-title">{step.title}</div>
                <div className="svc-approach-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Floating CTA ─────────────────────────── */
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
        <span className="svc-float__emoji">🛡️</span>
        <span className="svc-float__text">Protect your systems from cybersecurity threats</span>
        <a href="/proposal?service=cyber-security" className="svc-float__cta">Discuss Now</a>
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
      gsap.fromTo(".cy-others__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cy-others__header", start: "top 80%" } });
      gsap.fromTo(".svc-other-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, scrollTrigger: { trigger: ".svc-others-grid", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--gray" ref={ref}>
      <div className="svc-container">
        <div className="cy-others__header">
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
export function CyberSecurityPage() {
  useEffect(() => { return () => ScrollTrigger.getAll().forEach((t) => t.kill()); }, []);
  return (
    <main>
      <HeroSection />
      <CyberServicesSection />
      <SolutionsSection />
      <TopFeaturesSection />
      <ApproachSection />
      <FloatingCta />
      <OtherServicesSection />
    </main>
  );
}
