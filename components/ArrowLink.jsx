"use client";

import Link from "next/link";

function Arrow({ external }) {
  return (
    <span className="relative ml-3 inline-flex h-[1.05em] w-[1.05em] shrink-0 items-center justify-center overflow-hidden">
      <svg viewBox="0 0 16 16" className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-[140%] group-hover:-translate-y-[140%]" fill="none" stroke="currentColor" strokeWidth="1.5">
        {external ? <path d="M4 12L12 4M12 4H5.5M12 4v6.5" /> : <path d="M2.5 8h11M9 3.5L13.5 8 9 12.5" />}
      </svg>
      <svg viewBox="0 0 16 16" className="absolute inset-0 h-full w-full -translate-x-[140%] translate-y-[140%] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" fill="none" stroke="currentColor" strokeWidth="1.5">
        {external ? <path d="M4 12L12 4M12 4H5.5M12 4v6.5" /> : <path d="M2.5 8h11M9 3.5L13.5 8 9 12.5" />}
      </svg>
    </span>
  );
}

/** Underline-sweep text link with a travelling arrow. */
export function ArrowLink({ href, children, external = false, className = "", light = false }) {
  const Tag = external ? "a" : Link;
  const props = external ? { href, target: "_blank", rel: "noreferrer noopener" } : { href };

  return (
    <Tag
      {...props}
      className={`group relative inline-flex items-center pb-1 text-sm font-medium tracking-tight ${
        light ? "text-white" : "text-ink"
      } ${className}`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-100 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:origin-left group-hover:scale-x-0 ${
            light ? "bg-white/50" : "bg-ink/30"
          }`}
        />
      </span>
      <Arrow external={external} />
    </Tag>
  );
}

/** Solid pill button with fill-from-bottom hover. */
export function ButtonLink({ href, children, external = false, variant = "ink", className = "" }) {
  const Tag = external ? "a" : Link;
  const props = external ? { href, target: "_blank", rel: "noreferrer noopener" } : { href };

  const styles = {
    ink: "border-ink bg-ink text-white",
    outline: "border-ink/25 bg-transparent text-ink",
    light: "border-white/35 bg-transparent text-white",
    lightSolid: "border-white bg-white text-ink",
  }[variant];

  // Hover fills invert the button completely so the label always stays legible.
  const fill = { ink: "bg-white", outline: "bg-ink", light: "bg-white", lightSolid: "bg-ink" }[variant];
  // `hover:` (not `group-hover:`) — the element carries `group` itself,
  // so it is never a descendant of its own group.
  const hoverText = {
    ink: "hover:text-ink",
    outline: "hover:text-white",
    light: "hover:text-ink",
    lightSolid: "hover:text-white",
  }[variant];

  return (
    <Tag
      {...props}
      className={`group relative inline-flex items-center overflow-hidden rounded-full border px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-500 ${styles} ${hoverText} ${className}`}
    >
      <span
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100 ${fill}`}
      />
      <span className="relative flex items-center">
        {children}
        <Arrow external={external} />
      </span>
    </Tag>
  );
}
