import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { company } from "../data/company";

export function ContactPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal sm:text-6xl">
            Tell us what you want to build.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            Share your idea, problem, or workflow. This frontend-only form is ready for a backend or
            form API later.
          </p>
          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <p>{company.location}</p>
            <p>{company.website}</p>
            <p>hello@bitbattles.in</p>
          </div>
        </Reveal>

        <Reveal>
          <form className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            {["Name", "Email", "Project type"].map((label) => (
              <label className="mb-5 block" key={label}>
                <span className="text-sm font-black text-white">{label}</span>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-bitOrange"
                  placeholder={label}
                />
              </label>
            ))}
            <label className="block">
              <span className="text-sm font-black text-white">Message</span>
              <textarea
                className="mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-bitOrange"
                placeholder="Tell us about your project"
              />
            </label>
            <motion.button
              className="mt-6 rounded-xl bg-bitOrange px-6 py-3 text-sm font-black text-white"
              type="button"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send message
            </motion.button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
