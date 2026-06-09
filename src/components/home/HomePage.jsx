import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "../../data/services";
import { projects } from "../../data/site";
import { fadeUp, staggerContainer } from "../../lib/motion";
import { HomeHero } from "./HomeHero";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { CometCard } from "../ui/comet-card";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { FollowerPointerCard } from "../ui/following-pointer";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { VantaBackground } from "./VantaBackground";

const placeholderImage = "/images/placeholders/image-placeholder.svg";
const placeholderLogo = "/images/placeholders/logo-placeholder.svg";

const whyChooseItems = [
  {
    quote:
      "Skilled engineers focused on scalable architecture, modern technologies and product execution.",
    name: "Experienced Development Team",
    designation: "Scalable Systems • Product Thinking • Modern Stack",
    src: "/images/experienced_teams.png",
  },
  {
    quote:
      "Modern AI systems and automation workflows designed for operational efficiency and scalable operations.",
    name: "AI & Automation Solutions",
    designation: "Workflow Automation • AI Integration • Process Optimization",
    src: "/images/ai_automation.png",
  },
  {
    quote:
      "Structured workflows and scalable infrastructure focused on long-term product growth and reliability.",
    name: "Reliable Product Delivery",
    designation: "Agile Workflow • Transparent Process • Long-Term Support",
    src: "/images/about-hero.png",
  },
  {
    quote:
      "Secure, maintainable and high-performance digital systems built for scalability and long-term success.",
    name: "Quality & Scalability",
    designation: "Secure Systems • Performance Focused • Maintainable Code",
    src: "/images/quality_and_scalability.png",
  },
];

const stickyHighlights = [
  {
    title: "Discovery that feels practical",
    description:
      "We clarify goals, constraints, users, integrations, and delivery risks before writing production code.",
    content: (
      <img
        alt=""
        className="h-full w-full object-cover"
        src={"/images/experienced_teams.png"}
      />
    ),
  },
  {
    title: "Design systems before screens",
    description:
      "Interfaces are planned around repeatable components, clean hierarchy, and a brand system that can scale.",
    content: (
      <img
        alt=""
        className="h-full w-full object-cover"
        src={"/images/quality_and_scalability.png"}
      />
    ),
  },
  {
    title: "Engineering with room to grow",
    description:
      "Frontend, backend, API, database, and deployment decisions stay readable and maintainable for the next team.",
    content: (
      <img
        alt=""
        className="h-full w-full object-cover"
        src={"/images/ai_automation.png"}
      />
    ),
  },
];

const featureMarquee = [
  { name: "AI WORKFLOWS" },
  { name: "AUTOMATION" },
  { name: "SaaS SYSTEMS" },
  { name: "CLOUD DELIVERY" },
  { name: "SECURE APPS" },
  { name: "PRODUCT DESIGN" },
];

const stackMarquee = [
  { logo: "/images/physics.png" },
  { logo: "/images/docker.jpg" },
  { logo: "/images/nodejs.png" },
  { logo: "/images/mongoDB.png" },
  { logo: "/images/js.png" },
  { logo: "/images/FastAPI.png" },
];


const processSteps = [
  [
    "01",
    "Discover",
    "We understand your goals, challenges and requirements.",
  ],
  [
    "02",
    "Design",
    "We shape wireframes, prototypes and polished UI/UX.",
  ],
  [
    "03",
    "Develop",
    "We build robust, scalable and high-quality solutions.",
  ],
  [
    "04",
    "Deploy",
    "We test, deploy and support long-term improvement.",
  ],
];

const testimonials = [
  {
    name: "Rohit Sharma",
    title: "CTO, FinEdge",
    quote:
      "BitBattles delivered an AI solution that improved our workflow and productivity significantly.",
    logo: placeholderImage,
  },
  {
    name: "Anjali Verma",
    title: "Product Manager, HealthCare+",
    quote:
      "Their team was professional, responsive and delivered the project on time with excellent quality.",
    logo: placeholderImage,
  },
  {
    name: "Arjun Mehta",
    title: "Founder, EduChamp",
    quote:
      "They understood our vision and turned it into a clean, usable digital product.",
    logo: placeholderImage,
  },
];

const serviceProof = ["4.8 rating", "3+ builds", "Fast discovery"];
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const normalizeHomeProject = (project, index = 0) => {
  const fallback = projects[index % projects.length] ?? projects[0];

  return {
    ...fallback,
    ...project,
    title: project.title || fallback.title,
    tag: project.tag || project.category || fallback.tag,
    image: project.image || fallback.image,
  };
};

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.p
        className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        className="mt-2 text-3xl font-black tracking-normal text-white sm:text-4xl"
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      {text && (
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
          {text}
        </p>
      )}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-bitOrange/50 to-transparent" />
  );
}

function LogoMarquee({ title, items, direction = "left" }) {
  return (
    <div className="mx-auto mt-8 max-w-[1180px]" aria-label={title}>
      <InfiniteMovingCards
        className="max-w-full"
        direction={direction}
        items={items}
        speed="slow"
        variant="logo"
        title={title}
      />
    </div>
  );
}


export function HomePage() {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [featuredProjectsLoading, setFeaturedProjectsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const parallaxTop = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const parallaxBottom = useTransform(scrollYProgress, [0, 1], [0, 140]);

  useEffect(() => {
    let mounted = true;

    async function fetchFeaturedProjects() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/portfolio/featured`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch featured projects.");
        }

        if (mounted && Array.isArray(data) && data.length) {
          setFeaturedProjects(data.slice(0, 4).map(normalizeHomeProject));
        } else if (mounted) {
          setFeaturedProjects([]);
        }
      } catch (error) {
        console.error("Featured projects fetch failed:", error);
        if (mounted) setFeaturedProjects([]);
      } finally {
        if (mounted) setFeaturedProjectsLoading(false);
      }
    }

    fetchFeaturedProjects();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="overflow-hidden bg-bitCharcoal text-white">
      <HomeHero />

      {/* SERVICES */}
      <section
        id="services"
        className="relative px-5 py-20 sm:px-6 lg:px-8"
      >
        <SectionDivider />

        <div className="pointer-events-none absolute right-10 top-16 h-64 w-64 rounded-full bg-bitOrange/10 blur-3xl" />

        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="What we do"
            title="Services We Provide"
            text="End-to-end development services to build, scale and transform your business with technology."
          />

          <motion.div
            className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {services.slice(0, 6).map((service, index) => (
              <motion.div key={service.id} variants={fadeUp}>
                <FollowerPointerCard title={service.title}>
                  <CometCard rotateDepth={9} translateDepth={10}>
                    <article className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,rgba(7,16,28,0.92),rgba(11,19,33,0.82))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.38),0_0_38px_rgba(255,78,18,0.12)] transition">
                      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-bitOrange/12 blur-3xl transition group-hover:bg-bitOrange/22" />
                      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-bitOrange/70 to-transparent" />

                      <motion.img
                        alt=""
                        className="h-32 w-full rounded-[1.5rem] object-cover opacity-85 shadow-[0_0_28px_rgba(255,106,42,0.10)]"
                        src={placeholderImage}
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.45 }}
                      />

                      <div className="mt-7 flex items-center justify-between gap-4">
                        <span className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] font-black text-slate-400">
                          {serviceProof[index % serviceProof.length]}
                        </span>
                        <span className="text-xs font-black text-bitOrange">
                          {service.shortCode}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-black leading-snug text-white">
                        {service.title}
                      </h3>

                      <p className="mt-5 text-sm font-semibold leading-7 text-slate-400">
                        {service.description}
                      </p>

                      <a
                        className="mt-auto pt-8 text-sm font-black text-blue-500 transition hover:text-bitOrange"
                        href={service.href}
                      >
                        Learn more -&gt;
                      </a>
                    </article>
                  </CometCard>
                </FollowerPointerCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <HoverBorderGradient
              as="a"
              className="bg-[#050710] px-6 py-3 text-sm font-black text-white"
              containerClassName="mx-auto"
              href="/services"
            >
              Explore all services -&gt;
            </HoverBorderGradient>
          </div>
        </div>

        <div className="mt-16 space-y-7">
          <LogoMarquee
            direction="left"
            items={featureMarquee}
            title="Product features"
          />
          <LogoMarquee
            direction="right"
            items={stackMarquee}
            title="Technology stack"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#101722] px-5 py-24 sm:px-6 lg:px-8"
      >
        <SectionDivider />

        <div className="pointer-events-none absolute left-[-10%] top-20 h-[320px] w-[320px] rounded-full bg-bitOrange/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-[-5%] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[100px]" />

        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Why choose us"
            title="Built for Modern Businesses"
            text="Scalable systems, modern technologies and execution-focused product development."
          />

          <div className="mt-16">
            <AnimatedTestimonials
              testimonials={whyChooseItems}
            />
          </div>
        </div>
      </section>

      {/* STICKY IMPACT */}
      <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:px-8">
        <VantaBackground />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,16,0.72),rgba(5,7,16,0.9))]" />
        <SectionDivider />

        <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="How we think"
            title="Abstract Ideas Into Buildable Systems"
            text="A fluid product workflow that connects strategy, design and engineering without making the process feel heavy."
          />

          <div className="mt-12">
            <StickyScroll
              content={stickyHighlights}
              contentClassName="shadow-[0_0_60px_rgba(255,106,42,0.14)]"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="relative px-5 py-24 sm:px-6 lg:px-8"
      >
        <SectionDivider />

        <img
          alt=""
          className="pointer-events-none absolute -right-20 top-10 hidden w-[500px] -scale-x-100 opacity-45 lg:block"
          src="/images/orange-wave.png"
        />

        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            eyebrow="Our process"
            title="Our Simple 4-Step Process"
          />

          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-bitOrange/20 via-bitOrange to-bitOrange/20 md:block" />

            {processSteps.map(([number, title, text], index) => (
                <motion.div
                  className="relative rounded-2xl border border-white/0 p-4 text-center"
                  key={number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-bitOrange bg-[#08111f] text-sm font-black text-white shadow-[0_0_34px_rgba(0,119,255,0.45)] ring-8 ring-blue-500/10">
                  {number}
                </div>

                <h3 className="mt-6 text-lg font-black">{title}</h3>

                <p className="mx-auto mt-6 max-w-[210px] text-sm leading-7 text-slate-400">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="relative overflow-hidden px-5 pb-24 sm:px-6 lg:px-8"
      >
        <VantaBackground />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,16,0.86),rgba(5,7,16,0.92))]" />

        <img
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 w-[420px] opacity-35"
          src="/images/orange-wave.png"
        />

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <ContainerScroll
            titleComponent={
              <SectionHeading
                eyebrow="Our work"
                title="Featured Projects"
                text="A rotating product showcase area ready for your final project images."
              />
            }
          >
            <motion.div
              className="grid h-full gap-5 p-5 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {featuredProjectsLoading &&
                Array.from({ length: 4 }).map((_, index) => (
                  <article
                    className="overflow-hidden rounded-[1.25rem] bg-[#0b111c]/80 shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
                    key={`featured-skeleton-${index}`}
                  >
                    <div className="h-56 w-full animate-pulse bg-white/[0.05]" />
                    <div className="p-5">
                      <div className="h-4 w-28 animate-pulse rounded bg-white/[0.08]" />
                      <div className="mt-3 h-3 w-20 animate-pulse rounded bg-white/[0.05]" />
                    </div>
                  </article>
                ))}

              {!featuredProjectsLoading && featuredProjects.map((project) => (
                <motion.article
                  className="group overflow-hidden rounded-[1.25rem] bg-[#0b111c] shadow-[0_18px_60px_rgba(0,0,0,0.32)] transition"
                  key={project.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <img
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    src={project.image || placeholderImage}
                    alt=""
                  />

                  <div className="p-5">
                    <h3 className="text-sm font-black">{project.title}</h3>

                    <p className="mt-2 text-xs text-slate-500">
                      {project.tag}
                    </p>
                  </div>
                </motion.article>
              ))}

              {!featuredProjectsLoading && featuredProjects.length === 0 && (
                <div className="col-span-full mx-auto max-w-xl rounded-2xl bg-white/[0.04] px-6 py-8 text-center shadow-[0_0_35px_rgba(255,106,42,0.08)]">
                  <p className="text-sm font-bold text-slate-300">
                    No featured projects are available from the database yet.
                  </p>
                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    Add portfolio documents in MongoDB and set featured to true to show them here.
                  </p>
                </div>
              )}
            </motion.div>
          </ContainerScroll>

          <div className="-mt-16 text-center md:-mt-24">
            <motion.a
              className="relative z-20 inline-flex rounded-full bg-white/[0.04] px-6 py-3 text-sm font-black text-white shadow-[0_0_24px_rgba(255,106,42,0.10)] transition hover:bg-bitOrange hover:text-white"
              href="/portfolio"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects -&gt;
            </motion.a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="relative bg-[#111821] px-5 py-20 sm:px-6 lg:px-8"
      >
        <SectionDivider />

        <div className="mx-auto max-w-[1500px]">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
          />

          <div className="mt-12">
            <InfiniteMovingCards
              className="max-w-full"
              direction="left"
              items={testimonials}
              pauseOnHover={false}
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#111821] px-5 pb-20 sm:px-6 lg:px-8">
        <SectionDivider />

        <div className="relative mx-auto grid max-w-5xl items-center gap-8 overflow-hidden rounded-2xl border border-bitOrange/30 bg-black px-8 py-10 shadow-[0_0_58px_rgba(255,106,42,0.42)] md:grid-cols-[1fr_auto]">
          <img
            alt=""
            className="absolute inset-x-0 bottom-0 h-28 w-full object-cover opacity-35"
            src="/images/orange-wave.png"
          />

          <div className="relative">
            <h2 className="text-2xl font-semibold">
              Lets Build Something Amazing Together
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              Have a project in mind? Let&apos;s discuss how we can help you
              achieve your goals.
            </p>
          </div>

          <HoverBorderGradient
            as="a"
            className="bg-bitOrange px-7 py-3 text-sm font-black text-white"
            href="/contact"
          >
            Get in touch -&gt;
          </HoverBorderGradient>
        </div>
      </section>
    </main>
  );
}
