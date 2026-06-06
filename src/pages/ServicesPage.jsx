import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";

const serviceProjects = {
  "ai-solutions": "Omni-Channel Support AI Agent & Dashboard",
  "web-development": "Fintech Enterprise Web Platform",
  "mobile-apps": "HealthCare+ Mobile App Suite",
  "cyber-security": "Secure Authentication Intake Gateways",
  "automation": "Slack & CRM Operational Pipelines",
  "ui-ux-design": "Figma Enterprise Design System & UX Audit",
  "qa-testing": "Automated Testing Suite for NeoBank API",
  "cloud-implementation": "Multi-Region AWS Kubernetes Orchestration",
  "ar-vr-development": "Immersive 3D Spatial Virtual Showroom",
};

export function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex] || services[0];

  return (
    <main className="relative min-h-screen bg-bitCharcoal text-white font-sans overflow-hidden">
      
      {/* Dynamic Background Glows (Shift color and position based on hovered service) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        
        {/* Glowing Blob 1 */}
        <motion.div
          className="absolute rounded-full blur-[140px] opacity-[0.08]"
          animate={{
            backgroundColor: activeService.color || "#ff6a2a",
            x: [
              "0%",
              `${(activeIndex * 6) % 20}%`,
              `-${(activeIndex * 8) % 15}%`,
              "0%",
            ],
            y: [
              "0%",
              `-${(activeIndex * 7) % 15}%`,
              `${(activeIndex * 9) % 20}%`,
              "0%",
            ],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{
            backgroundColor: { duration: 0.8, ease: "easeInOut" },
            x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 16, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            top: "25%",
            right: "15%",
            width: "550px",
            height: "550px",
          }}
        />

        {/* Glowing Blob 2 */}
        <motion.div
          className="absolute rounded-full blur-[160px] opacity-[0.05]"
          animate={{
            backgroundColor: activeService.color || "#ff6a2a",
            x: [
              "0%",
              `-${(activeIndex * 9) % 20}%`,
              `${(activeIndex * 7) % 15}%`,
              "0%",
            ],
            y: [
              "0%",
              `${(activeIndex * 6) % 15}%`,
              `-${(activeIndex * 8) % 20}%`,
              "0%",
            ],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            backgroundColor: { duration: 0.8, ease: "easeInOut" },
            x: { duration: 22, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 22, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            top: "55%",
            left: "10%",
            width: "650px",
            height: "650px",
          }}
        />
      </div>

      {/* Header Section */}
      <section className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-6 lg:px-8 text-center z-10">
        
        <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Services We Provide
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm font-semibold leading-7 text-slate-400">
          End-to-end engineering, custom AI architectures, and high-fidelity interfaces built for teams that demand practical, production-ready product execution.
        </p>
      </section>

      {/* Interactive Showcase Section */}
      <section className="relative mx-auto max-w-[1180px] px-5 pb-32 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          
          {/* Left Column: Minimalist Services List */}
          <div className="flex flex-col gap-2.5">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  className={`group flex items-center justify-between text-left p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-bitOrange/40 bg-[#101725]/60 shadow-[0_0_24px_rgba(255,106,42,0.08)]"
                      : "border-white/5 bg-transparent hover:border-white/10 hover:bg-white/[0.015]"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
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
                      className={`text-lg font-black transition-all duration-300 ${
                        isActive
                          ? "text-white translate-x-1.5"
                          : "text-slate-400 group-hover:text-white group-hover:translate-x-1"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                  <div
                    className={`grid h-8 px-2.5 place-items-center rounded-lg border transition-all duration-300 text-[10px] font-black uppercase tracking-wider ${
                      isActive
                        ? "border-bitOrange bg-bitOrange/10 text-bitOrange shadow-[0_0_12px_rgba(255,106,42,0.15)]"
                        : "border-white/10 bg-white/[0.02] text-slate-400 group-hover:border-white/20 group-hover:text-slate-300"
                    }`}
                  >
                    {service.shortCode}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Cinematic Details Panel */}
          <div className="relative lg:sticky lg:top-24 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-bitOrange/25 bg-[linear-gradient(145deg,rgba(7,16,28,0.98),rgba(11,19,33,0.92))] p-8 lg:p-12 shadow-[0_0_45px_rgba(255,106,42,0.15)] flex flex-col justify-between min-h-[500px] h-full group"
                style={{
                  boxShadow: `0 0 50px -15px ${activeService.color || "#ff6a2a"}2a`,
                  borderColor: `${activeService.color || "#ff6a2a"}40`,
                }}
              >
                {/* Large Background Shortcode Watermark */}
                <div className="pointer-events-none absolute -bottom-10 -right-5 text-[150px] font-black opacity-[0.02] select-none uppercase tracking-tighter transition-transform duration-1000 group-hover:scale-105">
                  {activeService.shortCode}
                </div>

                {/* Content Top */}
                <div>
                  {/* Badge & Rating Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span
                      className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-black tracking-widest uppercase"
                      style={{
                        borderColor: `${activeService.color || "#ff6a2a"}50`,
                        backgroundColor: `${activeService.color || "#ff6a2a"}10`,
                        color: activeService.color || "#ff6a2a",
                      }}
                    >
                      {activeService.shortCode}
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
                    {activeService.heroTitle || activeService.title}
                  </h2>

                  {/* Hero Description */}
                  <p className="mt-4 text-sm font-semibold leading-7 text-slate-400">
                    {activeService.heroDescription}
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
                        {activeService.description}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                        Latest Project Delivered
                      </p>
                      <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-2 text-sm font-bold text-white shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-bitOrange" />
                        {serviceProjects[activeService.id] || "Enterprise Custom Build"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 relative z-10">
                  <a
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:scale-[1.01]"
                    style={{
                      backgroundColor: activeService.color || "#ff6a2a",
                      boxShadow: `0 8px 20px -8px ${activeService.color || "#ff6a2a"}80`,
                    }}
                    href={activeService.href}
                  >
                    View Details &rarr;
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:border-bitOrange hover:text-bitOrange hover:scale-[1.01]"
                    href={`/proposal?service=${activeService.id}`}
                  >
                    Request Service &rarr;
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>
    </main>
  );
}