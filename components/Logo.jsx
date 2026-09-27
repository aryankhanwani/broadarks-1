export default function Logo({ className = "", light = false }) {
  return (
    <span className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <img
        src="/logo-mark.webp"
        alt=""
        aria-hidden
        className="h-7 w-auto shrink-0 sm:h-8"
      />
      <img
        src="/logo-type.webp"
        alt="BroadArks"
        className={`h-[1.15rem] w-auto shrink-0 sm:h-[1.35rem] ${light ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}
