import { useState } from "react";
import { BrandLogo } from "../brand/BrandLogo";
import { navItems } from "../../data/site";
import { services } from "../../data/services";

export function AppHeader() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-300 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="/" aria-label="BitBattles home">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-7 text-xs font-medium text-bitCharcoal lg:flex">
          <a className="hover:text-bitOrange" href={navItems[0].href}>
            {navItems[0].label}
          </a>

          <div
            className="relative py-5"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="inline-flex items-center gap-2 hover:text-bitOrange"
              type="button"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((current) => !current)}
            >
              Services <span aria-hidden="true">v</span>
            </button>

            {isServicesOpen && (
              <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
                <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                  {services.map((service) => (
                    <a
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-800 transition hover:bg-orange-50 hover:text-bitOrange"
                      href={service.href}
                      key={service.id}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-bitCharcoal text-xs font-black text-bitOrange">
                        {service.title.slice(0, 2)}
                      </span>
                      <span>{service.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <a className="hover:text-bitOrange" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="hidden rounded-md bg-bitOrange px-6 py-2.5 text-xs font-black text-white shadow-sm shadow-orange-500/20 transition hover:bg-bitCharcoal md:inline-flex"
          href="mailto:hello@bitbattles.in"
        >
          Lets talk &rarr;
        </a>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-bitCharcoal">
            Services
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
            {services.map((service) => (
              <a
                className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-orange-50 hover:text-bitOrange"
                href={service.href}
                key={service.id}
              >
                {service.title}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
