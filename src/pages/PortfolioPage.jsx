import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { fadeUp, staggerContainer } from "../lib/motion";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/portfolio`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Error fetching portfolio projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  return (
    <main className="bg-white">
      <section className="bg-bitCharcoal px-5 py-20 text-white sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">Portfolio</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal sm:text-6xl">
            Concept projects and product directions we can build toward
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            As an early-stage company, we present realistic project concepts and build patterns
            rather than inflated enterprise case studies.
          </p>
        </Reveal>
      </section>

      <motion.section
        className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.article
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
          >
            <div className="relative h-52 bg-bitSteel p-6">
              <div className="absolute right-0 top-0 h-24 w-24 bg-bitOrange" />
              <div className="relative h-full rounded-2xl bg-bitCharcoal/80 p-5 text-white">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                  {project.category ? project.category.substring(0, 3).toUpperCase() : "PROJ"}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-black text-bitCharcoal">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.section>
    </main>
  );
}
