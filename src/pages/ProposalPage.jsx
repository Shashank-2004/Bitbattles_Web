import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { company } from "../data/company";
import { services } from "../data/services";

const budgetRanges = [
  "Select a Budget Range",
  "Under Rs. 50,000",
  "Rs. 50,000 - Rs. 2,00,000",
  "Rs. 2,00,000 - Rs. 5,00,000",
  "Rs. 5,00,000+",
  "Need guidance",
];

const partnershipSteps = ["Strategy & Consulting", "Design & Prototyping", "Engineering", "Growth & Optimization"];
const initialForm = { fullName: "", email: "", phone: "", budget: "Select a Budget Range", project: "", company: "", timeline: "", website: "" };
const inputClass = "w-full rounded-lg border border-white/10 bg-[#07101c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-bitOrange focus:bg-[#0b1321]";

export function ProposalPage() {
  const selectedServiceId = new URLSearchParams(window.location.search).get("service");
  const selectedService = useMemo(() => services.find((service) => service.id === selectedServiceId), [selectedServiceId]);
  const [formData, setFormData] = useState({ ...initialForm, project: selectedService ? `I am interested in ${selectedService.title}. ` : "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const payload = {
        firstName: formData.fullName.split(" ")[0] || formData.fullName,
        lastName: formData.fullName.split(" ").slice(1).join(" "),
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        support: selectedService ? [selectedService.title] : [],
        subject: selectedService ? `Proposal request: ${selectedService.title}` : "Proposal request",
        summary: formData.project,
        budget: formData.budget,
        deadline: formData.timeline,
        reference: formData.website,
        source: "proposal-page",
      };
      const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Unable to submit proposal request.");
      setStatus("success");
      setFormData(initialForm);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="bg-bitCharcoal text-white">
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-bitOrange/10 blur-3xl" />
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Request Proposal</p>
            <h1 className="mt-4 max-w-xl text-5xl font-black leading-tight sm:text-6xl">Got a product idea? Let&apos;s talk.</h1>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-slate-500">
              Share your project details and the BitBattles team will review the scope, budget, timeline, and next steps.
            </p>
            <div className="mt-10 space-y-4">
              {partnershipSteps.map((step) => (
                <div className="flex items-center gap-4 text-base font-black" key={step}>
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-bitOrange text-white">✓</span>
                  {step}
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-bitOrange/25 bg-[#07101c] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-bitOrange">Service enquiry email</p>
              <a className="mt-2 block text-sm font-black text-white" href={`mailto:${company.inquiryEmail}`}>{company.inquiryEmail}</a>
            </div>
          </div>

          <form className="rounded-xl border border-bitOrange/25 bg-[#07101c] p-6 shadow-[0_0_44px_rgba(255,106,42,0.12)] md:p-8" onSubmit={handleSubmit}>
            {selectedService && (
              <div className="mb-6 rounded-lg border border-bitOrange/35 bg-bitOrange/10 p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-bitOrange">Selected service</p>
                <p className="mt-1 text-lg font-black">{selectedService.title}</p>
              </div>
            )}
            {status === "success" && <div className="mb-6 rounded-lg border border-green-300/30 bg-green-500/10 p-4 text-sm font-semibold text-green-200">Proposal request submitted successfully.</div>}
            {status === "error" && <div className="mb-6 rounded-lg border border-red-300/30 bg-red-500/10 p-4 text-sm font-semibold text-red-200">Could not submit right now. Please check the backend server and try again.</div>}
            <div className="grid gap-5 md:grid-cols-2">
              <input className={inputClass} name="fullName" onChange={handleChange} placeholder="Full Name*" required value={formData.fullName} />
              <input className={inputClass} name="email" onChange={handleChange} placeholder="Official E-mail*" required type="email" value={formData.email} />
              <input className={inputClass} name="phone" onChange={handleChange} placeholder="Phone number" value={formData.phone} />
              <select className={inputClass} name="budget" onChange={handleChange} required value={formData.budget}>
                {budgetRanges.map((budget) => <option className="text-bitCharcoal" key={budget} value={budget}>{budget}</option>)}
              </select>
            </div>
            <textarea className={`${inputClass} mt-5 min-h-40`} name="project" onChange={handleChange} placeholder="Describe your project / idea you want us to work on *" required value={formData.project} />
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input className={inputClass} name="company" onChange={handleChange} placeholder="Company / Organization" value={formData.company} />
              <input className={inputClass} name="timeline" onChange={handleChange} placeholder="Expected timeline" value={formData.timeline} />
              <input className={`${inputClass} md:col-span-2`} name="website" onChange={handleChange} placeholder="Website / reference link" value={formData.website} />
            </div>
            <div className="mt-8 flex justify-end">
              <motion.button className="rounded-md bg-bitOrange px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60" disabled={status === "loading"} type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                {status === "loading" ? "Submitting..." : "Request a Proposal"}
              </motion.button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
