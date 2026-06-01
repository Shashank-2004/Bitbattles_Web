import { company } from "../data/company";

export function AboutPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">About</p>
          <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
            Small team, sharp execution, real digital outcomes.
          </h1>
          <p className="mt-6 text-sm font-semibold leading-7 text-slate-400">
            {company.legalName} is an early-stage technology company from {company.location}. We
            focus on AI-driven solutions, end-to-end development, and user-centric design for teams
            that need practical product execution.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-bitOrange/35 bg-[#07101c] p-6 shadow-[0_0_44px_rgba(255,106,42,0.16)]">
          <img
            alt="BitBattles abstract technology visual"
            className="aspect-[4/3] w-full rounded-lg object-cover"
            src="/images/about-visual.svg"
          />
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#101722] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-4">
          {[
            ["Founded", company.founded],
            ["Team", company.size],
            ["Headquarters", company.location],
            ["Focus", "AI, Web, Cloud"],
          ].map(([label, value]) => (
            <div className="rounded-xl border border-bitOrange/35 bg-[#07101c] p-6" key={label}>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-bitOrange">{label}</p>
              <p className="mt-3 text-2xl font-black">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
