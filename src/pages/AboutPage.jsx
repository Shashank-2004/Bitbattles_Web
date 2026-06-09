import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../data/company";

const teamMembers = [
  {
    id: "1",
    name: "name1",
    role: "role1",
    shortBio: "A dynamic and visionary leader, he inspires innovation and excellence...",
    fullBio: " A dynamic and visionary leader, he inspires innovation and excellence across all divisions. With a deep technical background and business acumen, Pranjal leads BitBattles towards cutting-edge technology integrations and strategic expansion. He is dedicated to driving product-market fit and establishing scalable technology architectures.",
    tags: ["Technical Expertise", "Strategic Leadership", "Innovative Thinking"],
    image: "/images/team-pranjal.png",
    linkedin: "https://linkedin.com/company/bitbattles",
    email: "1@bitbattles.in",
    skills: ["AI Systems Design", "Enterprise Architecture", "Strategic Planning", "Product Lifecycle Management", "Team Scaling"]
  },
  {
    id: "2",
    name: "name2",
    role: "role2",
    shortBio: "A sharp financial strategist and tech enthusiast, he blends his B.Tech...",
    fullBio: " A sharp financial strategist and tech enthusiast, he uniquely blends his B.Tech engineering background with sophisticated financial acumen. He manages the firm's capital allocation, financial planning, and risk management operations, ensuring that the development of cutting-edge technologies is backed by a robust and sustainable economic framework.",
    tags: ["Financial Planning & Analysis", "Budgeting & Resource Management", "Strategic Decision-Making"],
    image: "/images/team-divyansh.png",
    linkedin: "https://linkedin.com/company/bitbattles",
    email: "2@bitbattles.in",
    skills: ["Capital Allocation", "Financial Forecasting", "Risk Mitigation", "Operations Finance", "B2B Pricing Models"]
  },
  {
    id: "3",
    name: "name3",
    role: "role3",
    shortBio: "A creative and results-driven marketing leader, she blends...",
    fullBio: " A creative and results-driven marketing leader, she blends consumer behavior insights with data analytics to craft compelling brand narratives. Under her leadership, BitBattles' outreach campaigns have established a powerful digital presence, successfully positioning the company as a premium digital solutions partner for enterprises globally.",
    tags: ["Strategic Marketing", "Digital Branding", "Creative Campaigns"],
    image: "/images/team-ananya.png",
    linkedin: "https://linkedin.com/company/bitbattles",
    email: "3@bitbattles.in",
    skills: ["Brand Strategy", "Content Marketing", "Data Analytics", "Public Relations", "Client Acquisition Funnels"]
  },
  {
    id: "4",
    name: "name4",
    role: "role4",
    shortBio: "Full-stack developer and technical architect with deep expertise in...",
    fullBio: "As a seasoned full-stack developer and technical architect, he brings deep expertise in building high-concurrency, scalable web platforms and AI-integrated pipelines. Ishant directs the engineering team, enforces code quality guidelines, and architects the core services that power clients' digital products.",
    tags: ["React.js", "Node.js", "Python"],
    image: "/images/team-ishant.png",
    linkedin: "https://linkedin.com/company/bitbattles",
    email: "4@bitbattles.in",
    skills: ["React & Next.js", "Node.js & Express", "Python & PyTorch", "Cloud Infrastructure (AWS/GCP)", "Database Optimization"]
  }
];

const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const ImageWithFallback = ({ src, alt, fallbackInitials, className }) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`flex items-center justify-center bg-[#0d1527] border border-bitOrange/20 text-bitOrange text-2xl font-black ${className}`}>
        {fallbackInitials}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export function AboutPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-bitCharcoal text-white font-sans">
      {/* Background Layer: Aligned with Home Page Hero Theme */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Base Gradient Theme (Home Page Colors) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(9,75,168,0.34),transparent_31%),radial-gradient(circle_at_20%_32%,rgba(255,106,42,0.16),transparent_27%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_24%)]" />
        
        {/* Top Header Divider Line (Animated Pulse) */}
        <motion.div
          className="absolute left-1/2 top-20 h-px w-[760px] -translate-x-1/2 bg-gradient-to-r from-transparent via-bitOrange/60 to-transparent"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [0.95, 1.05, 0.95]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated Blob 1 (Orange, Top Left) */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-bitOrange/15 blur-[90px]"
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated Blob 2 (Blue, Top Right) */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-[#094ba8]/25 blur-[110px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Blob 3 (Subtle Accent, Bottom Center) */}
        <motion.div
          className="absolute bottom-[20%] left-[25%] w-[40%] h-[40%] rounded-full bg-aqua/10 blur-[130px]"
          animate={{
            x: [0, -20, 20, 0],
            y: [0, 30, -30, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1180px] px-5 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex rounded-md border border-bitOrange/40 bg-black/40 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">
              Who We Are
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pioneering the Next Era of <span className="text-bitOrange">Digital Innovation</span>.
            </h1>
            <p className="mt-6 text-sm font-medium leading-7 text-slate-400 max-w-xl">
              BitBattles is a forward-thinking technology partner specializing in custom AI systems, enterprise applications, web solutions, and software architectures. We help modern businesses scale, automate, and dominate their digital spaces with elite product execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-md bg-bitOrange px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-500 hover:scale-[1.02]"
              >
                View Our Portfolio &rarr;
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:border-bitOrange hover:text-bitOrange hover:scale-[1.02]"
              >
                Get in Touch &rarr;
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-bitOrange/30 bg-bitPanel p-3 shadow-[0_0_50px_rgba(255,106,42,0.12)]">
              <img
                alt="BitBattles AI and Software Solutions"
                className="w-full rounded-xl object-cover aspect-[4/3] relative z-10"
                src="/images/about-hero.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-xl" />
            </div>
            {/* Ambient decoration */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-bitOrange/20 blur-3xl" />
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-aqua/20 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* About BitBattles Section */}
      <section className="relative border-y border-white/5 bg-bitPanelSoft/40 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl sm:text-2xl font-black uppercase tracking-[0.15em] text-bitOrange mb-2">
                About BitBattles
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">
                Create. Innovate. Dominate.
              </h2>
              <div className="mt-6 space-y-6 text-base leading-8 text-slate-300 font-medium">
                <p>
                  At BitBattles, we engineer custom Artificial Intelligence, mobile applications, web platforms, and advanced software solutions designed to propel ambitious organizations forward. Driven by our core philosophy to **Create, Innovate, and Dominate**, our multidisciplinary team of builders, designers, and software engineers crafts scalable digital systems that fuel growth and long-term market success.
                </p>
                <p>
                  {company.legalName} is an early-stage technology company from {company.location}. We focus on AI-driven solutions, end-to-end development, and user-centric design for teams that need practical product execution.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid gap-5 sm:grid-cols-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {[
                { label: "Founded", value: company.founded, desc: "Pioneering technology systems from day one." },
                { label: "Team Size", value: company.size, desc: "Specialists in AI, full-stack dev & design." },
                { label: "Headquarters", value: company.location, desc: "Located in India's leading technology hub." },
                { label: "Focus Core", value: "AI, Apps & SaaS", desc: "Crafting scalable, high-impact products." },
              ].map((stat, i) => (
                <motion.div
                  className="rounded-xl border border-bitOrange/25 bg-bitPanel/80 p-8 shadow-sm hover:border-bitOrange/60 hover:shadow-[0_0_30px_rgba(255,106,42,0.15)] transition-all duration-300"
                  key={stat.label}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-bitOrange">{stat.label}</p>
                  <p className="mt-3 text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2.5 text-xs font-semibold leading-6 text-slate-400">{stat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="relative px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Our Visionaries</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl text-white">
              Meet Our <span className="bg-gradient-to-r from-bitOrange via-orange-400 to-yellow-500 bg-clip-text text-transparent">Leadership</span> & Team
            </h2>
            <p className="mt-4 text-sm font-semibold text-slate-400">
              Click on any team member to learn more about their expertise and experience.
            </p>
          </div>
          <motion.div
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {teamMembers.map((member) => (
              <motion.article
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-bitOrange/25 bg-[linear-gradient(145deg,rgba(7,16,28,0.98),rgba(11,19,33,0.92))] p-6 shadow-[0_0_34px_rgba(255,78,18,0.10)] transition hover:-translate-y-2 hover:border-bitOrange/80 hover:shadow-[0_0_54px_rgba(255,106,42,0.22)] flex flex-col h-full"
                key={member.id}
                variants={cardVariants}
                onClick={() => setSelectedMember(member)}
              >
                {/* Ambient glow inside card */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-bitOrange/10 blur-2xl transition group-hover:bg-bitOrange/20" />
                
                {/* Visual Header */}
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-square bg-[#050710]/50 rounded-xl border border-white/5 shrink-0 z-10">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    fallbackInitials={getInitials(member.name)}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bitPanel via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bitCharcoal/80 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                {/* Card Content */}
                <div className="p-0 pt-6 flex flex-col flex-grow z-10">
                  <h3 className="text-lg font-black text-white">{member.name}</h3>
                  <p className="mt-1 text-xs font-bold text-slate-400">{member.role}</p>
                  <p className="mt-4 text-xs font-semibold leading-relaxed text-slate-500 flex-grow">
                    {member.shortBio}
                  </p>
                  
                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5 shrink-0">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full border border-bitOrange/30 bg-bitOrange/5 px-2.5 py-1 text-[10px] font-black text-bitOrange"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-bitOrange/35 bg-bitPanelSoft p-6 sm:p-8 shadow-[0_0_50px_rgba(255,106,42,0.3)]"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-bitCharcoal/80 text-slate-400 hover:text-white hover:border-bitOrange transition-all duration-200"
                onClick={() => setSelectedMember(null)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="grid gap-6 sm:grid-cols-[180px_1fr] items-start mt-4">
                {/* Photo */}
                <div className="relative mx-auto sm:mx-0 overflow-hidden rounded-xl border border-white/10 bg-slate-900 w-[180px] aspect-square">
                  <ImageWithFallback
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fallbackInitials={getInitials(selectedMember.name)}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Information */}
                <div>
                  <h3 className="text-2xl font-black text-white">{selectedMember.name}</h3>
                  <p className="text-sm font-bold text-bitOrange mt-1">{selectedMember.role}</p>
                  <div className="mt-4 text-xs font-semibold leading-relaxed text-slate-300">
                    <p>{selectedMember.fullBio}</p>
                  </div>
                  {/* Competencies */}
                  <div className="mt-6">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">Key Expertise</h4>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {selectedMember.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-bold text-slate-300 hover:border-bitOrange/40 hover:text-white transition duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Connect */}
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">Connect:</span>
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="text-slate-400 hover:text-bitOrange transition"
                      title="Send Email"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative px-5 py-24 sm:px-6 lg:px-8 bg-bitCharcoal">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-bitOrange/30 bg-black px-8 py-14 shadow-[0_0_55px_rgba(255,106,42,0.22)] text-center">
          {/* Waves background */}
          <img
            alt=""
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full object-cover opacity-20"
            src="/images/orange-wave.png"
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black sm:text-4xl text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-sm font-semibold text-slate-400 leading-relaxed">
              Let&apos;s discuss how we can help you achieve your digital goals with bespoke artificial intelligence, web platforms, and mobile apps.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                className="inline-flex rounded-md bg-bitOrange px-8 py-3.5 text-sm font-black text-white transition hover:bg-orange-500 hover:scale-[1.03] shadow-lg shadow-orange-500/25"
                href="/contact"
              >
                Get Started &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
