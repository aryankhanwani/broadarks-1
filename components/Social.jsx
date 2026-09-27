/* Brand marks used in the footer and share rows. */
const base = "h-[1.05rem] w-[1.05rem]";

export function LinkedInIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.49 2.49 0 0 1 4.98 3.5ZM3 8.98h4v12.02H3Zm6.5 0h3.83v1.64h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.33c0-1.27-.02-2.9-1.77-2.9s-2.04 1.38-2.04 2.81V21h-4Z" />
    </svg>
  );
}

export function XIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.53 3h3.04l-6.64 7.59L21.75 21h-5.99l-4.69-6.13L5.7 21H2.66l7.1-8.12L2.25 3h6.14l4.24 5.6Zm-1.07 16.17h1.68L7.6 4.74H5.8Z" />
    </svg>
  );
}

export function InstagramIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: <LinkedInIcon /> },
  { label: "X", href: "https://x.com/", icon: <XIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/", icon: <InstagramIcon /> },
];
