import { useState } from "react";
import { BrandLogo } from "../brand/BrandLogo";
import { company } from "../../data/company";
import { services } from "../../data/services";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerColumns = [
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Careers", "/careers"],
      ["Certifications & Licenses", "/certifications"],
      ["Blog", "/blog"],
      ["Case Studies", "/portfolio"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 6).map((service) => [service.title, service.href]),
  },
  {
    title: "Solutions",
    links: [
      ["Startups", "/services/ai-solutions"],
      ["Enterprises", "/services/cloud-implementation"],
      ["SaaS Products", "/services/web-development"],
      ["Automation", "/services/digital-transformation"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Case Studies", "/portfolio"],
      ["Services", "/services"],
      ["Certifications", "/certifications"],
      ["Licenses", "/licenses"],
      ["Terms and Conditions", "/terms"],
      ["Privacy Policy", "/privacy"],
    ],
  },
];

const socialLinks = [
  ["LinkedIn", company.linkedin, <FaLinkedinIn />],
  ["Facebook", company.facebook, <FaFacebookF />],
  ["Instagram", company.instagram, <FaInstagram />],
  ["Telegram", company.telegram, <FaTelegramPlane />],
  ["Email", `mailto:${company.supportEmail}`, <MdEmail />],
];

const legalLinks = [
  ["Cookie Policy", "/privacy#cookies"],
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
];

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleNewsletterSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Unable to subscribe right now.");
      }

      setStatus("success");
      setMessage(data.message || "Subscribed successfully.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to subscribe right now.");
    }
  }

  return (
    <footer className="bg-[#0b111c] px-5 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <form
          className="mb-12 grid gap-4 rounded-lg border border-bitOrange/20 bg-black/30 p-5 shadow-[0_0_28px_rgba(255,106,42,0.08)] md:grid-cols-[1fr_auto]"
          onSubmit={handleNewsletterSubmit}
        >
          <div>
            <h2 className="text-lg font-black">Stay updated with BitBattles</h2>
            <p className="mt-1.5 text-sm leading-6 text-slate-400">
              Product, AI and software development updates from our team.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row md:min-w-[340px]">
            <input
              className="min-h-10 flex-1 rounded-md border border-white/10 bg-[#07101c] px-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-bitOrange"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              required
              type="email"
              value={email}
            />
            <button
              className="min-h-10 rounded-md bg-bitOrange px-4 text-xs font-black text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "loading"}
              type="submit"
            >
              {status === "loading" ? "Sending..." : "Subscribe"}
            </button>
          </div>
          {message && (
            <p className={`text-sm md:col-span-2 ${status === "success" ? "text-emerald-400" : "text-orange-300"}`}>
              {message}
            </p>
          )}
        </form>

        <div className="grid gap-10 md:grid-cols-[1.3fr_2.7fr]">
          <div>
            <BrandLogo light size="lg" />

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              We build AI-powered digital products and solutions that help businesses innovate,
              grow, and lead.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(([label, href, icon]) => (
                <a
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/8 text-lg text-slate-300 shadow-[0_0_18px_rgba(255,106,42,0.05)] transition hover:-translate-y-0.5 hover:border-bitOrange hover:bg-bitOrange hover:text-white"
                  href={href}
                  key={label}
                  rel="noreferrer"
                  target={href.startsWith("http") ? "_blank" : undefined}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black">{column.title}</h3>

                <ul className="mt-5 space-y-3 text-sm text-slate-400">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <a className="transition hover:text-bitOrange" href={href}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright (c) {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map(([label, href]) => (
              <a className="transition hover:text-bitOrange" href={href} key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
