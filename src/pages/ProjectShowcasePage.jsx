import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projectCaseStudies = {
  enixta: {
    id: "enixta",
    title: "Enixta",
    category: "AI",
    tag: "AI Sentiment Analysis",
    subtitle: "NLP Sentiment Classification & Recommender Pipelines",
    color: "#ff6a2a",
    bgClass: "from-[#0a1c3c] to-[#040e1c]",
    description: "Semantic sentiment models and automated recommendation pipelines for enterprise ecommerce.",
    challenge: "Enixta needed to analyze millions of scattered e-commerce customer reviews across multiple channels and convert unstructured feedback into structured, actionable merchant directives in real-time.",
    solution: "BitBattles built a serverless pipeline using fine-tuned BERT-based models for multi-label classification and custom vector embeddings to identify intent and map semantic trends.",
    outcome: "Achieved a 94.2% accuracy in automated sentiment categorization, reduced customer support response times by 68%, and successfully automated 10,000+ daily merchant reports.",
    techStack: ["Python", "PyTorch", "HuggingFace", "AWS Lambda", "Pinecone"],
    metrics: [
      { label: "Sentiment Accuracy", value: "94.2%" },
      { label: "Support Time Reduced", value: "-68%" },
      { label: "Daily Reports", value: "10K+" }
    ]
  },
  karmeq: {
    id: "karmeq",
    title: "Karmeq",
    category: "Design",
    tag: "UI/UX Design & System",
    subtitle: "High-fidelity wealth management dashboards and onboarding platforms",
    color: "#10b981",
    bgClass: "from-[#059669] to-[#044e37]",
    description: "Collaborative wealth management workspace, asset tracking, and onboarding system.",
    challenge: "Karmeq wanted to simplify retail investment workflows. The legacy UI was cluttered with charts and checkboxes, leading to high drop-off rates during user onboarding.",
    solution: "We conducted a comprehensive UX audit and designed a modern, emerald-themed dashboard focusing on step-by-step progress tracking, clean financial charts, and simple bank linking flows.",
    outcome: "Increased onboarding conversion by 42%, improved user retention by 28%, and simplified multi-broker deposits into a single-click flow.",
    techStack: ["Figma", "React", "TailwindCSS", "Framer Motion", "Recharts"],
    metrics: [
      { label: "Onboarding Conversion", value: "+42%" },
      { label: "User Retention", value: "+28%" },
      { label: "Click-to-Deposit", value: "1-Click" }
    ]
  },
  abinbev: {
    id: "abinbev",
    title: "ABInBev GRA",
    category: "Development",
    tag: "Enterprise System Dev",
    subtitle: "Multi-tenant supply chain intelligence and analytics dashboard",
    color: "#eab308",
    bgClass: "from-[#3e2b1b] to-[#1e130a]",
    description: "Logistics tracking, allocation matrices, and fleet performance monitoring dashboards.",
    challenge: "ABInBev required a multi-tenant logistics dashboard to manage global fleet distributions, station capacities, and barrel allocations dynamically across different regions.",
    solution: "We developed a high-throughput React dashboard with real-time web sockets and dynamic d3-based inventory analytics, integrated with legacy hub station telemetry.",
    outcome: "Helped allocate 4M+ barrels of inventory automatically, reduced logistics route overhead by 14%, and unified telemetry from 24 hub stations.",
    techStack: ["React", "Node.js", "WebSockets", "D3.js", "Kubernetes"],
    metrics: [
      { label: "Barrels Allocated", value: "4M+" },
      { label: "Route Overhead", value: "-14%" },
      { label: "Hub Telemetries", value: "24" }
    ]
  },
  etherflow: {
    id: "etherflow",
    title: "Etherflow",
    category: "Blockchain",
    tag: "DeFi Liquidity Swaps",
    subtitle: "Web3 liquidity aggregator and decentralized token swap terminal",
    color: "#8b5cf6",
    bgClass: "from-[#3b1772] to-[#1a0833]",
    description: "DeFi liquidity aggregator and transaction router built for low-gas multi-asset token swaps.",
    challenge: "High gas fees and fragmented liquidity across automated market makers made token swaps expensive and slow for DeFi retail traders.",
    solution: "We created a gas-optimized Web3 routing system that dynamically pools pricing from multiple DEXes, with a sleek, responsive dark-themed swap console.",
    outcome: "Reduced average gas usage by 24% per swap, aggregated $150M+ in routing liquidity, and connected 20k+ active Web3 wallets.",
    techStack: ["Solidity", "Ethers.js", "React", "Hardhat", "GraphQL"],
    metrics: [
      { label: "Avg Gas Saved", value: "24%" },
      { label: "Routed Liquidity", value: "$150M+" },
      { label: "Wallets Connected", value: "20K+" }
    ]
  },
  novacloud: {
    id: "novacloud",
    title: "Nova Cloud",
    category: "Development",
    tag: "Cloud Operations Console",
    subtitle: "Serverless container orchestrator and region health diagnostics console",
    color: "#06b6d4",
    bgClass: "from-[#111c2e] to-[#070c14]",
    description: "Multi-cloud container operations panel with auto-scaling metrics and region diagnostics.",
    challenge: "DevOps teams lacked a unified visual map to track server health and container health checks across multiple regions and cloud providers.",
    solution: "BitBattles built an interactive cloud operations console with live dynamic node maps, custom latency metrics, and instant failure alerts.",
    outcome: "Reduced incident response time (MTTR) by 35%, unified multicloud telemetry, and successfully monitored 1.4B+ daily request flows.",
    techStack: ["Go", "TypeScript", "AWS", "Google Cloud", "Prometheus"],
    metrics: [
      { label: "Response Time", value: "-35%" },
      { label: "Daily Request Flows", value: "1.4B+" },
      { label: "Cloud Providers", value: "Multi" }
    ]
  },
  auraai: {
    id: "auraai",
    title: "Aura AI",
    category: "AI",
    tag: "Neural Sound Generator",
    subtitle: "Generative neural soundstage waveform editor and parametric synth workspace",
    color: "#d946ef",
    bgClass: "from-[#5a135f] to-[#28042b]",
    description: "Generative neural soundstage waveform editor and parametric synth workspace.",
    challenge: "Sound designers needed a rapid, parametric workspace to prompt, synthesize, and edit neural audio waveforms without heavy workstation software.",
    solution: "We created a browser-based generative audio console with real-time parametric controls, audio waveform editing, and instant ML synthesis.",
    outcome: "Reduced audio design generation workflow from hours to seconds, synthesized 50,000+ tracks, and maintained 99.9% uptime on generation clusters.",
    techStack: ["Python", "FastAPI", "React", "Web Audio API", "PyTorch"],
    metrics: [
      { label: "Workflow Time", value: "Seconds" },
      { label: "Tracks Synthesized", value: "50K+" },
      { label: "Cluster Uptime", value: "99.9%" }
    ]
  }
};

// 1. Enixta Mockup (AI Dashboard)
const EnixtaMockup = () => (
  <div className="w-full h-full bg-[#030914] rounded-t-2xl border-t border-x border-white/10 flex flex-col overflow-hidden relative text-[10px] font-sans">
    <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#060e1c] border-b border-white/5">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <div className="w-32 h-3.5 bg-white/5 rounded-full mx-auto" />
    </div>
    <div className="flex items-center justify-between px-4 py-2 bg-[#040a14]/65">
      <div className="flex items-center gap-1">
        <svg className="w-3.5 h-3.5 text-[#ff6a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M3 17 L9 5 L15 19 L21 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-black text-[9px] text-[#ff6a2a] tracking-tight">enixta</span>
      </div>
      <div className="flex items-center gap-3 text-[7px] text-slate-400 font-extrabold">
        <span>Our Story</span>
        <span>For Brands</span>
        <span>For eCommerce</span>
      </div>
      <div className="px-2.5 py-1 rounded-sm bg-[#ff6a2a] text-[6px] font-black text-white">Get Started</div>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center text-center p-6 relative bg-gradient-to-b from-[#091b35] to-[#030914] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
      <div className="relative z-10 max-w-[200px]">
        <h4 className="font-extrabold text-[12px] leading-tight text-white">
          Tap into your customer's voice for <span className="text-[#ff6a2a]">Actionable Insights</span>
        </h4>
        <p className="text-[6.5px] text-slate-400 leading-normal mt-2">
          Extract structured value from messy user feedback using fine-tuned semantic models.
        </p>
        <div className="mt-3.5 inline-block px-3.5 py-1.2 rounded bg-[#ff6a2a] text-[6px] font-black text-white cursor-pointer shadow-md">
          Review Dashboard
        </div>
      </div>
      <svg className="absolute bottom-0 w-full h-12 text-sky-500/10 fill-current" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 50 C30 20, 70 80, 100 50 L100 100 L0 100 Z" />
      </svg>
    </div>
  </div>
);

// 2. Karmeq Mockup (Design Dashboard)
const KarmeqMockup = () => (
  <div className="w-full h-full bg-[#f8fafc] rounded-t-2xl border-t border-x border-slate-200 flex flex-col overflow-hidden text-[10px] font-sans text-slate-700">
    <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 border-b border-slate-200">
      <div className="w-2 h-2 rounded-full bg-slate-300" />
      <div className="w-2 h-2 rounded-full bg-slate-300" />
      <div className="w-2 h-2 rounded-full bg-slate-300" />
      <div className="w-32 h-3.5 bg-slate-200 rounded-full mx-auto" />
    </div>
    <div className="bg-[#ecfdf5] border-b border-emerald-100 px-4 py-2 flex items-center justify-between text-[7px] text-emerald-800 font-bold">
      <span>🎉 Congratulations! Your monthly investment reward of $250 has succeeded.</span>
    </div>
    <div className="flex-1 grid grid-cols-5 p-4 gap-3 bg-white">
      <div className="col-span-3 border border-slate-100 rounded-lg p-3 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-[7px] text-slate-400">PORTFOLIO VALUE</span>
          <span className="font-black text-[9px] text-slate-900">$12,509.77</span>
        </div>
        <div className="h-20 mt-1 flex items-end">
          <svg className="w-full h-full text-emerald-500" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M0 45 C15 42, 30 25, 45 35 C60 45, 75 15, 100 5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0 45 C15 42, 30 25, 45 35 C60 45, 75 15, 100 5 L100 50 L0 50 Z" fill="rgba(16,185,129,0.04)" />
          </svg>
        </div>
      </div>
      <div className="col-span-2 border border-slate-100 rounded-lg p-3 flex flex-col gap-2 bg-slate-50/50">
        <span className="font-black text-[7px] text-slate-400 uppercase">Onboarding Checklist</span>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-[7px]">✓</div>
            <span className="text-[7px] font-bold text-slate-800">Open account</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-[7px]">✓</div>
            <span className="text-[7px] font-bold text-slate-800">Link banking</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-400 font-bold text-[7px]">3</div>
            <span className="text-[7px] font-bold text-slate-400">First deposit</span>
          </div>
        </div>
        <button className="mt-auto w-full py-1.5 rounded bg-emerald-500 text-white text-[7px] font-black uppercase tracking-wider">
          Complete Setup
        </button>
      </div>
    </div>
  </div>
);

// 3. ABInBev GRA Mockup (Development Dashboard)
const ABInBevMockup = () => (
  <div className="w-full h-full relative overflow-hidden rounded-t-2xl text-[10px] font-sans">
    <div className="absolute top-4 left-8 w-[85%] h-[80%] bg-[#1c120c] border border-amber-500/10 rounded-lg shadow-2xl origin-bottom-right rotate-[-4deg] flex flex-col overflow-hidden opacity-50">
      <div className="h-4 bg-amber-950/40 border-b border-white/5" />
      <div className="flex-1 p-2 bg-[#24170d]" />
    </div>
    <div className="absolute top-2 left-2 w-[88%] h-[95%] bg-[#170e08] border border-amber-500/20 rounded-lg shadow-[0_12px_24px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-[#1f130a] border-b border-amber-500/15">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-amber-500/30" />
          <div className="w-2 h-2 rounded-full bg-amber-500/30" />
        </div>
        <div className="flex items-center gap-1 scale-95">
          <span className="font-black text-amber-500 text-[7px] tracking-wide">GRA SYSTEM</span>
          <span className="px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-500 text-[5px] border border-amber-500/20 uppercase font-black">LOGISTICS</span>
        </div>
        <div className="w-2" />
      </div>
      <div className="flex-1 grid grid-cols-3 p-4 gap-3 bg-[#100905]">
        <div className="col-span-2 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#1c1006] border border-amber-500/10 rounded p-1.5">
              <div className="text-[6px] text-amber-500/50 font-bold uppercase">Fleets</div>
              <div className="text-[10px] font-black text-amber-400 mt-0.5">2,840 / Hr</div>
            </div>
            <div className="bg-[#1c1006] border border-amber-500/10 rounded p-1.5">
              <div className="text-[6px] text-amber-500/50 font-bold uppercase">Efficiency</div>
              <div className="text-[10px] font-black text-emerald-400 mt-0.5">99.4%</div>
            </div>
          </div>
          <div className="border border-white/5 rounded-lg overflow-hidden bg-black/20 flex-1 flex flex-col">
            <div className="bg-[#180f08] px-2.5 py-1.2 flex items-center justify-between text-[5.5px] text-amber-500/60 border-b border-white/5 font-extrabold uppercase">
              <span>HUB STATION</span>
              <span>CAPACITY</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 p-1.5">
              <div className="flex items-center justify-between px-1 text-[5.5px] text-slate-400">
                <span>Munich Gateway HUB A</span>
                <span className="text-amber-500">84%</span>
              </div>
              <div className="flex items-center justify-between px-1 text-[5.5px] text-slate-400">
                <span>Leuven Brewery Terminal B</span>
                <span className="text-amber-500">92%</span>
              </div>
              <div className="flex items-center justify-between px-1 text-[5.5px] text-slate-400">
                <span>São Paulo Hub C</span>
                <span className="text-emerald-400">54%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#1c1006] border border-amber-500/10 rounded p-2 flex flex-col justify-between items-center text-center">
          <span className="font-extrabold text-[6px] text-amber-500/80 uppercase">Allocation</span>
          <svg className="w-12 h-12 my-1 text-amber-500" viewBox="0 0 32 32">
            <circle r="16" cx="16" cy="16" fill="transparent" stroke="#ffb703" strokeWidth="6" strokeDasharray="60 100" />
            <circle r="16" cx="16" cy="16" fill="transparent" stroke="#10b981" strokeWidth="6" strokeDasharray="40 100" strokeDashoffset="-60" />
          </svg>
          <span className="text-[7.5px] font-black text-white">4,812 Bbl</span>
        </div>
      </div>
    </div>
  </div>
);

// 4. Etherflow Mockup (Blockchain Swap)
const EtherflowMockup = () => (
  <div className="w-full h-full bg-[#090514] rounded-t-2xl border-t border-x border-white/10 flex flex-col overflow-hidden text-[10px] font-sans relative text-white">
    <div className="flex items-center justify-between px-3 py-2 bg-[#120924] border-b border-white/5">
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-purple-500/20" />
        <div className="w-2 h-2 rounded-full bg-purple-500/20" />
      </div>
      <div className="flex items-center gap-1">
        <svg className="w-3.5 h-3.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L2 12h10v10l10-10H12z" />
        </svg>
        <span className="font-black text-[8px] text-purple-300 uppercase tracking-widest scale-90">etherflow</span>
      </div>
      <span className="px-1.5 py-0.5 rounded-sm bg-purple-500/20 text-purple-300 text-[5px] font-black scale-90">v1.2</span>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center p-4 bg-gradient-to-b from-[#0d071d] to-[#07030e]">
      <div className="w-[155px] bg-[#140b2b] border border-purple-500/20 rounded-lg p-3 flex flex-col gap-2 shadow-2xl">
        <div className="flex items-center justify-between text-[5px] text-purple-300/80 font-bold uppercase">
          <span>Swap Assets</span>
          <span className="text-[4.5px] text-slate-400">Slippage: 0.1%</span>
        </div>
        <div className="bg-[#1c103c] border border-white/5 rounded p-1.5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[5px] text-slate-400 uppercase font-bold">Sell</span>
            <input type="text" readOnly value="1.50" className="bg-transparent text-white font-extrabold text-[9px] w-12 outline-none mt-0.5" />
          </div>
          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-extrabold text-[6px]">ETH</span>
        </div>
        <div className="w-4.5 h-4.5 rounded-full bg-purple-500/30 text-purple-300 border border-purple-500/20 flex items-center justify-center mx-auto my-[-4px] z-10 font-black">↓</div>
        <div className="bg-[#1c103c] border border-white/5 rounded p-1.5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[5px] text-slate-400 uppercase font-bold">Buy</span>
            <input type="text" readOnly value="4,500.00" className="bg-transparent text-white font-extrabold text-[9px] w-16 outline-none mt-0.5" />
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-extrabold text-[6px]">USDC</span>
        </div>
        <button className="w-full py-1.5 rounded bg-purple-600 hover:bg-purple-500 text-white text-[6.5px] font-black uppercase tracking-wider shadow-[0_0_12px_rgba(139,92,246,0.3)]">
          Connect Web3 Wallet
        </button>
      </div>
    </div>
  </div>
);

// 5. Nova Cloud Mockup (Cloud console status map)
const NovaCloudMockup = () => (
  <div className="w-full h-full bg-[#05070a] rounded-t-2xl border-t border-x border-white/10 flex flex-col overflow-hidden text-[10px] font-sans text-white relative">
    <div className="flex items-center justify-between px-3 py-2 bg-slate-900/60 border-b border-white/5">
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-slate-700" />
        <div className="w-2 h-2 rounded-full bg-slate-700" />
      </div>
      <div className="flex items-center gap-1 scale-90">
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-extrabold text-[7.5px] text-cyan-300 uppercase tracking-wider">NOVA DEPLOY</span>
      </div>
      <div className="px-1 py-0.2 rounded bg-cyan-950/40 text-cyan-400 text-[5px] border border-cyan-500/20 font-black">ACTIVE</div>
    </div>
    <div className="flex-1 p-4 bg-gradient-to-b from-[#090e16] to-[#04060a] relative flex flex-col justify-between overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 60">
        <path d="M10 20 L40 10 L80 15 M40 10 L50 40 L80 15 M50 40 L20 50 L10 20" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="0.5" />
        <circle cx="10" cy="20" r="1.5" fill="#22c55e" />
        <circle cx="40" cy="10" r="1.8" fill="#22c55e" />
        <circle cx="80" cy="15" r="1.2" fill="#22c55e" />
        <circle cx="50" cy="40" r="1.5" fill="#22c55e" />
        <circle cx="20" cy="50" r="1.5" fill="#22c55e" />
      </svg>
      <div className="w-[100px] bg-slate-950/90 border border-slate-800 rounded p-2 relative z-10 self-start shadow-xl">
        <div className="text-[5px] text-slate-400 font-bold uppercase mb-1">SYSTEM INSTANCES</div>
        <div className="flex flex-col gap-0.8">
          <div className="flex items-center justify-between text-[5px] text-slate-300">
            <span>us-east-1</span>
            <span className="text-emerald-400 font-bold">● Healthy</span>
          </div>
          <div className="flex items-center justify-between text-[5px] text-slate-300">
            <span>eu-west-3</span>
            <span className="text-emerald-400 font-bold">● Healthy</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-950/50 border border-white/5 rounded p-2 flex items-center justify-between relative z-10 mt-2">
        <div className="flex flex-col scale-90 origin-left">
          <span className="text-[5px] text-slate-400 uppercase font-bold">Avg Latency</span>
          <span className="text-[7.5px] font-black text-cyan-300">12.4 ms</span>
        </div>
        <div className="flex flex-col scale-90 origin-right">
          <span className="text-[5px] text-slate-400 uppercase font-bold">Total Requests</span>
          <span className="text-[7.5px] font-black text-cyan-300">1.4B / Day</span>
        </div>
      </div>
    </div>
  </div>
);

// 6. Aura AI Mockup (Generative audio workspace)
const AuraAIMockup = () => (
  <div className="w-full h-full bg-[#0b0314] rounded-t-2xl border-t border-x border-white/10 flex flex-col overflow-hidden text-[10px] font-sans text-white relative">
    <div className="flex items-center justify-between px-3 py-2 bg-[#1b0a2c] border-b border-white/5">
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-pink-500/20" />
        <div className="w-2 h-2 rounded-full bg-pink-500/20" />
      </div>
      <div className="flex items-center gap-1 scale-90">
        <svg className="w-3 h-3 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2v20M17 5v14M22 9v6M7 7v10M2 10v4" strokeLinecap="round" />
        </svg>
        <span className="font-extrabold text-[8px] text-pink-300 uppercase tracking-widest">AURA SOUND</span>
      </div>
      <span className="px-1.5 py-0.5 rounded-sm bg-pink-500/20 text-pink-300 text-[5px] font-black scale-90">PRO</span>
    </div>
    <div className="flex-1 p-4 bg-gradient-to-b from-[#11051c] to-[#06020c] flex flex-col justify-between gap-2">
      <div className="bg-[#1b0a2c]/60 border border-pink-500/10 rounded p-1.5 text-[6px] text-pink-300/80 leading-normal font-bold">
        "Generate a cinematic synth sweep with tape saturation."
      </div>
      <div className="border border-white/5 rounded-lg bg-black/30 p-2 flex-1 flex flex-col justify-center">
        <div className="h-14 flex items-center">
          <svg className="w-full h-full text-pink-500" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 0 20 Q 5 10, 10 20 T 20 20 T 30 20 T 40 20 T 50 20 T 60 20 T 70 20 T 80 20 T 90 20 T 100 20" />
            <path d="M 0 20 Q 5 0, 10 20 T 20 20 T 30 5 T 40 20 T 50 35 T 60 20 T 70 10 T 80 20 T 90 30 T 100 20" stroke="#f43f5e" strokeWidth="2" />
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 T 30 15 T 40 20 T 50 25 T 60 20 T 70 18 T 80 20 T 90 25 T 100 20" stroke="#ff6a2a" strokeWidth="1" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 scale-95 origin-bottom">
        <div className="flex flex-col gap-0.5">
          <span className="text-[5px] text-slate-500 font-bold uppercase">Timbre</span>
          <div className="h-1 bg-pink-500/20 rounded relative">
            <div className="absolute left-0 top-0 bottom-0 w-[75%] bg-pink-500 rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[5px] text-slate-500 font-bold uppercase">Pitch Shift</span>
          <div className="h-1 bg-pink-500/20 rounded relative">
            <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-pink-500 rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[5px] text-slate-500 font-bold uppercase">Reverb</span>
          <div className="h-1 bg-[#ff6a2a]/20 rounded relative">
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

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const normalizeCaseStudy = (project, fallback = {}) => ({
  ...fallback,
  ...project,
  id: project.id || project._id || fallback.id,
  title: project.title || fallback.title || "Untitled Project",
  category: project.category || fallback.category || "Development",
  tag: project.tag || fallback.tag || "Case Study",
  subtitle: project.subtitle || fallback.subtitle || project.description || fallback.description || "Digital product case study",
  color: project.color || fallback.color || "#ff6a2a",
  bgClass: project.bgClass || fallback.bgClass || "from-[#111c2e] to-[#070c14]",
  description: project.description || fallback.description || "A BitBattles project built for practical business outcomes.",
  challenge: project.challenge || fallback.challenge || "The project required a focused product plan, clear user experience, and reliable technical delivery.",
  solution: project.solution || fallback.solution || "BitBattles shaped the product flow, built the implementation foundation, and prepared the system for launch.",
  outcome: project.outcome || fallback.outcome || "The engagement produced a cleaner digital product direction with a scalable delivery path.",
  techStack: Array.isArray(project.techStack) && project.techStack.length ? project.techStack : fallback.techStack || ["React", "Node.js", "MongoDB"],
  metrics: Array.isArray(project.metrics) && project.metrics.length
    ? project.metrics
    : fallback.metrics || [
        { label: "Delivery", value: "Agile" },
        { label: "Scope", value: "Custom" },
        { label: "Support", value: "Included" },
      ],
});

function ShowcaseVisual({ study }) {
  if (mockups[study.id]) {
    return mockups[study.id];
  }

  if (study.image) {
    return <img alt="" className="h-full w-full rounded-2xl object-cover" src={study.image} />;
  }

  return (
    <div className="flex h-full w-full flex-col justify-end rounded-2xl border border-white/10 bg-[#07101c] p-6">
      <div className="mb-auto h-12 w-12 rounded-xl border border-[#ff6a2a]/50 bg-[#ff6a2a]/10 shadow-[0_0_24px_rgba(255,106,42,0.2)]" />
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff6a2a]">{study.category}</p>
      <h3 className="mt-3 text-2xl font-black text-white">{study.title}</h3>
    </div>
  );
}

export function ProjectShowcasePage({ projectId }) {
  const fallbackStudy = projectCaseStudies[projectId];
  const [remoteStudy, setRemoteStudy] = useState(null);
  const [loading, setLoading] = useState(!fallbackStudy);
  const study = remoteStudy || fallbackStudy;

  useEffect(() => {
    let mounted = true;

    async function fetchProject() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/portfolio/${projectId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to fetch project.");
        }

        if (mounted) {
          setRemoteStudy(normalizeCaseStudy(data, fallbackStudy));
        }
      } catch (error) {
        if (!fallbackStudy) {
          console.error("Project fetch failed:", error);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchProject();

    return () => {
      mounted = false;
    };
  }, [fallbackStudy, projectId]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#050816] p-8 text-white">
        <h1 className="text-3xl font-black">Loading Project</h1>
        <p className="mt-2 text-slate-400">Fetching project details from the database.</p>
      </main>
    );
  }

  if (!study) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-black">Project Not Found</h1>
        <p className="text-slate-400 mt-2">The requested project ID does not exist.</p>
        <a href="/portfolio" className="mt-6 px-6 py-3 bg-[#ff6a2a] rounded-lg font-black text-xs uppercase tracking-wider">
          Back to Portfolio
        </a>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#050816] text-white font-sans overflow-hidden">
      
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute rounded-full blur-[150px] opacity-[0.12] top-[5%] right-[5%] w-[600px] h-[600px]"
          style={{
            background: `radial-gradient(circle, ${study.color} 0%, rgba(0,0,0,0) 70%)`
          }}
        />
        <div
          className="absolute rounded-full blur-[150px] opacity-[0.06] bottom-[5%] left-[5%] w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, rgba(0,0,0,0) 70%)"
          }}
        />
      </div>

      {/* Network background mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="showcase-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#showcase-grid)" />
        </svg>
      </div>

      {/* Top Navigation Row */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 pt-32 sm:px-6 lg:px-8">
        <a 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-xs font-black uppercase tracking-wider group transition-colors duration-300"
        >
          <span className="text-sm group-hover:-translate-x-1 transition-transform duration-300">&larr;</span>
          <span>Back to Portfolio</span>
        </a>
      </div>

      {/* Hero Header & Mockup Section */}
      <section className="relative z-10 mx-auto max-w-[1180px] px-5 pt-12 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Details */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                {study.tag}
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.8 rounded bg-white/5 text-slate-400 border border-white/5">
                {study.category}
              </span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {study.title}
            </h1>
            
            <p className="mt-4 text-lg font-bold text-slate-300 leading-relaxed">
              {study.subtitle}
            </p>

            <p className="mt-6 text-sm font-medium leading-relaxed text-slate-400">
              {study.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-8">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-3">Technologies Employed</p>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-black text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Large Mockup Container */}
          <div className="relative group">
            {/* Outer border glow */}
            <div 
              className="absolute -inset-1 rounded-3xl opacity-30 blur-xl group-hover:opacity-40 transition duration-1000"
              style={{
                background: `linear-gradient(135deg, ${study.color}, #3b82f6)`
              }}
            />
            <div className={`relative aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br ${study.bgClass} p-8 flex items-end justify-center overflow-hidden shadow-2xl`}>
              <div className="w-full h-full transform translate-y-1">
                <ShowcaseVisual study={study} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Breakdown (Challenge, Solution, Outcome) */}
      <section className="relative z-10 mx-auto max-w-[1180px] px-5 pb-20 sm:px-6 lg:px-8 border-t border-white/5 pt-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Challenge */}
          <div className="bg-[#0c121e]/40 border-t-2 rounded-2xl p-6 border-white/5 flex flex-col justify-between" style={{ borderTopColor: "#ef4444" }}>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400">01. THE CHALLENGE</span>
              <p className="mt-4 text-xs font-semibold leading-relaxed text-slate-400">
                {study.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-[#0c121e]/40 border-t-2 rounded-2xl p-6 border-white/5 flex flex-col justify-between" style={{ borderTopColor: study.color }}>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: study.color }}>02. THE SOLUTION</span>
              <p className="mt-4 text-xs font-semibold leading-relaxed text-slate-400">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div className="bg-[#0c121e]/40 border-t-2 rounded-2xl p-6 border-white/5 flex flex-col justify-between" style={{ borderTopColor: "#10b981" }}>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">03. THE OUTCOME</span>
              <p className="mt-4 text-xs font-semibold leading-relaxed text-slate-400">
                {study.outcome}
              </p>
            </div>
            
            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
              {study.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-[12px] font-black text-white">{metric.value}</div>
                  <div className="text-[7.5px] font-bold text-slate-500 uppercase tracking-tight mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative z-10 mx-auto max-w-[1180px] px-5 pb-32 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-slate-950 via-[#0c121e] to-slate-950 border border-white/5 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px]" />
          
          <h2 className="text-2xl sm:text-3xl font-black text-white">Want to build something similar?</h2>
          <p className="text-slate-400 text-xs font-semibold mt-3 max-w-lg mx-auto">
            Let's outline your custom requirements, build a high-fidelity prototype, and deploy a robust SaaS product.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a 
              href={`/proposal?project=${study.id}`}
              className="px-6 py-3 rounded-lg text-white font-black text-xs uppercase tracking-wider shadow-lg transition hover:scale-[1.01]"
              style={{
                backgroundColor: study.color,
                boxShadow: `0 8px 20px -8px ${study.color}50`
              }}
            >
              Request Proposal
            </a>
            <a 
              href="/contact"
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-black text-xs uppercase tracking-wider transition hover:border-[#ff6a2a] hover:text-[#ff6a2a] hover:scale-[1.01]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
