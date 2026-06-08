import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { licenses, licenseCategories } from "../data/licenses";

export function LicensesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedLicense, setSelectedLicense] = useState(null);

  const filteredLicenses = activeCategory === "all"
    ? licenses
    : licenses.filter((lic) => lic.category === activeCategory);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-bitCharcoal text-white font-sans">
      {/* Background Gradients & Animated Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,106,42,0.12),transparent_30%),radial-gradient(circle_at_25%_60%,rgba(16,184,232,0.1),transparent_35%)]" />
        
        {/* Pulsing Accent Divider Line */}
        <motion.div
          className="absolute left-1/2 top-20 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-bitOrange/40 to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Glowing Blobs */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-bitOrange/10 blur-[100px]"
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-aqua/8 blur-[80px]"
          animate={{ x: [0, 15, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1180px] px-5 pt-24 pb-12 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex rounded-md border border-bitOrange/30 bg-black/40 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">
            Legal & Compliance
          </p>
          <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Our <span className="text-bitOrange">Licenses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-400">
            BitBattles operates with full compliance, maintaining military, aviation, software IP, and dual-use authorizations for high-tech product delivery.
          </p>
        </motion.div>
      </section>

      {/* Filter Selection Tabs */}
      <section className="relative mx-auto max-w-[1180px] px-5 pb-8 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none justify-start sm:justify-center border-b border-white/5 sm:pb-8 flex-nowrap sm:flex-wrap">
          {licenseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 border ${
                activeCategory === category.id
                  ? "bg-bitOrange border-bitOrange text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/5 border-white/10 text-slate-400 hover:border-bitOrange/35 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Licenses */}
      <section className="relative mx-auto max-w-[1180px] px-5 pb-24 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory}
        >
          {filteredLicenses.map((lic) => (
            <motion.article
              key={lic.id}
              variants={cardVariants}
              onClick={() => setSelectedLicense(lic)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-bitOrange/20 bg-[#07101c]/90 p-6 shadow-[0_0_30px_rgba(255,106,42,0.06)] hover:shadow-[0_0_45px_rgba(255,106,42,0.18)] border-t-bitOrange/30 hover:border-bitOrange transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -5 }}
            >
              {/* Internal Accent Glow */}
              <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-bitOrange/5 blur-xl group-hover:bg-bitOrange/12 transition-all duration-300" />

              <div className="flex items-center justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-bitOrange bg-bitOrange/10 text-xl font-bold">
                  {lic.category === "military" && "🎖️"}
                  {lic.category === "aviation" && "🛸"}
                  {lic.category === "software" && "🔏"}
                </span>
                <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-blue-400">
                  {lic.status}
                </span>
              </div>

              <h2 className="mt-6 text-xl font-black text-white group-hover:text-bitOrange transition-colors duration-200">
                {lic.title}
              </h2>
              
              <p className="mt-1 text-xs text-slate-500 font-bold">
                Granted by {lic.authority}
              </p>

              <p className="mt-4 text-xs font-semibold leading-relaxed text-slate-400 flex-grow line-clamp-3">
                {lic.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                <span>ID: {lic.licenseNumber}</span>
                <span className="text-blue-500 group-hover:text-bitOrange font-black transition-colors">
                  Details &rarr;
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedLicense && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLicense(null)}
          >
            <motion.div
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-bitOrange/35 bg-bitPanelSoft p-6 sm:p-8 shadow-[0_0_50px_rgba(255,106,42,0.25)]"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full border border-white/10 bg-bitCharcoal text-slate-400 hover:text-white hover:border-bitOrange transition-all duration-200"
                onClick={() => setSelectedLicense(null)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mt-4">
                <span className="inline-block rounded-full border border-bitOrange/30 bg-bitOrange/5 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-bitOrange">
                  {selectedLicense.category} Authorization
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
                  {selectedLicense.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-semibold">
                  Authority: <span className="text-white font-bold">{selectedLicense.authority}</span>
                </p>

                <p className="mt-6 text-sm font-semibold leading-relaxed text-slate-300 bg-black/20 rounded-xl p-4 border border-white/5">
                  {selectedLicense.description}
                </p>

                {/* Scope details */}
                <div className="mt-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                    Scope of Authorization
                  </h4>
                  <div className="mt-3 text-xs text-slate-300 font-semibold leading-relaxed bg-[#07101c] rounded-xl p-4 border border-white/5">
                    {selectedLicense.scope}
                  </div>
                </div>

                {/* Meta Details */}
                <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">License Number</span>
                    <span className="font-bold text-white mt-1 block">{selectedLicense.licenseNumber}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Validity Period</span>
                    <span className="font-bold text-white mt-1 block">{selectedLicense.validity}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
