import { useState } from "react";
import { motion } from "framer-motion";
import { company } from "../data/company";
import { services } from "../data/services";

const supportOptions = services.map((service) => service.title);
const companyTypes = ["Startup", "Growing Business", "Agency / Partner"];
const deadlines = ["1 month - 2 months", "2 months - 4 months", "4 months - 6 months", "6 months - 1 year", "Other"];
const budgets = ["Please select", "Under Rs. 50,000", "Rs. 50,000 - Rs. 2,00,000", "Rs. 2,00,000 - Rs. 5,00,000", "Rs. 5,00,000+", "Not sure yet"];
const initialFormData = { firstName: "", lastName: "", email: "", phone: "", company: "", companyType: "", support: [], summary: "", reference: "", attachmentName: "", attachment: null, website: "", deadline: "", budget: "Please select", comments: "" };
const inputClass = "mt-2 w-full rounded-lg border border-white/10 bg-[#07101c] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-bitOrange focus:bg-[#0b1321]";
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-white">{label} {required && <span className="text-bitOrange">*</span>}</span>
      {children}
    </label>
  );
}

export function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === "checkbox") {
      setFormData((current) => ({
        ...current,
        support: checked ? [...current.support, value] : current.support.filter((item) => item !== value),
      }));
      return;
    }

    if (type === "file") {
      setFormData((current) => ({ ...current, attachmentName: files?.[0]?.name ?? "", attachment: files?.[0] ?? null }));
      return;
    }

    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "support") {
          value.forEach((item) => payload.append("support", item));
        } else if (key === "attachment" && value) {
          payload.append("resume", value);
          payload.append("attachmentName", value.name);
        } else if (value !== null && value !== "" && key !== "attachmentName" && key !== "attachment") {
          payload.append(key, value);
        }
      });
      payload.append("source", "website-contact-page");

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Could not send right now. Please email us directly.");
    }
  };

  return (
    <main className="relative overflow-hidden bg-bitCharcoal text-white">
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-bitOrange/10 blur-3xl" />
      <section className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal sm:text-6xl">Let's Connect</h1>
          <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-500">
            Share the idea, product, or workflow you want BitBattles to help build. The team receives your enquiry by email.
          </p>
        </div>

        <form className="mt-12 rounded-xl border border-bitOrange/25 bg-[#07101c] p-6 shadow-[0_0_44px_rgba(255,106,42,0.12)] md:p-8" onSubmit={handleSubmit}>
          <input autoComplete="off" className="hidden" name="website" onChange={handleChange} tabIndex="-1" value={formData.website} />
          {status === "success" && <div className="mb-6 rounded-lg border border-green-300/30 bg-green-500/10 p-4 text-green-200"><p className="font-bold">Message sent successfully.</p><p className="text-sm">We will get back to you soon.</p></div>}
          {status === "error" && <div className="mb-6 rounded-lg border border-red-300/30 bg-red-500/10 p-4 text-red-200"><p className="font-bold">Error sending message</p><p className="text-sm">{errorMessage}</p></div>}

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="First Name" required><input className={inputClass} name="firstName" onChange={handleChange} required value={formData.firstName} /></Field>
            <Field label="Last Name" required><input className={inputClass} name="lastName" onChange={handleChange} required value={formData.lastName} /></Field>
            <Field label="Email" required><input className={inputClass} name="email" onChange={handleChange} required type="email" value={formData.email} /></Field>
            <Field label="Phone number" required><input className={inputClass} name="phone" onChange={handleChange} required value={formData.phone} /></Field>
            <Field label="Company name"><input className={inputClass} name="company" onChange={handleChange} value={formData.company} /></Field>
            <div>
              <p className="text-sm font-black text-white">You are a</p>
              <div className="mt-3 flex flex-wrap gap-4">
                {companyTypes.map((type) => <label className="flex items-center gap-2 text-sm text-slate-300" key={type}><input checked={formData.companyType === type} className="accent-bitOrange" name="companyType" onChange={handleChange} type="radio" value={type} />{type}</label>)}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-black text-white">How can we support you?</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportOptions.map((option) => <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0b1321] px-4 py-3 text-sm text-slate-300 transition hover:border-bitOrange/60" key={option}><input checked={formData.support.includes(option)} className="accent-bitOrange" name="support" onChange={handleChange} type="checkbox" value={option} />{option}</label>)}
            </div>
          </div>

          <div className="mt-8"><Field label="Summary of the idea or product that you want us to work on" required><textarea className={`${inputClass} min-h-36`} name="summary" onChange={handleChange} required value={formData.summary} /></Field></div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Field label="Company website / Reference link"><input className={inputClass} name="reference" onChange={handleChange} type="url" value={formData.reference} /></Field>
            <Field label="Attachments / Scope documents"><input className="mt-2 w-full rounded-lg border border-dashed border-white/15 bg-[#07101c] px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-bitOrange file:px-4 file:py-2 file:text-sm file:font-black file:text-white" name="attachment" onChange={handleChange} type="file" /></Field>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div><p className="text-sm font-black text-white">Deadline</p><div className="mt-3 space-y-3">{deadlines.map((deadline) => <label className="flex items-center gap-2 text-sm text-slate-300" key={deadline}><input checked={formData.deadline === deadline} className="accent-bitOrange" name="deadline" onChange={handleChange} type="radio" value={deadline} />{deadline}</label>)}</div></div>
            <Field label="Your approximate budget?" required><select className={inputClass} name="budget" onChange={handleChange} required value={formData.budget}>{budgets.map((budget) => <option className="text-bitCharcoal" key={budget} value={budget}>{budget}</option>)}</select></Field>
          </div>
          <div className="mt-8"><Field label="Any other comments?"><textarea className={`${inputClass} min-h-28`} name="comments" onChange={handleChange} value={formData.comments} /></Field></div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-slate-500">Your enquiry will be reviewed by the BitBattles team.</p>
            <motion.button className="rounded-md bg-bitOrange px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 disabled:cursor-not-allowed disabled:opacity-60" disabled={status === "loading"} type="submit" whileHover={{ y: status === "loading" ? 0 : -3 }} whileTap={{ scale: status === "loading" ? 1 : 0.98 }}>
              {status === "loading" ? "Submitting..." : "Submit inquiry"}
            </motion.button>
          </div>
        </form>

        <div className="mt-10 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
          {["Location", "Website", "Email"].map((label) => (
            <div className="rounded-xl border border-bitOrange/25 bg-[#07101c] p-5" key={label}>
              <p className="font-black text-white">{label}</p>
              <p className="mt-2">{label === "Location" ? company.location : label === "Website" ? company.website : company.supportEmail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
