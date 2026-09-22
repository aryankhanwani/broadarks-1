"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/Section";
import { ArrowLink } from "@/components/ArrowLink";
import { CurtainMedia, HighlightParagraph, Parallax, Reveal, Rule, Words } from "@/components/Motion";
import { FOUNDERS, PRINCIPLES } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];

/* ---------- Scroll-lit statement ---------- */
export function Statement() {
  return (
    <section className="bg-white py-24 lg:py-40">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <SectionLabel>Our belief</SectionLabel>
            <p className="mt-5 max-w-[24ch] text-sm leading-relaxed text-stone-soft">
              Founded in March 2020 by Pankaj and Dr. Kaveri Dutta.
            </p>
          </div>
        </div>
        <div className="lg:col-span-9">
          <HighlightParagraph
            className="display-3 font-sans font-medium text-ink"
            text="Progress becomes meaningful when technology expands human possibility. We bring enterprise, technology and human development under one roof — because the future will not be built by any of them alone."
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              { k: "Enterprise", v: "Businesses built for the long arc, not the next quarter." },
              { k: "Technology", v: "Capability engineered close to home, owned outright." },
              { k: "Human development", v: "Skills, livelihoods and outcomes that actually change lives." },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 0.08}>
                <p className="eyebrow text-sky">{item.k}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Principles: sticky left, scrolling right ---------- */
export function Principles() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-x">
        <Rule />
        <div className="grid gap-14 pt-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel>How we work</SectionLabel>
              <h2 className="display-2 mt-5 max-w-[12ch] font-sans">
                <Words text="Four principles" />
                <br />
                <span className="text-stone-soft"><Words text="we refuse to trade." delay={0.1} /></span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
                They are not slogans. They are the filters every division applies before it
                decides what to build, who to build it with and how long to stay.
              </p>
              <div className="mt-8">
                <ArrowLink href="/about">Read our story</ArrowLink>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-px">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.no}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}
                  className="group relative border-t border-line py-10"
                >
                  <div className="flex gap-8">
                    <span className="font-sans text-xs text-sky">{p.no}</span>
                    <div>
                      <h3 className="font-sans text-2xl leading-tight transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-2">
                        {p.title}
                      </h3>
                      <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-stone">{p.text}</p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-[width] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Founders strip ---------- */
export function FoundersStrip() {
  return (
    <section className="bg-shell py-20 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-5">
            {FOUNDERS.map((f, i) => (
              <Parallax key={f.name} distance={i === 0 ? 26 : -26}>
                <CurtainMedia src={f.image} alt={f.name} ratio="aspect-[4/5]" />
                <p className="mt-4 font-sans text-sm text-ink">{f.name}</p>
                <p className="text-xs text-stone-soft">{f.role}</p>
              </Parallax>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionLabel>The founders</SectionLabel>
          <blockquote className="mt-6">
            <p className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] italic leading-[1.2] text-ink">
              <Words text="“We did not set out to build four companies. We set out to answer one question in four places: what does progress actually feel like for a person?”" />
            </p>
          </blockquote>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-[0.95rem] leading-relaxed text-stone">
              Pankaj and Dr. Kaveri Dutta founded BroadArks in March 2020 — an unlikely month to
              begin anything. That timing shaped the company: patient, pragmatic, and unwilling to
              confuse activity with progress.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <ArrowLink href="/about">Meet the founders</ArrowLink>
              <ArrowLink href="/contact">Partner with us</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Division index quick links ---------- */
export function DivisionIndex({ divisions }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <Rule />
        <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.06}>
              <Link href={`/divisions/${d.slug}`} className="group block">
                <span className="font-sans text-xs text-sky">{d.index}</span>
                <h3 className="mt-3 font-sans text-lg text-ink">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{d.summary}</p>
                <span className="mt-4 inline-block text-xs text-stone-soft transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
