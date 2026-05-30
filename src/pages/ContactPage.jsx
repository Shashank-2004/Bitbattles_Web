import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { company } from "../data/company";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Could not connect to the server. Is it running?");
    }
  };

  return (
    <main className="bg-bitCharcoal text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">Contact</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal sm:text-6xl">
            Tell us what you want to build.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            Share your idea, problem, or workflow. Let's make it a reality.
          </p>
          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <p>{company.location}</p>
            <p>{company.website}</p>
            <p>hello@bitbattles.in</p>
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            {status === "success" && (
              <div className="mb-6 rounded-xl bg-green-500/20 border border-green-500/50 p-4 text-green-200">
                <p className="font-bold">Message sent successfully!</p>
                <p className="text-sm">We'll get back to you within 24 hours.</p>
              </div>
            )}
            
            {status === "error" && (
              <div className="mb-6 rounded-xl bg-red-500/20 border border-red-500/50 p-4 text-red-200">
                <p className="font-bold">Error sending message</p>
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}

            <label className="mb-5 block">
              <span className="text-sm font-black text-white">Name</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-bitOrange"
                placeholder="Name"
              />
            </label>
            
            <label className="mb-5 block">
              <span className="text-sm font-black text-white">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-bitOrange"
                placeholder="Email"
              />
            </label>

            <label className="mb-5 block">
              <span className="text-sm font-black text-white">Project type</span>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-bitOrange"
                placeholder="Project type"
              />
            </label>

            <label className="block">
              <span className="text-sm font-black text-white">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-bitOrange"
                placeholder="Tell us about your project"
              />
            </label>

            <motion.button
              className="mt-6 rounded-xl bg-bitOrange px-6 py-3 text-sm font-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={status === "loading"}
              whileHover={{ y: status === "loading" ? 0 : -3, scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </motion.button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
