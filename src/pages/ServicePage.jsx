import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { defaultHeroImage } from "../data/services";

export function ServicePage({ service }) {
  const proposalHref = `/contact?service=${service.id}`;

  return (
    <main className="bg-bitCharcoal">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,_rgba(255,106,42,0.24),_transparent_28%),radial-gradient(circle_at_15%_80%,_rgba(20,184,166,0.16),_transparent_32%),linear-gradient(120deg,_#243237_0%,_#10191d_100%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-132px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <Reveal className="relative z-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-bitOrange">
              {service.title}
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-normal text-white sm:text-6xl lg:text-7xl">
              {service.heroTitle}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300 sm:text-2xl">
              {service.heroDescription}
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <motion.a
                className="service-card-focus inline-flex w-fit items-center justify-center gap-2 rounded-md bg-bitOrange px-8 py-4 text-base font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
                href={proposalHref}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                Request Service <span aria-hidden="true">&rarr;</span>
              </motion.a>

              <div className="flex flex-wrap items-center gap-3 text-white" aria-label="Service delivery approach">
                {["Lean scope", "Fast prototype", "Launch-ready frontend"].map((item) => (
                  <span
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-200 backdrop-blur"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur lg:min-h-[620px] lg:self-end">
            <img
              alt={`${service.title} technology workspace`}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              src={service.heroImage ?? defaultHeroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-bitCharcoal/20 via-bitCharcoal/20 to-bitOrange/25" />
            <div className="absolute right-0 top-0 h-28 w-28 bg-bitOrange" />
            <div className="absolute left-6 bottom-6 rounded-md bg-white/90 p-5 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-bitOrange">
                BitBattles ESP
              </p>
              <p className="mt-2 max-w-xs text-xl font-black text-bitCharcoal">
                Create. Innovate. Dominate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">
              Proposal ready
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-bitCharcoal">
              Need this service scoped for your company?
            </h2>
          </Reveal>
          <Reveal className="rounded-3xl border border-slate-200 bg-[#fff8f4] p-7">
            <p className="text-base leading-8 text-slate-700">
              Share your requirements and BitBattles will use your selected service as context for
              the proposal request. You can add budget, deadline, and project details on the next
              page.
            </p>
            <motion.a
              className="mt-6 inline-flex rounded-xl bg-bitCharcoal px-6 py-3 text-sm font-black text-white transition hover:bg-bitOrange"
              href={proposalHref}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
