import { motion } from "framer-motion";
import { Reveal } from "../common/Reveal";
import { ServiceIcon } from "../services/ServiceIcon";
import { company } from "../../data/company";
import { projects, sectors } from "../../data/site";
import { services } from "../../data/services";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { HomeHero } from "./HomeHero";

const featuredServices = services.slice(0, 6);

const reasons = [
  ["AI-first strategy", "We plan around automation, intelligence, and measurable business value."],
  ["End-to-end delivery", "One team covers strategy, UI/UX, engineering, launch, and iteration."],
  ["Scalable architecture", "Products are built cleanly so integrations, users, and features can grow."],
  ["User-centered design", "Every workflow is shaped around clarity, speed, and real customer behavior."],
];

const processSteps = ["Discover", "Strategy", "Design", "Develop", "Launch"];

const principles = [
  "Start with the smallest useful product, then improve with real feedback.",
  "Design interfaces that feel calm, fast, and easy to understand.",
  "Build with clean structure so future features and APIs can connect smoothly.",
];

function SectionTitle({ children, eyebrow, light = false }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-3xl font-black tracking-normal sm:text-4xl ${
          light ? "text-white" : "text-bitCharcoal"
        }`}
      >
        {children}
      </h2>
      <div className="mx-auto mt-5 flex w-40 items-center gap-2">
        <span className="h-1 flex-1 rounded-full bg-bitOrange" />
        <span className={`h-1 w-8 rounded-full ${light ? "bg-white/40" : "bg-bitCharcoal/20"}`} />
      </div>
    </Reveal>
  );
}

export function HomePage() {
  return (
    <main className="bg-white">
      <HomeHero />

      <section id="services" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Services">Services We Provide</SectionTitle>

          <motion.div
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {featuredServices.map((service) => (
              <motion.article
                className="group flex min-h-[260px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-bitOrange/50 hover:shadow-xl"
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-orange-50 text-bitOrange transition group-hover:bg-bitOrange group-hover:text-white">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="mt-6 text-base font-black leading-snug text-bitCharcoal">
                  {service.title}
                </h3>
                <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <a
                  className="mt-auto pt-5 text-sm font-black text-bitOrange hover:text-bitCharcoal"
                  href={service.href}
                >
                  Learn more &rarr;
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="solutions" className="relative overflow-hidden bg-bitCharcoal py-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Why choose us" light>
            Built for teams that need outcomes, not just screens
          </SectionTitle>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {reasons.map(([title, text], index) => (
              <motion.article
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-bitOrange text-white">
                  <ServiceIcon name={featuredServices[index]?.icon} />
                </div>
                <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="sectors" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Sectors">Where BitBattles can build</SectionTitle>

          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {sectors.map((sector, index) => (
              <motion.article
                className="group rounded-2xl border border-slate-200 bg-[#fff8f4] p-6 shadow-sm"
                key={sector.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-bitCharcoal text-sm font-black text-bitOrange">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-black text-bitCharcoal">{sector.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{sector.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-[#fff8f4] py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <SectionTitle eyebrow={company.tagline}>How we work</SectionTitle>

          <motion.ol
            className="relative mt-16 grid gap-8 md:grid-cols-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-bitOrange/30 md:block" />
            {processSteps.map((step, index) => (
              <motion.li
                className="relative rounded-xl bg-white p-5 text-center shadow-sm"
                key={step}
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-full bg-bitCharcoal text-sm font-black text-bitOrange ring-8 ring-[#fff8f4]">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-base font-black text-bitCharcoal">{step}</h3>
                <p className="mx-auto mt-3 max-w-[160px] text-sm leading-6 text-slate-600">
                  Clear decisions and practical execution.
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Portfolio">Featured Projects</SectionTitle>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {projects.map((project) => (
              <motion.article
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-44 overflow-hidden bg-bitSteel p-5">
                  <div className="absolute right-0 top-0 h-24 w-24 bg-bitOrange" />
                  <div className="relative flex h-full flex-col justify-between rounded-xl bg-bitCharcoal/80 p-5 text-white">
                    <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                      {project.tag}
                    </span>
                    <div>
                      <div className="mb-3 h-2 w-20 rounded-full bg-bitOrange" />
                      <p className="text-2xl font-black">{project.title.split(" ")[0]}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-bitCharcoal">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <a className="text-sm font-black text-bitCharcoal hover:text-bitOrange" href="/portfolio">
              View All Projects &rarr;
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#f6f7f7] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Principles">What guides every build</SectionTitle>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {principles.map((principle, index) => (
              <motion.figure className="rounded-2xl bg-white p-7 shadow-sm" key={principle} variants={fadeUp}>
                <blockquote className="text-sm leading-7 text-slate-700">{principle}</blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-bitCharcoal text-sm font-black text-bitOrange">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-black text-bitCharcoal">Build principle</span>
                    <span className="block text-xs text-slate-500">Early-stage friendly</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          <Reveal
            className="mx-auto mt-16 grid max-w-5xl items-center gap-8 overflow-hidden rounded-2xl bg-bitCharcoal p-8 text-white md:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">
                Start your build
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal">
                Lets Build Something Amazing Together
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                Bring us your idea, workflow, or business challenge. We will help shape it into a
                clean, scalable digital product.
              </p>
            </div>
            <motion.a
              className="inline-flex rounded-md bg-bitOrange px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-bitCharcoal"
              href="/contact"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              Get in touch &rarr;
            </motion.a>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
