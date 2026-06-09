import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/solution-subpages.css";

gsap.registerPlugin(ScrollTrigger);

export function StartupSolutionPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo(
        ".sol-hero-reveal",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      gsap.fromTo(
        ".sol-hero-visual",
        { opacity: 0, scale: 0.9, x: 40 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, delay: 0.4, ease: "power3.out" }
      );

      // Section Reveals
      gsap.utils.toArray(".sol-section-reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          }
        );
      });

      // Card Staggers
      gsap.utils.toArray(".sol-card-grid").forEach((grid) => {
        gsap.fromTo(
          grid.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
            },
          }
        );
      });
      
      // Process Line
      gsap.fromTo(
        ".sol-sub-process__line",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".sol-sub-process",
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={pageRef} 
      className="bg-[#050710] text-white"
      style={{
        "--sol-accent-primary": "#ff6a2a", // BitBattles Orange
        "--sol-accent-secondary": "#a855f7", // Purple
      }}
    >
      {/* --- HERO SECTION --- */}
      <section className="sol-sub-hero">
        <div className="sol-sub-hero__bg" />
        <div className="sol-sub-hero__grid" />
        
        <div className="sol-sub-container sol-sub-hero__content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="sol-hero-reveal">
                <span className="sol-sub-eyebrow">For Early-Stage Startups</span>
              </div>
              <h1 className="sol-sub-title sol-hero-reveal">
                Ship Your MVP at <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a2a] to-[#a855f7]">
                  Warp Speed
                </span>
              </h1>
              <p className="sol-sub-desc sol-hero-reveal mb-8">
                We partner with ambitious founders to validate ideas, build investor-ready products, and iterate fast. Stop burning runway on slow development cycles.
              </p>
              <div className="flex flex-wrap gap-4 sol-hero-reveal">
                <a href="/proposal" className="sol-sub-btn-primary">
                  Start Your MVP →
                </a>
                <a href="#how-it-works" className="sol-sub-btn-secondary">
                  See Our Process
                </a>
              </div>
            </div>

            <div className="sol-hero-visual lg:ml-auto w-full max-w-lg">
              <div className="sol-sub-glass-panel p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">MVP_Launch_Sequence.sh</div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex text-slate-400"><span className="text-[#a855f7] mr-2">❯</span> Initializing Startup Engine...</div>
                  <div className="flex text-slate-400"><span className="text-[#a855f7] mr-2">❯</span> Compiling User Research... <span className="text-green-400 ml-2">100%</span></div>
                  <div className="flex text-slate-400"><span className="text-[#a855f7] mr-2">❯</span> Building Core Architecture... <span className="text-green-400 ml-2">Secure</span></div>
                  <div className="flex"><span className="text-[#ff6a2a] mr-2">❯</span> Deploying MVP to Production...</div>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff6a2a] to-[#a855f7] w-[75%] rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM & SOLUTION --- */}
      <section className="sol-sub-section">
        <div className="sol-sub-container">
          <div className="sol-section-reveal text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Founder's Dilemma</h2>
            <p className="text-slate-400 text-lg">
              Building a startup is a race against time and capital. Traditional agencies are too slow, and freelance platforms are too risky. We bridge the gap with high-velocity, high-quality engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sol-card-grid">
            <div className="p-10 rounded-3xl bg-red-500/5 border border-red-500/10">
              <div className="text-red-400 font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">✕</span> The Problem
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="text-red-400 mt-1">•</span> Bloated codebases that are hard to scale later.</li>
                <li className="flex gap-3"><span className="text-red-400 mt-1">•</span> Misaligned product features that users don't want.</li>
                <li className="flex gap-3"><span className="text-red-400 mt-1">•</span> Burning through seed funding before finding Product-Market Fit.</li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-[#ff6a2a]/10 border border-[#ff6a2a]/20">
              <div className="text-[#ff6a2a] font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">✓</span> The BitBattles Solution
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="text-[#ff6a2a] mt-1">✓</span> Lean, scalable architecture designed for future growth.</li>
                <li className="flex gap-3"><span className="text-[#ff6a2a] mt-1">✓</span> Rapid iteration cycles based on real user feedback.</li>
                <li className="flex gap-3"><span className="text-[#ff6a2a] mt-1">✓</span> Cost-effective engineering that extends your runway.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY FEATURES --- */}
      <section className="sol-sub-section sol-sub-section--panel">
        <div className="sol-sub-container">
          <div className="sol-section-reveal mb-16">
            <span className="sol-sub-eyebrow">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold">Engineered for Velocity</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sol-card-grid">
            {[
              { icon: "⚡", title: "Rapid Prototyping", desc: "Interactive Figma prototypes to validate your idea before writing a single line of code." },
              { icon: "🛠️", title: "Scalable MVPs", desc: "We build core features robustly, ensuring your tech stack won't collapse when you scale." },
              { icon: "📈", title: "Analytics Integration", desc: "Built-in telemetry to track user behavior, drop-offs, and core engagement metrics." },
              { icon: "🔒", title: "Investor-Ready", desc: "Clean code, secure architecture, and documentation that passes technical due diligence." },
              { icon: "🔄", title: "Agile Iteration", desc: "Weekly sprints and continuous deployment to ship updates based on market feedback fast." },
              { icon: "🎨", title: "Premium UX/UI", desc: "Aesthetics that build trust instantly. Because first impressions matter to early adopters." },
            ].map((f) => (
              <div key={f.title} className="sol-sub-feature-card">
                <div className="sol-sub-feature-card__icon">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="sol-sub-section" id="how-it-works">
        <div className="sol-sub-container">
          <div className="sol-section-reveal text-center mb-20">
            <span className="sol-sub-eyebrow">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold">From Napkin to Launch</h2>
          </div>

          <div className="sol-sub-process max-w-4xl mx-auto">
            <div className="sol-sub-process__line"></div>
            
            {[
              { step: "01", title: "Discovery & Scope", desc: "We ruthlessly prioritize features to define the absolute minimum viable product needed to test your core hypothesis." },
              { step: "02", title: "Design Sprint", desc: "Wireframing and high-fidelity UI design to visualize the user journey and secure early stakeholder buy-in." },
              { step: "03", title: "Agile Build", desc: "We engineer the platform using modern, scalable frameworks (React, Next.js, Node) with weekly demo check-ins." },
              { step: "04", title: "Launch & Iterate", desc: "Deployment to production, setup of analytics, and immediate iteration based on initial user data." },
            ].map((s, i) => (
              <div key={s.step} className="sol-sub-process-step sol-section-reveal">
                <div className="sol-sub-process-node">{s.step}</div>
                <div className="sol-sub-process-content">
                  <h3 className="text-xl font-bold mb-3 text-[#ff6a2a]">{s.title}</h3>
                  <p className="text-slate-400">{s.desc}</p>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPACT & METRICS --- */}
      <section className="sol-sub-section sol-sub-section--panel">
        <div className="sol-sub-container">
          <div className="grid md:grid-cols-4 gap-6 sol-card-grid">
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">4-8</div>
              <div className="text-slate-300 font-bold">Weeks to MVP</div>
              <div className="text-sm text-slate-500 mt-2">Lightning fast execution</div>
            </div>
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">100%</div>
              <div className="text-slate-300 font-bold">IP Ownership</div>
              <div className="text-sm text-slate-500 mt-2">You own all the code</div>
            </div>
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">$0</div>
              <div className="text-slate-300 font-bold">Tech Debt</div>
              <div className="text-sm text-slate-500 mt-2">Clean, scalable architecture</div>
            </div>
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">24/7</div>
              <div className="text-slate-300 font-bold">Support & Monitoring</div>
              <div className="text-sm text-slate-500 mt-2">Post-launch peace of mind</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="sol-sub-section">
        <div className="sol-sub-container">
          <div className="sol-sub-glass-panel p-12 md:p-20 text-center sol-section-reveal">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff6a2a]/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ship?</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Stop talking about your startup idea. Let's build it. Get a technical proposal and timeline within 48 hours.
              </p>
              <a href="/proposal" className="sol-sub-btn-primary text-lg px-10 py-5">
                Request a Proposal →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
