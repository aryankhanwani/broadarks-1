export default function Logo({ className = "", light = false }) {
  const color = light ? "#ffffff" : "#2E3191";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" fill="none" aria-hidden>
        <path d="M16 29C16 21.8 21.8 16 29 16" stroke="#27AAE1" strokeWidth="3" />
        <path d="M3 29C3 14.6 14.6 3 29 3" stroke={color} strokeWidth="3" />
        <path d="M9.5 29C9.5 18.2 18.2 9.5 29 9.5" stroke={color} strokeWidth="3" opacity="0.35" />
      </svg>
      <span
        className="font-sans text-[1.0625rem] font-semibold tracking-[-0.02em]"
        style={{ color }}
      >
        Broad<span style={{ color: light ? "#27AAE1" : "#27AAE1" }}>Arks</span>
      </span>
    </span>
  );
}
