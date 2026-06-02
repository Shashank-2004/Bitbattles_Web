import { motion, AnimatePresence } from "framer-motion";
import { AppHeader } from "./components/layout/AppHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { HomePage } from "./components/home/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProposalPage } from "./pages/ProposalPage";
import { ServicePage } from "./pages/ServicePage";
import { ServicesPage } from "./pages/ServicesPage";
<<<<<<< HEAD
import { TermsPage } from "./pages/TermsPage";
import { services } from "./data/services";
=======
import { AiSolutionsPage } from "./pages/AiSolutionsPage";
import { UiUxDesignPage } from "./pages/UiUxDesignPage";
import { WebDevelopmentPage } from "./pages/WebDevelopmentPage";
import { AppDevelopmentPage } from "./pages/AppDevelopmentPage";
import { QaTestingPage } from "./pages/QaTestingPage";
import { CyberSecurityPage } from "./pages/CyberSecurityPage";

// Map service IDs to their dedicated page components
const dedicatedServicePages = {
  "ai-solutions": <AiSolutionsPage />,
  "ui-ux-design": <UiUxDesignPage />,
  "web-development": <WebDevelopmentPage />,
  "mobile-apps": <AppDevelopmentPage />,
  "qa-testing": <QaTestingPage />,
  "cyber-security": <CyberSecurityPage />,
};
>>>>>>> bbdbdf675dbcfd53906d444e41caf982d54132d3

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
<<<<<<< HEAD
=======

>>>>>>> bbdbdf675dbcfd53906d444e41caf982d54132d3
  const routeMap = {
    "/": <HomePage />,
    "/services": <ServicesPage />,
    "/about": <AboutPage />,
    "/portfolio": <PortfolioPage />,
    "/projects": <PortfolioPage />,
    "/proposal": <ProposalPage />,
    "/careers": <CareersPage />,
    "/contact": <ContactPage />,
    "/privacy": <PrivacyPage />,
    "/terms": <TermsPage />,
    "/terms-and-conditions": <TermsPage />,
  };
<<<<<<< HEAD

  const page = activeService ? <ServicePage service={activeService} /> : routeMap[pathname] ?? <HomePage />;
=======
  // Determine which page to render
  let page;
  if (activeService) {
    // Use dedicated page if available, otherwise fall back to generic ServicePage
    page = dedicatedServicePages[activeService.id] ?? <ServicePage service={activeService} />;
  } else {
    page = routeMap[pathname] ?? <HomePage />;
  }
>>>>>>> bbdbdf675dbcfd53906d444e41caf982d54132d3

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
