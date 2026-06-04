import { motion } from "framer-motion";
import { services } from "../../data/services";
import { projects } from "../../data/site";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { HomeHero } from "./HomeHero";

const whyChooseUs = [
  ["Expert Team", "Skilled professionals with deep product thinking and technical execution.", "Team"],
  ["Innovation First", "Practical AI, automation, and modern stacks for future-ready products.", "AI"],
  ["On-Time Delivery", "Agile planning, clear milestones, and transparent communication.", "Ops"],
  ["Quality Focused", "Secure, scalable, and maintainable delivery from day one.", "QA"],
];

const processSteps = [
  ["01", "Discover", "We understand your goals, challenges and requirements."],
  ["02", "Design", "We shape wireframes, prototypes and polished UI/UX."],
  ["03", "Develop", "We build robust, scalable and high-quality solutions."],
  ["04", "Deploy", "We test, deploy and support long-term improvement."],
];

const testimonials = [
  ["Rohit Sharma", "CTO, FinEdge", "BitBattles delivered an AI solution that improved our workflow and productivity significantly.", "R"],
  ["Anjali Verma", "Product Manager, HealthCare+", "Their team was professional, responsive and delivered the project on time with excellent quality.", "A"],
  ["Arjun Mehta", "Founder, EduChamp", "They understood our vision and turned it into a clean, usable digital product.", "A"],
];

const serviceProof = ["4.8 rating", "3+ builds", "Fast discovery"];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black tracking-normal text-white sm:text-4xl">{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">{text}</p>}
    </div>
  );
}

export function HomePage() {
  return (
    <main className="overflow-hidden bg-bitCharcoal text-white">
      <HomeHero />

      <section id="services" className="relative px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 h-px w-full max-w-xl -translate-x-1/2 bg-gradient-to-r from-transparent via-bitOrange/60 to-transparent" />
        <div className="pointer-events-none absolute right-10 top-16 h-64 w-64 rounded-full bg-bitOrange/10 blur-3xl" />
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="What we do"
            title="Services We Provide"
            text="End-to-end development services to build, scale and transform your business with technology."
          />

          <motion.div
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {services.slice(0, 6).map((service, index) => (
              <motion.article
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-bitOrange/25 bg-[linear-gradient(145deg,rgba(7,16,28,0.98),rgba(11,19,33,0.92))] p-6 shadow-[0_0_34px_rgba(255,78,18,0.10)] transition hover:-translate-y-2 hover:border-bitOrange/80 hover:shadow-[0_0_54px_rgba(255,106,42,0.22)]"
                key={service.id}
                variants={fadeUp}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-bitOrange/10 blur-2xl transition group-hover:bg-bitOrange/20" />
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-bitOrange/70 bg-bitOrange/10 text-sm font-black text-bitOrange">
                    {service.shortCode}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-black text-slate-400">
                    {serviceProof[index % serviceProof.length]}
                  </span>
                </div>
                <h3 className="mt-7 text-base font-black leading-snug text-white">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">{service.description}</p>
                <div className="mt-6 flex items-center gap-1 text-bitOrange">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex} className="text-xs">★</span>
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-500">scope-ready</span>
                </div>
                <a className="mt-auto pt-6 text-sm font-black text-blue-500 transition hover:text-bitOrange" href={service.href}>
                  Learn more -&gt;
                </a>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <a className="inline-flex rounded-md border border-bitOrange/40 px-5 py-3 text-sm font-black text-white transition hover:border-bitOrange hover:bg-bitOrange/10" href="/services">
              Explore all services -&gt;
            </a>
          </div>
        </div>
      </section>

      <section id="solutions" className="relative bg-[#101722] px-5 py-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="Why choose us" title="Why Choose Us" />
          <motion.div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
            {whyChooseUs.map(([title, text, icon]) => (
              <motion.article className="rounded-2xl border border-bitOrange/35 bg-[linear-gradient(145deg,#111827,#0b1321)] p-6 shadow-[0_0_30px_rgba(255,106,42,0.08)] transition hover:border-bitOrange/70" key={title} variants={fadeUp} whileHover={{ y: -7, scale: 1.015 }}>
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-slate-700/70 text-xs font-black text-bitOrange">{icon}</div>
                <h3 className="mt-5 text-sm font-black">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-400">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="relative px-5 py-24 sm:px-6 lg:px-8">
        <img alt="" className="pointer-events-none absolute -right-20 top-10 hidden w-[500px] -scale-x-100 opacity-45 lg:block" src="/images/orange-wave.png" />
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="Our process" title="Our Simple 4-Step Process" />
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-bitOrange/20 via-bitOrange to-bitOrange/20 md:block" />
            {processSteps.map(([number, title, text], index) => (
              <motion.div className="relative rounded-2xl border border-white/0 p-4 text-center transition hover:border-bitOrange/20 hover:bg-white/[0.025]" key={number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} whileHover={{ y: -6 }}>
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-bitOrange bg-[#08111f] text-sm font-black text-white shadow-[0_0_34px_rgba(0,119,255,0.45)] ring-8 ring-blue-500/10">
                  {number}
                </div>
                <h3 className="mt-6 text-lg font-black">{title}</h3>
                <p className="mx-auto mt-6 max-w-[210px] text-sm leading-7 text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative px-5 pb-24 sm:px-6 lg:px-8">
        <img alt="" className="pointer-events-none absolute bottom-0 left-0 w-[420px] opacity-35" src="/images/orange-wave.png" />
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="Our work" title="Featured Projects" />
          <motion.div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
            {projects.map((project) => (
              <motion.article className="overflow-hidden rounded-xl border border-white/10 bg-[#0b111c] shadow-xl shadow-black/20 transition hover:border-bitOrange/45" key={project.title} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }}>
                <img className="h-40 w-full object-cover" src={project.image} alt="" />
                <div className="p-5">
                  <h3 className="text-sm font-black">{project.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">{project.tag}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <a className="text-sm font-semibold text-blue-500 hover:text-bitOrange" href="/portfolio">View All Projects -&gt;</a>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#111821] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
          <motion.div className="mt-12 grid gap-6 md:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
            {testimonials.map(([name, role, quote, initial]) => (
              <motion.figure className="rounded-2xl border border-slate-600/60 bg-[linear-gradient(145deg,#08111f,#07101c)] p-7 shadow-[0_0_34px_rgba(255,106,42,0.06)] transition hover:border-bitOrange/50" key={name} variants={fadeUp} whileHover={{ y: -6 }}>
                <blockquote className="text-sm leading-7 text-slate-300"><span className="mb-5 block text-3xl font-black text-bitOrange">“</span>{quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-sm font-black">{initial}</span>
                  <span><span className="block text-sm font-black">{name}</span><span className="block text-xs text-slate-500">{role}</span></span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
          <div className="mt-8 flex justify-center gap-2"><span className="h-1.5 w-6 rounded-full bg-bitOrange" /><span className="h-1.5 w-2 rounded-full bg-white" /><span className="h-1.5 w-2 rounded-full bg-white/50" /></div>
        </div>
      </section>

      <section className="bg-[#111821] px-5 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-5xl items-center gap-8 overflow-hidden rounded-2xl border border-bitOrange/30 bg-black px-8 py-10 shadow-[0_0_58px_rgba(255,106,42,0.42)] md:grid-cols-[1fr_auto]">
          <img alt="" className="absolute inset-x-0 bottom-0 h-28 w-full object-cover opacity-35" src="/images/orange-wave.png" />
          <div className="relative"><h2 className="text-2xl font-semibold">Lets Build Something Amazing Together</h2><p className="mt-3 text-sm text-slate-400">Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.</p></div>
          <a className="relative inline-flex rounded-md bg-bitOrange px-7 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-500" href="/contact">Get in touch -&gt;</a>
        </div>
      </section>
    </main>
  );
}
