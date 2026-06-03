import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/automation.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────── */
const autoServices = [
  {
    id: 1,
    icon: "🔌",
    title: "API & Webhook Integration",
    description:
      "Connect your CRM, accounting, databases, and third-party tools. We design secure, low-latency API connections and real-time webhook listeners.",
    tag: "Integration",
  },
  {
    id: 2,
    icon: "🔀",
    title: "Data Routing & ETL",
    description:
      "Automate data ingestion, transformation, and routing across your organization. Eliminate manual copy-pasting and CSV data transfers.",
    tag: "Data Flows",
  },
  {
    id: 3,
    icon: "📊",
    title: "Automated Reporting",
    description:
      "Collect, calculate, and compile metrics across scattered tools into elegant daily, weekly, or monthly dashboards automatically.",
    tag: "Analytics",
  },
  {
    id: 4,
    icon: "🤖",
    title: "Slack & Teams Bots",
    description:
      "Build custom bots and chat workflows that fetch data, coordinate approvals, and trigger system actions right from your team's chat app.",
    tag: "ChatOps",
  },
  {
    id: 5,
    icon: "🎯",
    title: "CRM & Marketing Flows",
    description:
      "Automate lead routing, contract generation, onboarding notifications, and customer emails tailored to user activities in real time.",
    tag: "Marketing",
  },
  {
    id: 6,
    icon: "⚙️",
    title: "Legacy System Automation",
    description:
      "Augment old systems with custom automation scripts, database syncs, and headless scripts that keep outdated tools connected.",
    tag: "Legacy",
  },
];

const autoSolutions = [
  {
    number: "01",
    tag: "Orchestration",
    title: "Custom Workflow Orchestration",
    description:
      "Align complex, multi-stage business processes into single automated pipelines. We combine condition checks, loops, automated approvals, and dynamic error handling so your operations run 24/7.",
    features: [
      "Conditional path branching",
      "Dynamic document creation & signing",
      "Real-time notifications & slack updates",
      "Graceful error catcher & rollbacks",
    ],
    visual: "amber",
    visualContent: "sync",
  },
  {
    number: "02",
    tag: "Integrations",
    title: "Seamless API & Database Sync",
    description:
      "Sync scattered data stores and operational applications securely. We build serverless listeners, data pipelines, and scheduled syncs that keep your inventory, financial, and client records unified.",
    features: [
      "Real-time data synchronization",
      "Conflict resolution & record merges",
      "Translucent audit logs of data flows",
      "Industry-standard OAuth security",
    ],
    visual: "teal",
    reverse: true,
    visualContent: "flow",
  },
  {
    number: "03",
    tag: "Consulting",
    title: "Automation Audits & Strategy",
    description:
      "Identify operational bottlenecks and draft a comprehensive blueprint. We map your current manual steps, calculate potential ROI, recommend optimal tools, and build a deployment roadmap.",
    features: [
      "System bottleneck diagnostics",
      "Tooling & stack recommendations",
      "Detailed cost-benefit projections",
      "Step-by-step phased execution roadmap",
    ],
    visual: "dark",
    visualContent: "scanner",
  },
];

const topFeatures = [
  {
    icon: "⚡",
    stat: "99.9",
    unit: "%",
    title: "Uptime & Reliability",
    description: "Battle-tested serverless infrastructure with built-in auto-retry capabilities.",
  },
  {
    icon: "📈",
    stat: "5",
    unit: "x",
    title: "Efficiency Speedup",
    description: "Average cycle time reduction across internal operations & reporting flows.",
  },
  {
    icon: "🛡️",
    stat: "100",
    unit: "%",
    title: "Secure & Encrypted",
    description: "AES-256 state database encryption and strict least-privilege key credentials.",
  },
  {
    icon: "⏱️",
    stat: "10",
    unit: "ms",
    title: "Trigger Latency",
    description: "Blazing fast webhook listener triggers running on edge cloud functions.",
  },
];

const approachSteps = [
  {
    icon: "🔍",
    title: "Discover & Map",
    description: "We audit your manual systems and map exact data sources and steps.",
  },
  {
    icon: "🗺️",
    title: "Architect Flows",
    description: "We design robust schemas and specify state maps, APIs, and credentials.",
  },
  {
    icon: "🔌",
    title: "Integrate & Connect",
    description: "We build serverless webhooks, pipelines, and trigger scripts.",
  },
  {
    icon: "🧪",
    title: "Test & Validate",
    description: "We run end-to-end edge-case testing, load spikes, and validation checks.",
  },
  {
    icon: "📡",
    title: "Deploy & Monitor",
    description: "We deploy with automated error logging, dashboards, and ongoing alerts.",
  },
];

const otherServices = [
  { id: "ai-solutions", icon: "🧠", title: "AI Solutions", href: "/services/ai-solutions" },
  { id: "web-development", icon: "🌐", title: "Web Development", href: "/services/web-development" },
  { id: "mobile-apps", icon: "📱", title: "Mobile Apps", href: "/services/mobile-apps" },
  { id: "cyber-security", icon: "🛡️", title: "Cyber Security", href: "/services/cyber-security" },
  { id: "ui-ux-design", icon: "🎨", title: "UI/UX Design", href: "/services/ui-ux-design" },
];

/* ──────────────────────────────────────────────────────────
   Helper — Section Title
   ────────────────────────────────────────────────────────── */
function AutoSectionTitle({ eyebrow, children, light = false, className = "" }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <span className="auto-eyebrow">{eyebrow}</span>
      <h2 className={`auto-section-title ${light ? "auto-section-title--light" : "auto-section-title--dark"}`}>
        {children}
      </h2>
      <div className="auto-section-divider mx-auto">
        <span className="auto-section-divider__line" />
        <span className={`auto-section-divider__dot ${light ? "auto-section-divider__dot--light" : "auto-section-divider__dot--dark"}`} />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 1 — Hero Section (Sequential SVG Pulse Animation)
   ────────────────────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const visualRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(statsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" },
          "-=1.2"
        );

      // Webhook pipeline pulsing animation
      if (pulseRef.current) {
        gsap.fromTo(
          pulseRef.current,
          { strokeDashoffset: 400 },
          {
            strokeDashoffset: 0,
            duration: 4,
            repeat: -1,
            ease: "none",
          }
        );
      }

      // Nodes pulse sequentially when trigger path moves
      const nodes = [".node-trigger", ".node-process", ".node-integrate", ".node-alert"];
      nodes.forEach((node, i) => {
        gsap.to(node, {
          scale: 1.25,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 1,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="auto-hero" ref={heroRef}>
      <div className="auto-hero__bg-grid" />
      <div className="auto-hero__orb auto-hero__orb--1" />
      <div className="auto-hero__orb auto-hero__orb--2" />
      <div className="auto-hero__orb auto-hero__orb--3" />

      <div className="auto-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <div>
            <div ref={badgeRef} style={{ opacity: 0 }}>
              <span className="auto-hero__badge">
                <span className="auto-hero__badge-dot" />
                Automation by BitBattles
              </span>
            </div>

            <h1 ref={titleRef} className="auto-hero__title" style={{ opacity: 0 }}>
              Lean Automations{" "}
              <span className="auto-hero__title-accent">
                That Save Real Time
              </span>
            </h1>

            <p ref={descRef} className="auto-hero__desc" style={{ opacity: 0 }}>
              Workflow automations, internal operations, API integrations, data
              routing, and custom bots designed to reduce repetitive work and
              let your team focus on growth.
            </p>

            <div ref={ctaRef} className="auto-hero__cta-group" style={{ opacity: 0 }}>
              <a href="/contact?service=automation" className="auto-hero__cta-primary">
                Inquire Automation →
              </a>
              <a href="#auto-services" className="auto-hero__cta-secondary">
                Our Services ↓
              </a>
            </div>

            <div ref={statsRef} className="auto-hero__stats" style={{ opacity: 0 }}>
              {[
                { num: "200k+", label: "Tasks / Day" },
                { num: "95%", label: "Manual Redundant Removed" },
                { num: "5x", label: "Operations Speedup" },
              ].map((s) => (
                <div key={s.label} className="auto-hero__stat">
                  <span className="auto-hero__stat-num">{s.num}</span>
                  <span className="auto-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Interactive SVG Workflow Visual */}
          <div ref={visualRef} className="auto-hero__visual" style={{ opacity: 0 }}>
            <div className="auto-hero__visual-inner">
              <svg viewBox="0 0 400 400" className="auto-pipeline-svg">
                {/* Connector Path */}
                <path d="M 50,200 C 120,200 120,80 200,80 C 280,80 280,320 200,320 C 120,320 120,200 350,200" className="auto-pipeline-path" />
                {/* Pulsing Signal Packet */}
                <path ref={pulseRef} d="M 50,200 C 120,200 120,80 200,80 C 280,80 280,320 200,320 C 120,320 120,200 350,200" className="auto-pipeline-pulse" />

                {/* Node 1: Trigger (Amber glow) */}
                <g className="auto-pipeline-node node-trigger" transform="translate(50, 200)" style={{ transformOrigin: "0 0" }}>
                  <circle r="22" fill="#243237" stroke="#f59e0b" strokeWidth="3" />
                  <text textAnchor="middle" y="5" fill="#fde68a" fontSize="14" fontWeight="bold">⚡</text>
                  <text textAnchor="middle" y="38" fill="#94a3b8" fontSize="10" fontWeight="bold">Trigger</text>
                </g>

                {/* Node 2: Process (Amber glow) */}
                <g className="auto-pipeline-node node-process" transform="translate(200, 80)" style={{ transformOrigin: "0 0" }}>
                  <circle r="22" fill="#243237" stroke="#f59e0b" strokeWidth="3" />
                  <text textAnchor="middle" y="5" fill="#fde68a" fontSize="14" fontWeight="bold">⚙️</text>
                  <text textAnchor="middle" y="38" fill="#94a3b8" fontSize="10" fontWeight="bold">ETL Process</text>
                </g>

                {/* Node 3: Database Integrate */}
                <g className="auto-pipeline-node node-integrate" transform="translate(200, 320)" style={{ transformOrigin: "0 0" }}>
                  <circle r="22" fill="#243237" stroke="#10b981" strokeWidth="3" />
                  <text textAnchor="middle" y="5" fill="#a7f3d0" fontSize="14" fontWeight="bold">🔌</text>
                  <text textAnchor="middle" y="38" fill="#94a3b8" fontSize="10" fontWeight="bold">Integrate</text>
                </g>

                {/* Node 4: Alert Notification */}
                <g className="auto-pipeline-node node-alert" transform="translate(350, 200)" style={{ transformOrigin: "0 0" }}>
                  <circle r="22" fill="#243237" stroke="#f59e0b" strokeWidth="3" />
                  <text textAnchor="middle" y="5" fill="#fde68a" fontSize="14" fontWeight="bold">🔔</text>
                  <text textAnchor="middle" y="38" fill="#94a3b8" fontSize="10" fontWeight="bold">Alert</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 2 — Automation Services ("Assembly Line" Stagger)
   ────────────────────────────────────────────────────────── */
function AutomationServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".auto-services-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".auto-services-section__header",
            start: "top 80%",
          },
        }
      );

      // Staggered cards (Assembly line effect: sliding left/right into placement)
      const cards = gsap.utils.toArray(".auto-service-card");
      cards.forEach((card, i) => {
        const slideDirection = i % 2 === 0 ? -40 : 40;
        gsap.fromTo(
          card,
          { opacity: 0, x: slideDirection, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.75,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="auto-services"
      className="auto-section auto-section--dark"
      ref={sectionRef}
    >
      <div className="auto-container">
        <div className="auto-services-section__header">
          <AutoSectionTitle eyebrow="What We Build" light>
            Our Automation & Workflow Services
          </AutoSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-400">
            End-to-end integration and data pipeline services tailored around your core
            operations. We build the connective tissue between your tools.
          </p>
        </div>

        <div className="auto-services-grid">
          {autoServices.map((service) => (
            <article key={service.id} className="auto-service-card">
              <div className="auto-service-card__icon">{service.icon}</div>
              <h3 className="auto-service-card__title">{service.title}</h3>
              <p className="auto-service-card__desc">{service.description}</p>
              <span className="auto-service-card__tag">{service.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 3 — Automation Solutions (Looping Operational Hubs)
   ────────────────────────────────────────────────────────── */
function AutomationSolutionsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".auto-solutions-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".auto-solutions-section__header",
            start: "top 80%",
          },
        }
      );

      autoSolutions.forEach((_, index) => {
        const item = `.auto-solution-item-${index}`;
        const direction = index % 2 === 0 ? -60 : 60;

        gsap.fromTo(
          `${item} .auto-solution-item__content`,
          { opacity: 0, x: -direction },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
            },
          }
        );

        gsap.fromTo(
          `${item} .auto-solution-item__visual`,
          { opacity: 0, x: direction },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="auto-section auto-section--light" ref={sectionRef}>
      <div className="auto-container">
        <div className="auto-solutions-section__header">
          <AutoSectionTitle eyebrow="Solutions" light={false}>
            Operational Automation Solutions
          </AutoSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            Eliminate repetitive tasks, avoid costly data-entry errors, and link
            siloed software suites together seamlessly.
          </p>
        </div>

        <div className="auto-solutions-list">
          {autoSolutions.map((solution, index) => (
            <div
              key={solution.number}
              className={`auto-solution-item auto-solution-item-${index} ${solution.reverse ? "auto-solution-item--reverse" : ""}`}
            >
              {/* Content */}
              <div className="auto-solution-item__content">
                <div className="auto-solution-item__number">{solution.number}</div>
                <span className="auto-solution-item__tag">{solution.tag}</span>
                <h3 className="auto-solution-item__title">{solution.title}</h3>
                <p className="auto-solution-item__desc">{solution.description}</p>
                <ul className="auto-solution-item__features">
                  {solution.features.map((f) => (
                    <li key={f} className="auto-solution-item__feature">
                      <span className="auto-solution-item__feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual with specific looping animation */}
              <div
                className={`auto-solution-item__visual auto-solution-item__visual--${solution.visual}`}
              >
                {solution.visualContent === "sync" && (
                  <div className="auto-sync-ring">
                    <div className="auto-sync-center">⚙️</div>
                  </div>
                )}

                {solution.visualContent === "flow" && (
                  <div className="auto-horizontal-flow">
                    <div className="auto-flow-box">CRM</div>
                    <div className="auto-flow-arrow-path">
                      <div className="auto-flow-dot" />
                    </div>
                    <div className="auto-flow-box">Database</div>
                  </div>
                )}

                {solution.visualContent === "scanner" && (
                  <div className="auto-scanner">
                    <div className="auto-scanner__bar" />
                  </div>
                )}

                <a
                  href="/contact?service=automation"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-black transition-all hover:gap-3"
                  style={{ color: "var(--auto-amber)" }}
                >
                  Configure a workflow like this →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 4 — Top Features (Glowing Radial Progress Meters)
   ────────────────────────────────────────────────────────── */
function TopFeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".auto-features-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".auto-features-section__header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".auto-feature-card",
        { opacity: 0, y: 50, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".auto-features-grid",
            start: "top 78%",
          },
        }
      );

      // Animate radial rings on scroll
      const circles = document.querySelectorAll(".auto-radial-fill");
      circles.forEach((circle) => {
        const percent = parseFloat(circle.getAttribute("data-percent"));
        const offset = 251.2 - (251.2 * percent) / 100;

        ScrollTrigger.create({
          trigger: circle,
          start: "top 85%",
          onEnter: () => {
            gsap.to(circle, {
              strokeDashoffset: offset,
              duration: 2.2,
              ease: "power2.out",
            });
          },
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="auto-section auto-section--soft" ref={sectionRef}>
      <div className="auto-container">
        <div className="auto-features-section__header">
          <AutoSectionTitle eyebrow="Why It Works" light={false}>
            Performance of Our Automations
          </AutoSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            Engineered operational frameworks built for absolute reliability, speed, and
            maintenance-free routing.
          </p>
        </div>

        <div className="auto-features-grid">
          {topFeatures.map((feature) => {
            const numericPercent = parseFloat(feature.stat) || 100;

            return (
              <article key={feature.title} className="auto-feature-card">
                <div className="auto-feature-card__icon">{feature.icon}</div>

                {/* Radial progress meter visual */}
                <div className="auto-radial-wrap">
                  <svg className="auto-radial-svg">
                    <circle cx="45" cy="45" r="40" className="auto-radial-bg" />
                    <circle
                      cx="45"
                      cy="45"
                      r="40"
                      className="auto-radial-fill"
                      data-percent={numericPercent}
                    />
                  </svg>
                  <span className="auto-radial-text">
                    {feature.stat}
                    <span style={{ fontSize: "12px", color: "var(--auto-amber)" }}>
                      {feature.unit}
                    </span>
                  </span>
                </div>

                <h3 className="auto-feature-card__title">{feature.title}</h3>
                <p className="auto-feature-card__desc">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 5 — Our Approach Model (Webhook Wave Animation)
   ────────────────────────────────────────────────────────── */
function ApproachSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".auto-approach-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".auto-approach-header",
            start: "top 80%",
          },
        }
      );

      // Steps stagger in sequentially
      gsap.fromTo(
        ".auto-approach__step",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".auto-approach__timeline",
            start: "top 75%",
          },
        }
      );

      // Looping wave pulse traveling sequentially down timeline nodes
      gsap.fromTo(
        ".auto-approach__step-node",
        { boxShadow: "0 0 0px rgba(245,158,11,0)" },
        {
          boxShadow: "0 0 20px rgba(245,158,11,0.55)",
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.3,
          delay: 1.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="auto-section auto-section--gray" ref={sectionRef}>
      <div className="auto-container">
        <div className="auto-approach-header">
          <AutoSectionTitle eyebrow="How We Work" light={false}>
            Our Automation Deployment Cycle
          </AutoSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            A secure 5-step operational pipeline that maps, architects, builds,
            validates, and launches pipelines without downtime.
          </p>
        </div>

        <div className="auto-approach auto-approach__timeline">
          {approachSteps.map((step, index) => (
            <div key={step.title} className="auto-approach__step">
              <div className="auto-approach__step-node">
                <span className="auto-approach__step-num">{index + 1}</span>
                <span className="text-2xl" role="img" aria-label={step.title}>
                  {step.icon}
                </span>
              </div>
              <div className="auto-approach__step-body">
                <h3 className="auto-approach__step-title">{step.title}</h3>
                <p className="auto-approach__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-bitCharcoal p-8 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-500">
                Setup your automation stack
              </p>
              <h2 className="mt-3 text-2xl font-black leading-snug md:text-3xl">
                Ready to optimize your manual workflows?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                Contact our systems architect. We will map your manual pipelines
                and design a robust sync program for your core teams.
              </p>
            </div>
            <a
              href="/contact?service=automation"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-yellow-600"
              style={{ background: "var(--auto-amber)" }}
            >
              Book Scoping Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 6 — Our Other Services
   ────────────────────────────────────────────────────────── */
function OtherServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".auto-other-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".auto-other-section__header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".auto-other-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".auto-other-services",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="auto-section auto-section--light" ref={sectionRef}>
      <div className="auto-container">
        <div className="auto-other-section__header">
          <AutoSectionTitle eyebrow="Explore More" light={false}>
            Our Other Services
          </AutoSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            Workflows represent just one segment of BitBattles. Discover our full software
            engineering suites.
          </p>
        </div>

        <div className="auto-other-services">
          {otherServices.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="auto-other-card"
            >
              <div className="auto-other-card__icon">{service.icon}</div>
              <span className="auto-other-card__title">{service.title}</span>
              <span className="auto-other-card__arrow">→</span>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-bitCharcoal shadow-sm transition hover:bg-yellow-50 hover:border-yellow-200 hover:text-yellow-600"
            style={{ color: "var(--auto-charcoal)" }}
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Floating CTA Tab ("Talk the best service now" -> "Discuss now")
   ────────────────────────────────────────────────────────── */
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
    <div
      className={`svc-float ${visible && !dismissed ? "svc-float--visible" : "svc-float--hidden"}`}
      style={{ bottom: "32px", right: "32px", position: "fixed", zIndex: 100 }}
    >
      <div
        className="svc-float__card"
        style={{
          borderColor: "rgba(245, 158, 11, 0.4)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 0 16px rgba(245,158,11,0.2)",
        }}
      >
        <span className="svc-float__emoji">⚡</span>
        <span className="svc-float__text">Talk the best service now</span>
        <a
          href="/contact?service=automation"
          className="svc-float__cta"
          style={{ background: "var(--auto-amber)" }}
        >
          Discuss now
        </a>
        <button
          className="svc-float__close"
          onClick={() => {
            setDismissed(true);
            setVisible(false);
          }}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Main Page Export
   ────────────────────────────────────────────────────────── */
export function AutomationPage() {
  // Clean up ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <AutomationServicesSection />
      <AutomationSolutionsSection />
      <TopFeaturesSection />
      <ApproachSection />
      <OtherServicesSection />
      <FloatingCta />
    </main>
  );
}
