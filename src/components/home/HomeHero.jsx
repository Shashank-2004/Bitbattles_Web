import { motion } from "framer-motion";
import { VantaBackground } from "./VantaBackground";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypeAnimation } from "react-type-animation";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bitCharcoal px-5 pt-28 pb-12 sm:px-6 lg:px-8">
      <VantaBackground />

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_72%_22%,rgba(9,75,168,0.34),transparent_31%),linear-gradient(180deg,rgba(5,7,16,0.2),rgba(5,7,16,0.82)_76%)]" />

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
          {/* HERO HEADING */}
          <div className="max-w-2xl">
            <TypeAnimation
              sequence={[
                "We Build.",
                300,
                "We Build.\nYou Scale.",
              ]}
              wrapper="h1"
              speed={52}
              cursor={false}
              repeat={0}
              style={{
                whiteSpace: "pre-line",
              }}
              className="block text-5xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl"
            />

            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.5,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-5xl font-black leading-[1.04] tracking-normal text-bitOrange drop-shadow-[0_0_24px_rgba(255,106,42,0.34)] sm:text-6xl lg:text-7xl"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 12px rgba(255,106,42,0.18)",
                    "0 0 34px rgba(255,106,42,0.48)",
                    "0 0 12px rgba(255,106,42,0.18)",
                  ],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                We Win.
              </motion.span>
            </motion.span>
          </div>

          {/* SUBTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.4,
              duration: 0.7,
            }}
          >
            <TextGenerateEffect
              className="mt-4 max-w-xl text-base font-semibold leading-8 text-slate-400"
              duration={0.35}
              filter
              words="BitBattles builds intelligent digital products and AI-powered solutions that help businesses automate, innovate, and grow faster in a digital world."
            />
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.8,
              duration: 0.6,
            }}
          >
            <motion.a
              className="inline-flex items-center justify-center rounded-md bg-bitOrange px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:bg-orange-500 hover:shadow-[0_0_34px_rgba(255,106,42,0.55)]"
              href="/services"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services -&gt;
            </motion.a>

            <motion.a
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/[0.03] px-6 py-3 text-sm font-black text-white backdrop-blur-sm transition duration-300 hover:border-bitOrange hover:text-bitOrange hover:shadow-[0_0_28px_rgba(255,106,42,0.22)]"
              href="/portfolio"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Work -&gt;
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative min-h-[520px] lg:translate-x-16"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            animate={{ opacity: [0.24, 0.42, 0.24], scale: [0.94, 1.04, 0.94] }}
            className="absolute inset-4 rounded-full bg-bitOrange/25 blur-3xl"
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-x-10 bottom-10 h-24 rounded-full bg-blue-500/20 blur-3xl" />

          {[0, 1, 2].map((ring) => (
            <div
              className="absolute left-1/2 top-1/2 z-[2] hidden -translate-x-1/2 -translate-y-1/2 lg:block"
              key={ring}
              style={{
                transformStyle: "preserve-3d",
                transform: "translate(-50%, -50%) rotateX(66deg)",
              }}
            >
              <motion.div
                animate={{ rotate: ring % 2 ? -360 : 360 }}
                className="rounded-full border border-bitOrange/25 bg-[conic-gradient(from_90deg,transparent,rgba(255,106,42,0.5),transparent_34%)] opacity-70 blur-[0.2px]"
                style={{
                  height: `${360 + ring * 72}px`,
                  width: `${560 + ring * 100}px`,
                }}
                transition={{
                  duration: 28 + ring * 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          ))}

          <motion.img
            animate={{ y: [0, -14, 0], rotate: [0, 0.8, 0] }}
            alt="BitBattles AI services cube"
            className="relative z-10 ml-auto w-full max-w-[820px] object-contain drop-shadow-[0_0_120px_rgba(255,106,42,0.52)]"
            src="/images/hero-cube.png"
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}