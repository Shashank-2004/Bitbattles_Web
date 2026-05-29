import { motion } from "framer-motion";
import { GlowBackground } from "../common/GlowBackground";
import { Reveal } from "../common/Reveal";
import { TechIllustration } from "../visuals/TechIllustration";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-bitCharcoal">
      <GlowBackground />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <Reveal>
          <p className="inline-flex rounded-full border border-bitOrange/30 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-orange-200 backdrop-blur">
            AI & Digital Solutions
          </p>
          <h1 className="mt-6 max-w-xl text-5xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            We Build. You Scale. We Win.
          </h1>
          <p className="mt-7 max-w-xl text-base font-medium leading-8 text-slate-300">
            BitBattles helps early-stage teams innovate, automate, and ship clean digital products
            through AI, web, mobile, and software development.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              className="service-card-focus inline-flex items-center justify-center rounded-md bg-bitOrange px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
              href="/contact"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
            <motion.a
              className="service-card-focus inline-flex items-center justify-center rounded-md border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur transition hover:border-teal-300 hover:text-teal-100"
              href="/portfolio"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Our work
            </motion.a>
          </div>
        </Reveal>

        <Reveal>
          <TechIllustration label="BitBattles ESP" />
        </Reveal>
      </div>
    </section>
  );
}
