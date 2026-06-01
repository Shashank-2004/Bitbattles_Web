import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlowBackground } from "../common/GlowBackground";
import { Reveal } from "../common/Reveal";
import { services } from "../../data/services";

const floatingCards = [
  {
    id: "ai-solutions",
    icon: "🧠",
    label: "AI Solutions",
    description: "Intelligent systems for smarter decisions",
    className: "left-[0%] top-[4%] w-[130px] sm:w-[170px]",
    href: "/services/ai-solutions"
  },
  {
    id: "web-development",
    icon: "🌐",
    label: "Web Development",
    description: "Scalable systems & high performance",
    className: "left-[-3%] top-[34%] w-[130px] sm:w-[170px]",
    href: "/services/web-development"
  },
  {
    id: "mobile-apps",
    icon: "📱",
    label: "Mobile Apps",
    description: "Cross-platform experiences",
    className: "left-[0%] top-[64%] w-[130px] sm:w-[170px]",
    href: "/services/mobile-apps"
  },
  {
    id: "cloud-implementation",
    icon: "☁️",
    label: "Cloud Solutions",
    description: "Scalable services & future ready cloud",
    className: "left-[26%] bottom-[2%] w-[130px] sm:w-[170px] hidden sm:block",
    href: "/services/cloud-implementation"
  },
  {
    id: "ui-ux-design",
    icon: "🎨",
    label: "UI/UX Design",
    description: "Immersive designs that drive results",
    className: "right-[-3%] top-[42%] w-[130px] sm:w-[170px]",
    href: "/services/ui-ux-design"
  },
  {
    id: "automation",
    icon: "⚡",
    label: "Automation",
    description: "Automate workflows & boost productivity",
    className: "right-[0%] top-[72%] w-[130px] sm:w-[170px]",
    href: "/services/automation"
  }
];

export function HomeHero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-[#0c1317] via-[#10191d] to-[#080d10]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
    >
      <GlowBackground />
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        {/* Left Column — Copy & CTAs */}
        <Reveal className="relative z-20">
          <p className="inline-flex rounded-full border border-bitOrange/30 bg-white/5 px-4.5 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-orange-200 backdrop-blur-md">
            AI & Digital Solutions
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            We Build. You <br />
            Scale. <span className="bg-gradient-to-r from-bitOrange to-[#ff9d6c] bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(255,106,42,0.3)]">We Win.</span>
          </h1>
          <p className="mt-7 max-w-xl text-sm sm:text-base font-medium leading-8 text-slate-400">
            BitBattles builds intelligent digital products and AI-powered solutions
            that help businesses automate, innovate and grow faster in a digital world.
          </p>

          <div className="mt-10 flex flex-row gap-4 flex-wrap">
            <motion.a
              className="service-card-focus inline-flex items-center justify-center rounded-md bg-bitOrange px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 gap-1.5"
              href="/services"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services <span className="text-sm">→</span>
            </motion.a>
            <motion.a
              className="service-card-focus inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-black text-white backdrop-blur-md transition hover:border-bitOrange hover:text-orange-200 gap-1.5"
              href="/portfolio"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Work <span className="text-sm">→</span>
            </motion.a>
          </div>
        </Reveal>

        {/* Right Column — Glowing Interactive 3D SVG Tech Cube Viewport */}
        <Reveal className="relative z-10 w-full min-h-[500px] md:min-h-[580px] flex items-center justify-center overflow-visible">
          <div 
            className="w-full h-full relative aspect-square max-w-[580px] mx-auto overflow-visible"
          >
            {/* Viewport SVG Grid, base circles, cube, and link curves */}
            <svg 
              viewBox="0 0 600 600" 
              className="w-full h-full block overflow-visible select-none pointer-events-none"
            >
              <defs>
                {/* Glowing radial backdrop for the cube */}
                <radialGradient id="viewportGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff6a2a" stopOpacity="0.32" />
                  <stop offset="60%" stopColor="#355d68" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#ff6a2a" stopOpacity="0" />
                </radialGradient>
                
                {/* Cube Left & Right face gradient shading */}
                <linearGradient id="cubeLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="cubeRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="cubeTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#111827" />
                </linearGradient>
              </defs>

              {/* Center glow behind the cube */}
              <circle cx="300" cy="300" r="220" fill="url(#viewportGlow)" opacity="0.85" />

              {/* Dotted connection paths radiating from telemetry base (300,380) */}
              <g opacity="0.25" stroke="#ff6a2a" strokeWidth="1.5" fill="none" strokeDasharray="4,4">
                <path d="M 300,380 Q 200,280 70,120" />
                <path d="M 300,380 Q 180,330 60,250" />
                <path d="M 300,380 Q 180,410 70,430" />
                <path d="M 300,380 Q 250,470 200,510" className="hidden sm:block" />
                <path d="M 300,380 Q 420,280 490,110" />
                <path d="M 300,380 Q 440,360 500,310" />
                <path d="M 300,380 Q 420,430 490,460" />
              </g>

              {/* Path connector terminal points */}
              <g fill="#ff6a2a" opacity="0.5">
                <circle cx="70" cy="120" r="3" />
                <circle cx="60" cy="250" r="3" />
                <circle cx="70" cy="430" r="3" />
                <circle cx="200" cy="510" r="3" className="hidden sm:block" />
                <circle cx="490" cy="110" r="3" />
                <circle cx="500" cy="310" r="3" />
                <circle cx="490" cy="460" r="3" />
              </g>

              {/* Concentric Telemetry Base Orbits */}
              <g>
                {/* Outer Dashed Orbit - counter-clockwise light sweep */}
                <motion.ellipse
                  cx="300"
                  cy="380"
                  rx="180"
                  ry="54"
                  fill="none"
                  stroke="#ff6a2a"
                  strokeWidth="2"
                  strokeDasharray="16, 16"
                  opacity="0.3"
                  animate={{ strokeDashoffset: [0, 320] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner Dashed Orbit - clockwise light sweep */}
                <motion.ellipse
                  cx="300"
                  cy="380"
                  rx="130"
                  ry="39"
                  fill="none"
                  stroke="#355d68"
                  strokeWidth="1.5"
                  strokeDasharray="12, 12"
                  opacity="0.4"
                  animate={{ strokeDashoffset: [0, -240] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                {/* Solid concentric bases */}
                <ellipse cx="300" cy="380" rx="90" ry="27" fill="none" stroke="#ff6a2a" strokeWidth="1.5" opacity="0.5" />
                <ellipse cx="300" cy="380" rx="60" ry="18" fill="none" stroke="#355d68" strokeWidth="1" opacity="0.3" />
              </g>

              {/* Floating Isometric 3D Tech Cube */}
              {/* Nested motion group: Outer handles mouse parallax, Inner handles bounce */}
              <motion.g
                animate={{ 
                  x: parallax.x * 12,
                  y: parallax.y * 12
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 90, 
                  damping: 22 
                }}
              >
                <motion.g
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Left Face parallelogram */}
                  <polygon 
                    points="200,150 300,200 300,320 200,270" 
                    fill="url(#cubeLeftGrad)" 
                    stroke="#ff6a2a" 
                    strokeWidth="1.5" 
                    strokeLinejoin="round" 
                  />
                  {/* Left Face technical circuits */}
                  <polygon 
                    points="215,165 285,200 285,300 215,265" 
                    fill="none" 
                    stroke="#ff6a2a" 
                    strokeWidth="1" 
                    opacity="0.25" 
                  />
                  <path d="M 230,195 L 260,210 L 260,270 L 245,280" fill="none" stroke="#ff6a2a" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="245" cy="280" r="3.5" fill="#ff6a2a" opacity="0.8" />

                  {/* Right Face parallelogram */}
                  <polygon 
                    points="300,200 400,150 400,270 300,320" 
                    fill="url(#cubeRightGrad)" 
                    stroke="#ff6a2a" 
                    strokeWidth="1.5" 
                    strokeLinejoin="round" 
                  />
                  {/* Right Face technical circuits */}
                  <polygon 
                    points="315,200 385,165 385,265 315,300" 
                    fill="none" 
                    stroke="#355d68" 
                    strokeWidth="1" 
                    opacity="0.3" 
                  />
                  <path d="M 370,195 L 340,210 L 340,270 L 355,280" fill="none" stroke="#ff6a2a" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="355" cy="280" r="3.5" fill="#ff6a2a" opacity="0.8" />

                  {/* Top Face rhombus */}
                  <polygon 
                    points="300,100 400,150 300,200 200,150" 
                    fill="url(#cubeTopGrad)" 
                    stroke="#ff6a2a" 
                    strokeWidth="2" 
                    strokeLinejoin="round" 
                  />

                  {/* Transformed B Logo inside Top Rhombus using flat isometric mapping */}
                  <g transform="translate(300, 150) scaleY(0.5) rotate(45)">
                    {/* Outer glowing frame */}
                    <rect 
                      x="-34" 
                      y="-34" 
                      width="68" 
                      height="68" 
                      rx="10" 
                      fill="none" 
                      stroke="#ff6a2a" 
                      strokeWidth="3.5" 
                      style={{ filter: "drop-shadow(0px 0px 8px rgba(255,106,42,0.85))" }}
                    />
                    {/* Stylized geometric letter B */}
                    <path 
                      d="M -13, -16 L 8, -16 C 18, -16 18, -4 8, -4 C 18, -4 18, 8 8, 8 L -13, 8 Z" 
                      fill="none" 
                      stroke="#ff6a2a" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ filter: "drop-shadow(0px 0px 6px rgba(255,106,42,0.95))" }}
                    />
                    <line 
                      x1="-13" 
                      y1="-16" 
                      x2="-13" 
                      y2="8" 
                      stroke="#ff6a2a" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                    />
                  </g>
                </motion.g>
              </motion.g>
            </svg>

            {/* 1. Code Terminal Card (Top Right) */}
            <motion.div
              className="absolute right-[0%] top-[2%] z-20 w-[150px] sm:w-[190px]"
              animate={{
                x: parallax.x * 14,
                y: parallax.y * 14
              }}
              transition={{
                type: "spring", 
                stiffness: 80, 
                damping: 24
              }}
            >
              <motion.div
                className="w-full h-full rounded-xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-md transition hover:border-bitOrange/50 hover:bg-bitOrange/[0.04] hidden md:block overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.8 bg-black/30">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  <span className="ml-1.5 text-[8px] font-mono text-slate-400">index.js</span>
                </div>
                <pre className="p-3 font-mono text-[8px] sm:text-[9.5px] leading-relaxed text-slate-300 overflow-x-hidden text-left bg-black/40 rounded-b-xl select-none">
                  <div><span className="text-orange-400">const</span> <span className="text-blue-300">build</span> = () =&gt; &#123;</div>
                  <div className="pl-3 text-slate-400">// Transform ideas</div>
                  <div className="pl-3"><span className="text-purple-400">let</span> success = <span className="text-blue-300">trans</span>();</div>
                  <div className="pl-3"><span className="text-purple-400">if</span> (success) <span className="text-blue-300">scale</span>();</div>
                  <div>&#125;;</div>
                </pre>
              </motion.div>
            </motion.div>

            {/* 2. Six Floating Glassmorphic Service Cards */}
            {floatingCards.map((card, index) => {
              return (
                <motion.div
                  key={card.id}
                  className={`absolute ${card.className} z-20`}
                  animate={{
                    x: parallax.x * (index % 2 ? -14 : 14),
                    y: parallax.y * (index % 2 ? 14 : -14)
                  }}
                  transition={{
                    type: "spring", 
                    stiffness: 80, 
                    damping: 24
                  }}
                >
                  <motion.a
                    href={card.href}
                    className="block w-full h-full rounded-xl border border-white/10 bg-white/[0.03] p-2.5 sm:p-3 text-left shadow-2xl backdrop-blur-md transition hover:border-bitOrange/50 hover:bg-bitOrange/[0.05] group"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ 
                      duration: 5.5 + index * 0.45, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.3 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs sm:text-sm group-hover:bg-bitOrange/10 group-hover:scale-110 transition duration-300">
                        {card.icon}
                      </span>
                      <div>
                        <span className="block text-[10px] sm:text-xs font-black leading-tight text-white group-hover:text-bitOrange transition duration-300">
                          {card.label}
                        </span>
                        <span className="mt-0.5 block text-[8px] sm:text-[9.5px] leading-tight text-slate-400 font-medium">
                          {card.description}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
