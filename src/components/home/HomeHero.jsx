import { motion } from "framer-motion";

const trustSignals = [
  ["AI-first", "Product strategy"],
  ["Secure", "Backend workflows"],
  ["Launch-ready", "Web + mobile builds"],
];

const floatingBadges = [
  ["AI", "Automation"],
  ["UX", "Interfaces"],
  ["API", "Integrations"],
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-bitCharcoal px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(9,75,168,0.34),transparent_31%),radial-gradient(circle_at_20%_32%,rgba(255,106,42,0.16),transparent_27%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_24%)]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-px w-[760px] -translate-x-1/2 bg-gradient-to-r from-transparent via-bitOrange/60 to-transparent" />
      <div className="relative mx-auto grid min-h-[610px] max-w-[1180px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <p className="inline-flex rounded-md border border-bitOrange/40 bg-black/45 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-bitOrange shadow-[0_0_30px_rgba(255,106,42,0.18)] backdrop-blur">
            AI & Digital Solutions
          </p>
          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
            We Build. You Scale. <span className="text-bitOrange">We Win.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-slate-400">
            BitBattles builds intelligent digital products and AI-powered solutions that help
            businesses automate, innovate, and grow faster in a digital world.
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

          <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
            {trustSignals.map(([label, text]) => (
              <motion.div
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4 backdrop-blur transition hover:border-bitOrange/45 hover:bg-bitOrange/[0.055]"
                key={label}
                whileHover={{ y: -4 }}
              >
                <p className="text-sm font-black text-white">{label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[390px]"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-6 rounded-full bg-bitOrange/15 blur-3xl" />
          <div className="absolute inset-x-10 bottom-5 h-16 rounded-full bg-blue-500/20 blur-3xl" />
          <img
            alt="BitBattles AI services cube"
            className="relative z-10 ml-auto w-full max-w-[650px] object-contain drop-shadow-[0_0_85px_rgba(255,106,42,0.38)]"
            src="/images/hero-cube.png"
          />
          {floatingBadges.map(([code, label], index) => (
            <motion.div
              animate={{ y: [0, index % 2 ? 14 : -14, 0], x: [0, index % 2 ? -8 : 8, 0] }}
              className={`absolute z-20 hidden rounded-lg border border-white/15 bg-[#07101c]/80 px-4 py-3 shadow-2xl shadow-orange-950/30 backdrop-blur lg:block ${
                index === 0 ? "left-4 top-20" : index === 1 ? "right-4 top-32" : "bottom-20 left-16"
              }`}
              key={code}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-black text-bitOrange">{code}</p>
              <p className="mt-1 text-[11px] font-semibold text-slate-300">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
