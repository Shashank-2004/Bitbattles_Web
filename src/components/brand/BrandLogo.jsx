export function BrandLogo({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="BitBattles ESP">
      <img className="h-9 w-9 object-contain" src="/bitbattles-logo.svg" alt="" />
      {!compact && (
        <span className="text-lg font-semibold tracking-normal text-bitCharcoal">
          Bit Battles
        </span>
      )}
    </span>
  );
}
