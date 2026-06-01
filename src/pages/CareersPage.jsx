import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { careers as fallbackCareers } from "../data/site";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const normalizeCareer = (career) => ({
  title: career.title,
  department: career.department || "Engineering",
  location: career.location || "Remote / India",
  experience: career.experience || "Early-career friendly",
  type: career.type || "Intern",
  description:
    career.description ||
    "Work with the BitBattles team on practical digital products and production workflows.",
  tags: career.tags?.length ? career.tags : ["React", "Product", "Delivery"],
  icon: career.icon || "💼",
});

export function CareersPage() {
  const [roles, setRoles] = useState(fallbackCareers.map((title) => normalizeCareer({ title })));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/careers`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length) {
            setRoles(data.map(normalizeCareer));
          }
        }
      } catch (error) {
        console.error("Error fetching careers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  return (
    <main className="bg-bitCharcoal text-white">
      <section className="mx-auto max-w-[960px] px-5 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Careers</p>
        <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl">
          Build Your Career at BitBattles
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-500">
          Join us in building digital solutions, AI products, and modern software systems for real
          business use cases.
        </p>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black">Open Positions ({loading ? "..." : roles.length})</h2>
          <a className="rounded-md bg-bitOrange px-5 py-3 text-sm font-black text-white" href="/contact">
            General Application
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <motion.article
              className="rounded-xl border border-bitOrange/35 bg-[#07101c] p-6 shadow-[0_0_34px_rgba(255,78,18,0.12)]"
              key={`${role.title}-${role.type}`}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-bitOrange bg-bitOrange/10 text-lg">
                  {role.icon}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-slate-300">
                  {role.type}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-black">{role.title}</h3>
              <p className="mt-2 text-sm text-bitOrange">{role.department}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
                <span>{role.location}</span>
                <span>{role.experience}</span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">{role.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a className="mt-7 inline-flex text-sm font-black text-blue-500 hover:text-bitOrange" href="/contact">
                Apply Now →
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
