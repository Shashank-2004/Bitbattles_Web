import { motion } from "framer-motion";
import { services } from "../../data/services";
import { projects } from "../../data/site";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { HomeHero } from "./HomeHero";

const whyChooseUs = [
  ["Expert Team", "Skilled professionals with deep domain knowledge and technical expertise.", "👥"],
  ["Innovation First", "We use the latest technologies to build future-ready solutions.", "⚡"],
  ["On-Time Delivery", "Agile process and transparent communication ensure timely delivery.", "⏱"],
  ["Quality Focused", "We follow best practices to deliver secure, scalable and bug-free solutions.", "🛡"],
];

const processSteps = [
  ["01", "Discover", "We understand your goals, challenges and requirements."],
  ["02", "Design", "We design wireframes, prototypes and sleek UI/UX."],
  ["03", "Develop", "We build robust, scalable and high-quality solutions."],
  ["04", "Deploy", "We test, deploy and support you for long-term success."],
];

const testimonials = [
  ["Rohit Sharma", "CTO, FinEdge", "BitBattles delivered an amazing AI solution that improved our workflow and productivity significantly.", "R"],
  ["Anjali Verma", "Product Manager, HealthCare+", "Their team is highly professional, responsive and delivered the project on time with excellent quality.", "A"],
  ["Arjun Mehta", "Founder, EduChamp", "Great experience working with BitBattles. They understood our vision and turned it into a real product.", "A"],
];

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
        <div className="absolute left-1/2 top-0 h-px w-full max-w-xl -translate-x-1/2 bg-gradient-to-r from-transparent via-bitOrange/50 to-transparent" />
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="What we do"
            title="Services We Provide"
            text="End-to-end development services to build, scale and transform your business with technology."
          />

          <motion.div
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.article
                className="group flex min-h-[310px] flex-col rounded-xl border border-bitOrange/35 bg-[#07101c] p-6 shadow-[0_0_34px_rgba(255,78,18,0.12)] transition hover:-translate-y-2 hover:border-bitOrange hover:shadow-[0_0_44px_rgba(255,106,42,0.24)]"
                key={service.id}
                variants={fadeUp}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-bitOrange bg-bitOrange/10 text-xl">
                  {service.emoji}
                </div>
                <h3 className="mt-7 text-base font-black leading-snug text-white">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">{service.description}</p>
                <a className="mt-auto pt-6 text-sm font-black text-blue-500 hover:text-bitOrange" href={service.href}>
                  Learn more →
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="solutions" className="bg-[#101722] px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="Why choose us" title="Why Choose Us" />
          <motion.div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
            {whyChooseUs.map(([title, text, icon]) => (
              <motion.article className="rounded-xl border border-bitOrange/50 bg-[#111827] p-6 shadow-[0_0_30px_rgba(255,106,42,0.08)]" key={title} variants={fadeUp} whileHover={{ y: -5 }}>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-700/80 text-lg">{icon}</div>
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
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-bitOrange md:block" />
            {processSteps.map(([number, title, text]) => (
              <motion.div className="relative text-center" key={number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-bitOrange bg-[#08111f] text-sm font-black text-white shadow-[0_0_34px_rgba(0,119,255,0.9)] ring-8 ring-blue-500/15">
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
              <motion.article className="overflow-hidden rounded-lg border border-white/10 bg-[#0b111c]" key={project.title} variants={fadeUp} whileHover={{ y: -6 }}>
                <img className="h-40 w-full object-cover" src={project.image} alt="" />
                <div className="p-5">
                  <h3 className="text-sm font-black">{project.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">{project.tag}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <a className="text-sm font-semibold text-blue-500 hover:text-bitOrange" href="/portfolio">View All Projects →</a>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#111821] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
          <motion.div className="mt-12 grid gap-6 md:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
            {testimonials.map(([name, role, quote, initial]) => (
              <motion.figure className="rounded-lg border border-slate-600/70 bg-[#08111f] p-7" key={name} variants={fadeUp}>
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
        <div className="relative mx-auto grid max-w-5xl items-center gap-8 overflow-hidden rounded-lg border border-bitOrange/20 bg-black px-8 py-10 shadow-[0_0_44px_rgba(255,106,42,0.45)] md:grid-cols-[1fr_auto]">
          <img alt="" className="absolute inset-x-0 bottom-0 h-28 w-full object-cover opacity-35" src="/images/orange-wave.png" />
          <div className="relative"><h2 className="text-2xl font-semibold">Lets Build Something Amazing Together</h2><p className="mt-3 text-sm text-slate-400">Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.</p></div>
          <a className="relative inline-flex rounded-md bg-bitOrange px-7 py-3 text-sm font-black text-white transition hover:bg-orange-500" href="/contact">Get in touch →</a>
        </div>
      </section>
    </main>
  );
}
