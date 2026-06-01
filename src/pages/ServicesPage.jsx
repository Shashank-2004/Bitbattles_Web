import { motion } from "framer-motion";
import { Reveal } from "../components/common/Reveal";
import { ServiceIcon } from "../components/services/ServiceIcon";
import { services } from "../data/services";
import { fadeUp, staggerContainer } from "../lib/motion";

export function ServicesPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-bitOrange/20 blur-3xl" />
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-bitOrange">Services</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal sm:text-6xl">
            Practical AI and software services for fast-moving teams
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Focused services that help early-stage businesses validate, build, and ship useful
            digital products without unnecessary complexity.
          </p>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-16 text-bitCharcoal sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.article
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-bitOrange/50 hover:shadow-xl"
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -7 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-bitOrange group-hover:bg-bitOrange group-hover:text-white">
                <ServiceIcon name={service.icon} />
              </div>
              <h2 className="mt-6 text-xl font-black">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="text-sm font-black text-bitOrange hover:text-bitCharcoal" href={service.href}>
                  View service &rarr;
                </a>
                <a
                  className="text-sm font-black text-bitCharcoal hover:text-bitOrange"
                  href={`/contact?service=${service.id}`}
                >
                  Request service &rarr;
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
