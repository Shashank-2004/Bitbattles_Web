import { motion } from "framer-motion";

export function TechIllustration({ label = "AI System" }) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#10191d] p-5 shadow-2xl shadow-black/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(20,184,166,0.28),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(255,106,42,0.24),transparent_28%)]" />
      <motion.div
        className="absolute right-8 top-8 h-20 w-20 rounded-2xl bg-bitOrange/80 blur-sm"
        animate={{ rotate: [0, 8, 0], y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-8 bottom-8 h-24 w-24 rounded-full border border-teal-300/40"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex h-full min-h-[320px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-200">{label}</p>
            <h2 className="mt-2 text-2xl font-black text-white">Launch cockpit</h2>
          </div>
          <img className="h-16 w-16 rounded-xl bg-white p-2" src="/bitbattles-logo.svg" alt="" />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Plan", "Ready"],
            ["Build", "Active"],
            ["Launch", "Next"],
          ].map(([title, state]) => (
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/10 p-4"
              key={title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <p className="text-sm font-black text-white">{title}</p>
              <p className="mt-2 text-xs text-teal-100">{state}</p>
              <div className="mt-5 h-2 rounded-full bg-white/10">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-bitOrange to-teal-300"
                  initial={{ width: "20%" }}
                  whileInView={{ width: title === "Plan" ? "92%" : title === "Build" ? "68%" : "44%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="font-black text-bitCharcoal">Startup delivery system</p>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-black text-teal-700">
              Smooth
            </span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[72, 54, 84].map((height, index) => (
              <div className="flex h-20 items-end rounded-xl bg-slate-100 p-2" key={height}>
                <motion.div
                  className="w-full rounded-lg bg-bitOrange"
                  initial={{ height: 8 }}
                  whileInView={{ height }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.8 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
