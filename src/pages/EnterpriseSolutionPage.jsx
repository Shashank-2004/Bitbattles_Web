import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/solution-subpages.css";

gsap.registerPlugin(ScrollTrigger);

export function EnterpriseSolutionPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
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
        "--sol-accent-primary": "#0ea5e9", // Sky Blue
        "--sol-accent-secondary": "#14b8a6", // Teal
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
                <span className="sol-sub-eyebrow">Enterprise-Grade Solutions</span>
              </div>
              <h1 className="sol-sub-title sol-hero-reveal">
                Transform Operations at <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6]">
                  Global Scale
                </span>
              </h1>
              <p className="sol-sub-desc sol-hero-reveal mb-8">
                We modernize legacy systems, automate critical workflows, and deploy secure, high-availability platforms that scale effortlessly across global operations.
              </p>
              <div className="flex flex-wrap gap-4 sol-hero-reveal">
                <a href="/proposal" className="sol-sub-btn-primary">
                  Discuss Modernization →
                </a>
                <a href="#how-it-works" className="sol-sub-btn-secondary">
                  View Enterprise Process
                </a>
              </div>
            </div>

            <div className="sol-hero-visual lg:ml-auto w-full max-w-lg">
              <div className="sol-sub-glass-panel p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">System Architecture Status</div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9]">🔒</div>
                      <div>
                        <div className="font-bold">Security Layer</div>
                        <div className="text-xs text-slate-400">SOC2 / HIPAA Compliant</div>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-bold bg-green-400/10 px-3 py-1 rounded-full">Active</div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6]">🔗</div>
                      <div>
                        <div className="font-bold">Microservices Hub</div>
                        <div className="text-xs text-slate-400">99.99% Uptime</div>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-bold bg-green-400/10 px-3 py-1 rounded-full">Scaling</div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">📊</div>
                      <div>
                        <div className="font-bold">Data Pipeline</div>
                        <div className="text-xs text-slate-400">Real-time Processing</div>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-bold bg-green-400/10 px-3 py-1 rounded-full">Synced</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Legacy Bottleneck</h2>
            <p className="text-slate-400 text-lg">
              Technical debt and outdated infrastructure slow down innovation. Established organizations need digital transformation without disrupting daily operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sol-card-grid">
            <div className="p-10 rounded-3xl bg-slate-800/40 border border-slate-700">
              <div className="text-slate-300 font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> The Challenge
              </div>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Monolithic architectures that are impossible to maintain or scale.</li>
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Security vulnerabilities and compliance risks in legacy code.</li>
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Data silos that prevent real-time decision-making.</li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20">
              <div className="text-[#0ea5e9] font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span> The BitBattles Solution
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="text-[#0ea5e9] mt-1">✓</span> Graceful migration to microservices and cloud-native stacks.</li>
                <li className="flex gap-3"><span className="text-[#0ea5e9] mt-1">✓</span> Enterprise-grade security protocols and compliance integrations.</li>
                <li className="flex gap-3"><span className="text-[#0ea5e9] mt-1">✓</span> Unified data pipelines and API gateways for seamless connectivity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY FEATURES --- */}
      <section className="sol-sub-section sol-sub-section--panel">
        <div className="sol-sub-container">
          <div className="sol-section-reveal mb-16">
            <span className="sol-sub-eyebrow">Enterprise Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold">Built for Reliability</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sol-card-grid">
            {[
              { icon: "🛡️", title: "Security & Compliance", desc: "Built-in SOC2, HIPAA, and GDPR compliance. Penetration testing and continuous vulnerability scanning." },
              { icon: "☁️", title: "Cloud-Native Architecture", desc: "Kubernetes, Docker, and serverless deployments on AWS, GCP, or Azure for infinite scalability." },
              { icon: "🔄", title: "Legacy Migration", desc: "Strangler fig pattern implementations to slowly replace legacy systems with zero downtime." },
              { icon: "🔌", title: "API Ecosystems", desc: "Robust GraphQL and REST API gateways to unify your disparate internal and external services." },
              { icon: "📊", title: "Data Engineering", desc: "Real-time ETL pipelines, data lakes, and BI dashboards for enterprise-wide visibility." },
              { icon: "👨‍💻", title: "Dedicated Pods", desc: "Dedicated senior engineering teams integrated directly into your existing corporate workflows." },
            ].map((f) => (
              <div key={f.title} className="sol-sub-feature-card">
                <div className="sol-sub-feature-card__icon text-[#14b8a6]">{f.icon}</div>
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
            <span className="sol-sub-eyebrow">Transformation Strategy</span>
            <h2 className="text-3xl md:text-5xl font-bold">A Risk-Mitigated Process</h2>
          </div>

          <div className="sol-sub-process max-w-4xl mx-auto">
            <div className="sol-sub-process__line"></div>
            
            {[
              { step: "01", title: "Audit & Architecture", desc: "Comprehensive review of your existing stack. We design a target architecture and a phased migration plan." },
              { step: "02", title: "Proof of Concept", desc: "We validate the riskiest assumptions by building a vertical slice or migrating a single non-critical service." },
              { step: "03", title: "Phased Rollout", desc: "Incremental deployment of new systems running parallel to legacy ones, routing traffic dynamically." },
              { step: "04", title: "Handover & Support", desc: "Complete documentation, team training, and 24/7 SLA-backed managed support." },
            ].map((s) => (
              <div key={s.step} className="sol-sub-process-step sol-section-reveal">
                <div className="sol-sub-process-node">{s.step}</div>
                <div className="sol-sub-process-content">
                  <h3 className="text-xl font-bold mb-3 text-[#0ea5e9]">{s.title}</h3>
                  <p className="text-slate-400">{s.desc}</p>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="sol-sub-section">
        <div className="sol-sub-container">
          <div className="sol-sub-glass-panel p-12 md:p-20 text-center sol-section-reveal">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0ea5e9]/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Modernize Your Enterprise</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Schedule a technical consultation with our lead architects to discuss your modernization challenges.
              </p>
              <a href="/contact" className="sol-sub-btn-primary text-lg px-10 py-5">
                Schedule Consultation →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
