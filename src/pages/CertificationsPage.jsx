import { company } from "../data/company";

const credentials = [
  ["Company Status", "Private limited company profile and business details maintained for client due diligence."],
  ["Security Practices", "Security-first delivery practices for application, cloud, access, and data handling workflows."],
  ["Delivery Policies", "Project documentation, scope confirmation, handoff notes, and post-delivery support process."],
  ["Compliance Readiness", "Client-specific compliance documents can be aligned during project onboarding when required."],
];

const records = [
  ["Legal Name", company.legalName],
  ["Founded", company.founded],
  ["Headquarters", company.location],
  ["Industry", company.industry],
];

export function CertificationsPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-bitOrange/10 blur-3xl" />
        <div className="mx-auto max-w-[960px]">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">
            Company Credentials
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
            Certifications & Licenses
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-500">
            A practical overview of BitBattles company credentials, delivery practices, and
            compliance-readiness touchpoints for clients reviewing us before an engagement.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-xl border border-bitOrange/35 bg-[#07101c] p-7 shadow-[0_0_34px_rgba(255,78,18,0.12)]">
            <h2 className="text-2xl font-black">Company Record</h2>
            <dl className="mt-7 grid gap-5">
              {records.map(([label, value]) => (
                <div className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0" key={label}>
                  <dt className="text-[11px] font-black uppercase tracking-[0.16em] text-bitOrange">{label}</dt>
                  <dd className="mt-2 text-sm font-bold text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {credentials.map(([title, text]) => (
              <article className="rounded-xl border border-bitOrange/25 bg-[#07101c] p-6 shadow-[0_0_24px_rgba(255,78,18,0.08)]" key={title}>
                <div className="h-1 w-12 rounded-full bg-bitOrange shadow-[0_0_18px_rgba(255,106,42,0.35)]" />
                <h2 className="mt-5 text-lg font-black">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
