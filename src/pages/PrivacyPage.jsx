import { company } from "../data/company";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect contact details, project requirements, uploaded scope references, and communication preferences when someone submits a form or contacts BitBattles.",
  },
  {
    title: "How We Use Information",
    body: "We use enquiry data to respond to service requests, understand project needs, improve our website, and maintain reliable communication with prospective clients.",
  },
  {
    title: "Data Storage",
    body: "Website enquiries may be stored in the BitBattles database and shared only with team members who need the information to respond or support the project discussion.",
  },
  {
    title: "Third-Party Services",
    body: "Hosting, analytics, email, and database providers may process limited technical or enquiry data when they are configured for the production website.",
  },
  {
    title: "Contact",
    body: `For privacy requests or data questions, contact ${company.supportEmail}.`,
  },
];

export function PrivacyPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="mx-auto max-w-[980px] px-5 py-20 sm:px-6 lg:px-8">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Privacy</p>
        <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">Privacy Policy</h1>
        <p className="mt-6 max-w-3xl text-sm font-semibold leading-7 text-slate-400">
          BitBattles keeps enquiry and project information limited, practical, and tied to genuine
          business communication.
        </p>

        <div className="mt-12 space-y-5">
          {sections.map((section) => (
            <article className="rounded-xl border border-bitOrange/25 bg-[#07101c] p-6" key={section.title}>
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-400">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
