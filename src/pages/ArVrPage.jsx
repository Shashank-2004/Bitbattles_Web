import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ar-vr.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────── */
const vrServices = [
  {
    id: 1,
    icon: "🥽",
    title: "Virtual Reality (VR) Apps",
    description:
      "Fully immersive VR environments built for Meta Quest, HTC Vive, and Apple Vision Pro — specialized in virtual training, simulations, and interactive gaming.",
    tag: "VR Headsets",
  },
  {
    id: 2,
    icon: "📱",
    title: "Augmented Reality (AR)",
    description:
      "Context-aware AR systems overlaying 3D models onto physical environments using iOS ARKit, Android ARCore, and mobile WebXR platforms.",
    tag: "Augmented",
  },
  {
    id: 3,
    icon: "🌐",
    title: "WebXR & Web3D Solutions",
    description:
      "Interactive 3D models and virtual spaces served directly in the browser using Three.js and BabylonJS — no app install required, fully accessible.",
    tag: "Browser 3D",
  },
  {
    id: 4,
    icon: "🏗️",
    title: "3D Asset Engineering",
    description:
      "Optimized, low-poly and high-fidelity 3D modeling, rigging, texturing, and asset compression pipelines configured for high-performance mobile rendering.",
    tag: "3D Models",
  },
  {
    id: 5,
    icon: "🔮",
    title: "Mixed Reality (MR)",
    description:
      "Advanced mixed reality interfaces utilizing pass-through video, spatial anchoring, and physics-based hand tracking for ultimate interactivity.",
    tag: "Mixed Reality",
  },
  {
    id: 6,
    icon: "🏫",
    title: "Immersive Training Portals",
    description:
      "Hazardous simulation courses, medical training pipelines, and spatial employee onboarding portals that decrease onboarding times and risks.",
    tag: "Enterprise",
  },
];

const vrSolutions = [
  {
    number: "01",
    tag: "Spatial Anchor",
    title: "Spatial Anchoring & Telemetry",
    description:
      "Pin interactive virtual models to exact coordinates in the real world securely. We combine spatial meshes, environment anchors, physics colliders, and hand telemetry so users interact with items seamlessly.",
    features: [
      "Millimeter-level room mesh anchors",
      "Dynamic occlusion of physical items",
      "Physics-based gesture & hand tracking",
      "Cross-device cloud coordinate sharing",
    ],
    visual: "orange",
    visualContent: "anchor",
  },
  {
    number: "02",
    tag: "Holographic UI",
    title: "Holographic 3D Dashboards",
    description:
      "Design next-generation heads-up displays and immersive telemetry. We build floating dashboards, interactive 3D menus, spatial audio guides, and real-time sensor dials that hover naturally in view.",
    features: [
      "Curved floating UI panels",
      "Hand-gesture buttons & sliders",
      "Dynamic spatial audio positioning",
      "Low-overhead real-time telemetry",
    ],
    visual: "teal",
    reverse: true,
    visualContent: "axes",
  },
  {
    number: "03",
    tag: "Consulting",
    title: "Immersive Feasibility Consulting",
    description:
      "Map your company's challenges to the right spatial computing tool. We audit your workflows, analyze target device capabilities, draft 3D technical schemas, and design a deployment roadmap.",
    features: [
      "Device & hardware compatibility specs",
      "ASO & Store listing launch strategies",
      "Unity / Unreal / WebXR stack audits",
      "Step-by-step 3D development roadmap",
    ],
    visual: "dark",
    visualContent: "scanner",
  },
];

const topFeatures = [
  {
    icon: "🚀",
    stat: "90",
    unit: "FPS",
    title: "VR Framerate Target",
    description: "Sustained high-framerate rendering to prevent motion sickness and latency.",
  },
  {
    icon: "🎯",
    stat: "100",
    unit: "%",
    title: "Tracking Precision",
    description: "Sub-millimeter spatial coordinate anchor tracking across lighting changes.",
  },
  {
    icon: "⏱️",
    stat: "20",
    unit: "ms",
    title: "Photon Latency",
    description: "Ultra-low head-tracking input latency ensuring realistic, instant view updates.",
  },
  {
    icon: "🔊",
    stat: "3D",
    unit: "Audio",
    title: "Spatial Audio Setup",
    description: "Physics-based audio raycasting matching sound positioning with visual cues.",
  },
];

const approachSteps = [
  {
    icon: "🔍",
    title: "Scan & Scope",
    description: "We audit target devices and map the target spatial workspace and flows.",
  },
  {
    icon: "🗺️",
    title: "Wireframe & Storyboard",
    description: "We draft 3D scene mockups, heads-up display sketches, and user camera routes.",
  },
  {
    icon: "🏗️",
    title: "Asset & Engine Build",
    description: "We code spatial anchors, optimize 3D meshes, and script core logic.",
  },
  {
    icon: "🧪",
    title: "Immersive Testing",
    description: "We perform occlusion tests, hand-tracking checks, and framerate checks.",
  },
  {
    icon: "🚀",
    title: "Store Launch & Deploy",
    description: "We publish to Oculus Store, Apple Vision, WebXR, or MDM portal systems.",
  },
];

const otherServices = [
  { id: "ai-solutions", icon: "🧠", title: "AI Solutions", href: "/services/ai-solutions" },
  { id: "web-development", icon: "🌐", title: "Web Development", href: "/services/web-development" },
  { id: "mobile-apps", icon: "📱", title: "Mobile Apps", href: "/services/mobile-apps" },
  { id: "cyber-security", icon: "🛡️", title: "Cyber Security", href: "/services/cyber-security" },
  { id: "automation", icon: "⚡", title: "Automation", href: "/services/automation" },
];

/* ──────────────────────────────────────────────────────────
   Helper — Section Title
   ────────────────────────────────────────────────────────── */
function VrSectionTitle({ eyebrow, children, light = false, className = "" }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <span className="vr-eyebrow">{eyebrow}</span>
      <h2 className={`vr-section-title ${light ? "vr-section-title--light" : "vr-section-title--dark"}`}>
        {children}
      </h2>
      <div className="vr-section-divider mx-auto">
        <span className="vr-section-divider__line" />
        <span className={`vr-section-divider__dot ${light ? "vr-section-divider__dot--light" : "vr-section-divider__dot--dark"}`} />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 1 — Hero Section (Holographic Viewport Grid Animation)
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
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" },
          "-=1.2"
        );

      // Rotating holographic target points
      gsap.to(".vr-target-rotator", {
        rotation: 360,
        transformOrigin: "center center",
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      // Target pulses
      gsap.fromTo(
        ".vr-tracking-pulse",
        { scale: 0.8, opacity: 0.8 },
        {
          scale: 1.4,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: "power1.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vr-hero" ref={heroRef}>
      <div className="vr-hero__bg-grid" />
      <div className="vr-hero__orb vr-hero__orb--1" />
      <div className="vr-hero__orb vr-hero__orb--2" />
      <div className="vr-hero__orb vr-hero__orb--3" />

      <div className="vr-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <div>
            <div ref={badgeRef} style={{ opacity: 0 }}>
              <span className="vr-hero__badge">
                <span className="vr-hero__badge-dot" />
                AR/VR Development by BitBattles
              </span>
            </div>

            <h1 ref={titleRef} className="vr-hero__title" style={{ opacity: 0 }}>
              Immersive Spatial{" "}
              <span className="vr-hero__title-accent">
                AR/VR Experiences
              </span>
            </h1>

            <p ref={descRef} className="vr-hero__desc" style={{ opacity: 0 }}>
              Production-grade spatial computing solutions — augmented reality portals,
              virtual reality training, WebXR experiences, and custom 3D asset engineering
              tailored to turning users into active participants.
            </p>

            <div ref={ctaRef} className="vr-hero__cta-group" style={{ opacity: 0 }}>
              <a href="/contact?service=ar-vr-development" className="vr-hero__cta-primary">
                Inquire Spatial Build →
              </a>
              <a href="#vr-services" className="vr-hero__cta-secondary">
                Our Services ↓
              </a>
            </div>

            <div ref={statsRef} className="vr-hero__stats" style={{ opacity: 0 }}>
              {[
                { num: "90FPS", label: "VR Target" },
                { num: "3D Audio", label: "Raycasted sound" },
                { num: "100%", label: "Interactive Anchors" },
              ].map((s) => (
                <div key={s.label} className="vr-hero__stat">
                  <span className="vr-hero__stat-num">{s.num}</span>
                  <span className="vr-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Holographic Viewport Grid Visual */}
          <div ref={visualRef} className="vr-hero__visual" style={{ opacity: 0 }}>
            <div className="vr-hero__visual-inner">
              <svg viewBox="0 0 400 400" className="vr-viewport-svg">
                {/* 3D Coordinate Grid */}
                <path d="M 50,50 L 350,350 M 50,350 L 350,50" className="vr-spatial-grid" />
                <circle cx="200" cy="200" r="140" className="vr-spatial-grid" />
                <circle cx="200" cy="200" r="80" className="vr-spatial-grid" />

                {/* Viewport Bounds */}
                <rect x="30" y="30" width="340" height="340" rx="16" className="vr-viewport-bound" />

                {/* Tracking Path line */}
                <path d="M 100,300 Q 150,120 200,200 T 300,100" className="vr-tracking-line" />

                {/* Tracking Center Node (Orange pulse) */}
                <g className="vr-viewport-node" transform="translate(200, 200)">
                  <circle r="26" className="vr-tracking-pulse" fill="none" stroke="#ff6a2a" strokeWidth="2" />
                  <circle r="8" fill="#ff6a2a" />
                  <text textAnchor="middle" y="44" fill="#fed7aa" fontSize="10" fontWeight="bold">Anchor locked</text>
                </g>

                {/* Reticle indicator lines */}
                <g className="vr-target-rotator" transform="translate(200, 200)">
                  <line x1="-34" y1="0" x2="-22" y2="0" stroke="#ff6a2a" strokeWidth="3" />
                  <line x1="22" y1="0" x2="34" y2="0" stroke="#ff6a2a" strokeWidth="3" />
                  <line x1="0" y1="-34" x2="0" y2="-22" stroke="#ff6a2a" strokeWidth="3" />
                  <line x1="0" y1="22" x2="0" y2="34" stroke="#ff6a2a" strokeWidth="3" />
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
   Section 2 — AR/VR Services (Z-Axis Depth Scroll Stagger)
   ────────────────────────────────────────────────────────── */
function VrServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".vr-services-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vr-services-section__header",
            start: "top 80%",
          },
        }
      );

      // Staggered depth layering (Cards scaling up & fading in as if pushing through Z axis)
      const cards = gsap.utils.toArray(".vr-service-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.8, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
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
      id="vr-services"
      className="vr-section vr-section--dark"
      ref={sectionRef}
    >
      <div className="vr-container">
        <div className="vr-services-section__header">
          <VrSectionTitle eyebrow="What We Build" light>
            Our AR/VR Development Services
          </VrSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-400">
            High-performance spatial applications built using Unity, Unreal, and browser engines. We craft immersive environments tailored to turn visitors into active users.
          </p>
        </div>

        <div className="vr-services-grid">
          {vrServices.map((service) => (
            <article key={service.id} className="vr-service-card">
              <div className="vr-service-card__icon">{service.icon}</div>
              <h3 className="vr-service-card__title">{service.title}</h3>
              <p className="vr-service-card__desc">{service.description}</p>
              <span className="vr-service-card__tag">{service.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 3 — AR/VR Solutions (Looping Telemetry Visuals)
   ────────────────────────────────────────────────────────── */
function VrSolutionsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vr-solutions-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vr-solutions-section__header",
            start: "top 80%",
          },
        }
      );

      vrSolutions.forEach((_, index) => {
        const item = `.vr-solution-item-${index}`;
        const direction = index % 2 === 0 ? -60 : 60;

        gsap.fromTo(
          `${item} .vr-solution-item__content`,
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
          `${item} .vr-solution-item__visual`,
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
    <section className="vr-section vr-section--light" ref={sectionRef}>
      <div className="vr-container">
        <div className="vr-solutions-section__header">
          <VrSectionTitle eyebrow="Solutions" light={false}>
            Immersive 3D & Spatial Solutions
          </VrSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            From interactive spatial anchors to curving heads-up displays — we design
            interfaces that redefine the user interface experience.
          </p>
        </div>

        <div className="vr-solutions-list">
          {vrSolutions.map((solution, index) => (
            <div
              key={solution.number}
              className={`vr-solution-item vr-solution-item-${index} ${solution.reverse ? "vr-solution-item--reverse" : ""}`}
            >
              {/* Content */}
              <div className="vr-solution-item__content">
                <div className="vr-solution-item__number">{solution.number}</div>
                <span className="vr-solution-item__tag">{solution.tag}</span>
                <h3 className="vr-solution-item__title">{solution.title}</h3>
                <p className="vr-solution-item__desc">{solution.description}</p>
                <ul className="vr-solution-item__features">
                  {solution.features.map((f) => (
                    <li key={f} className="vr-solution-item__feature">
                      <span className="vr-solution-item__feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual with specific looping animation */}
              <div
                className={`vr-solution-item__visual vr-solution-item__visual--${solution.visual}`}
              >
                {solution.visualContent === "anchor" && (
                  <div className="vr-tracking-anchor">
                    <div className="vr-tracking-dot" />
                  </div>
                )}

                {solution.visualContent === "axes" && (
                  <div className="vr-spatial-axes">
                    <div className="vr-axis vr-axis--x" />
                    <div className="vr-axis vr-axis--y" />
                    <div className="vr-axis vr-axis--z" />
                  </div>
                )}

                {solution.visualContent === "scanner" && (
                  <div className="auto-scanner" style={{ borderColor: "rgba(255,106,42,0.15)" }}>
                    <div className="vr-scanner-beam" />
                  </div>
                )}

                <a
                  href="/contact?service=ar-vr-development"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-black transition-all hover:gap-3"
                  style={{ color: "var(--vr-orange)" }}
                >
                  Request spatial blueprint →
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
        ".vr-features-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vr-features-section__header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".vr-feature-card",
        { opacity: 0, y: 50, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".vr-features-grid",
            start: "top 78%",
          },
        }
      );

      // Animate radial rings on scroll
      const circles = document.querySelectorAll(".vr-radial-fill");
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
    <section className="vr-section vr-section--soft" ref={sectionRef}>
      <div className="vr-container">
        <div className="vr-features-section__header">
          <VrSectionTitle eyebrow="Why It Works" light={false}>
            Performance of Our Immersive Apps
          </VrSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            Highly optimized engine metrics that deliver perfect spatial alignment
            and zero-overhead frames.
          </p>
        </div>

        <div className="vr-features-grid">
          {topFeatures.map((feature) => {
            const numericPercent = parseFloat(feature.stat) || 100;

            return (
              <article key={feature.title} className="vr-feature-card">
                <div className="vr-feature-card__icon">{feature.icon}</div>

                {/* Radial progress meter visual */}
                <div className="vr-radial-wrap">
                  <svg className="vr-radial-svg">
                    <circle cx="45" cy="45" r="40" className="vr-radial-bg" />
                    <circle
                      cx="45"
                      cy="45"
                      r="40"
                      className="vr-radial-fill"
                      data-percent={numericPercent}
                    />
                  </svg>
                  <span className="vr-radial-text">
                    {feature.stat}
                    <span style={{ fontSize: "12px", color: "var(--vr-orange)" }}>
                      {feature.unit}
                    </span>
                  </span>
                </div>

                <h3 className="vr-feature-card__title">{feature.title}</h3>
                <p className="vr-feature-card__desc">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   Section 5 — Our Immersive Approach (Pulsing Laser Timeline)
   ────────────────────────────────────────────────────────── */
function ApproachSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vr-approach-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vr-approach-header",
            start: "top 80%",
          },
        }
      );

      // Steps stagger in sequentially
      gsap.fromTo(
        ".vr-approach__step",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vr-approach__timeline",
            start: "top 75%",
          },
        }
      );

      // Looping wave pulse traveling sequentially down timeline nodes
      gsap.fromTo(
        ".vr-approach__step-node",
        { boxShadow: "0 0 0px rgba(255,106,42,0)" },
        {
          boxShadow: "0 0 20px rgba(255,106,42,0.55)",
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
    <section className="vr-section vr-section--gray" ref={sectionRef}>
      <div className="vr-container">
        <div className="vr-approach-header">
          <VrSectionTitle eyebrow="Our Process" light={false}>
            Our Spatial Development Cycle
          </VrSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            A precise 5-phase production pipeline that takes your immersive project from
            conceptual storyboard to launched MDM store application.
          </p>
        </div>

        <div className="vr-approach vr-approach__timeline">
          {approachSteps.map((step, index) => (
            <div key={step.title} className="vr-approach__step">
              <div className="vr-approach__step-node">
                <span className="vr-approach__step-num">{index + 1}</span>
                <span className="text-2xl" role="img" aria-label={step.title}>
                  {step.icon}
                </span>
              </div>
              <div className="vr-approach__step-body">
                <h3 className="vr-approach__step-title">{step.title}</h3>
                <p className="vr-approach__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-bitCharcoal p-8 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-400">
                Start your AR/VR project
              </p>
              <h2 className="mt-3 text-2xl font-black leading-snug md:text-3xl">
                Ready to build your spatial viewport?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                Contact our spatial computing engineers. We will analyze your target
                hardware sets and design a tailored 3D asset blueprint.
              </p>
            </div>
            <a
              href="/contact?service=ar-vr-development"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-orange-600"
              style={{ background: "var(--vr-orange)" }}
            >
              Book Spatial Consultation →
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
        ".vr-other-section__header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vr-other-section__header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".vr-other-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vr-other-services",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vr-section vr-section--light" ref={sectionRef}>
      <div className="vr-container">
        <div className="vr-other-section__header">
          <VrSectionTitle eyebrow="Explore More" light={false}>
            Our Other Services
          </VrSectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500">
            3D rendering is just one segment of BitBattles. Discover our full software
            engineering suites.
          </p>
        </div>

        <div className="vr-other-services">
          {otherServices.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="vr-other-card"
            >
              <div className="vr-other-card__icon">{service.icon}</div>
              <span className="vr-other-card__title">{service.title}</span>
              <span className="vr-other-card__arrow">→</span>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-7 py-3.5 text-sm font-black text-bitCharcoal shadow-sm transition hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
            style={{ color: "var(--vr-charcoal)" }}
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
          borderColor: "rgba(255, 106, 42, 0.4)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 0 16px rgba(255,106,42,0.2)",
        }}
      >
        <span className="svc-float__emoji">🥽</span>
        <span className="svc-float__text">Talk the best service now</span>
        <a
          href="/contact?service=ar-vr-development"
          className="svc-float__cta"
          style={{ background: "var(--vr-orange)" }}
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
export function ArVrPage() {
  // Clean up ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <VrServicesSection />
      <VrSolutionsSection />
      <TopFeaturesSection />
      <ApproachSection />
      <OtherServicesSection />
      <FloatingCta />
    </main>
  );
}
