import { motion, AnimatePresence } from "framer-motion";
import { AppHeader } from "./components/layout/AppHeader";
import { ProposalCta } from "./components/layout/ProposalCta";
import { SiteFooter } from "./components/layout/SiteFooter";
import { HomePage } from "./components/home/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ProposalPage } from "./pages/ProposalPage";
import { services } from "./data/services";
import { ServicePage } from "./pages/ServicePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AiSolutionsPage } from "./pages/AiSolutionsPage";

function getActiveService() {
  const [, section, serviceId] = window.location.pathname.split("/");

  if (section !== "services" || !serviceId) {
    return null;
  }

  return services.find((service) => service.id === serviceId) ?? services[0];
}

function App() {
  const pathname = window.location.pathname;
  const activeService = getActiveService();
  const routeMap = {
    "/": <HomePage />,
    "/services": <ServicesPage />,
    "/about": <AboutPage />,
    "/portfolio": <PortfolioPage />,
    "/proposal": <ProposalPage />,
    "/careers": <CareersPage />,
    "/contact": <ContactPage />,
  };

  // Render dedicated AI Solutions page for /services/ai-solutions
  let page;
  if (activeService?.id === "ai-solutions") {
    page = <AiSolutionsPage />;
  } else if (activeService) {
    page = <ServicePage service={activeService} />;
  } else {
    page = routeMap[pathname] ?? <HomePage />;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-white">
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
      {pathname !== "/proposal" && <ProposalCta />}
      <SiteFooter />
    </div>
  );
}

export default App;
