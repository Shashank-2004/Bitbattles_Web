import { useState } from "react";
import { motion } from "framer-motion";
import { company } from "../data/company";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const roleFromUrl = new URLSearchParams(window.location.search).get("role") || "";
const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  role: roleFromUrl,
  experience: "",
  portfolio: "",
  linkedin: "",
  summary: "",
  website: "",
  resume: null,
};
const inputClass = "w-full rounded-lg border border-white/10 bg-[#07101c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-bitOrange focus:bg-[#0b1321]";

export function CareerApplicationPage() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: files ? files[0] || null : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = new FormData();
      const [firstName, ...lastNameParts] = formData.fullName.trim().split(" ");
      payload.append("firstName", firstName || formData.fullName);
      payload.append("lastName", lastNameParts.join(" "));
      payload.append("name", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("role", formData.role);
      payload.append("experience", formData.experience);
      payload.append("portfolio", formData.portfolio);
      payload.append("linkedin", formData.linkedin);
      payload.append("summary", formData.summary);
      payload.append("message", formData.summary);
      payload.append("support", "Career Application");
      payload.append("subject", `Career application${formData.role ? `: ${formData.role}` : ""}`);
      payload.append("source", "career-application-page");
      payload.append("website", formData.website);

      if (formData.resume) {
        payload.append("attachmentName", formData.resume.name);
        payload.append("resume", formData.resume);
      }

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not submit your application.");
      }

      setStatus("success");
      setFormData({ ...initialForm, role: roleFromUrl });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Could not submit your application. Please email us directly.");
    }
  };

  return (
    <main className="relative overflow-hidden bg-bitCharcoal text-white">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-bitOrange/10 blur-3xl" />
      <section className="relative mx-auto grid max-w-[1180px] gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Careers</p>
          <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">Apply to BitBattles</h1>
          <p className="mt-6 text-sm font-semibold leading-7 text-slate-500">
            Send your details and resume to the BitBattles hiring team. Applications are emailed to
            the same configured company inbox used by the contact forms.
          </p>
          <div className="mt-8 rounded-xl border border-bitOrange/25 bg-[#07101c] p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-bitOrange">Hiring email</p>
            <a className="mt-2 block text-sm font-black text-white" href={`mailto:${company.inquiryEmail}`}>
              {company.inquiryEmail}
            </a>
          </div>
        </div>

        <form className="rounded-xl border border-bitOrange/25 bg-[#07101c] p-6 shadow-[0_0_44px_rgba(255,106,42,0.12)] md:p-8" onSubmit={handleSubmit}>
          <input autoComplete="off" className="hidden" name="website" onChange={handleChange} tabIndex="-1" value={formData.website} />
          {status === "success" && <div className="mb-6 rounded-lg border border-green-300/30 bg-green-500/10 p-4 text-sm font-semibold text-green-200">Application submitted successfully.</div>}
          {status === "error" && <div className="mb-6 rounded-lg border border-red-300/30 bg-red-500/10 p-4 text-sm font-semibold text-red-200">{errorMessage}</div>}

          <div className="grid gap-5 md:grid-cols-2">
            <input className={inputClass} name="fullName" onChange={handleChange} placeholder="Full Name*" required value={formData.fullName} />
            <input className={inputClass} name="email" onChange={handleChange} placeholder="Email*" required type="email" value={formData.email} />
            <input className={inputClass} name="phone" onChange={handleChange} placeholder="Phone number*" required value={formData.phone} />
            <input className={inputClass} name="role" onChange={handleChange} placeholder="Role / Position*" required value={formData.role} />
            <input className={inputClass} name="experience" onChange={handleChange} placeholder="Experience*" required value={formData.experience} />
            <input className={inputClass} name="linkedin" onChange={handleChange} placeholder="LinkedIn profile" type="url" value={formData.linkedin} />
            <input className={`${inputClass} md:col-span-2`} name="portfolio" onChange={handleChange} placeholder="Portfolio / GitHub / Work samples" type="url" value={formData.portfolio} />
          </div>

          <textarea className={`${inputClass} mt-5 min-h-36`} name="summary" onChange={handleChange} placeholder="Tell us why you want to join and what you have worked on *" required value={formData.summary} />
          <label className="mt-5 block">
            <span className="text-sm font-black text-white">Resume <span className="text-bitOrange">*</span></span>
            <input
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="mt-2 w-full rounded-lg border border-dashed border-white/15 bg-[#07101c] px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-bitOrange file:px-4 file:py-2 file:text-sm file:font-black file:text-white"
              name="resume"
              onChange={handleChange}
              required
              type="file"
            />
          </label>

          <div className="mt-8 flex justify-end">
            <motion.button className="rounded-md bg-bitOrange px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60" disabled={status === "loading"} type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              {status === "loading" ? "Submitting..." : "Submit Application"}
            </motion.button>
          </div>
        </form>
      </section>
    </main>
  );
}
