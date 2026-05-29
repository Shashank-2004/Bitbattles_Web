import { Reveal } from "../components/common/Reveal";
import { TechIllustration } from "../components/visuals/TechIllustration";
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
          <TechIllustration label="About BitBattles" />
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
