import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/solution-subpages.css";

gsap.registerPlugin(ScrollTrigger);

export function AutomationSolutionPage() {
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
        "--sol-accent-primary": "#10b981", // Emerald Green
        "--sol-accent-secondary": "#06b6d4", // Cyan
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
                <span className="sol-sub-eyebrow">Intelligent Workflow Systems</span>
              </div>
              <h1 className="sol-sub-title sol-hero-reveal">
                Automate Everything, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#06b6d4]">
                  Intelligently.
                </span>
              </h1>
              <p className="sol-sub-desc sol-hero-reveal mb-8">
                Eliminate manual bottlenecks with AI-powered automation pipelines. Reduce operational costs by up to 70% and free your team to focus on high-impact strategic work.
              </p>
              <div className="flex flex-wrap gap-4 sol-hero-reveal">
                <a href="/proposal" className="sol-sub-btn-primary">
                  Automate My Workflows →
                </a>
                <a href="#features" className="sol-sub-btn-secondary">
                  See Use Cases
                </a>
              </div>
            </div>

            <div className="sol-hero-visual lg:ml-auto w-full max-w-lg">
              <div className="sol-sub-glass-panel p-6">
                <div className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">Workflow Orchestrator</div>
                
                <div className="relative">
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-800"></div>
                  
                  <div className="flex gap-4 relative z-10 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-xl z-10 shrink-0">
                      📧
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-3 flex-1 border border-slate-700">
                      <div className="text-sm font-bold">Incoming Invoice Received</div>
                      <div className="text-xs text-slate-400">Triggered via Gmail Webhook</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 relative z-10 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center text-xl z-10 shrink-0">
                      🤖
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-3 flex-1 border border-slate-700">
                      <div className="text-sm font-bold">AI Document Parsing</div>
                      <div className="text-xs text-[#06b6d4]">Extracted 12 fields (99.8% confidence)</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-xl z-10 shrink-0">
                      🏦
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-3 flex-1 border border-slate-700">
                      <div className="text-sm font-bold">ERP System Updated</div>
                      <div className="text-xs text-slate-400">NetSuite API successfully called</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="text-xs text-slate-400">Time Saved: <span className="text-[#10b981] font-bold">14 mins</span></div>
                  <div className="text-xs text-slate-400">Status: <span className="text-[#10b981] font-bold">Success</span></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The High Cost of Manual Labor</h2>
            <p className="text-slate-400 text-lg">
              Repetitive tasks are destroying your team's productivity. Copy-pasting data, manual approvals, and disjointed software systems create expensive bottlenecks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sol-card-grid">
            <div className="p-10 rounded-3xl bg-slate-800/40 border border-slate-700">
              <div className="text-slate-300 font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📉</span> The Drain
              </div>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Human error in data entry leading to costly compliance mistakes.</li>
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Highly-paid employees wasting 40% of their day on administrative trivia.</li>
                <li className="flex gap-3"><span className="text-slate-500 mt-1">•</span> Slow turnaround times that frustrate customers and partners.</li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl bg-[#10b981]/10 border border-[#10b981]/20">
              <div className="text-[#10b981] font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span> The BitBattles Fix
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="text-[#10b981] mt-1">✓</span> 100% accuracy through deterministic scripts and AI validation.</li>
                <li className="flex gap-3"><span className="text-[#10b981] mt-1">✓</span> Instantaneous task execution running 24/7/365 without breaks.</li>
                <li className="flex gap-3"><span className="text-[#10b981] mt-1">✓</span> Connect legacy systems without expensive API rebuilds using RPA.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY FEATURES --- */}
      <section className="sol-sub-section sol-sub-section--panel" id="features">
        <div className="sol-sub-container">
          <div className="sol-section-reveal mb-16">
            <span className="sol-sub-eyebrow">Our Toolkit</span>
            <h2 className="text-3xl md:text-5xl font-bold">Automation at Any Scale</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sol-card-grid">
            {[
              { icon: "🤖", title: "AI/ML Workflows", desc: "Integrate LLMs to classify emails, summarize documents, and make logic-based routing decisions." },
              { icon: "🕹️", title: "Robotic Process Auto (RPA)", desc: "Software bots that mimic human keystrokes to interact with legacy systems that lack APIs." },
              { icon: "📄", title: "Intelligent Document Processing", desc: "Extract structured data from unstructured PDFs, invoices, and contracts automatically." },
              { icon: "🔌", title: "Custom API Integrations", desc: "Connect Salesforce, SAP, Slack, and your internal tools into one seamless data highway." },
              { icon: "💬", title: "Conversational Agents", desc: "Deploy intelligent chatbots that resolve 80% of L1 support tickets without human intervention." },
              { icon: "📊", title: "Process Mining", desc: "We analyze your system logs to visually map out your bottlenecks and identify automation targets." },
            ].map((f) => (
              <div key={f.title} className="sol-sub-feature-card">
                <div className="sol-sub-feature-card__icon text-[#06b6d4]">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPACT & METRICS --- */}
      <section className="sol-sub-section">
        <div className="sol-sub-container">
          <div className="grid md:grid-cols-4 gap-6 sol-card-grid">
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">70%</div>
              <div className="text-slate-300 font-bold">Cost Reduction</div>
              <div className="text-sm text-slate-500 mt-2">In operational overhead</div>
            </div>
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">10x</div>
              <div className="text-slate-300 font-bold">Faster Processing</div>
              <div className="text-sm text-slate-500 mt-2">Compared to manual work</div>
            </div>
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">0</div>
              <div className="text-slate-300 font-bold">Human Errors</div>
              <div className="text-sm text-slate-500 mt-2">Consistent accuracy</div>
            </div>
            <div className="sol-sub-stat-card">
              <div className="sol-sub-stat-num">&lt;3 Mo</div>
              <div className="text-slate-300 font-bold">Average ROI</div>
              <div className="text-sm text-slate-500 mt-2">Lightning fast payback</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="sol-sub-section sol-sub-section--panel">
        <div className="sol-sub-container">
          <div className="sol-sub-glass-panel p-12 md:p-20 text-center sol-section-reveal">
            <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop Working Like It's 2010.</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Discover how much time and money you can save. Get a custom automation blueprint tailored to your specific workflows.
              </p>
              <a href="/proposal" className="sol-sub-btn-primary text-lg px-10 py-5">
                Get an Automation Blueprint →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
