import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { services } from "../data/services";

const budgetRanges = [
  "Select a Budget Range",
  "Under Rs. 50,000",
  "Rs. 50,000 - Rs. 2,00,000",
  "Rs. 2,00,000 - Rs. 5,00,000",
  "Rs. 5,00,000+",
  "Need guidance",
];

const partnershipSteps = [
  "Strategy & Consulting",
  "Design & Prototyping",
  "Engineering",
  "Growth & Optimization",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  budget: "Select a Budget Range",
  project: "",
  company: "",
  timeline: "",
  website: "",
};

export function ProposalPage() {
  const selectedServiceId = new URLSearchParams(window.location.search).get("service");
  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId),
    [selectedServiceId],
  );
  const [formData, setFormData] = useState({
    ...initialForm,
    project: selectedService ? `I am interested in ${selectedService.title}. ` : "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

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
        subject: selectedService
          ? `Proposal request: ${selectedService.title}`
          : "Proposal request",
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

      if (!response.ok) {
        throw new Error("Unable to submit proposal request.");
      }

      setStatus("success");
      setFormData(initialForm);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="relative overflow-hidden bg-bitCharcoal text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_30%,rgba(20,184,166,0.2),transparent_30%),radial-gradient(circle_at_96%_20%,rgba(255,106,42,0.22),transparent_28%),linear-gradient(135deg,#0f171b_0%,#15113f_58%,#4b12b6_100%)]" />

      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-200">
            Proposal request
          </p>
          <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal sm:text-6xl">
            Got a product idea? Let&apos;s talk.
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-slate-200">
            We work as a full-service product partner across software, websites, apps,
            cybersecurity, security systems, and AI automation.
          </p>

          <div className="mt-10 space-y-5">
            {partnershipSteps.map((step) => (
              <div className="flex items-center gap-4 text-lg font-black text-slate-200" key={step}>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-300/15 text-teal-200">
                  ✓
                </span>
                {step}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">
              Image asset
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Replace the proposal visual anytime at <code>public/images/proposal-hero.svg</code>.
            </p>
            <img
              alt="Proposal illustration placeholder"
              className="mt-5 aspect-[16/10] w-full rounded-2xl object-cover"
              src="/images/proposal-hero.svg"
            />
          </div>
        </Reveal>

        <Reveal>
          <form
            className="rounded-3xl border border-white/10 bg-[#111331]/80 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-8"
            onSubmit={handleSubmit}
          >
            {selectedService && (
              <div className="mb-6 rounded-2xl border border-bitOrange/30 bg-bitOrange/10 p-4">
                <p className="text-sm font-black text-bitOrange">Selected service</p>
                <p className="mt-1 text-lg font-black">{selectedService.title}</p>
              </div>
            )}

            {status === "success" && (
              <div className="mb-6 rounded-2xl border border-green-400/40 bg-green-400/15 p-4 text-green-100">
                Proposal request submitted successfully.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 rounded-2xl border border-red-400/40 bg-red-400/15 p-4 text-red-100">
                Could not submit right now. Please try again after checking the backend server.
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <input
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-300 focus:border-bitOrange"
                name="fullName"
                onChange={handleChange}
                placeholder="Full Name*"
                required
                value={formData.fullName}
              />
              <input
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-300 focus:border-bitOrange"
                name="email"
                onChange={handleChange}
                placeholder="Official E-mail*"
                required
                type="email"
                value={formData.email}
              />
              <input
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-300 focus:border-bitOrange"
                name="phone"
                onChange={handleChange}
                placeholder="Phone number"
                value={formData.phone}
              />
              <select
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none focus:border-bitOrange"
                name="budget"
                onChange={handleChange}
                required
                value={formData.budget}
              >
                {budgetRanges.map((budget) => (
                  <option className="text-bitCharcoal" key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              className="mt-5 min-h-44 w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-300 focus:border-bitOrange"
              name="project"
              onChange={handleChange}
              placeholder="Describe your project / idea you want us to work on *"
              required
              value={formData.project}
            />

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-300 focus:border-bitOrange"
                name="company"
                onChange={handleChange}
                placeholder="Company / Organization"
                value={formData.company}
              />
              <input
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-300 focus:border-bitOrange"
                name="timeline"
                onChange={handleChange}
                placeholder="Expected timeline"
                value={formData.timeline}
              />
              <input
                className="md:col-span-2 rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-300 focus:border-bitOrange"
                name="website"
                onChange={handleChange}
                placeholder="Website / reference link"
                value={formData.website}
              />
            </div>

            <div className="mt-8 flex justify-center">
              <motion.button
                className="rounded-full bg-bitOrange px-10 py-4 text-base font-black text-white shadow-lg shadow-orange-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === "loading"}
                type="submit"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? "Submitting..." : "Request a Proposal →"}
              </motion.button>
            </div>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
