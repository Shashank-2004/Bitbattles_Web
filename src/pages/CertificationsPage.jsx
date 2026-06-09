import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data/certifications";
import { licenses } from "../data/licenses";

const complianceData = [
  ...certifications.map((item) => ({
    ...item,
    type: "Certification",
    authority: item.issuer,
    number: item.certNumber,
    validity: `${item.issueDate} - ${item.expiryDate}`,
  })),

  ...licenses.map((item) => ({
    ...item,
    type: "License",
    authority: item.authority,
    number: item.licenseNumber,
    validity: item.validity,
  })),
];

export function CertificationsPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-bitCharcoal text-white font-sans">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,106,42,0.10),transparent_30%),radial-gradient(circle_at_75%_60%,rgba(16,184,232,0.08),transparent_35%)]" />

        <motion.div
          className="absolute left-1/2 top-20 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-bitOrange/40 to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-[1180px] px-5 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Certifications <span className="text-bitOrange">&</span> Licenses
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-400">
            Industry certifications, operational licenses, and compliance standards
            maintained by BitBattles for secure and scalable digital solutions.
          </p>
        </motion.div>
      </section>

      {/* Compliance List */}
      <section className="relative mx-auto max-w-[1180px] px-5 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {complianceData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#07101c]/90 p-6 transition-all duration-300 hover:border-bitOrange/40 hover:bg-[#0a1424]"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-bitOrange/30 bg-bitOrange/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-bitOrange">
                      {item.type}
                    </span>

                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      {item.status}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-white transition-colors group-hover:text-bitOrange">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {item.authority}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="min-w-[220px] border-t border-white/5 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                        Registration ID
                      </p>
                      <p className="mt-1 font-bold text-white">
                        {item.number}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                        Validity
                      </p>
                      <p className="mt-1 font-bold text-white">
                        {item.validity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl border border-bitOrange/30 bg-bitPanelSoft p-6 shadow-[0_0_50px_rgba(255,106,42,0.18)] sm:p-8"
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-bitCharcoal p-2 text-slate-400 transition hover:border-bitOrange hover:text-white"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>

              <span className="inline-flex rounded-full border border-bitOrange/30 bg-bitOrange/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-bitOrange">
                {selectedItem.type}
              </span>

              <h3 className="mt-4 text-3xl font-black text-white">
                {selectedItem.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-slate-400">
                {selectedItem.authority}
              </p>

              <p className="mt-6 text-sm leading-7 text-slate-300">
                {selectedItem.description}
              </p>

              {"details" in selectedItem && selectedItem.details && (
                <div className="mt-8">
                  <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Scope & Details
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {selectedItem.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm leading-7 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-bitOrange" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {"scope" in selectedItem && selectedItem.scope && (
                <div className="mt-8">
                  <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Scope of Authorization
                  </h4>

                  <div className="mt-4 rounded-xl border border-white/5 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                    {selectedItem.scope}
                  </div>
                </div>
              )}

              <div className="mt-8 grid gap-4 border-t border-white/5 pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Registration ID
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {selectedItem.number}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Validity
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {selectedItem.validity}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}