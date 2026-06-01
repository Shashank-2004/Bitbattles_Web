import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "../brand/BrandLogo";
import { navItems } from "../../data/site";
import { services } from "../../data/services";
import { company } from "../../data/company";

export function AppHeader() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mainNavItems = navItems.filter((item) => item.label !== "Services");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-b border-slate-200 bg-white"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="flex shrink-0 items-center gap-3" href="/" aria-label="BitBattles home">
            <BrandLogo />
          </a>

          <div className="hidden items-center gap-6 text-xs font-medium text-bitCharcoal lg:flex xl:gap-8">
            <a className="transition hover:text-bitOrange" href="/">
              Home
            </a>

            <div
              className="relative py-5"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="font-medium transition hover:text-bitOrange"
                type="button"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                onClick={() => setIsServicesOpen((current) => !current)}
              >
                Services
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 w-[820px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-black/10"
                  >
                    <p className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Services
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {services.map((service) => (
                        <a
                          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-slate-700 transition-all hover:bg-orange-50 hover:text-bitOrange"
                          href={service.href}
                          key={service.id}
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-black transition"
                            style={{ background: `${service.color}18`, color: service.color }}
                          >
                            {service.emoji}
                          </span>
                          <span>
                            <span className="block text-xs font-black leading-tight text-slate-800 group-hover:text-bitOrange">
                              {service.title}
                            </span>
                            <span className="mt-0.5 block text-[10px] leading-tight text-slate-400 group-hover:text-bitOrange/70">
                              {service.description.slice(0, 54)}...
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainNavItems.slice(1).map((item) => (
              <a className="transition hover:text-bitOrange" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="hidden rounded-md bg-bitOrange px-5 py-2.5 text-xs font-black text-white shadow-sm shadow-orange-500/20 transition hover:bg-bitCharcoal lg:inline-flex"
            href={`mailto:${company.inquiryEmail}`}
          >
            Let's talk
          </a>

          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-bitCharcoal transition hover:bg-slate-50 lg:hidden"
            onClick={() => setIsMobileOpen((value) => !value)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <motion.div animate={isMobileOpen ? "open" : "closed"} className="flex flex-col gap-1.5">
              <motion.span
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }}
                transition={{ duration: 0.22 }}
                className="block h-0.5 w-5 rounded-full bg-bitCharcoal"
              />
              <motion.span
                variants={{ closed: { opacity: 1, scaleX: 1 }, open: { opacity: 0, scaleX: 0 } }}
                transition={{ duration: 0.22 }}
                className="block h-0.5 w-5 rounded-full bg-bitCharcoal"
              />
              <motion.span
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }}
                transition={{ duration: 0.22 }}
                className="block h-0.5 w-5 rounded-full bg-bitCharcoal"
              />
            </motion.div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-xs flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <a href="/" onClick={() => setIsMobileOpen(false)}>
                  <BrandLogo />
                </a>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600"
                  aria-label="Close menu"
                >
                  X
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                <nav className="flex flex-col gap-1">
                  <a
                    href="/"
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-bitCharcoal transition hover:bg-orange-50 hover:text-bitOrange"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Home
                  </a>

                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen((value) => !value)}
                      className="flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium text-bitCharcoal transition hover:bg-orange-50 hover:text-bitOrange"
                    >
                      Services
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-orange-100 pl-3">
                            {services.map((service) => (
                              <a
                                key={service.id}
                                href={service.href}
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-orange-50 hover:text-bitOrange"
                                onClick={() => setIsMobileOpen(false)}
                              >
                                <span className="text-xs font-black">{service.emoji}</span>
                                {service.title}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {mainNavItems.slice(1).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-bitCharcoal transition hover:bg-orange-50 hover:text-bitOrange"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-slate-100 px-5 py-5">
                <a
                  href={`mailto:${company.inquiryEmail}`}
                  className="flex w-full items-center justify-center rounded-md bg-bitOrange py-3 text-sm font-black text-white transition hover:bg-bitCharcoal"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Let's talk
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
