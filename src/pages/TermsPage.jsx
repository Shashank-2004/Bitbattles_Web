const terms = [
  [
    "Use of Services",
    "BitBattles provides technology, design, development, and consulting services based on mutually agreed project scope, timelines, and commercial terms.",
  ],
  [
    "Project Scope",
    "Deliverables, revisions, support, and timelines are defined in proposals, agreements, or written communication approved by both parties.",
  ],
  [
    "Client Responsibilities",
    "Clients are responsible for providing accurate requirements, timely feedback, required content, approvals, and third-party access needed for delivery.",
  ],
  [
    "Payments",
    "Payment milestones, retainers, refunds, and late-payment handling are governed by the accepted proposal or service agreement.",
  ],
  [
    "Confidentiality",
    "Both parties should protect confidential business, technical, financial, and project information shared during engagement.",
  ],
  [
    "Intellectual Property",
    "Ownership of final deliverables transfers according to the accepted commercial agreement after applicable payments are completed.",
  ],
  [
    "Third-Party Services",
    "Hosting, APIs, software subscriptions, domains, plugins, and external integrations may be subject to third-party terms and additional costs.",
  ],
  [
    "Limitation of Liability",
    "BitBattles is not liable for indirect losses, business interruption, or issues caused by third-party services, client-side changes, or incomplete information.",
  ],
];

export function TermsPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="mx-auto max-w-[960px] px-5 py-20 sm:px-6 lg:px-8">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">
          Legal
        </p>
        <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
          Terms and Conditions
        </h1>
        <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-500">
          These terms provide a general website-level outline. Final project terms should be
          confirmed through signed proposals, statements of work, or service agreements.
        </p>

        <div className="mt-12 grid gap-5">
          {terms.map(([title, text]) => (
            <article className="rounded-xl border border-bitOrange/25 bg-[#07101c] p-6" key={title}>
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
