import { BrandLogo } from "../brand/BrandLogo";
import { company } from "../../data/company";
import { navItems } from "../../data/site";
import { services } from "../../data/services";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/bitbattles",
    icon: (
      <path d="M6.9 8.8H3.7V20h3.2ZM5.3 7.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM20.3 20h-3.2v-5.8c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9v6h-3.2s.1-9.8 0-10.8h3.2v1.5c.4-.7 1.2-1.8 3-1.8 2.2 0 3.9 1.5 3.9 4.6V20Z" />
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M14 8.5h2V5h-2.6C10.5 5 9 6.7 9 9.2V12H6v3.5h3V21h3.7v-5.5h2.8L16 12h-3.3V9.6c0-.7.4-1.1 1.3-1.1Z" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.8 7.2h.01" />
      </>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-[1.1fr_2fr] lg:px-8">
        <div>
          <BrandLogo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">{company.description}</p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-bitOrange transition hover:bg-bitOrange hover:text-white"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target={link.href === "#" ? undefined : "_blank"}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill={link.label === "Instagram" ? "none" : "currentColor"}
                  stroke={link.label === "Instagram" ? "currentColor" : "none"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-black text-bitCharcoal">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {navItems
                .filter((item) => ["About Us", "Portfolio", "Careers", "Contact"].includes(item.label))
                .map((item) => (
                  <li key={item.label}>
                    <a className="hover:text-bitOrange" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black text-bitCharcoal">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {services.map((service) => (
                <li key={service.id}>
                  <a className="hover:text-bitOrange" href={service.href}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black text-bitCharcoal">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>{company.location}</li>
              <li>{company.website}</li>
              <li>hello@bitbattles.in</li>
              <li>
                <a className="font-black text-bitOrange hover:text-bitCharcoal" href="/proposal">
                  Request a proposal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
