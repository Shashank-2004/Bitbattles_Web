import { Reveal } from "../components/common/Reveal";
import { careers } from "../data/site";

export function CareersPage() {
  return (
    <main className="bg-[#fff8f4]">
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">Careers</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal text-bitCharcoal sm:text-6xl">
            Join a small team building useful digital products
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            We are early-stage, so roles are lean, hands-on, and best suited for people who like
            learning quickly.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {careers.map((role) => (
            <Reveal className="rounded-2xl bg-white p-6 shadow-sm" key={role}>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-black text-bitCharcoal">{role}</h2>
                  <p className="mt-2 text-sm text-slate-600">Internship / early-career friendly</p>
                </div>
                <a className="font-black text-bitOrange hover:text-bitCharcoal" href="/contact">
                  Apply interest &rarr;
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
