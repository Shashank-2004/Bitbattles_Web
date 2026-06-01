import { motion } from "framer-motion";
import { services } from "../data/services";
import { fadeUp, staggerContainer } from "../lib/motion";

export function ServicesPage() {
  return (
    <main className="bg-bitCharcoal text-white">
      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-bitOrange/10 blur-3xl" />
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Services</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
            Services We Provide
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm font-semibold leading-7 text-slate-500">
            End-to-end development services to build, scale and transform your business with
            technology.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-[1180px] gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.article
              className="rounded-xl border border-bitOrange/35 bg-[#07101c] p-7 shadow-[0_0_34px_rgba(255,78,18,0.12)]"
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -7 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-bitOrange bg-bitOrange/10 text-xl">
                {service.emoji}
              </div>
              <h2 className="mt-6 text-xl font-black">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a className="text-sm font-black text-blue-500 hover:text-bitOrange" href={service.href}>
                  View service →
                </a>
                <a
                  className="text-sm font-black text-bitOrange hover:text-white"
                  href={`/proposal?service=${service.id}`}
                >
                  Request service →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
