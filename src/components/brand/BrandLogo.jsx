export function BrandLogo({ compact = false, light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="BitBattles ESP">
      <img className="h-6 w-6 object-contain" src="/images/bitbattles-logo.png" alt="" />
      {!compact && (
        <span className={`text-sm font-black tracking-normal ${light ? "text-slate-200" : "text-bitCharcoal"}`}>
          BitBattles
        </span>
      )}
    </span>
  );
}
