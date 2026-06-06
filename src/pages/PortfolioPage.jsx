import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: "enixta",
    title: "Enixta",
    category: "AI",
    description: "Semantic sentiment models and automated recommendation pipelines for enterprise ecommerce.",
    color: "#ff6a2a",
    bgClass: "from-[#0a1c3c] to-[#040e1c]",
    tag: "AI Sentiment Analysis"
  },
  {
    id: "karmeq",
    title: "Karmeq",
    category: "Design",
    description: "Collaborative wealth management workspace, asset tracking, and onboarding system.",
    color: "#10b981",
    bgClass: "from-[#059669] to-[#044e37]",
    tag: "UI/UX Design & System"
  },
  {
    id: "abinbev",
    title: "ABInBev GRA",
    category: "Development",
    description: "Logistics tracking, allocation matrices, and fleet performance monitoring dashboards.",
    color: "#eab308",
    bgClass: "from-[#3e2b1b] to-[#1e130a]",
    tag: "Enterprise System Dev"
  },
  {
    id: "etherflow",
    title: "Etherflow",
    category: "Blockchain",
    description: "DeFi liquidity aggregator and transaction router built for low-gas multi-asset token swaps.",
    color: "#8b5cf6",
    bgClass: "from-[#3b1772] to-[#1a0833]",
    tag: "DeFi Liquidity Swaps"
  },
  {
    id: "novacloud",
    title: "Nova Cloud",
    category: "Development",
    description: "Multi-cloud container operations panel with auto-scaling metrics and region diagnostics.",
    color: "#06b6d4",
    bgClass: "from-[#111c2e] to-[#070c14]",
    tag: "Cloud Operations Console"
  },
  {
    id: "auraai",
    title: "Aura AI",
    category: "AI",
    description: "Generative neural soundstage waveform editor and parametric synth workspace.",
    color: "#d946ef",
    bgClass: "from-[#5a135f] to-[#28042b]",
    tag: "Neural Sound Generator"
  }
];

// AI Dashboard
const EnixtaMockup = () => (
  <div className="w-full h-full bg-[#030914] rounded-t-2xl border-t border-x border-white/10 flex flex-col overflow-hidden relative text-[8px] font-sans">
    <div className="flex items-center gap-1 px-3 py-1.5 bg-[#060e1c] border-b border-white/5">
      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
      <div className="w-24 h-3 bg-white/5 rounded-full mx-auto" />
    </div>
    
    <div className="flex items-center justify-between px-3 py-1.5 bg-[#040a14]/65">
      <div className="flex items-center gap-1">
        <svg className="w-2.5 h-2.5 text-[#ff6a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M3 17 L9 5 L15 19 L21 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-black text-[7.5px] text-[#ff6a2a] tracking-tight">enixta</span>
      </div>
      <div className="flex items-center gap-2 text-[5.5px] text-slate-400 font-extrabold scale-90">
        <span>Our Story</span>
        <span>For Brands</span>
        <span>For eCommerce</span>
      </div>
      <div className="px-2 py-0.5 rounded-sm bg-[#ff6a2a] text-[4.5px] font-black scale-90 text-white">Get Started</div>
    </div>
    
    <div className="flex-1 flex flex-col justify-center items-center text-center p-4 relative bg-gradient-to-b from-[#091b35] to-[#030914] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
      
      <div className="relative z-10 max-w-[150px] mt-1">
        <h4 className="font-extrabold text-[8.5px] leading-tight text-white">
          Tap into your customer's voice for <span className="text-[#ff6a2a]">Actionable Insights</span>
        </h4>
        <p className="text-[4.5px] text-slate-400 leading-normal mt-1 scale-95 origin-center">
          Extract structured value from messy user feedback using fine-tuned semantic models.
        </p>
        <div className="mt-2.5 inline-block px-2.5 py-0.8 rounded bg-[#ff6a2a] text-[4.5px] font-black text-white cursor-pointer shadow-md">
          Review Dashboard
        </div>
      </div>
      <svg className="absolute bottom-0 w-full h-8 text-sky-500/10 fill-current" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 50 C30 20, 70 80, 100 50 L100 100 L0 100 Z" />
      </svg>
    </div>
  </div>
);

// Design Dashboard
const KarmeqMockup = () => (
  <div className="w-full h-full bg-[#f8fafc] rounded-t-2xl border-t border-x border-slate-200 flex flex-col overflow-hidden text-[8px] font-sans text-slate-700">
    <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 border-b border-slate-200">
      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      <div className="w-24 h-3 bg-slate-200 rounded-full mx-auto" />
    </div>
    
    <div className="bg-[#ecfdf5] border-b border-emerald-100 px-3 py-1.5 flex items-center justify-between text-[5.5px] text-emerald-800 font-bold scale-95 origin-left">
      <span>🎉 Congratulations! Your monthly investment reward of $250 has succeeded.</span>
    </div>
    
    <div className="flex-1 grid grid-cols-5 p-3 gap-2 bg-white">
      <div className="col-span-3 border border-slate-100 rounded-lg p-2 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-[5.5px] text-slate-400">PORTFOLIO VALUE</span>
          <span className="font-black text-[7px] text-slate-900">$12,509.77</span>
        </div>
        
        <div className="h-14 mt-1 flex items-end">
          <svg className="w-full h-full text-emerald-500" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M0 45 C15 42, 30 25, 45 35 C60 45, 75 15, 100 5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0 45 C15 42, 30 25, 45 35 C60 45, 75 15, 100 5 L100 50 L0 50 Z" fill="rgba(16,185,129,0.04)" />
          </svg>
        </div>
      </div>
      
      <div className="col-span-2 border border-slate-100 rounded-lg p-2 flex flex-col gap-1.5 bg-slate-50/50">
        <span className="font-black text-[6px] text-slate-400 uppercase">Onboarding Checklist</span>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 scale-95 origin-left">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-[5px]">✓</div>
            <span className="text-[5.5px] font-bold text-slate-800">Open account</span>
          </div>
          <div className="flex items-center gap-1 scale-95 origin-left">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-[5px]">✓</div>
            <span className="text-[5.5px] font-bold text-slate-800">Link banking</span>
          </div>
          <div className="flex items-center gap-1 scale-95 origin-left">
            <div className="w-2.5 h-2.5 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-400 font-bold text-[5px]">3</div>
            <span className="text-[5.5px] font-bold text-slate-400">First deposit</span>
          </div>
        </div>
        
        <button className="mt-auto w-full py-1 rounded bg-emerald-500 text-white text-[5px] font-black uppercase tracking-wider scale-95">
          Complete Setup
        </button>
      </div>
    </div>
  </div>
);

// 3. ABInBev GRA Mockup (Development Dashboard)
const ABInBevMockup = () => (
  <div className="w-full h-full relative overflow-hidden rounded-t-2xl text-[8px] font-sans">
    <div className="absolute top-4 left-6 w-[85%] h-[80%] bg-[#1c120c] border border-amber-500/10 rounded-lg shadow-2xl origin-bottom-right rotate-[-4deg] flex flex-col overflow-hidden opacity-50">
      <div className="h-3 bg-amber-950/40 border-b border-white/5" />
      <div className="flex-1 p-2 bg-[#24170d]" />
    </div>

    <div className="absolute top-2 left-2 w-[88%] h-[95%] bg-[#170e08] border border-amber-500/20 rounded-lg shadow-[0_12px_24px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#1f130a] border-b border-amber-500/15">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30" />
        </div>
        <div className="flex items-center gap-1 scale-90">
          <span className="font-black text-amber-500 text-[6px] tracking-wide">GRA SYSTEM</span>
          <span className="px-1 py-0.2 rounded bg-amber-500/10 text-amber-500 text-[4px] border border-amber-500/20 uppercase font-black">LOGISTICS</span>
        </div>
        <div className="w-2" />
      </div>

      <div className="flex-1 grid grid-cols-3 p-3 gap-2 bg-[#100905]">
        <div className="col-span-2 flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-[#1c1006] border border-amber-500/10 rounded p-1">
              <div className="text-[5px] text-amber-500/50 font-bold uppercase">Fleets</div>
              <div className="text-[8px] font-black text-amber-400 mt-0.5">2,840 / Hr</div>
            </div>
            <div className="bg-[#1c1006] border border-amber-500/10 rounded p-1">
              <div className="text-[5px] text-amber-500/50 font-bold uppercase">Efficiency</div>
              <div className="text-[8px] font-black text-emerald-400 mt-0.5">99.4%</div>
            </div>
          </div>

          <div className="border border-white/5 rounded-lg overflow-hidden bg-black/20 flex-1 flex flex-col">
            <div className="bg-[#180f08] px-2 py-0.8 flex items-center justify-between text-[4.5px] text-amber-500/60 border-b border-white/5 font-extrabold uppercase">
              <span>HUB STATION</span>
              <span>CAPACITY</span>
            </div>
            <div className="flex-1 flex flex-col gap-0.7 p-1">
              <div className="flex items-center justify-between px-1 text-[4.5px] text-slate-400">
                <span>Munich Gateway HUB A</span>
                <span className="text-amber-500">84%</span>
              </div>
              <div className="flex items-center justify-between px-1 text-[4.5px] text-slate-400">
                <span>Leuven Brewery Terminal B</span>
                <span className="text-amber-500">92%</span>
              </div>
              <div className="flex items-center justify-between px-1 text-[4.5px] text-slate-400">
                <span>São Paulo Hub C</span>
                <span className="text-emerald-400">54%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-[#1c1006] border border-amber-500/10 rounded p-1.5 flex flex-col justify-between items-center text-center">
          <span className="font-extrabold text-[5px] text-amber-500/80 uppercase">Allocation</span>
          
          <svg className="w-9 h-9 my-1 text-amber-500" viewBox="0 0 32 32">
            <circle r="16" cx="16" cy="16" fill="transparent" stroke="#ffb703" strokeWidth="6" strokeDasharray="60 100" />
            <circle r="16" cx="16" cy="16" fill="transparent" stroke="#10b981" strokeWidth="6" strokeDasharray="40 100" strokeDashoffset="-60" />
          </svg>

          <span className="text-[6.5px] font-black text-white">4,812 Bbl</span>
        </div>
      </div>
    </div>
  </div>
);

// 4. Etherflow Mockup (Blockchain Swap)
const EtherflowMockup = () => (
  <div className="w-full h-full bg-[#090514] rounded-t-2xl border-t border-x border-white/10 flex flex-col overflow-hidden text-[8px] font-sans relative text-white">
    <div className="flex items-center justify-between px-3 py-1.5 bg-[#120924] border-b border-white/5">
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/20" />
      </div>
      <div className="flex items-center gap-1">
        <svg className="w-2.5 h-2.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L2 12h10v10l10-10H12z" />
        </svg>
        <span className="font-black text-[7px] text-purple-300 uppercase tracking-widest scale-90">etherflow</span>
      </div>
      <span className="px-1.5 py-0.5 rounded-sm bg-purple-500/20 text-purple-300 text-[4px] font-black scale-90">v1.2</span>
    </div>

    <div className="flex-1 flex flex-col justify-center items-center p-3 bg-gradient-to-b from-[#0d071d] to-[#07030e]">
      <div className="w-[135px] bg-[#140b2b] border border-purple-500/20 rounded-lg p-2 flex flex-col gap-1.5 shadow-2xl">
        <div className="flex items-center justify-between text-[4.5px] text-purple-300/80 font-bold uppercase">
          <span>Swap Assets</span>
          <span className="text-[4px] text-slate-400">Slippage: 0.1%</span>
        </div>

        <div className="bg-[#1c103c] border border-white/5 rounded p-1 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[4px] text-slate-400 uppercase font-bold">Sell</span>
            <input type="text" readOnly value="1.50" className="bg-transparent text-white font-extrabold text-[8px] w-12 outline-none mt-0.5" />
          </div>
          <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-extrabold text-[5px]">ETH</span>
        </div>

        <div className="w-4 h-4 rounded-full bg-purple-500/30 text-purple-300 border border-purple-500/20 flex items-center justify-center mx-auto my-[-4px] z-10 font-black">↓</div>

        <div className="bg-[#1c103c] border border-white/5 rounded p-1 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[4px] text-slate-400 uppercase font-bold">Buy</span>
            <input type="text" readOnly value="4,500.00" className="bg-transparent text-white font-extrabold text-[8px] w-16 outline-none mt-0.5" />
          </div>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-extrabold text-[5px]">USDC</span>
        </div>

        <button className="w-full py-1.2 rounded bg-purple-600 hover:bg-purple-500 text-white text-[5.5px] font-black uppercase tracking-wider shadow-[0_0_12px_rgba(139,92,246,0.3)] scale-95">
          Connect Web3 Wallet
        </button>
      </div>
    </div>
  </div>
);

// 5. Nova Cloud Mockup (Cloud console status map)
const NovaCloudMockup = () => (
  <div className="w-full h-full bg-[#05070a] rounded-t-2xl border-t border-x border-white/10 flex flex-col overflow-hidden text-[8px] font-sans text-white relative">
    <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/60 border-b border-white/5">
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
      </div>
      <div className="flex items-center gap-1 scale-90">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-extrabold text-[6.5px] text-cyan-300 uppercase tracking-wider">NOVA DEPLOY</span>
      </div>
      <div className="px-1 py-0.2 rounded bg-cyan-950/40 text-cyan-400 text-[4px] border border-cyan-500/20 font-black">ACTIVE</div>
    </div>

    <div className="flex-1 p-3 bg-gradient-to-b from-[#090e16] to-[#04060a] relative flex flex-col justify-between overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 60">
        <path d="M10 20 L40 10 L80 15 M40 10 L50 40 L80 15 M50 40 L20 50 L10 20" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" />
        <circle cx="10" cy="20" r="1.2" fill="#22c55e" />
        <circle cx="40" cy="10" r="1.5" fill="#22c55e" />
        <circle cx="80" cy="15" r="1" fill="#22c55e" />
        <circle cx="50" cy="40" r="1.2" fill="#22c55e" />
        <circle cx="20" cy="50" r="1.2" fill="#22c55e" />
      </svg>
      
      <div className="w-[85px] bg-slate-950/90 border border-slate-800 rounded p-1.5 relative z-10 self-start shadow-xl">
        <div className="text-[4px] text-slate-400 font-bold uppercase mb-1">SYSTEM INSTANCES</div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center justify-between text-[4.5px] text-slate-300">
            <span>us-east-1</span>
            <span className="text-emerald-400 font-bold">● Healthy</span>
          </div>
          <div className="flex items-center justify-between text-[4.5px] text-slate-300">
            <span>eu-west-3</span>
            <span className="text-emerald-400 font-bold">● Healthy</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-950/50 border border-white/5 rounded p-1 flex items-center justify-between relative z-10 mt-1">
        <div className="flex flex-col scale-90 origin-left">
          <span className="text-[4px] text-slate-400 uppercase font-bold">Avg Latency</span>
          <span className="text-[6px] font-black text-cyan-300">12.4 ms</span>
        </div>
        <div className="flex flex-col scale-90 origin-right">
          <span className="text-[4px] text-slate-400 uppercase font-bold">Total Requests</span>
          <span className="text-[6px] font-black text-cyan-300">1.4B / Day</span>
        </div>
      </div>
    </div>
  </div>
);

// 6. Aura AI Mockup (Generative audio workspace)
const AuraAIMockup = () => (
  <div className="w-full h-full bg-[#0b0314] rounded-t-2xl border-t border-x border-white/10 flex flex-col overflow-hidden text-[8px] font-sans text-white relative">
    <div className="flex items-center justify-between px-3 py-1.5 bg-[#1b0a2c] border-b border-white/5">
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-pink-500/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-pink-500/20" />
      </div>
      <div className="flex items-center gap-1 scale-90">
        <svg className="w-2.5 h-2.5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2v20M17 5v14M22 9v6M7 7v10M2 10v4" strokeLinecap="round" />
        </svg>
        <span className="font-extrabold text-[7px] text-pink-300 uppercase tracking-widest">AURA SOUND</span>
      </div>
      <span className="px-1.5 py-0.5 rounded-sm bg-pink-500/20 text-pink-300 text-[4px] font-black scale-90">PRO</span>
    </div>

    <div className="flex-1 p-3 bg-gradient-to-b from-[#11051c] to-[#06020c] flex flex-col justify-between gap-1.5">
      <div className="bg-[#1b0a2c]/60 border border-pink-500/10 rounded p-1 text-[5px] text-pink-300/80 leading-normal font-bold">
        "Generate a cinematic synth sweep with tape saturation."
      </div>

      <div className="border border-white/5 rounded-lg bg-black/30 p-1.5 flex-1 flex flex-col justify-center">
        <div className="h-10 flex items-center">
          <svg className="w-full h-full text-pink-500" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 0 20 Q 5 10, 10 20 T 20 20 T 30 20 T 40 20 T 50 20 T 60 20 T 70 20 T 80 20 T 90 20 T 100 20" />
            <path d="M 0 20 Q 5 0, 10 20 T 20 20 T 30 5 T 40 20 T 50 35 T 60 20 T 70 10 T 80 20 T 90 30 T 100 20" stroke="#f43f5e" strokeWidth="2" />
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 T 30 15 T 40 20 T 50 25 T 60 20 T 70 18 T 80 20 T 90 25 T 100 20" stroke="#ff6a2a" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 scale-95 origin-bottom">
        <div className="flex flex-col gap-0.5">
          <span className="text-[4px] text-slate-500 font-bold uppercase">Timbre</span>
          <div className="h-0.8 bg-pink-500/20 rounded relative">
            <div className="absolute left-0 top-0 bottom-0 w-[75%] bg-pink-500 rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[4px] text-slate-500 font-bold uppercase">Pitch Shift</span>
          <div className="h-0.8 bg-pink-500/20 rounded relative">
            <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-pink-500 rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[4px] text-slate-500 font-bold uppercase">Reverb</span>
          <div className="h-0.8 bg-[#ff6a2a]/20 rounded relative">
            <div className="absolute left-0 top-0 bottom-0 w-[90%] bg-[#ff6a2a] rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mockups = {
  enixta: <EnixtaMockup />,
  karmeq: <KarmeqMockup />,
  abinbev: <ABInBevMockup />,
  etherflow: <EtherflowMockup />,
  novacloud: <NovaCloudMockup />,
  auraai: <AuraAIMockup />
};

export function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "AI", "Blockchain", "Design", "Development"];

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <main className="relative min-h-screen bg-[#050816] text-white font-sans overflow-hidden">
      
      {/* Background Mesh Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute rounded-full blur-[140px] opacity-[0.08]"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          style={{
            top: "20%",
            left: "10%",
            width: "550px",
            height: "550px",
            background: "radial-gradient(circle, #ff6a2a 0%, rgba(255,106,42,0) 70%)",
          }}
        />

        <motion.div
          className="absolute rounded-full blur-[160px] opacity-[0.06]"
          animate={{
            x: [0, 25, -20, 0],
            y: [0, -25, 25, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            bottom: "20%",
            right: "10%",
            width: "650px",
            height: "650px",
            background: "radial-gradient(circle, #3b82f6 0%, rgba(59,130,246,0) 70%)",
          }}
        />
      </div>

      {/* Faint Drifting Network Lines Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
        animate={{
          x: [0, -8, 8, 0],
          y: [0, 8, -8, 0],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="port-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#port-grid)" />
        </svg>
      </motion.div>

      {/* Glassmorphic Globe Header Section */}
      <section className="relative pt-32 pb-24 px-5 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center justify-center min-h-[360px]">
        {/* Absolute Globe behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] pointer-events-none z-0">
          <div className="w-full h-full rounded-full border border-white/10 bg-gradient-to-b from-blue-500/10 to-indigo-500/5 backdrop-blur-[6px] shadow-[inset_0_0_40px_rgba(255,255,255,0.05),0_0_60px_rgba(59,130,246,0.12)] relative overflow-hidden">
            {/* Drifting constellation paths inside the sphere */}
            <motion.div
              className="absolute inset-0 opacity-35"
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="25" cy="35" r="0.8" fill="#fff" />
                <circle cx="75" cy="45" r="0.8" fill="#fff" />
                <circle cx="45" cy="75" r="1.2" fill="#fff" />
                <circle cx="35" cy="65" r="0.8" fill="#fff" />
                <circle cx="65" cy="25" r="0.8" fill="#fff" />
                <path d="M25 35 L65 25 M75 45 L65 25 M45 75 L35 65 M25 35 L35 65" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />
              </svg>
            </motion.div>
            {/* Sphere Highlight */}
            <div className="absolute top-[8%] left-[12%] w-[25%] h-[25%] rounded-full bg-white/8 blur-[12px]" />
          </div>
        </div>

        {/* Header content overlay */}
        <div className="relative z-10 max-w-[1180px]">
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-black leading-tight sm:text-6xl tracking-tight text-white font-sans">
            Our Work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-slate-400">
            We Build Turnkey Products for Media Agencies, Enterprises, R&D Labs and Startups
          </p>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6 mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff6a2a] shadow-[0_0_8px_#ff6a2a]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Project Mockups Grid */}
      <section className="relative z-10 mx-auto max-w-[1180px] px-5 pb-32 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-white/5 bg-[#0c121e]/80 flex flex-col justify-between h-[450px] transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                {/* Brand specific gradient background block with mockup */}
                <div className={`relative pt-6 px-6 aspect-[4/3] bg-gradient-to-br ${project.bgClass} flex items-end justify-center overflow-hidden border-b border-white/5`}>
                  {/* Subtle inner grid glow overlay */}
                  <div className="absolute inset-0 bg-radial-gradient opacity-[0.02] pointer-events-none" />
                  
                  {/* Mockup wrapper with subtle rotation scale effect on card hover */}
                  <div className="w-full h-full transform translate-y-1 group-hover:translate-y-0 group-hover:scale-[1.02] transition-all duration-500 ease-out">
                    {mockups[project.id]}
                  </div>
                </div>

                {/* Card Description Footer */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                        {project.tag}
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="mt-3 text-lg font-black text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Tiny View Link */}
                  <div className="mt-4 flex items-center text-[#ff6a2a] text-[10px] font-black uppercase tracking-widest gap-1 group-hover:translate-x-0.5 transition-transform duration-300">
                    <span>View Case Study</span>
                    <span className="text-xs">&rarr;</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
