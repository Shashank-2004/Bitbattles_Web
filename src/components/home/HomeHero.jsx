import { motion } from "framer-motion";
<<<<<<< HEAD
=======
import { GlowBackground } from "../common/GlowBackground";
import { Reveal } from "../common/Reveal";
import { services } from "../../data/services";

const splineSceneUrl = import.meta.env.VITE_SPLINE_SCENE_URL || "undefined";

const floatingCards = [
  { label: "AI Solutions", className: "left-6 top-8", path: { x: [0, 16, -8, 0], y: [0, -18, 8, 0] } },
  { label: "QA & Testing", className: "right-8 top-16", path: { x: [0, -14, 10, 0], y: [0, 14, -10, 0] } },
  { label: "Web Development", className: "left-10 top-1/2", path: { x: [0, 12, -10, 0], y: [0, 18, -8, 0] } },
  { label: "Mobile Apps", className: "right-4 top-[48%]", path: { x: [0, -18, 8, 0], y: [0, -12, 14, 0] } },
  { label: "Cyber Security", className: "left-16 bottom-12", path: { x: [0, 18, -12, 0], y: [0, -10, 16, 0] } },
  { label: "Automation", className: "right-14 bottom-10", path: { x: [0, -12, 16, 0], y: [0, 16, -12, 0] } },
];
>>>>>>> bbdbdf675dbcfd53906d444e41caf982d54132d3

export function HomeHero() {
  return (
<<<<<<< HEAD
    <section className="relative overflow-hidden bg-bitCharcoal px-5 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(9,75,168,0.28),transparent_30%),radial-gradient(circle_at_28%_40%,rgba(255,106,42,0.1),transparent_25%)]" />
      <div className="relative mx-auto grid min-h-[560px] max-w-[1180px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="inline-flex rounded-md border border-bitOrange/40 bg-black/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-bitOrange">
            AI & Digital Solutions
=======
    <section className="relative overflow-hidden bg-bitCharcoal">
      <GlowBackground />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="relative z-20">
          <p className="inline-flex rounded-full border border-bitOrange/30 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-orange-200 backdrop-blur">
            AI, Software, Apps & Security
>>>>>>> bbdbdf675dbcfd53906d444e41caf982d54132d3
          </p>
          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
            We Build. You Scale. <span className="text-bitOrange">We Win.</span>
          </h1>
<<<<<<< HEAD
          <p className="mt-7 max-w-lg text-sm font-semibold leading-7 text-slate-500">
            BitBattles builds intelligent digital products and AI-powered solutions that help
            businesses automate, innovate and grow faster in a digital world.
=======
          <p className="mt-7 max-w-xl text-base font-medium leading-8 text-slate-300">
            BitBattles builds websites, mobile apps, AI solutions, cybersecurity interfaces,
            security systems, and automation workflows for modern teams.
>>>>>>> bbdbdf675dbcfd53906d444e41caf982d54132d3
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              className="inline-flex items-center justify-center rounded-md bg-bitOrange px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-500"
              href="/services"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services →
            </motion.a>
            <motion.a
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:border-bitOrange hover:text-bitOrange"
              href="/portfolio"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Work →
            </motion.a>
          </div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            alt="BitBattles AI services cube"
            className="relative z-10 ml-auto w-full max-w-[650px] object-contain drop-shadow-[0_0_70px_rgba(255,106,42,0.32)]"
            src="/images/hero-cube.png"
          />
        </motion.div>
      </div>
    </section>
  );
}
