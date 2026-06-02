import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-bitCharcoal px-5 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(9,75,168,0.28),transparent_30%),radial-gradient(circle_at_28%_40%,rgba(255,106,42,0.1),transparent_25%)]" />
      <div className="relative mx-auto grid min-h-[560px] max-w-[1180px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="inline-flex rounded-md border border-bitOrange/40 bg-black/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-bitOrange">
            AI & Digital Solutions
          </p>
          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
            We Build. You Scale. <span className="text-bitOrange">We Win.</span>
          </h1>
          <p className="mt-7 max-w-lg text-sm font-semibold leading-7 text-slate-500">
            BitBattles builds intelligent digital products and AI-powered solutions that help
            businesses automate, innovate, and grow faster in a digital world.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              className="inline-flex items-center justify-center rounded-md bg-bitOrange px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-500"
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
