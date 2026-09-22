import { Reveal } from "./Motion";

export function Section({ children, className = "", id, tone = "paper" }) {
  const bg = { paper: "bg-white", shell: "bg-shell", ink: "bg-ink text-white/70" }[tone] ?? "bg-white";
  return (
    <section id={id} className={`relative ${bg} ${className}`}>
      {children}
    </section>
  );
}

export function SectionLabel({ children, className = "", light = false }) {
  return (
    <Reveal>
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-sky" />
        <span className={`eyebrow ${light ? "text-white/60" : "text-stone-soft"}`}>{children}</span>
      </div>
    </Reveal>
  );
}
