import { serviceCardStyles } from "../../lib/serviceStyles";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({
  icon,
  title,
  description,
  href,
  ctaLabel = "Explore service",
}) {
  return (
    <article className={serviceCardStyles.card}>
      <div className={serviceCardStyles.iconWrap}>
        <ServiceIcon name={icon} />
      </div>

      <h3 className={serviceCardStyles.title}>{title}</h3>
      <p className={serviceCardStyles.description}>{description}</p>

      {/* Anchor keeps the CTA backend/router friendly; swap with Link later if needed. */}
      <a className={serviceCardStyles.cta} href={href} aria-label={`${ctaLabel}: ${title}`}>
        <span>{ctaLabel}</span>
        <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
          &rarr;
        </span>
      </a>
    </article>
  );
}
