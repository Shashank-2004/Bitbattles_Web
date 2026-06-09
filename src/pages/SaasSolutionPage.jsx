import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/solution-subpages.css";

gsap.registerPlugin(ScrollTrigger);

export function SaasSolutionPage() {
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
        "--sol-accent-primary": "#8b5cf6", // Violet
        "--sol-accent-secondary": "#ec4899", // Pink
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
                <span className="sol-sub-eyebrow">Cloud-Native Engineering</span>
              </div>
              <h1 className="sol-sub-title sol-hero-reveal">
                Build SaaS That <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">
                  Scales & Converts
                </span>
              </h1>
              <p className="sol-sub-desc sol-hero-reveal mb-8">
                From complex multi-tenant backends to polished user dashboards. We engineer SaaS platforms that delight users and drive recurring revenue.
              </p>
              <div className="flex flex-wrap gap-4 sol-hero-reveal">
                <a href="/proposal" className="sol-sub-btn-primary">
                  Start Your SaaS Build →
                </a>
                <a href="#features" className="sol-sub-btn-secondary">
                  Explore Features
                </a>
              </div>
            </div>

            <div className="sol-hero-visual lg:ml-auto w-full max-w-lg">
              <div className="sol-sub-glass-panel p-6 md:p-8 relative overflow-hidden group">
                {/* Animated Background Gradients */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#8b5cf6]/20 rounded-full blur-[80px] group-hover:bg-[#8b5cf6]/30 transition-colors duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#ec4899]/20 rounded-full blur-[80px] group-hover:bg-[#ec4899]/30 transition-colors duration-700"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white tracking-wide text-lg">SaaS Command Center</h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">SYNCED: JUST NOW</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,1)]"></div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-green-400">All Systems Operational</span>
                  </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                  {/* MRR Box */}
                  <div className="bg-slate-900/60 border border-white/10 p-5 rounded-2xl backdrop-blur-md relative overflow-hidden group-hover:border-[#8b5cf6]/40 transition-colors duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <svg className="w-16 h-16 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Monthly Revenue</div>
                    <div className="flex items-end gap-3 relative z-10">
                      <div className="text-4xl font-black text-white">$124K</div>
                      <div className="text-sm font-bold text-green-400 mb-1 flex items-center bg-green-400/10 px-1.5 py-0.5 rounded">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        12.4%
                      </div>
                    </div>
                  </div>
                  
                  {/* Active Tenants Box */}
                  <div className="bg-slate-900/60 border border-white/10 p-5 rounded-2xl backdrop-blur-md relative overflow-hidden group-hover:border-[#ec4899]/40 transition-colors duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <svg className="w-16 h-16 text-[#ec4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Active Tenants</div>
                    <div className="flex items-end gap-3 relative z-10">
                      <div className="text-4xl font-black text-white">1,482</div>
                      <div className="text-sm font-bold text-green-400 mb-1 flex items-center bg-green-400/10 px-1.5 py-0.5 rounded">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        3.2%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Provisioning / Data Flow */}
                <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 relative z-10 backdrop-blur-md">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-bold text-white uppercase tracking-wider">Live Provisioning Engine</div>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 rounded-full bg-[#d946ef] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {/* Node 1 */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                        <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-xs font-bold text-slate-200">Deploying Workspace_ACME</span>
                          <span className="text-xs text-[#8b5cf6] font-black font-mono">100%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden shadow-inner">
                          <div className="bg-[#8b5cf6] h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Node 2 */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ec4899]/20 border border-[#ec4899]/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                        <svg className="w-5 h-5 text-[#ec4899] animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-xs font-bold text-slate-200">Migrating Tenant_Beta Data</span>
                          <span className="text-xs text-[#ec4899] font-black font-mono">68%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] h-2 rounded-full w-[68%] relative">
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Node 3 */}
                    <div className="flex items-center gap-4 opacity-50">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-xs font-bold text-slate-300">Allocating Isolated DB Cluster</span>
                          <span className="text-xs text-slate-500 font-black font-mono uppercase tracking-wider">Queued</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden shadow-inner">
                          <div className="bg-slate-700 h-2 rounded-full w-[15%]"></div>
                        </div>
                      </div>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Multi-Tenant Complexity</h2>
            <p className="text-slate-400 text-lg">
              Building a SaaS isn't just about the core feature. 80% of the work is the infrastructure: billing, auth, tenant isolation, and provisioning. We handle the 80% so you can focus on the 20% that makes you unique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sol-card-grid">
            <div className="p-10 rounded-3xl bg-slate-800/40 border border-slate-700">
              <div className="text-slate-300 font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">✕</span> Typical SaaS Hurdles
              </div>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Leaky data between tenants due to poor database design.</li>
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Billing edge-cases causing churn and revenue leakage.</li>
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Clunky onboarding processes that destroy conversion rates.</li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20">
              <div className="text-[#8b5cf6] font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">✓</span> Our Blueprint
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="text-[#8b5cf6] mt-1">✓</span> Rock-solid data isolation (Row-Level Security / Separate DBs).</li>
                <li className="flex gap-3"><span className="text-[#8b5cf6] mt-1">✓</span> Stripe/Razorpay integration with proration and metered billing.</li>
                <li className="flex gap-3"><span className="text-[#8b5cf6] mt-1">✓</span> Frictionless, automated onboarding flows to drive PLG.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY FEATURES --- */}
      <section className="sol-sub-section sol-sub-section--panel" id="features">
        <div className="sol-sub-container">
          <div className="sol-section-reveal mb-16">
            <span className="sol-sub-eyebrow">The SaaS Arsenal</span>
            <h2 className="text-3xl md:text-5xl font-bold">Everything You Need to Scale</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sol-card-grid">
            {[
              { icon: "👥", title: "Tenant Architecture", desc: "Role-based access control (RBAC), team management, and strict data isolation paradigms." },
              { icon: "💳", title: "Billing Engines", desc: "Complex subscription models, usage-based billing, tax compliance, and automated invoicing." },
              { icon: "🔌", title: "API & Webhooks", desc: "Developer-friendly REST/GraphQL APIs and webhook systems for third-party integrations." },
              { icon: "📈", title: "Analytics & Logs", desc: "Internal admin dashboards and customer-facing analytics with audit trails." },
              { icon: "📨", title: "Notification Systems", desc: "Omnichannel transactional routing (Email, SMS, In-App, Slack) for user engagement." },
              { icon: "🚀", title: "Performance First", desc: "Edge caching, CDN delivery, and optimized queries for sub-100ms dashboard loads." },
            ].map((f) => (
              <div key={f.title} className="sol-sub-feature-card">
                <div className="sol-sub-feature-card__icon text-[#ec4899]">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- METRICS --- */}
      <section className="sol-sub-section">
        <div className="sol-sub-container">
          <div className="sol-section-reveal text-center mb-16">
            <h2 className="text-3xl font-bold">SaaS Impact</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sol-card-grid">
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">99.99%</div>
              <div className="text-slate-300 font-bold">Uptime SLA</div>
            </div>
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">Zero</div>
              <div className="text-slate-300 font-bold">Billing Errors</div>
            </div>
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">&lt; 100ms</div>
              <div className="text-slate-300 font-bold">API Latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="sol-sub-section sol-sub-section--panel">
        <div className="sol-sub-container">
          <div className="sol-sub-glass-panel p-12 md:p-20 text-center sol-section-reveal">
            <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Trial... Kidding.</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                But seriously, if you want to build a SaaS that commands a premium price, you need premium engineering. Let's talk.
              </p>
              <a href="/proposal" className="sol-sub-btn-primary text-lg px-10 py-5">
                Get a Free Architecture Review →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
