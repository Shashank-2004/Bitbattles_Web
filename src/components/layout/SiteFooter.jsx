import { useState } from "react";
import { BrandLogo } from "../brand/BrandLogo";
import { company } from "../../data/company";
import { services } from "../../data/services";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const footerColumns = [
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Careers", "/careers"],
      ["Blog", "/#blog"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 5).map((service) => [service.title, service.href]),
  },
  {
    title: "Solutions",
    links: [
      ["Startups", "/services/digital-transformation"],
      ["Enterprises", "/services/cloud-implementation"],
      ["SaaS Products", "/services/web-development"],
      ["Automation", "/services/automation"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Case Studies", "/portfolio"],
      ["Services", "/services"],
      ["Terms and Conditions", "/terms"],
      ["Privacy Policy", "/privacy"],
    ],
  },
];

const socialLinks = [
  ["LinkedIn", company.linkedin, <FaLinkedinIn />],
  ["Facebook", company.facebook, <FaFacebookF />],
  ["Instagram", company.instagram, <FaInstagram />],
  ["Email", `mailto:${company.supportEmail}`, <MdEmail />],
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not subscribe right now.");
      }

      setStatus("success");
      setMessage(data.message || "Subscribed successfully.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Could not subscribe right now.");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b111c] px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-bitOrange/50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-bitOrange/10 blur-3xl" />
      <div className="mx-auto max-w-[1180px]">
        <div className="relative mb-14 grid gap-8 overflow-hidden rounded-2xl border border-bitOrange/25 bg-[linear-gradient(145deg,rgba(7,16,28,0.96),rgba(5,7,16,0.98))] p-6 shadow-[0_0_44px_rgba(255,106,42,0.14)] md:grid-cols-[1fr_1.1fr] md:p-8">
          <img alt="" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full object-cover opacity-20" src="/images/orange-wave.png" />
          <div className="relative">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-bitOrange">Newsletter</p>
            <h2 className="mt-3 max-w-lg text-2xl font-black sm:text-3xl">
              Product, AI, and software notes from the BitBattles team.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Subscribe for practical updates on AI workflows, SaaS builds, automation, and startup product delivery.
            </p>
          </div>
          <form className="relative flex flex-col justify-center gap-3 sm:flex-row md:self-center" onSubmit={handleNewsletterSubmit}>
            <input
              className="min-h-12 flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-bitOrange focus:bg-white/[0.06]"
              disabled={status === "loading"}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              type="email"
              value={email}
            />
            <button
              className="min-h-12 rounded-lg bg-bitOrange px-6 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "loading"}
              type="submit"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
            {message && (
              <p className={`absolute -bottom-7 left-0 text-xs font-semibold ${status === "success" ? "text-green-300" : "text-red-300"}`}>
                {message}
              </p>
            )}
          </form>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.25fr_3fr]">
          <div>
            <BrandLogo light />
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              We build AI-powered digital products and solutions that help businesses innovate, grow,
              and lead.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(([label, href, icon]) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/8 text-lg text-slate-300 transition hover:-translate-y-1 hover:border-bitOrange hover:bg-bitOrange hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-400">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="transition hover:pl-1 hover:text-bitOrange">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
