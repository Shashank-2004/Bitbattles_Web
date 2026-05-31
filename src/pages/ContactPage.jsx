import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { company } from "../data/company";

const supportOptions = [
  "AI Solutions",
  "UI/UX Design",
  "Web Development",
  "Mobile Apps",
  "Cyber Security",
  "Automation",
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

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  companyType: "",
  support: [],
  summary: "",
  reference: "",
  attachmentName: "",
  website: "",
  deadline: "",
  budget: "Please select",
  comments: "",
};

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

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === "checkbox") {
      setFormData((current) => ({
        ...current,
        support: checked
          ? [...current.support, value]
          : current.support.filter((item) => item !== value),
      }));
      return;
    }

    if (type === "file") {
      setFormData((current) => ({ ...current, attachmentName: files?.[0]?.name ?? "" }));
      return;
    }

    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "website-contact-page" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Could not connect to the server. Is it running?");
    }
  };

  return (
    <main className="relative overflow-hidden bg-bitCharcoal text-white">
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-bitOrange/15 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal sm:text-6xl">Let's Connect</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Share the idea, product, or workflow you want BitBattles to help build. This form
            submits to the current backend contact API and keeps the richer intake details in the
            message body.
          </p>
        </Reveal>

        <Reveal>
          <form
            className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8"
            onSubmit={handleSubmit}
          >
            <input
              autoComplete="off"
              className="hidden"
              name="website"
              onChange={handleChange}
              tabIndex="-1"
              value={formData.website}
            />

            {status === "success" && (
              <div className="mb-6 rounded-xl border border-green-500/50 bg-green-500/20 p-4 text-green-200">
                <p className="font-bold">Message sent successfully.</p>
                <p className="text-sm">We will get back to you soon.</p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 rounded-xl border border-red-500/50 bg-red-500/20 p-4 text-red-200">
                <p className="font-bold">Error sending message</p>
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <Field label="First Name" required>
                <input
                  className={inputClass}
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={formData.firstName}
                />
              </Field>
              <Field label="Last Name" required>
                <input
                  className={inputClass}
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={formData.lastName}
                />
              </Field>
              <Field label="Email" required>
                <input
                  className={inputClass}
                  name="email"
                  onChange={handleChange}
                  required
                  type="email"
                  value={formData.email}
                />
              </Field>
              <Field label="Phone number" required>
                <input
                  className={inputClass}
                  name="phone"
                  onChange={handleChange}
                  required
                  value={formData.phone}
                />
              </Field>
              <Field label="Company name">
                <input
                  className={inputClass}
                  name="company"
                  onChange={handleChange}
                  value={formData.company}
                />
              </Field>

              <div>
                <p className="text-sm font-black text-white">You are a</p>
                <div className="mt-3 flex flex-wrap gap-4">
                  {companyTypes.map((type) => (
                    <label className="flex items-center gap-2 text-sm text-slate-200" key={type}>
                      <input
                        checked={formData.companyType === type}
                        className="accent-bitOrange"
                        name="companyType"
                        onChange={handleChange}
                        type="radio"
                        value={type}
                      />
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
                    <input
                      checked={formData.support.includes(option)}
                      className="accent-bitOrange"
                      name="support"
                      onChange={handleChange}
                      type="checkbox"
                      value={option}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Field label="Summary of the idea or product that you want us to work on" required>
                <textarea
                  className={`${inputClass} min-h-36`}
                  name="summary"
                  onChange={handleChange}
                  required
                  value={formData.summary}
                />
              </Field>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Field label="Company website / Reference link">
                <input
                  className={inputClass}
                  name="reference"
                  onChange={handleChange}
                  type="url"
                  value={formData.reference}
                />
              </Field>
              <Field label="Attachments / Scope documents">
                <input
                  className="mt-2 w-full rounded-xl border border-dashed border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-bitOrange file:px-4 file:py-2 file:text-sm file:font-black file:text-white"
                  name="attachment"
                  onChange={handleChange}
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
                      <input
                        checked={formData.deadline === deadline}
                        className="accent-bitOrange"
                        name="deadline"
                        onChange={handleChange}
                        type="radio"
                        value={deadline}
                      />
                      {deadline}
                    </label>
                  ))}
                </div>
              </div>

              <Field label="Your approximate budget?" required>
                <select
                  className={inputClass}
                  name="budget"
                  onChange={handleChange}
                  required
                  value={formData.budget}
                >
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
                <textarea
                  className={`${inputClass} min-h-28`}
                  name="comments"
                  onChange={handleChange}
                  value={formData.comments}
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-6 text-slate-400">
                Attachments are captured by name for now. File upload storage can be added to the
                backend later.
              </p>
              <motion.button
                className="rounded-xl bg-bitOrange px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "loading"}
                type="submit"
                whileHover={{ y: status === "loading" ? 0 : -3, scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              >
                {status === "loading" ? "Submitting..." : "Submit inquiry"}
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
