import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { company } from "../data/company";

const supportOptions = [
  "AI",
  "Blockchain",
  "XR",
  "Web / App Development",
  "Partnership",
  "Staff Augmentation",
];

const companyTypes = ["Startup", "Growing Business", "Agency / Partner"];

const deadlines = [
  "1 month - 2 months",
  "2 months - 4 months",
  "4 months - 6 months",
  "6 months - 1 year",
  "Other",
];

const budgets = [
  "Please select",
  "Under Rs. 50,000",
  "Rs. 50,000 - Rs. 2,00,000",
  "Rs. 2,00,000 - Rs. 5,00,000",
  "Rs. 5,00,000+",
  "Not sure yet",
];

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-white">
        {label} {required && <span className="text-bitOrange">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-bitOrange focus:bg-white/[0.14]";

export function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-bitCharcoal text-white">
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-bitOrange/15 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal sm:text-6xl">Let's Connect</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Share the idea, product, or workflow you want BitBattles to help build. This frontend
            form is ready to connect to a backend, CRM, or form API later.
          </p>
        </Reveal>

        <Reveal>
          <form
            className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="First Name" required>
                <input className={inputClass} name="firstName" required />
              </Field>
              <Field label="Last Name" required>
                <input className={inputClass} name="lastName" required />
              </Field>
              <Field label="Email" required>
                <input className={inputClass} name="email" required type="email" />
              </Field>
              <Field label="Phone number" required>
                <input className={inputClass} name="phone" placeholder="+91 98765 43210" required />
              </Field>
              <Field label="Company name">
                <input className={inputClass} name="company" />
              </Field>

              <div>
                <p className="text-sm font-black text-white">You are a</p>
                <div className="mt-3 flex flex-wrap gap-4">
                  {companyTypes.map((type) => (
                    <label className="flex items-center gap-2 text-sm text-slate-200" key={type}>
                      <input className="accent-bitOrange" name="companyType" type="radio" value={type} />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-black text-white">How can we support you?</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {supportOptions.map((option) => (
                  <label
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-bitOrange/60 hover:bg-white/10"
                    key={option}
                  >
                    <input className="accent-bitOrange" name="support" type="checkbox" value={option} />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Field label="Summary of the idea or product that you want us to work on" required>
                <textarea className={`${inputClass} min-h-36`} name="summary" required />
              </Field>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Field label="Company website / Reference link">
                <input className={inputClass} name="reference" type="url" />
              </Field>
              <Field label="Attachments / Scope documents">
                <input
                  className="mt-2 w-full rounded-xl border border-dashed border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-bitOrange file:px-4 file:py-2 file:text-sm file:font-black file:text-white"
                  name="attachment"
                  type="file"
                />
              </Field>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-black text-white">Deadline</p>
                <div className="mt-3 space-y-3">
                  {deadlines.map((deadline) => (
                    <label className="flex items-center gap-2 text-sm text-slate-200" key={deadline}>
                      <input className="accent-bitOrange" name="deadline" type="radio" value={deadline} />
                      {deadline}
                    </label>
                  ))}
                </div>
              </div>

              <Field label="Your approximate budget?" required>
                <select className={inputClass} name="budget" required defaultValue="Please select">
                  {budgets.map((budget) => (
                    <option className="text-bitCharcoal" key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-8">
              <Field label="Any other comments?">
                <textarea className={`${inputClass} min-h-28`} name="comments" />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-6 text-slate-400">
                Frontend-only for now. Submission handling can be connected later.
              </p>
              <motion.button
                className="rounded-xl bg-bitOrange px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20"
                type="submit"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit inquiry
              </motion.button>
            </div>
          </form>
        </Reveal>

        <Reveal className="mt-10 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-black text-white">Location</p>
            <p className="mt-2">{company.location}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-black text-white">Website</p>
            <p className="mt-2">{company.website}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-black text-white">Email</p>
            <p className="mt-2">hello@bitbattles.in</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
