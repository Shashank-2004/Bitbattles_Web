const sizeStyles = {
  sm: {
    image: "h-6 w-6",
    text: "text-sm",
    gap: "gap-2.5",
  },
  md: {
    image: "h-8 w-8",
    text: "text-base",
    gap: "gap-3",
  },
  lg: {
    image: "h-10 w-10",
    text: "text-lg",
    gap: "gap-3.5",
  },
};

export function BrandLogo({ compact = false, light = false, size = "sm" }) {
  const logoSize = sizeStyles[size] ?? sizeStyles.sm;

  return (
    <span className={`inline-flex items-center ${logoSize.gap}`} aria-label="BitBattles ESP">
      <img className={`${logoSize.image} object-contain drop-shadow-[0_0_16px_rgba(255,106,42,0.22)]`} src="/images/bitbattles-logo.png" alt="" />
      {!compact && (
        <span className={`${logoSize.text} font-black tracking-normal ${light ? "text-slate-200" : "text-bitCharcoal"}`}>
          BitBattles
        </span>
      )}
    </span>
  );
}
