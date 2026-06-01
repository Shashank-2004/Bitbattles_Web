import { motion } from "framer-motion";
import { projects } from "../data/site";
import { fadeUp, staggerContainer } from "../lib/motion";

export function PortfolioPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Portfolio</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
            Featured Projects
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-7 text-slate-500">
            Demo project tiles inspired by the Figma layout. Replace future thumbnails from
            `public/images/project-*.png` when final assets are ready.
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
        {projects.map((project, index) => (
          <motion.article
            className="overflow-hidden rounded-lg border border-white/10 bg-[#0b111c]"
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
          >
            <img className="h-44 w-full object-cover" src={project.image} alt="" />
            <div className="p-5">
              <h2 className="text-sm font-black">{project.title}</h2>
              <p className="mt-2 text-xs text-slate-500">{project.tag}</p>
            </div>
          </motion.article>
        ))}
      </motion.section>
    </main>
  );
}
