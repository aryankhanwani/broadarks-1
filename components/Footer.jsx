"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { ArrowLink } from "./ArrowLink";
import { Reveal, Rule } from "./Motion";
import { DIVISIONS, NAV } from "@/data/site";

export default function Footer() {
  const scrollTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-line bg-white">
      <div className="container-x py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Logo />
              <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-stone">
                Building human possibility for a technology-shaped future. Four divisions,
                one shared ambition — meaningful progress for people, businesses and communities.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["LinkedIn", "X", "Instagram"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="group relative overflow-hidden rounded-full border border-line px-4 py-2 text-xs tracking-tight text-stone transition-colors duration-500 hover:text-white"
                  >
                    <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />
                    <span className="relative">{s}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.05}>
              <p className="eyebrow text-stone-soft">Divisions</p>
              <ul className="mt-6 space-y-3.5">
                {DIVISIONS.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/divisions/${d.slug}`}
                      className="group flex items-center justify-between text-[0.95rem] text-ink transition-colors hover:text-sky"
                    >
                      {d.name}
                      <span className="text-xs text-stone-soft transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1">
                        {d.index}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <p className="eyebrow text-stone-soft">Navigate</p>
              <ul className="mt-6 space-y-3.5">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-[0.95rem] text-stone transition-colors hover:text-ink">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.15}>
              <p className="eyebrow text-stone-soft">Get in touch</p>
              <ul className="mt-6 space-y-3.5 text-[0.95rem]">
                <li>
                  <a href="mailto:hello@broadarks.com" className="text-ink transition-colors hover:text-sky">
                    hello@broadarks.com
                  </a>
                </li>
                <li>
                  <a href="tel:+911140000000" className="text-stone transition-colors hover:text-ink">
                    +91 11 4000 0000
                  </a>
                </li>
                <li className="text-stone">
                  BroadArks House
                  <br />
                  New Delhi, India
                </li>
              </ul>
              <div className="mt-6">
                <ArrowLink href="/contact">Contact us</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <Rule />
          <div className="relative mt-8 overflow-hidden">
            <motion.p
              initial={{ y: "22%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="select-none text-center font-sans text-[15vw] font-semibold leading-[0.82] tracking-[-0.045em] text-ink/[0.07] lg:text-[13vw]"
            >
              BROADARKS
            </motion.p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 text-xs text-stone-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BroadArks. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
            <button
              type="button"
              onClick={scrollTop}
              className="group flex items-center gap-2 transition-colors hover:text-ink"
            >
              Back to top
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
