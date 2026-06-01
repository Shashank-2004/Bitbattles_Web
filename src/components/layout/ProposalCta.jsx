import { motion } from "framer-motion";
import { Reveal } from "../common/Reveal";

export function ProposalCta() {
  return (
    <section className="relative overflow-hidden bg-bitCharcoal px-5 py-14 text-white sm:px-6 lg:px-8">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-bitOrange/20 blur-3xl" />
      <Reveal className="relative mx-auto grid max-w-6xl items-center gap-8 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">
            Ready to scope it?
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal">
            Request a proposal for your next SaaS, software, app, automation, or security build.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            Share your selected service, budget, timeline, and project idea so the team can respond
            with clearer next steps.
          </p>
        </div>
        <motion.a
          className="inline-flex rounded-xl bg-bitOrange px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-white hover:text-bitCharcoal"
          href="/proposal"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Open Proposal Page
        </motion.a>
      </Reveal>
    </section>
  );
}
