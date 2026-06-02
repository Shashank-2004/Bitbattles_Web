import { AnimatePresence, motion } from "framer-motion";
import { AppHeader } from "./components/layout/AppHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { HomePage } from "./components/home/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CareerApplicationPage } from "./pages/CareerApplicationPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProposalPage } from "./pages/ProposalPage";
import { ServicePage } from "./pages/ServicePage";
import { ServicesPage } from "./pages/ServicesPage";
import { TermsPage } from "./pages/TermsPage";
import { services } from "./data/services";

function getActiveService() {
  const [, section, serviceId] = window.location.pathname.split("/");

  if (section !== "services" || !serviceId) {
    return null;
  }

  return services.find((service) => service.id === serviceId) ?? null;
}

function App() {
  const pathname = window.location.pathname;
  const activeService = getActiveService();
  const routeMap = {
    "/": <HomePage />,
    "/services": <ServicesPage />,
    "/about": <AboutPage />,
    "/portfolio": <PortfolioPage />,
    "/projects": <PortfolioPage />,
    "/proposal": <ProposalPage />,
    "/careers": <CareersPage />,
    "/careers/apply": <CareerApplicationPage />,
    "/contact": <ContactPage />,
    "/privacy": <PrivacyPage />,
    "/terms": <TermsPage />,
    "/terms-and-conditions": <TermsPage />,
  };

  const page = activeService ? <ServicePage service={activeService} /> : routeMap[pathname] ?? <HomePage />;

  return (
    <div className="min-h-screen overflow-hidden bg-bitCharcoal">
      <AppHeader />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {page}
        </motion.div>
      </AnimatePresence>
      <SiteFooter />
    </div>
  );
}

export default App;
