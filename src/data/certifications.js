export const certifications = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    category: "quality",
    issuer: "International Organization for Standardization (ISO)",
    certNumber: "QMS-2024-88402",
    issueDate: "Jan 2024",
    expiryDate: "Jan 2027",
    status: "Active",
    description: "Quality Management System standard ensuring consistent delivery of high-quality products and services, conforming to international defense and enterprise requirements.",
    logoUrl: "/images/cert-iso.png",
    details: [
      "Rigorous quality controls in software & hardware systems development.",
      "Continuous improvement framework applied to all engineering pipelines.",
      "Customer satisfaction and stakeholder feedback loops integrated into operations."
    ]
  },
  {
    id: "iso-27001",
    title: "ISO/IEC 27001:2022",
    category: "security",
    issuer: "ISO/IEC Assessment Board",
    certNumber: "ISMS-2024-91207",
    issueDate: "Mar 2024",
    expiryDate: "Mar 2027",
    status: "Active",
    description: "Information Security Management System certification validating that our company adheres to strict protocols protecting client data, source code, and deployment environments.",
    logoUrl: "/images/cert-security.png",
    details: [
      "End-to-end data encryption standards enforced.",
      "Comprehensive access management and zero-trust framework protocols.",
      "Regular penetration testing and compliance audits on cloud hosting systems."
    ]
  },
  {
    id: "aws-partner",
    title: "AWS Certified Partner",
    category: "cloud",
    issuer: "Amazon Web Services",
    certNumber: "AWS-PARTNER-7764",
    issueDate: "Jul 2023",
    expiryDate: "Jul 2026",
    status: "Active",
    description: "Official Amazon Web Services Partnership status verifying our engineers' capability to build, deploy, and manage highly secure and auto-scaling cloud architectures.",
    logoUrl: "/images/cert-aws.png",
    details: [
      "Advanced cloud architecture, serverless systems, and containerized deployments.",
      "Cost optimization strategy implementation for enterprise cloud solutions.",
      "High Availability (HA) configuration and automated recovery systems."
    ]
  },
  {
    id: "cmmc-compliance",
    title: "CMMC Level 2 Compliance",
    category: "defense",
    issuer: "Defense Contract Management Agency (DCMA) / Third-Party Assessment",
    certNumber: "CMMC-L2-30911",
    issueDate: "Nov 2024",
    expiryDate: "Nov 2027",
    status: "Active",
    description: "Cybersecurity Maturity Model Certification alignment indicating our compliance with safeguarding Federal Contract Information (FCI) and Controlled Unclassified Information (CUI).",
    logoUrl: "/images/cert-defense.png",
    details: [
      "NIST SP 800-171 security controls implementation.",
      "Highly secure development lifecycle (SSDLC) with strict authorization checks.",
      "Advanced endpoint detection, response, and logging across our networks."
    ]
  },
  {
    id: "cissp-ceh",
    title: "Certified Information Systems Security Professional",
    category: "security",
    issuer: "(ISC)² & EC-Council",
    certNumber: "CISSP-601445 / CEH-49221",
    issueDate: "Sep 2023",
    expiryDate: "Sep 2026",
    status: "Active",
    description: "Core security team credentials validating industry-standard expertise in digital forensics, ethical hacking, secure architectural design, and network vulnerability management.",
    logoUrl: "/images/cert-cissp.png",
    details: [
      "Secure design principles implemented in custom application builds.",
      "Threat modeling, risk assessment, and incidence response playbooks.",
      "Defensive secure coding practices enforced to prevent OWASP Top 10 vulnerabilities."
    ]
  }
];

export const certCategories = [
  { id: "all", label: "All Certifications" },
  { id: "security", label: "Security & Auditing" },
  { id: "quality", label: "Quality & Management" },
  { id: "cloud", label: "Cloud & Dev" },
  { id: "defense", label: "Defense Standards" }
];
