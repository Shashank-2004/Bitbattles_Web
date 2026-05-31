import { Reveal } from "../components/common/Reveal";
import { company } from "../data/company";

export function AboutPage() {
  return (
    <main className="bg-white">
      <section className="grid gap-12 px-5 py-20 sm:px-6 lg:mx-auto lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">About</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal text-bitCharcoal sm:text-6xl">
            Small team, sharp execution, real digital outcomes.
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600">
            {company.legalName} is an early-stage technology company from {company.location}. We
            focus on AI-driven solutions, end-to-end development, and user-centric design for teams
            that need practical product execution.
          </p>
        </Reveal>
        <Reveal>
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-bitCharcoal p-6 shadow-2xl">
            <img
              alt="BitBattles abstract technology visual"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              src="/images/about-visual.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-bitCharcoal/20 via-bitCharcoal/30 to-bitOrange/20" />
            <div className="relative flex h-full min-h-[372px] flex-col justify-end">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">
                  Image asset
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Replace this visual at public/images/about-visual.svg.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#fff8f4] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            ["Founded", company.founded],
            ["Team", company.size],
            ["Headquarters", company.location],
            ["Focus", "AI, Apps, Web"],
          ].map(([label, value]) => (
            <Reveal className="rounded-2xl bg-white p-6 shadow-sm" key={label}>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-bitOrange">{label}</p>
              <p className="mt-3 text-2xl font-black text-bitCharcoal">{value}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
