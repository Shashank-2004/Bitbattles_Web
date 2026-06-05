import { motion } from "framer-motion";
import { VantaBackground } from "./VantaBackground";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-bitCharcoal px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <VantaBackground />

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_72%_22%,rgba(9,75,168,0.34),transparent_31%),radial-gradient(circle_at_20%_32%,rgba(255,106,42,0.18),transparent_27%),linear-gradient(180deg,rgba(5,7,16,0.2),rgba(5,7,16,0.82)_76%)]" />

      <div className="relative z-10 mx-auto grid min-h-[610px] max-w-[1280px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 className="max-w-2xl text-5xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
            We Build. You Scale.{" "}
            <span className="text-bitOrange">We Win.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-slate-400">
            BitBattles builds intelligent digital products and AI-powered
            solutions that help businesses automate, innovate, and grow faster
            in a digital world.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              className="inline-flex items-center justify-center rounded-md bg-bitOrange px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-500 hover:shadow-orange-500/40"
              href="/services"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services -&gt;
            </motion.a>

            <motion.a
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:border-bitOrange hover:text-bitOrange"
              href="/portfolio"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Work -&gt;
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative min-h-[520px] lg:translate-x-16"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* ORANGE GLOW */}
          <div className="absolute inset-6 rounded-full bg-bitOrange/20 blur-3xl" />

          {/* BLUE GLOW */}
          <div className="absolute inset-x-10 bottom-10 h-24 rounded-full bg-blue-500/20 blur-3xl" />

          <img
            alt="BitBattles AI services cube"
            className="relative z-10 ml-auto w-full max-w-[820px] object-contain drop-shadow-[0_0_120px_rgba(255,106,42,0.45)]"
            src="/images/hero-cube.png"
          />
        </motion.div>
      </div>
    </section>
  );
}