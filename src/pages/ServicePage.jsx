import { motion } from "framer-motion";
import { defaultHeroImage } from "../data/services";

export function ServicePage({ service }) {
  const proposalHref = `/proposal?service=${service.id}`;

  return (
    <main className="bg-bitCharcoal text-white">
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute right-0 top-12 h-96 w-96 rounded-full bg-bitOrange/10 blur-3xl" />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">
              {service.title}
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
              {service.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-slate-400">
              {service.heroDescription}
            </p>
            <motion.a
              className="mt-9 inline-flex rounded-md bg-bitOrange px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-500"
              href={proposalHref}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Service →
            </motion.a>
          </div>

          <div className="relative rounded-xl border border-bitOrange/30 bg-[#07101c] p-6 shadow-[0_0_44px_rgba(255,106,42,0.18)]">
            <img
              alt={`${service.title} visual`}
              className="aspect-[4/3] w-full rounded-lg object-cover"
              src={service.heroImage ?? defaultHeroImage}
            />
            <p className="mt-4 text-xs font-semibold text-slate-500">
              Demo visual path: <span className="text-slate-300">public/images/hero-cube.png</span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#101722] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">
              Proposal ready
            </p>
            <h2 className="mt-3 text-4xl font-black">Need this service scoped?</h2>
          </div>
          <div className="rounded-xl border border-bitOrange/35 bg-[#07101c] p-7">
            <p className="text-sm leading-7 text-slate-400">
              Share your requirements and BitBattles will use your selected service as context for
              the proposal request. You can add budget, deadline, and project details on the next
              page.
            </p>
            <a
              className="mt-6 inline-flex rounded-md bg-bitOrange px-6 py-3 text-sm font-black text-white"
              href={proposalHref}
            >
              Request a Proposal
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
