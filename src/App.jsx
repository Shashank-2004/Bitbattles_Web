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
import { SolutionsPage } from "./pages/SolutionsPage";
import { TermsPage } from "./pages/TermsPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { LicensesPage } from "./pages/LicensesPage";
import { services } from "./data/services";
import { blogPosts } from "./data/blogPosts";

// Import dedicated service page components
import { AiSolutionsPage } from "./pages/AiSolutionsPage";
import { UiUxDesignPage } from "./pages/UiUxDesignPage";
import { WebDevelopmentPage } from "./pages/WebDevelopmentPage";
import { AppDevelopmentPage } from "./pages/AppDevelopmentPage";
import { QaTestingPage } from "./pages/QaTestingPage";
import { CyberSecurityPage } from "./pages/CyberSecurityPage";
import { CloudImplementationPage } from "./pages/CloudImplementationPage";
import { AutomationPage } from "./pages/AutomationPage";
import { ArVrPage } from "./pages/ArVrPage";

// Map service IDs to their dedicated page components
const dedicatedServicePages = {
  "ai-solutions": <AiSolutionsPage />,
  "ui-ux-design": <UiUxDesignPage />,
  "web-development": <WebDevelopmentPage />,
  "mobile-apps": <AppDevelopmentPage />,
  "mobile-app-development": <AppDevelopmentPage />,
  "qa-testing": <QaTestingPage />,
  "cyber-security": <CyberSecurityPage />,
  "cloud-implementation": <CloudImplementationPage />,
  "cloud-solutions": <CloudImplementationPage />,
  "automation": <AutomationPage />,
  "ar-vr-development": <ArVrPage />,
};

function getActiveService() {
  const [, section, serviceId] = window.location.pathname.split("/");

  if (section !== "services" || !serviceId) {
    return null;
  }

  return services.find((service) => service.id === serviceId) ?? null;
}

function getActiveBlogPostSlug() {
  const [, section, postId] = window.location.pathname.split("/");

  if (section !== "blog" || !postId) {
    return null;
  }

  return postId;
}

function App() {
  const pathname = window.location.pathname;
  const activeService = getActiveService();
  const activeBlogSlug = getActiveBlogPostSlug();
  const routeMap = {
    "/": <HomePage />,
    "/services": <ServicesPage />,
    "/solutions": <SolutionsPage />,
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
    "/blog": <BlogPage />,
    "/certifications": <CertificationsPage />,
    "/certificationns": <CertificationsPage />,
    "/licenses": <LicensesPage />,
    "/licsenses": <LicensesPage />,
  };

  // Determine which page to render
  let page;
  if (activeService) {
    page = dedicatedServicePages[activeService.id] ?? <ServicePage service={activeService} />;
  } else if (activeBlogSlug) {
    page = <BlogPostPage slug={activeBlogSlug} />;
  } else {
    page = routeMap[pathname] ?? <HomePage />;
  }

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
