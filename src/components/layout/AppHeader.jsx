import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "../brand/BrandLogo";
import { services } from "../../data/services";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Certifications", href: "/certifications" },
  { label: "Licenses", href: "/licenses" },
  { label: "Blog", href: "/blog" },
];

export function AppHeader() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07101c]/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:px-6 lg:px-8">
          <a className="flex min-w-[170px] items-center" href="/" aria-label="BitBattles home">
            <BrandLogo light size="lg" />
          </a>

          <div className="hidden flex-1 items-center justify-center gap-7 text-[13px] font-bold text-slate-200 lg:flex">
            {navLinks.map((item) =>
              item.label === "Services" ? (
                <div
                  className="relative py-5"
                  key={item.label}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a className="transition hover:text-bitOrange" href="/services">
                    Services
                  </a>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 rounded-xl border border-orange-500/25 bg-[#09111f] p-4 shadow-2xl shadow-orange-950/40"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service) => (
                            <a
                              className="group flex items-center gap-3 rounded-lg p-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
                              href={service.href}
                              key={service.id}
                            >
                              <span className="grid h-9 w-9 place-items-center rounded-lg border border-bitOrange/60 bg-bitOrange/10 text-sm">
                                {service.shortCode}
                              </span>
                              <span>
                                <span className="block text-xs font-black">{service.title}</span>
                                <span className="mt-1 block text-[10px] leading-4 text-slate-500 group-hover:text-slate-300">
                                  {service.description}
                                </span>
                              </span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a className="transition hover:text-bitOrange" href={item.href} key={item.label}>
                  {item.label}
                </a>
              ),
            )}
          </div>

          <a
            className="hidden min-w-[118px] justify-center rounded-sm bg-bitOrange px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-500 md:inline-flex"
            href="/proposal"
          >
            Lets talk -&gt;
          </a>

          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white lg:hidden"
            onClick={() => setIsMobileOpen((value) => !value)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? "X" : "Menu"}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-[#07101c] px-5 py-5 text-white shadow-2xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <nav className="grid gap-2">
              {navLinks.map((item) => (
                <a
                  className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/5 hover:text-bitOrange"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-2 rounded-sm bg-bitOrange px-3 py-3 text-center text-sm font-black text-white"
                href="/proposal"
                onClick={() => setIsMobileOpen(false)}
              >
                Lets talk -&gt;
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
