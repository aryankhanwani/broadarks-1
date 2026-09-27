"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "./Logo";
import { ButtonLink } from "./ArrowLink";
import { NAV } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    if (open) return;
    setHidden(y > prev && y > 220);
  });

  const darkHero = /^\/divisions\/.+/.test(pathname);
  const light = darkHero && !solid && !open;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-500 ${
            solid ? "border-b border-line bg-white/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="container-x flex h-[72px] items-center justify-between lg:h-20">
            <Link href="/" aria-label="BroadArks home" className="group">
              <Logo light={light} className="transition-opacity duration-300 group-hover:opacity-70" />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {NAV.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-4 py-2 text-sm tracking-tight transition-colors duration-300 ${
                      light ? "text-white/65 hover:text-white" : "text-stone hover:text-ink"
                    }`}
                  >
                    <span className={active ? (light ? "text-white" : "text-ink") : ""}>{item.label}</span>
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-px origin-left bg-sky transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={`group relative hidden overflow-hidden rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-500 lg:inline-flex ${
                  light
                    ? "border-white/40 bg-transparent text-white hover:text-ink"
                    : "border-ink bg-ink text-white hover:text-ink"
                }`}
              >
                <span
                  className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100"
                />
                <span className="relative">Start a conversation</span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className={`relative z-[45] flex h-11 w-11 items-center justify-center rounded-full border transition-opacity duration-300 lg:hidden ${
                  light ? "border-white/30 bg-transparent" : "border-line bg-white"
                } ${open ? "pointer-events-none opacity-0" : "opacity-100"}`}
              >
                <span className="relative block h-3 w-4">
                  <motion.span
                    animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className={`absolute left-0 top-0 h-px w-full ${light ? "bg-white" : "bg-ink"}`}
                  />
                  <motion.span
                    animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className={`absolute bottom-0 left-0 h-px w-full ${light ? "bg-white" : "bg-ink"}`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="fixed inset-0 z-[52] bg-white lg:hidden"
          >
            <div className="container-x flex h-full flex-col overflow-y-auto pb-10">
              <div className="flex h-[72px] shrink-0 items-center justify-between">
                <Link href="/" aria-label="BroadArks home" onClick={() => setOpen(false)}>
                  <Logo />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <nav className="mt-10 flex flex-col">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: EASE }}
                    className="border-b border-line"
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline gap-4 py-5 font-sans text-[1.75rem] tracking-tight text-ink sm:text-[2rem]"
                    >
                      <span className="font-body text-[0.6875rem] tracking-[0.2em] text-sky">
                        0{i + 1}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-10"
              >
                <ButtonLink href="/contact">
                  Start a conversation
                </ButtonLink>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-auto space-y-1 pt-10 text-sm text-stone"
              >
                <p className="eyebrow text-stone-soft">Get in touch</p>
                <a href="mailto:hello@broadarks.com" className="block text-ink">hello@broadarks.com</a>
                <p>New Delhi · India</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
