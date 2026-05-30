import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlowBackground } from "../common/GlowBackground";
import { Reveal } from "../common/Reveal";
import { services } from "../../data/services";

const splineSceneUrl = import.meta.env.VITE_SPLINE_SCENE_URL || "undefined";

const floatingCards = [
  { label: "AI Solutions", className: "left-6 top-8", path: { x: [0, 16, -8, 0], y: [0, -18, 8, 0] } },
  { label: "SaaS Development", className: "right-8 top-16", path: { x: [0, -14, 10, 0], y: [0, 14, -10, 0] } },
  { label: "Web Development", className: "left-10 top-1/2", path: { x: [0, 12, -10, 0], y: [0, 18, -8, 0] } },
  { label: "Mobile Apps", className: "right-4 top-[48%]", path: { x: [0, -18, 8, 0], y: [0, -12, 14, 0] } },
  { label: "Cyber Security", className: "left-16 bottom-12", path: { x: [0, 18, -12, 0], y: [0, -10, 16, 0] } },
  { label: "Automation", className: "right-14 bottom-10", path: { x: [0, -12, 16, 0], y: [0, 16, -12, 0] } },
];

export function HomeHero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (customElements.get("spline-viewer")) {
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.95/build/spline-viewer.js";
    document.head.appendChild(script);
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  return (
    <section className="relative overflow-hidden bg-bitCharcoal">
      <GlowBackground />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="relative z-20">
          <p className="inline-flex rounded-full border border-bitOrange/30 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-orange-200 backdrop-blur">
            AI, SaaS, Software & Security
          </p>
          <h1 className="mt-6 max-w-xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            We Build. You Scale. We Win.
          </h1>
          <p className="mt-7 max-w-xl text-base font-medium leading-8 text-slate-300">
            BitBattles builds SaaS products, websites, mobile apps, cybersecurity interfaces,
            security systems, and automation workflows for modern teams.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              className="service-card-focus inline-flex items-center justify-center rounded-md bg-bitOrange px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
              href="/proposal"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Proposal
            </motion.a>
            <motion.a
              className="service-card-focus inline-flex items-center justify-center rounded-md border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur transition hover:border-teal-300 hover:text-teal-100"
              href="/services"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore services
            </motion.a>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="relative z-10 min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur md:min-h-[560px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setParallax({ x: 0, y: 0 })}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ x: parallax.x * 18, y: parallax.y * 18 }}
              transition={{ type: "spring", stiffness: 90, damping: 22 }}
            >
              <spline-viewer
                class="block h-full min-h-[440px] w-full md:min-h-[560px]"
                url={splineSceneUrl}
              />
            </motion.div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(16,25,29,0.18)_62%,rgba(16,25,29,0.7)_100%)]" />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />

            {floatingCards.map((card, index) => {
              const service = services.find((item) => item.title === card.label);

              return (
                <motion.a
                  className={`absolute ${card.className} z-20 rounded-2xl border border-white/18 bg-white/12 px-4 py-3 text-xs font-black text-white shadow-2xl shadow-orange-500/10 backdrop-blur-xl transition hover:border-bitOrange/70 hover:bg-bitOrange/20 sm:text-sm`}
                  href={service?.href || "/services"}
                  key={card.label}
                  animate={{
                    x: card.path.x.map((value) => value + parallax.x * (index % 2 ? -18 : 18)),
                    y: card.path.y.map((value) => value + parallax.y * (index % 2 ? 18 : -18)),
                  }}
                  transition={{
                    duration: 6 + index * 0.55,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.06, y: -4 }}
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-bitOrange shadow-[0_0_18px_rgba(255,106,42,0.9)]" />
                  {card.label}
                </motion.a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
