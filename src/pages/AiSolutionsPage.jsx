import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ai-solutions.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────
   Data
────────────────────────────────────────────────────────── */
const aiSubServices = [
  {
    id: 1,
    icon: "🧠",
    title: "Natural Language Processing",
    description:
      "Build intelligent text analysis systems, sentiment analysis engines, and language understanding models tailored to your business domain.",
    tag: "NLP",
  },
  {
    id: 2,
    icon: "👁️",
    title: "Computer Vision",
    description:
      "Image recognition, object detection, visual inspection, and document processing powered by state-of-the-art deep learning architectures.",
    tag: "Vision",
  },
  {
    id: 3,
    icon: "📊",
    title: "ML Models & Analytics",
    description:
      "Custom machine learning pipelines from data preprocessing to model deployment — regression, classification, clustering, and beyond.",
    tag: "ML",
  },
  {
    id: 4,
    icon: "🤖",
    title: "AI Agents & Assistants",
    description:
      "Autonomous AI agents that execute multi-step tasks, make decisions, and integrate with your existing tools and workflows.",
    tag: "Agents",
  },
  {
    id: 5,
    icon: "📈",
    title: "Predictive Analytics",
    description:
      "Forecast trends, detect anomalies, and surface actionable insights before problems arise using time-series and statistical models.",
    tag: "Forecasting",
  },
  {
    id: 6,
    icon: "⚡",
    title: "AI Workflow Automation",
    description:
      "Automate repetitive business processes with intelligent triggers, routing, and decision-making that learns from your operations.",
    tag: "Automation",
  },
];

const aiSolutions = [
  {
    number: "01",
    tag: "Custom Development",
    title: "End-to-End AI Product Development",
    description:
      "From ideation through deployment, we architect and build complete AI products. Our team handles data pipelines, model selection, fine-tuning, API integration, and production-ready dashboards.",
    features: [
      "Scalable ML infrastructure on cloud",
      "Real-time inference APIs",
      "Monitoring & model drift detection",
      "CI/CD for ML pipelines",
    ],
    visual: "orange",
    visualContent: {
      title: "AI Pipeline",
      items: ["Data Ingestion", "Model Training", "Evaluation", "Deployment"],
    },
  },
  {
    number: "02",
    tag: "Integration",
    title: "Seamless AI Integration Into Existing Systems",
    description:
      "Already have a product? We integrate AI capabilities into your existing stack — adding intelligent features without disrupting your workflows or architecture.",
    features: [
      "REST & GraphQL API wrappers",
      "Plug-in AI modules for apps",
      "Legacy system AI augmentation",
      "Zero-downtime integration",
    ],
    visual: "teal",
    reverse: true,
    visualContent: {
      title: "Integration Hub",
      items: ["Your App", "AI Engine", "Database", "Dashboard"],
    },
  },
  {
    number: "03",
    tag: "Consulting",
    title: "AI Strategy & Consulting",
    description:
      "Not sure where to start? Our AI consultants map your business challenges to the right AI solutions, build a roadmap, and validate feasibility before any development begins.",
    features: [
      "AI readiness assessment",
      "ROI modeling & prioritization",
      "Tech stack recommendations",
      "Team upskilling workshops",
    ],
    visual: "dark",
    visualContent: {
      title: "Strategy Roadmap",
      items: ["Assess", "Plan", "Prototype", "Scale"],
    },
  },
];

const topFeatures = [
  {
    icon: "🚀",
    stat: "10",
    unit: "x",
    title: "Faster Workflows",
    description: "AI automation reduces manual task time by an order of magnitude.",
  },
  {
    icon: "🎯",
    stat: "98",
    unit: "%",
    title: "Model Accuracy",
    description: "Production models fine-tuned to your domain for near-perfect results.",
  },
  {
    icon: "🔒",
    stat: "100",
    unit: "%",
    title: "Data Private",
    description: "All processing on your infrastructure — no third-party data exposure.",
  },
  {
    icon: "⚡",
    stat: "<50",
    unit: "ms",
    title: "Inference Speed",
    description: "Optimized model serving with sub-50ms p99 latency in production.",
  },
];

const approachSteps = [
  {
    icon: "🔍",
    title: "Discover",
    description: "Deep-dive into your business, data sources, and success metrics.",
  },
  {
    icon: "🗺️",
    title: "Strategy",
    description: "Map challenges to AI solutions, define scope, and set milestones.",
  },
  {
    icon: "🧪",
    title: "Prototype",
    description: "Build a working proof of concept to validate assumptions fast.",
  },
  {
    icon: "⚙️",
    title: "Build",
    description: "Production-grade AI development with tests, docs, and clean code.",
  },
  {
    icon: "🚀",
    title: "Launch & Grow",
    description: "Deploy, monitor, and iterate with ongoing support and improvements.",
  },
];

const otherServices = [
  { id: "ui-ux-design", icon: "🎨", title: "UI/UX Design", href: "/services/ui-ux-design" },
  { id: "web-development", icon: "🌐", title: "Web Development", href: "/services/web-development" },
  { id: "mobile-apps", icon: "📱", title: "Mobile Apps", href: "/services/mobile-apps" },
  { id: "cyber-security", icon: "🛡️", title: "Cyber Security", href: "/services/cyber-security" },
  { id: "automation", icon: "⚡", title: "Automation", href: "/services/automation" },
];

/* ──────────────────────────────────────────────────────────
   Helper — Section Title
────────────────────────────────────────────────────────── */
function AiSectionTitle({ eyebrow, children, light = false, className = "" }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <span className="ai-eyebrow">{eyebrow}</span>
      <h2 className={`ai-section-title ${light ? "ai-section-title--light" : "ai-section-title--dark"}`}>
        {children}
      </h2>
      <div className="ai-section-divider mx-auto">
        <span className="ai-section-divider__line" />
        <span className={`ai-section-divider__dot ${light ? "ai-section-divider__dot--light" : "ai-section-divider__dot--dark"}`} />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 1 — Hero
────────────────────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const visualRef = useRef(null);

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
          { opacity: 0, x: 60, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 1.1, ease: "power2.out" },
          "-=1.2"
        );

      // Animate visual cards stagger
      gsap.fromTo(
        ".ai-hero__visual-card",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.8,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ai-hero" ref={heroRef}>
      {/* Background elements */}
      <div className="ai-hero__bg-grid" />
      <div className="ai-hero__orb ai-hero__orb--1" />
      <div className="ai-hero__orb ai-hero__orb--2" />
      <div className="ai-hero__orb ai-hero__orb--3" />

      <div className="ai-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <div>
            <div ref={badgeRef} style={{ opacity: 0 }}>
              <span className="ai-hero__badge">
                <span className="ai-hero__badge-dot" />
                AI Solutions by BitBattles
              </span>
            </div>

            <h1 ref={titleRef} className="ai-hero__title" style={{ opacity: 0 }}>
              Intelligent AI Systems{" "}
              <span className="ai-hero__title-accent">
                Built for Real Business
              </span>
            </h1>

            <p ref={descRef} className="ai-hero__desc" style={{ opacity: 0 }}>
              Practical AI workflows, intelligent assistants, and automation
              systems designed around your actual business needs — not just
              demos and prototypes.
            </p>

            <div ref={ctaRef} className="ai-hero__cta-group" style={{ opacity: 0 }}>
              <a href="/contact?service=ai-solutions" className="ai-hero__cta-primary">
                Start Your AI Project →
              </a>
              <a href="#ai-services" className="ai-hero__cta-secondary">
                Explore Capabilities ↓
              </a>
            </div>

            <div ref={statsRef} className="ai-hero__stats" style={{ opacity: 0 }}>
              {[
                { num: "50+", label: "AI Projects" },
                { num: "10x", label: "Avg. Efficiency Gain" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="ai-hero__stat">
                  <span className="ai-hero__stat-num">{s.num}</span>
                  <span className="ai-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card */}
          <div ref={visualRef} className="ai-hero__visual" style={{ opacity: 0 }}>
            <div className="ai-hero__visual-inner">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-orange-300">
                  AI Capability Stack
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-400">
                  ✓
                </span>
              </div>

              {[
                { icon: "🧠", title: "NLP Engine", sub: "Language Understanding", bar: 92 },
                { icon: "👁️", title: "Vision API", sub: "Image & Video Analysis", bar: 87 },
                { icon: "🤖", title: "AI Agents", sub: "Autonomous Task Execution", bar: 94 },
                { icon: "📊", title: "Analytics ML", sub: "Predictive Forecasting", bar: 89 },
                { icon: "⚡", title: "Automation", sub: "Workflow Intelligence", bar: 96 },
              ].map((item) => (
                <div key={item.title} className="ai-hero__visual-card">
                  <div className="ai-hero__visual-icon">{item.icon}</div>
                  <div className="flex-1">
                    <div className="ai-hero__visual-title">{item.title}</div>
                    <div className="ai-hero__visual-sub">{item.sub}</div>
                    <div className="ai-hero__visual-bar">
                      <div
                        className="ai-hero__visual-bar-fill"
                        style={{ "--bar-width": `${item.bar}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-black text-orange-400">{item.bar}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 2 — AI Development Services
────────────────────────────────────────────────────────── */
function AiServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        ".ai-services-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-services-section__header",
            start: "top 80%",
          },
        }
      );

      // Cards stagger
      gsap.fromTo(
        ".ai-service-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-services-grid",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ai-services"
      className="ai-section ai-section--dark"
      ref={sectionRef}
    >
      <div className="ai-container">
        <div className="ai-services-section__header">
          <AiSectionTitle eyebrow="What We Build" light>
            Our AI Development Services
          </AiSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-400">
            From machine learning models to autonomous agents — we design and deliver
            AI systems that create real, measurable value for your business.
          </p>
        </div>

        <div className="ai-services-grid">
          {aiSubServices.map((service) => (
            <article key={service.id} className="ai-service-card">
              <div className="ai-service-card__icon">{service.icon}</div>
              <h3 className="ai-service-card__title">{service.title}</h3>
              <p className="ai-service-card__desc">{service.description}</p>
              <span className="ai-service-card__tag">{service.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 3 — AI Development Solutions
────────────────────────────────────────────────────────── */
function AiSolutionsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ai-solutions-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-solutions-section__header",
            start: "top 80%",
          },
        }
      );

      aiSolutions.forEach((_, index) => {
        const item = `.ai-solution-item-${index}`;
        const direction = index % 2 === 0 ? -60 : 60;

        gsap.fromTo(
          `${item} .ai-solution-item__content`,
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
          `${item} .ai-solution-item__visual`,
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
    <section className="ai-section ai-section--light" ref={sectionRef}>
      <div className="ai-container">
        <div className="ai-solutions-section__header">
          <AiSectionTitle eyebrow="Solutions" light={false}>
            AI Development Solutions
          </AiSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            Whether you're starting from scratch or enhancing an existing product, our
            AI solutions are scoped to your exact stage and scale.
          </p>
        </div>

        <div className="ai-solutions-list">
          {aiSolutions.map((solution, index) => (
            <div
              key={solution.number}
              className={`ai-solution-item ai-solution-item-${index} ${solution.reverse ? "ai-solution-item--reverse" : ""}`}
            >
              {/* Content */}
              <div className="ai-solution-item__content">
                <div className="ai-solution-item__number">{solution.number}</div>
                <span className="ai-solution-item__tag">{solution.tag}</span>
                <h3 className="ai-solution-item__title">{solution.title}</h3>
                <p className="ai-solution-item__desc">{solution.description}</p>
                <ul className="ai-solution-item__features">
                  {solution.features.map((f) => (
                    <li key={f} className="ai-solution-item__feature">
                      <span className="ai-solution-item__feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div
                className={`ai-solution-item__visual ai-solution-item__visual--${solution.visual}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-black uppercase tracking-widest ${
                      solution.visual === "dark" ? "text-orange-300" : "text-orange-600"
                    }`}
                  >
                    {solution.visualContent.title}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-500">
                    ✓
                  </span>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  {solution.visualContent.items.map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 rounded-xl p-3 ${
                        solution.visual === "dark"
                          ? "bg-white/5 border border-white/10"
                          : "bg-white/60 border border-white/80"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black text-white`}
                        style={{ background: `rgba(255,106,42,${0.7 + i * 0.075})` }}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          solution.visual === "dark" ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact?service=ai-solutions"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-black text-bitOrange hover:gap-3 transition-all"
                  style={{ color: "var(--ai-orange)" }}
                >
                  Get started with this →
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
   Section 4 — Top Features
────────────────────────────────────────────────────────── */
function TopFeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ai-features-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-features-section__header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".ai-feature-card",
        { opacity: 0, y: 50, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".ai-features-grid",
            start: "top 78%",
          },
        }
      );

      // Counter animation for stats
      const counters = document.querySelectorAll(".ai-feature-stat-animate");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        const prefix = counter.getAttribute("data-prefix") || "";
        const isSpecial = counter.getAttribute("data-special") === "true";

        if (isSpecial) return; // skip "<50ms" type

        ScrollTrigger.create({
          trigger: counter,
          start: "top 85%",
          onEnter: () => {
            gsap.fromTo(
              { val: 0 },
              {
                val: target,
                duration: 1.8,
                ease: "power2.out",
                onUpdate: function () {
                  counter.textContent = prefix + Math.round(this.targets()[0].val);
                },
              }
            );
          },
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ai-section ai-section--soft" ref={sectionRef}>
      <div className="ai-container">
        <div className="ai-features-section__header">
          <AiSectionTitle eyebrow="Why It Works" light={false}>
            Top Features of Our AI Solutions
          </AiSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            Numbers that speak louder than marketing claims. Our AI systems are
            engineered for reliability, speed, and real-world performance.
          </p>
        </div>

        <div className="ai-features-grid">
          {topFeatures.map((feature, index) => {
            const isSpecial = feature.stat.startsWith("<");
            const numericVal = isSpecial ? null : parseInt(feature.stat);

            return (
              <article key={feature.title} className="ai-feature-card">
                <div className="ai-feature-card__icon">{feature.icon}</div>
                <div className="ai-feature-card__stat">
                  {isSpecial ? (
                    <span>
                      {feature.stat}
                      <span className="ai-feature-card__stat-unit">{feature.unit}</span>
                    </span>
                  ) : (
                    <>
                      <span
                        className="ai-feature-stat-animate"
                        data-target={numericVal}
                        data-special={isSpecial ? "true" : "false"}
                      >
                        {feature.stat}
                      </span>
                      <span className="ai-feature-card__stat-unit">{feature.unit}</span>
                    </>
                  )}
                </div>
                <h3 className="ai-feature-card__title">{feature.title}</h3>
                <p className="ai-feature-card__desc">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 5 — Our Approach Model
────────────────────────────────────────────────────────── */
function ApproachSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ai-approach-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-approach-header",
            start: "top 80%",
          },
        }
      );

      // Steps stagger with path-like effect
      gsap.fromTo(
        ".ai-approach__step",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-approach__timeline",
            start: "top 75%",
          },
        }
      );

      // Pulse animation on step nodes after reveal
      gsap.fromTo(
        ".ai-approach__step-node",
        { boxShadow: "0 0 0px rgba(255,106,42,0)" },
        {
          boxShadow: "0 0 20px rgba(255,106,42,0.4)",
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
    <section className="ai-section ai-section--gray" ref={sectionRef}>
      <div className="ai-container">
        <div className="ai-approach-header">
          <AiSectionTitle eyebrow="How We Work" light={false}>
            Our Approach Model
          </AiSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            A proven five-phase process that moves your AI project from ambiguous
            idea to a launched, monitored, production system — without guesswork.
          </p>
        </div>

        <div className="ai-approach ai-approach__timeline">
          {approachSteps.map((step, index) => (
            <div key={step.title} className="ai-approach__step">
              <div className="ai-approach__step-node">
                <span className="ai-approach__step-num">{index + 1}</span>
                <span className="text-2xl" role="img" aria-label={step.title}>
                  {step.icon}
                </span>
              </div>
              <div className="ai-approach__step-body">
                <h3 className="ai-approach__step-title">{step.title}</h3>
                <p className="ai-approach__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-bitCharcoal p-8 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-400">
                Start your AI journey
              </p>
              <h2 className="mt-3 text-2xl font-black leading-snug md:text-3xl">
                Ready to build your first AI system?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                Let's start with a free scoping call. We'll map your business
                challenge to the right AI solution — no fluff, no overengineering.
              </p>
            </div>
            <a
              href="/contact?service=ai-solutions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-bitOrange px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-orange-600"
              style={{ background: "var(--ai-orange)" }}
            >
              Book a Free Scoping Call →
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
        ".ai-other-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-other-section__header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".ai-other-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ai-other-services",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ai-section ai-section--light" ref={sectionRef}>
      <div className="ai-container">
        <div className="ai-other-section__header">
          <AiSectionTitle eyebrow="Explore More" light={false}>
            Our Other Services
          </AiSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            AI is just one part of what BitBattles builds. Explore our full
            range of digital product services.
          </p>
        </div>

        <div className="ai-other-services">
          {otherServices.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="ai-other-card"
            >
              <div className="ai-other-card__icon">{service.icon}</div>
              <span className="ai-other-card__title">{service.title}</span>
              <span className="ai-other-card__arrow">→</span>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-bitCharcoal shadow-sm transition hover:bg-orange-50 hover:border-orange-200 hover:text-bitOrange"
            style={{ color: "var(--ai-charcoal)" }}
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Main Page Export
────────────────────────────────────────────────────────── */
export function AiSolutionsPage() {
  // Clean up ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <AiServicesSection />
      <AiSolutionsSection />
      <TopFeaturesSection />
      <ApproachSection />
      <OtherServicesSection />
    </main>
  );
}
