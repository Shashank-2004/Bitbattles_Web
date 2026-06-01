import { BrandLogo } from "../brand/BrandLogo";
import { company } from "../../data/company";
import { services } from "../../data/services";

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
      ["Startups", "/#solutions"],
      ["Enterprises", "/#solutions"],
      ["SaaS Products", "/#solutions"],
      ["Automation", "/services/digital-transformation"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Case Studies", "/portfolio"],
      ["Documentation", "/#"],
      ["FAQs", "/#"],
      ["Privacy Policy", "/#"],
    ],
  },
];

const socialLinks = [
  ["in", company.linkedin],
  ["x", company.facebook],
  ["↗", company.instagram],
  ["●", `mailto:${company.supportEmail}`],
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0b111c] px-5 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_3fr]">
        <div>
          <BrandLogo light />
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            We build AI-powered digital products and solutions that help businesses innovate, grow,
            and lead.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(([label, href]) => (
              <a
                className="grid h-9 w-9 place-items-center rounded-md bg-white/8 text-xs font-black text-slate-300 transition hover:bg-bitOrange hover:text-white"
                href={href}
                key={label}
                rel="noreferrer"
                target={href.startsWith("http") ? "_blank" : undefined}
              >
                {label}
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
    </footer>
  );
}
