import { careers } from "../data/site";

export function CareersPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Careers</p>
        <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
          Join a team building useful digital products
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-500">
          We are early-stage, so roles are lean, hands-on, and best suited for people who like
          learning quickly.
        </p>
      </section>

      <section className="mx-auto grid max-w-[900px] gap-5 px-5 pb-24 sm:px-6 lg:px-8">
        {careers.map((role) => (
          <article className="rounded-xl border border-bitOrange/35 bg-[#07101c] p-6" key={role}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-black">{role}</h2>
                <p className="mt-2 text-sm text-slate-500">Internship / early-career friendly</p>
              </div>
              <a className="font-black text-bitOrange hover:text-white" href="/contact">
                Apply interest →
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
