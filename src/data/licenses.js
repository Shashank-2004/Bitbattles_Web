export const licenses = [
  {
    id: "def-manufacturing",
    title: "Defense Industrial Production License",
    category: "military",
    authority: "Ministry of Defence & Security Systems Regulatory Board",
    licenseNumber: "DIRSB-MIL-2024-098",
    validity: "Jan 2024 - Dec 2029",
    status: "Authorized",
    scope: "Allows research, prototyping, development, and integration of secure command & control software, dual-use drone systems, and tactical communication components.",
    description: "Official regulatory permission permitting the design and manufacturing of security systems, software dashboards, and integration units for national defense applications."
  },
  {
    id: "uav-commercial",
    title: "UAS/Drone Commercial Testing License",
    category: "aviation",
    authority: "Directorate General of Civil Aviation (DGCA)",
    licenseNumber: "DGCA-UAS-2024-541",
    validity: "Jun 2024 - Jun 2027",
    status: "Authorized",
    scope: "Enables experimental testing, telemetry analysis, and validation flights of AI-assisted unmanned aerial systems within designated airspace coordinates.",
    description: "Crucial license allowing BitBattles to conduct research and development flight tests for autonomous pathfinding, computer vision, and mapping algorithms."
  },
  {
    id: "proprietary-software",
    title: "BitBattles Core Framework Proprietary License",
    category: "software",
    authority: "Bitbattles Esp Pvt Ltd Intellectual Property Office",
    licenseNumber: "BB-CORE-2023-LIC",
    validity: "Perpetual / Active",
    status: "Active",
    scope: "Grants authorized corporate clients commercial utilization of BitBattles' proprietary AI middleware, high-performance dashboards, and web-app base templates.",
    description: "Our core commercial license model outlining client usage permissions, warranty clauses, and redistribution restrictions for our custom-developed software libraries."
  },
  {
    id: "export-control",
    title: "Dual-Use Technology Export Authorization",
    category: "military",
    authority: "Department of Foreign Trade & Security Control Division",
    licenseNumber: "SCOMET-EXP-2025-112",
    validity: "Apr 2025 - Apr 2028",
    status: "Authorized",
    scope: "Permits the export and international licensing of specific cybersecurity analytical products, secure UI portals, and AI systems under SCOMET categories.",
    description: "Authorizes global distribution of BitBattles' custom cybersecurity tools and analytics platforms while complying with international dual-use export regulations."
  },
  {
    id: "open-source-compliance",
    title: "FOSS Compliance Certification & GPL/MIT Audit",
    category: "software",
    authority: "Open Source Compliance Committee (BitBattles)",
    licenseNumber: "FOSS-AUDIT-2024",
    validity: "Annual Renewal / Compliant",
    status: "Compliant",
    scope: "Ensures all libraries, tools, and code frameworks used in client-facing applications strictly comply with MIT, Apache 2.0, BSD, and GPL copyleft rules.",
    description: "Documented compliance framework declaring our clean separation of proprietary intellectual property from open source licenses to protect clients from license leakage."
  }
];

export const licenseCategories = [
  { id: "all", label: "All Licenses" },
  { id: "military", label: "Defense & Operations" },
  { id: "software", label: "Software & Core IP" },
  { id: "aviation", label: "Aviation & Robotics" }
];
