const iconPaths = {
  brain: (
    <>
      <path d="M9 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3" />
      <path d="M15 4.5a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3" />
      <path d="M9 8.5h2.2A2.8 2.8 0 0 1 14 11.3v1.4a2.8 2.8 0 0 0 2.8 2.8H18" />
      <path d="M6 12h3" />
      <path d="M15 8.5h3" />
    </>
  ),
  agent: (
    <>
      <path d="M12 3v3" />
      <rect width="14" height="11" x="5" y="8" rx="3" />
      <path d="M9 13h.01" />
      <path d="M15 13h.01" />
      <path d="M9.5 17h5" />
      <path d="M4 13H2" />
      <path d="M22 13h-2" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6Z" />
      <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z" />
    </>
  ),
  enterprise: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-8h6v8" />
      <path d="M8 9h.01" />
      <path d="M12 9h.01" />
      <path d="M16 9h.01" />
    </>
  ),
  blocks: (
    <>
      <rect width="7" height="7" x="3" y="3" rx="1.5" />
      <rect width="7" height="7" x="14" y="3" rx="1.5" />
      <rect width="7" height="7" x="8.5" y="14" rx="1.5" />
      <path d="M10 6.5h4" />
      <path d="m7 10 3 4" />
      <path d="m17 10-3 4" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 19H8a5 5 0 1 1 1.2-9.85A6 6 0 0 1 20 12.5 3.5 3.5 0 0 1 17.5 19Z" />
      <path d="M12 13v5" />
      <path d="m9.5 15.5 2.5-2.5 2.5 2.5" />
    </>
  ),
  vr: (
    <>
      <path d="M4 12.5A4.5 4.5 0 0 1 8.5 8h7A4.5 4.5 0 0 1 20 12.5v1A3.5 3.5 0 0 1 16.5 17h-1.3a2 2 0 0 1-1.8-1.1l-.5-1a1 1 0 0 0-1.8 0l-.5 1A2 2 0 0 1 8.8 17H7.5A3.5 3.5 0 0 1 4 13.5Z" />
      <path d="M8 12h2" />
      <path d="M14 12h2" />
    </>
  ),
  product: (
    <>
      <path d="M12 3 4 7v10l8 4 8-4V7Z" />
      <path d="m4 7 8 4 8-4" />
      <path d="M12 11v10" />
    </>
  ),
  consulting: (
    <>
      <path d="M8 11a4 4 0 1 1 8 0c0 2.5-2 3.5-2.8 5h-2.4C10 14.5 8 13.5 8 11Z" />
      <path d="M10.8 20h2.4" />
      <path d="M4 12H2" />
      <path d="M22 12h-2" />
      <path d="m19 5-1.4 1.4" />
      <path d="M6.4 6.4 5 5" />
    </>
  ),
  design: (
    <>
      <path d="M4 20h4l10.5-10.5a2.8 2.8 0 0 0-4-4L4 16Z" />
      <path d="m13.5 6.5 4 4" />
      <path d="M12 20h8" />
    </>
  ),
};

export function ServiceIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {iconPaths[name] ?? iconPaths.product}
    </svg>
  );
}
