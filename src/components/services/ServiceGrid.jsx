import { serviceSectionStyles } from "../../lib/serviceStyles";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid({
  services,
  eyebrow = "Services",
  title = "AI and software services built for modern teams",
  description = "Reusable service cards for agency pages, category pages, and future CMS or API-driven service listings.",
}) {
  return (
    <section className="service-section-shell" aria-labelledby="services-heading">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className={serviceSectionStyles.eyebrow}>{eyebrow}</p>
          <h2 id="services-heading" className={serviceSectionStyles.heading}>
            {title}
          </h2>
        </div>
        <p className={serviceSectionStyles.intro}>{description}</p>
      </div>

      <div className={serviceSectionStyles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
