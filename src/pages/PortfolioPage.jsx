import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects as fallbackProjects } from "../data/site";
import { fadeUp, staggerContainer } from "../lib/motion";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const normalizeProject = (project, index) => ({
  title: project.title,
  tag: project.tag || project.category || "Project",
  description: project.description || "A BitBattles product direction built for practical business outcomes.",
  image: project.image || fallbackProjects[index % fallbackProjects.length]?.image || "/images/project-demo-web.svg",
});

export function PortfolioPage() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/portfolio`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length) {
            setProjects(data.map(normalizeProject));
          }
        }
      } catch (error) {
        console.error("Error fetching portfolio projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main className="bg-bitCharcoal text-white">
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Portfolio</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
            Featured Projects
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-500">
            Selected product directions and project work across AI, mobile, web, and digital
            platforms.
          </p>
        </div>
      </section>

      <motion.section
        className="mx-auto grid max-w-[1180px] gap-6 px-5 pb-24 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {projects.map((project, index) => {
          const normalized = normalizeProject(project, index);
          return (
            <motion.article
              className="overflow-hidden rounded-lg border border-white/10 bg-[#0b111c]"
              key={`${normalized.title}-${index}`}
              variants={fadeUp}
              whileHover={{ y: -8 }}
            >
              <img className="h-44 w-full object-cover" src={normalized.image} alt="" />
              <div className="p-5">
                <h2 className="text-sm font-black">{normalized.title}</h2>
                <p className="mt-2 text-xs text-slate-500">{normalized.tag}</p>
                <p className="mt-4 text-sm leading-6 text-slate-400">{normalized.description}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.section>
    </main>
  );
}
