import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


const serviceProjects = {
  "ai-solutions": "Omni-Channel Support AI Agent & Dashboard",
  "web-development": "Fintech Enterprise Web Platform",
  "mobile-apps": "HealthCare+ Mobile App Suite",
  "cyber-security": "Secure Authentication Intake Gateways",
  "automation": "Slack & CRM Workflow Sync Orchestrator",
  "ui-ux-design": "SaaS Dashboard Rebrand & Design System",
  "qa-testing": "E-Commerce App Automated Testing Pipeline",
  "cloud-implementation": "Multi-Region AWS Infrastructure Deployment",
  "ar-vr-development": "3D Product Configurator WebVR Platform",
};

export function ServicesPage() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isPulseTraveling, setIsPulseTraveling] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/services`);
        const data = await response.json();
        if (data.success) {
          setServices(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Show fetched services
  const displayServices = services;
  const activeService = displayServices[activeIndex] || (displayServices.length > 0 ? displayServices[0] : null);
  const displayedService = displayServices[displayedIndex] || (displayServices.length > 0 ? displayServices[0] : null);

  // Coordinates state for SVG lines
  const containerRef = useRef(null);
  const btnRefs = useRef([]);
  const cardRef = useRef(null);
  const timerRef = useRef(null);
  const [coords, setCoords] = useState({
    btnY: Array(services.length).fill(0),
    cardY: 0,
    xStart: 0,
    xEnd: 0,
  });
  const [isDesktop, setIsDesktop] = useState(false);

  const updateCoords = () => {
    if (!containerRef.current || !cardRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();
    const desktopMode = window.innerWidth >= 1024;
    setIsDesktop(desktopMode);

    if (!desktopMode) return;

    // Calculate Y centers relative to parent container
    const btnYPositions = btnRefs.current.map((btn) => {
      if (!btn) return 0;
      const btnRect = btn.getBoundingClientRect();
      return btnRect.top - containerRect.top + btnRect.height / 2;
    });

    const cardYCenter = cardRect.top - containerRect.top + cardRect.height / 2;

    // Start lines from right edge of first button
    let startX = 0;
    const firstBtn = btnRefs.current[0];
    if (firstBtn) {
      const firstBtnRect = firstBtn.getBoundingClientRect();
      startX = firstBtnRect.right - containerRect.left;
    }

    // End lines at left edge of details card
    const endX = cardRect.left - containerRect.left;

    setCoords({
      btnY: btnYPositions,
      cardY: cardYCenter,
      xStart: startX,
      xEnd: endX,
    });
  };

  useEffect(() => {
    updateCoords();
    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords);

    let observer;
    if (containerRef.current) {
      observer = new ResizeObserver(() => {
        updateCoords();
      });
      observer.observe(containerRef.current);
    }

    // Delay a bit to ensure fonts are loaded and layout is fully painted
    const timer = setTimeout(updateCoords, 500);

    return () => {
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords);
      if (observer) observer.disconnect();
      clearTimeout(timer);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleServiceSelect = (index) => {
    if (index === activeIndex) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Trigger pulse and select state
    setActiveIndex(index);
    setIsPulseTraveling(true);
    setPulseKey((prev) => prev + 1);

    // Coordinate content reveal with pulse arrival
    timerRef.current = setTimeout(() => {
      setDisplayedIndex(index);
      setIsPulseTraveling(false);
      timerRef.current = null;
    }, 450); // duration of pulse travel
  };

  const words = ["Services", "We", "Provide"];

  return (
    <main className="relative min-h-screen bg-[#050816] text-white font-sans overflow-hidden">
      
      {/* Background Mesh Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Glowing Orange Blob (Top Right) */}
        <motion.div
          className="absolute rounded-full blur-[140px] opacity-[0.12]"
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: "10%",
            right: "5%",
            width: "550px",
            height: "550px",
            background: "radial-gradient(circle, #ff6a2a 0%, rgba(255,106,42,0) 70%)",
          }}
        />

        {/* Glowing Blue Blob (Bottom Left) */}
        <motion.div
          className="absolute rounded-full blur-[160px] opacity-[0.08]"
          animate={{
            x: [0, -20, 15, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            bottom: "10%",
            left: "5%",
            width: "650px",
            height: "650px",
            background: "radial-gradient(circle, #3b82f6 0%, rgba(59,130,246,0) 70%)",
          }}
        />
      </div>

      {/* Faint Drifting Network Lines Background Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        animate={{
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
          rotate: [0, 0.5, -0.5, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="0" cy="0" r="2" fill="white" />
            <circle cx="80" cy="0" r="1.5" fill="white" />
            <circle cx="0" cy="80" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/*Constellation overlay*/}
          <path d="M 150 200 L 300 150 L 450 300 M 300 150 L 250 350 L 450 300 M 800 600 L 950 450 L 1100 550 M 950 450 L 1050 300" 
                fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="150" cy="200" r="3" fill="white" />
          <circle cx="300" cy="150" r="4" fill="white" />
          <circle cx="450" cy="300" r="3.5" fill="white" />
          <circle cx="250" cy="350" r="3" fill="white" />
          <circle cx="800" cy="600" r="4" fill="white" />
          <circle cx="950" cy="450" r="3" fill="white" />
          <circle cx="1100" cy="550" r="3" fill="white" />
          <circle cx="1050" cy="300" r="3.5" fill="white" />
        </svg>
      </motion.div>

      {/* Header Section */}
      <section className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="mt-6 flex flex-wrap justify-center gap-x-4 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {words.map((word, idx) => (
            <span key={idx} className="overflow-hidden inline-block py-1">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm font-semibold leading-7 text-slate-400">
          End-to-end engineering, custom AI architectures, and high-fidelity interfaces built for teams that demand practical, production-ready product execution.
        </p>
      </section>

      {/* Interactive Showcase Section */}
      {isLoading ? (
        <div className="flex justify-center items-center py-32 z-10 relative">
          <div className="h-12 w-12 border-4 border-bitOrange border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : displayServices.length === 0 ? (
        <div className="flex justify-center items-center py-32 z-10 relative text-white">
          <p>No services currently available.</p>
        </div>
      ) : (
      <section 
        ref={containerRef}
        className="relative mx-auto max-w-[1180px] px-5 pb-32 sm:px-6 lg:px-8 z-10"
      >
        {/* SVG Pipeline Lines */}
        {isDesktop && coords.xEnd > 0 && (
          <svg
            className="absolute inset-0 pointer-events-none z-10"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6a2a" stopOpacity="0" />
                <stop offset="50%" stopColor="#ff8f5a" stopOpacity="1" />
                <stop offset="100%" stopColor="#ff6a2a" stopOpacity="0" />
              </linearGradient>
            </defs>

            {displayServices.map((service, index) => {
              const startY = coords.btnY[index] || 0;
              const endY = coords.cardY || 0;
              const startX = coords.xStart || 0;
              const endX = coords.xEnd || 0;
              const isActive = index === activeIndex;

              // Bezier control coordinates for sleek S-curves
              const cp1X = startX + (endX - startX) * 0.45;
              const cp2X = startX + (endX - startX) * 0.55;

              const pathD = `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp2X} ${endY}, ${endX} ${endY}`;

              return (
                <g key={service.id}>
                  {/* Faint default connection path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? "rgba(255, 106, 42, 0.3)" : "rgba(255, 255, 255, 0.03)"}
                    strokeWidth={isActive ? "2" : "1.5"}
                    className="transition-all duration-500"
                  />

                  {/* Lit-up active connection path */}
                  {isActive && (
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="#ff6a2a"
                      strokeWidth="2.5"
                      filter="url(#glow-orange)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}

                  {/* Fast Single-Shot traveling pulse on change */}
                  {isActive && isPulseTraveling && (
                    <motion.path
                      key={`pulse-travel-${pulseKey}`}
                      d={pathD}
                      fill="none"
                      stroke="url(#pulse-gradient)"
                      strokeWidth="4"
                      strokeDasharray="40 300"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -340 }}
                      transition={{
                        duration: 0.45,
                        ease: "linear",
                      }}
                    />
                  )}

                  {/* Gentle looping pulse during active state */}
                  {isActive && !isPulseTraveling && (
                    <motion.path
                      key="pulse-loop"
                      d={pathD}
                      fill="none"
                      stroke="url(#pulse-gradient)"
                      strokeWidth="3.5"
                      strokeDasharray="50 350"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -400 }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        repeatDelay: 3.5,
                        ease: "linear",
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        )}

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start relative z-20">
          
          {/* Left Column: Vertical Services List */}
          <div className="flex flex-col gap-4">
            {displayServices.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  ref={(el) => (btnRefs.current[index] = el)}
                  className={`group relative flex items-center justify-between text-left p-6 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "border-bitOrange/30 bg-[#0c1322]/80 shadow-[0_0_24px_rgba(255,106,42,0.05)]"
                      : "border-white/5 bg-transparent hover:border-white/10 hover:bg-white/[0.01]"
                  }`}
                  onClick={() => handleServiceSelect(index)}
                  onMouseEnter={() => handleServiceSelect(index)}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-xs font-black transition-colors duration-300 ${
                        isActive ? "text-bitOrange" : "text-slate-600 group-hover:text-slate-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-lg font-black transition-all duration-500 ${
                        isActive
                          ? "text-white translate-x-2"
                          : "text-slate-400 group-hover:text-white group-hover:translate-x-1"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-8 px-2.5 place-items-center rounded-lg border transition-all duration-300 text-[10px] font-black uppercase tracking-wider ${
                        isActive
                          ? "border-bitOrange bg-bitOrange/10 text-bitOrange shadow-[0_0_12px_rgba(255,106,42,0.15)]"
                          : "border-white/10 bg-white/[0.02] text-slate-400 group-hover:border-white/20 group-hover:text-slate-300"
                      }`}
                    >
                      {service.shortCode}
                    </div>

                    {/* Glowing active node beside the active service */}
                    {isActive && (
                      <motion.span 
                        layoutId="activeDot"
                        className="w-2.5 h-2.5 rounded-full bg-bitOrange shadow-[0_0_10px_#ff6a2a] z-30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Cinematic Details Panel */}
          <div className="relative lg:sticky lg:top-24 min-h-[500px]">
            <motion.div
              ref={cardRef}
              animate={{
                scale: activeIndex === displayedIndex && !isPulseTraveling ? 1.01 : 1.0,
                borderColor: activeIndex === displayedIndex && !isPulseTraveling 
                  ? "rgba(255, 106, 42, 0.5)" 
                  : "rgba(255, 255, 255, 0.08)",
                boxShadow: activeIndex === displayedIndex && !isPulseTraveling
                  ? "0 0 50px -15px rgba(255, 106, 42, 0.25)"
                  : "0 0 30px -15px rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border bg-[linear-gradient(145deg,rgba(5,8,22,0.98),rgba(10,17,32,0.94))] p-8 lg:p-12 flex flex-col justify-between min-h-[500px] h-full group"
            >
              {/* Large Background Shortcode Watermark */}
              <div className="pointer-events-none absolute -bottom-10 -right-5 text-[150px] font-black opacity-[0.015] select-none uppercase tracking-tighter transition-transform duration-1000 group-hover:scale-105">
                {displayedService.shortCode}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={displayedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col justify-between h-full"
                >
                  {/* Content Top */}
                  <div>
                    {/* Badge & Rating Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span
                        className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-black tracking-widest uppercase"
                        style={{
                          borderColor: `${displayedService.color || "#ff6a2a"}40`,
                          backgroundColor: `${displayedService.color || "#ff6a2a"}08`,
                          color: displayedService.color || "#ff6a2a",
                        }}
                      >
                        {displayedService.shortCode}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                        <div className="flex items-center text-bitOrange mr-1.5">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-sm">★</span>
                          ))}
                        </div>
                        <span>5.0 STAR</span>
                      </div>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-8 text-3xl sm:text-4xl font-black text-white leading-tight">
                      {displayedService.heroTitle || displayedService.title}
                    </h2>

                    {/* Hero Description */}
                    <p className="mt-4 text-sm font-medium leading-7 text-slate-400">
                      {displayedService.heroDescription}
                    </p>

                    {/* Divider */}
                    <div className="my-8 h-px bg-white/5" />

                    {/* Details & Deliverables */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                          Core Deliverables
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {displayedService.description}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                          Latest Project Delivered
                        </p>
                        <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.01] px-3.5 py-2 text-sm font-bold text-white shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-bitOrange" />
                          {serviceProjects[displayedService.id] || "Enterprise Custom Build"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-12 flex flex-col sm:flex-row gap-4 relative z-10">
                    <a
                      className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:scale-[1.01]"
                      style={{
                        backgroundColor: displayedService.color || "#ff6a2a",
                        boxShadow: `0 8px 20px -8px ${displayedService.color || "#ff6a2a"}50`,
                      }}
                      href={displayedService.href}
                    >
                      View Details &rarr;
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:border-bitOrange hover:text-bitOrange hover:scale-[1.01]"
                      href={`/proposal?service=${displayedService.id}`}
                    >
                      Request Service &rarr;
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>
      )}
    </main>
  );
}