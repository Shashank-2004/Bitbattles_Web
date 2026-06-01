import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/cloud-implementation.css";
import "../styles/service-theme.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────── */
const cloudServices = [
  { icon: "☁️", title: "Cloud Migration", desc: "Seamlessly migrate your on-premises infrastructure, applications, and data to the cloud with zero downtime and minimal risk.", tag: "Migration" },
  { icon: "🏗️", title: "Cloud Architecture", desc: "Design scalable, resilient, and cost-optimized cloud architectures tailored to your business requirements and growth plans.", tag: "Architecture" },
  { icon: "⚙️", title: "DevOps & CI/CD", desc: "Implement automated build, test, and deployment pipelines with infrastructure-as-code for consistent, repeatable deployments.", tag: "DevOps" },
  { icon: "🔒", title: "Cloud Security", desc: "Harden your cloud environment with IAM policies, encryption, network segmentation, and compliance-ready configurations.", tag: "Security" },
  { icon: "📊", title: "Monitoring & Observability", desc: "End-to-end monitoring, logging, and alerting systems that give you full visibility into your cloud infrastructure health.", tag: "Monitoring" },
  { icon: "💰", title: "Cost Optimization", desc: "Analyze and optimize your cloud spending with right-sizing, reserved instances, spot strategies, and automated scaling policies.", tag: "FinOps" },
];

const keyFeatures = [
  {
    icon: "🚀", title: "Auto-Scaling Infrastructure",
    desc: "Automatically scale compute, storage, and networking resources based on demand — handle traffic spikes without manual intervention.",
    features: ["Horizontal & vertical scaling", "Load balancer configuration", "Auto-healing instances", "Traffic-based policies"],
  },
  {
    icon: "🔄", title: "CI/CD Pipeline Automation",
    desc: "From code commit to production deployment in minutes. We build robust pipelines with automated testing, security scans, and rollback capabilities.",
    features: ["GitHub Actions / GitLab CI", "Automated testing gates", "Blue-green deployments", "Canary releases"],
  },
  {
    icon: "🛡️", title: "Security & Compliance",
    desc: "Enterprise-grade security posture with least-privilege access, encryption everywhere, and continuous compliance monitoring.",
    features: ["Zero-trust architecture", "SOC 2 / ISO 27001 ready", "Automated vulnerability scanning", "Secrets management"],
  },
  {
    icon: "🌐", title: "Multi-Cloud & Hybrid",
    desc: "Avoid vendor lock-in with multi-cloud strategies. We design architectures that work across AWS, GCP, and Azure seamlessly.",
    features: ["Cross-cloud orchestration", "Kubernetes (EKS/GKE/AKS)", "Terraform / Pulumi IaC", "Service mesh integration"],
  },
  {
    icon: "📈", title: "Performance Optimization",
    desc: "Maximize throughput and minimize latency with CDN configuration, caching strategies, database optimization, and edge computing.",
    features: ["CDN & edge caching", "Database query optimization", "Connection pooling", "Global load balancing"],
  },
  {
    icon: "🔧", title: "Infrastructure as Code",
    desc: "Every piece of infrastructure defined in code — version-controlled, reviewable, and reproducible across environments.",
    features: ["Terraform modules", "CloudFormation / CDK", "Ansible playbooks", "GitOps workflows"],
  },
];

const stats = [
  { number: "99.99", unit: "%", label: "Uptime Guaranteed" },
  { number: "200", unit: "+", label: "Cloud Projects Delivered" },
  { number: "40", unit: "%", label: "Avg Cost Reduction" },
  { number: "<5", unit: "min", label: "Deployment Time" },
];

const cloudProviders = [
  { icon: "🟠", name: "AWS" },
  { icon: "🔵", name: "Azure" },
  { icon: "🟡", name: "Google Cloud" },
  { icon: "🟣", name: "DigitalOcean" },
  { icon: "🟢", name: "Vercel" },
];

const otherServices = [
  { emoji: "🧠", title: "AI Solutions", href: "/services/ai-solutions", color: "#ff6a2a" },
  { emoji: "🌐", title: "Web Development", href: "/services/web-development", color: "#0ea5e9" },
  { emoji: "🛡️", title: "Cyber Security", href: "/services/cyber-security", color: "#ef4444" },
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
      tl.fromTo(".cl-hero .svc-badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(".cl-hero .svc-hero__title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .fromTo(".cl-hero .svc-hero__desc", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".cl-hero__cta-group", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
      gsap.fromTo(".cl-cloud-core", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.3)", delay: 0.5 });
      gsap.fromTo(".cl-ring", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.9, stagger: 0.15, ease: "power2.out", delay: 0.7 });
      gsap.fromTo(".cl-service-tag", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: "back.out(1.5)", delay: 1.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const floatingTags = [
    { dot: "blue", label: "AWS Lambda", style: { top: "8%", left: "6%", animationDuration: "4s" } },
    { dot: "orange", label: "Kubernetes", style: { top: "18%", right: "4%", animationDuration: "5s", animationDelay: "0.5s" } },
    { dot: "green", label: "Terraform", style: { bottom: "22%", left: "3%", animationDuration: "4.5s", animationDelay: "1s" } },
    { dot: "purple", label: "CI/CD Active", style: { bottom: "12%", right: "6%", animationDuration: "5.5s", animationDelay: "0.7s" } },
    { dot: "blue", label: "Docker", style: { top: "50%", left: "2%", animationDuration: "4.2s", animationDelay: "1.3s" } },
  ];

  return (
    <section className="cl-hero" ref={heroRef}>
      <div className="cl-hero__grid" />
      <div className="cl-hero__orb cl-hero__orb--1" />
      <div className="cl-hero__orb cl-hero__orb--2" />
      <div className="svc-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <span className="svc-badge" style={{ opacity: 0 }}><span className="svc-badge__dot" />Cloud Solutions by BitBattles</span>
            <h1 className="svc-hero__title" style={{ opacity: 0 }}>Scale with <span className="svc-hero__title-accent">Cloud Infrastructure</span></h1>
            <p className="svc-hero__desc" style={{ opacity: 0 }}>Enterprise-grade cloud implementation & consulting — migration, architecture, DevOps pipelines, and infrastructure-as-code built for modern, fast-moving teams.</p>
            <div className="cl-hero__cta-group" style={{ opacity: 0, display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "40px" }}>
              <a href="/contact?service=cloud-implementation" className="svc-hero__cta-primary">Get Cloud Consultation →</a>
              <a href="#cl-services" className="svc-hero__cta-secondary">Our Services ↓</a>
            </div>
          </div>
          <div className="cl-cloud-wrap">
            <div className="cl-ring cl-ring--1" />
            <div className="cl-ring cl-ring--2" />
            <div className="cl-ring cl-ring--3" />
            <div className="cl-cloud-core"><div className="cl-cloud-core__body"><span className="cl-cloud-core__icon">☁️</span><span className="cl-cloud-core__label">Deployed</span></div></div>
            {floatingTags.map((t) => (<div key={t.label} className="cl-service-tag" style={t.style}><span className={`cl-service-tag__dot cl-service-tag__dot--${t.dot}`} /><span>{t.label}</span></div>))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Our Cloud Implementation & Consulting Services — Interactive Terminal ── */
function CloudServicesSection() {
  const ref = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cl-serv__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cl-serv__header", start: "top 80%" } });
      gsap.fromTo(".cl-terminal", { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".cl-terminal", start: "top 80%" } });
      gsap.fromTo(".cl-nav-pill", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "back.out(1.2)", scrollTrigger: { trigger: ".cl-nav-pills", start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Auto-rotate
  useEffect(() => {
    const iv = setInterval(() => setActiveIdx((p) => (p + 1) % cloudServices.length), 4000);
    return () => clearInterval(iv);
  }, []);

  // Animate content swap
  useEffect(() => {
    gsap.fromTo(".cl-terminal-content", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    gsap.fromTo(".cl-term-line", { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.35, stagger: 0.08, ease: "power2.out" });
  }, [activeIdx]);

  const active = cloudServices[activeIdx];

  const terminalOutputs = [
    ["$ migrate --source on-prem --target aws --strategy lift-and-shift", "→ Scanning 124 workloads across 3 data centers...", "→ Dependency mapping complete: 847 connections", "→ Migration plan generated: 6 waves, 12 weeks", "→ Estimated cost reduction: 38% annually"],
    ["$ architect --pattern microservices --ha multi-az", "→ Designing VPC with 3 availability zones...", "→ Load balancer: Application LB with health checks", "→ Database: Aurora PostgreSQL with read replicas", "→ Architecture diagram exported to ./docs/"],
    ["$ pipeline --init --provider github-actions --env prod", "→ Initializing CI/CD pipeline...", "→ Build stage: Docker → ECR → ECS Fargate", "→ Test gate: unit + integration + e2e (97% coverage)", "→ Deploy: blue-green with automatic rollback ✓"],
    ["$ security-scan --scope all --compliance soc2", "→ Scanning IAM policies: 234 roles analyzed", "→ Encryption at rest: 100% coverage ✓", "→ Network: VPC flow logs enabled, NACLs configured", "→ Compliance status: SOC 2 Type II — READY"],
    ["$ monitor --setup --stack prometheus+grafana", "→ Deploying observability stack...", "→ Metrics: CPU, memory, network, custom APM", "→ Alerts: PagerDuty integration configured", "→ Dashboard: 12 panels, real-time streaming ✓"],
    ["$ finops --analyze --period 90d --optimize", "→ Analyzing $47,200 in cloud spend...", "→ Found 23 idle resources: $8,400/mo savings", "→ Reserved Instance recommendations: 42% savings", "→ Auto-scaling policies applied: $12,300/mo saved"],
  ];

  return (
    <section id="cl-services" className="svc-section svc-section--dark" ref={ref}>
      <div className="svc-container">
        <div className="cl-serv__header">
          <SectionTitle eyebrow="Our Services" light>Our Cloud Implementation & Consulting Services</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-400">End-to-end cloud solutions from migration strategy to production-grade infrastructure and ongoing optimization.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px", marginTop: "56px" }} className="cl-lg-grid-2">
          {/* Left — Navigation pills */}
          <div className="cl-nav-pills" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {cloudServices.map((s, i) => (
              <button
                key={s.title}
                className="cl-nav-pill"
                onClick={() => setActiveIdx(i)}
                style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  padding: "16px 20px", borderRadius: "14px",
                  border: `1px solid ${i === activeIdx ? "rgba(56,189,248,0.5)" : "rgba(255,255,255,0.08)"}`,
                  background: i === activeIdx ? "rgba(56,189,248,0.1)" : "rgba(255,255,255,0.03)",
                  cursor: "pointer", textAlign: "left", width: "100%",
                  transition: "all 0.3s ease",
                  boxShadow: i === activeIdx ? "0 0 24px rgba(56,189,248,0.15)" : "none",
                }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: i === activeIdx ? "rgba(56,189,248,0.2)" : "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0, transition: "all 0.3s" }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 900, color: i === activeIdx ? "#fff" : "#94a3b8" }}>{s.title}</div>
                  <div style={{ fontSize: "11px", color: i === activeIdx ? "#7dd3fc" : "#475569", marginTop: "2px" }}>{s.tag}</div>
                </div>
                {i === activeIdx && <div style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 12px rgba(56,189,248,0.8)", flexShrink: 0 }} />}
              </button>
            ))}
          </div>

          {/* Right — Terminal demo */}
          <div className="cl-terminal" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(56,189,248,0.2)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(20px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "14px 18px", background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
              <span style={{ marginLeft: "10px", fontSize: "11px", color: "#64748b", fontWeight: 700, fontFamily: "monospace" }}>bitbattles-cloud — {active.title}</span>
            </div>
            <div className="cl-terminal-content" style={{ padding: "24px", minHeight: "340px", fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#38bdf8", marginBottom: "6px" }}>// {active.title}</div>
              <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "20px" }}>{active.desc}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {terminalOutputs[activeIdx].map((line, j) => (
                  <div key={j} className="cl-term-line" style={{ fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", color: line.startsWith("$") ? "#10b981" : line.includes("✓") || line.includes("READY") ? "#10b981" : line.includes("savings") || line.includes("saved") ? "#f59e0b" : "#e2e8f0", lineHeight: 1.8 }}>
                    {line}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ padding: "4px 10px", borderRadius: "999px", background: "rgba(56,189,248,0.12)", color: "#38bdf8", fontSize: "10px", fontWeight: 700 }}>{active.tag}</span>
                <span style={{ padding: "4px 10px", borderRadius: "999px", background: "rgba(16,185,129,0.12)", color: "#10b981", fontSize: "10px", fontWeight: 700 }}>ACTIVE</span>
              </div>
            </div>
            {/* Progress bar */}
            <div style={{ height: "3px", background: "rgba(255,255,255,0.06)" }}>
              <div key={activeIdx} style={{ height: "100%", background: "linear-gradient(90deg, #38bdf8, #ff6a2a)", animation: "clProgressFill 4s linear", width: "100%" }} />
            </div>
          </div>
        </div>

        {/* Cloud providers */}
        <div className="cl-providers">
          {cloudProviders.map((p) => (
            <div key={p.name} className="cl-provider-badge">
              <span className="cl-provider-badge__icon">{p.icon}</span>
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .cl-lg-grid-2 { grid-template-columns: 340px 1fr !important; }
        }
        @keyframes clProgressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

/* ─── Section 3: Key Features & Capabilities ──────────── */
function KeyFeaturesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cl-feat__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cl-feat__header", start: "top 80%" } });
      gsap.fromTo(".cl-cap-card", { opacity: 0, y: 50, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.13, ease: "back.out(1.4)", scrollTrigger: { trigger: ".cl-capabilities-grid", start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--light" ref={ref}>
      <div className="svc-container">
        <div className="cl-feat__header">
          <SectionTitle eyebrow="Capabilities">Key Features & Capabilities</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">Battle-tested cloud engineering capabilities that power enterprise-grade infrastructure.</p>
        </div>
        <div className="cl-capabilities-grid">
          {keyFeatures.map((f) => (
            <article key={f.title} className="cl-cap-card">
              <div className="cl-cap-card__icon">{f.icon}</div>
              <div className="cl-cap-card__title">{f.title}</div>
              <div className="cl-cap-card__desc">{f.desc}</div>
              <div className="cl-cap-card__features">
                {f.features.map((feat) => (
                  <div key={feat} className="cl-cap-card__feat">
                    <span className="cl-cap-card__feat-dot" />
                    {feat}
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

/* ─── Section 4: Stats + Floating CTA ─────────────────── */
function StatsSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cl-stats__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cl-stats__header", start: "top 80%" } });
      gsap.fromTo(".cl-stat-cell", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".cl-stats-ribbon", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--dark" ref={ref}>
      <div className="svc-container">
        <div className="cl-stats__header">
          <SectionTitle eyebrow="By the Numbers" light>Proven Cloud Excellence</SectionTitle>
        </div>
        <div className="cl-stats-ribbon">
          {stats.map((s) => (
            <div key={s.label} className="cl-stat-cell">
              <div className="cl-stat-cell__number">{s.number}<span className="cl-stat-cell__unit">{s.unit}</span></div>
              <div className="cl-stat-cell__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Floating CTA ────────────────────────────────────── */
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
        <span className="svc-float__emoji">☁️</span>
        <span className="svc-float__text">Talk the best service now</span>
        <a href="/contact?service=cloud-implementation" className="svc-float__cta">Discuss now</a>
        <button className="svc-float__close" onClick={() => { setDismissed(true); setVisible(false); }} aria-label="Close">✕</button>
      </div>
    </div>
  );
}

/* ─── Section 5: Our Other Services (4 + View All) ────── */
function OtherServicesSection() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cl-others__header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".cl-others__header", start: "top 80%" } });
      gsap.fromTo(".svc-other-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, scrollTrigger: { trigger: ".svc-others-grid", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="svc-section svc-section--gray" ref={ref}>
      <div className="svc-container">
        <div className="cl-others__header"><SectionTitle eyebrow="Explore More">Our Other Services</SectionTitle></div>
        <div className="svc-others-grid">
          {otherServices.map((s) => (
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
export function CloudImplementationPage() {
  useEffect(() => { return () => ScrollTrigger.getAll().forEach((t) => t.kill()); }, []);
  return (
    <main>
      <HeroSection />
      <CloudServicesSection />
      <KeyFeaturesSection />
      <StatsSection />
      <FloatingCta />
      <OtherServicesSection />
    </main>
  );
}
