"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/Section";
import { ArrowLink } from "@/components/ArrowLink";
import {
  CurtainMedia,
  HighlightParagraph,
  Parallax,
  Reveal,
  Rule,
  Words,
  ZoomMedia,
} from "@/components/Motion";
import { FOUNDERS, TIMELINE } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];

export function AboutIntro() {
  return (
    <>
      <section className="bg-white pb-8 pt-16 lg:pb-16 lg:pt-24">
        <div className="container-x">
          <ZoomMedia
            src="/img/about-studio.svg"
            alt="The BroadArks operating environment"
            className="h-[42vh] w-full lg:h-[72vh]"
          />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-soft">
            <span>BroadArks House · New Delhi</span>
            <span>Est. March 2020</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <SectionLabel>Why we exist</SectionLabel>
            </div>
          </div>
          <div className="lg:col-span-9">
            <HighlightParagraph
              className="display-3 font-sans font-medium text-ink"
              text="We began with a simple discomfort: the future was arriving faster than most people were being prepared for it. BroadArks exists to close that distance — through enterprise, through technology, and through the patient work of human development."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export function Story() {
  const paras = [
    "BroadArks was founded in March 2020 — a month that taught every founder in the world the difference between a plan and a conviction. Pankaj and Dr. Kaveri Dutta had both spent careers on opposite sides of the same problem: one building enterprises and capability, the other studying what actually changes a person's circumstances.",
    "What they kept arriving at was the same conclusion from different directions. Technology, left to itself, concentrates advantage. Human development, without technology, struggles to scale. Neither works alone at the size of the problem India is facing — and neither should be asked to.",
    "So BroadArks was built as a parent company rather than a single business: a structure deliberately wide enough to hold a skilling platform, a deep-tech venture, a responsible commerce house and a not-for-profit foundation, without any one of them distorting the others.",
    "Each division has its own market, its own timeline and its own definition of excellence. What they share is a test they must pass before anything ships: does this expand what a person can do?",
  ];

  return (
    <section className="bg-shell py-20 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel>The story</SectionLabel>
            <h2 className="display-2 mt-5 max-w-[11ch] font-sans">
              <Words text="An unlikely month to begin." />
            </h2>
            <div className="mt-8 max-w-xs">
              <Parallax distance={20}>
                <CurtainMedia src="/img/about-people.svg" alt="" ratio="aspect-[4/5]" />
              </Parallax>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-8">
            {paras.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className={`leading-relaxed ${i === 0 ? "lead text-ink" : "text-[1.0625rem] text-stone"}`}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <Reveal>
              <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] italic leading-snug text-ink">
                “Progress becomes meaningful when technology expands human possibility.”
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-stone-soft">
                The BroadArks premise
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Founders() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-x">
        <SectionLabel>The founders</SectionLabel>
        <h2 className="display-2 mt-5 max-w-[16ch] font-sans">
          <Words text="Two people, one" />{" "}
          <span className="font-serif font-normal italic text-sky">
            <Words text="stubborn question." delay={0.12} />
          </span>
        </h2>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {FOUNDERS.map((f, i) => (
            <div
              key={f.name}
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
                i % 2 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:col-span-5 lg:[direction:ltr]">
                <Parallax distance={24}>
                  <CurtainMedia src={f.image} alt={f.name} ratio="aspect-[4/5]" />
                </Parallax>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:[direction:ltr]">
                <Reveal>
                  <p className="eyebrow text-sky">{f.role}</p>
                  <h3 className="mt-4 font-sans text-[clamp(2rem,3.4vw,3rem)] leading-none tracking-tight text-ink">
                    {f.name}
                  </h3>
                  <p className="mt-7 text-[1.0625rem] leading-relaxed text-stone">{f.bio}</p>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {f.focus.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-4 py-2 text-xs tracking-tight text-stone transition-colors duration-500 hover:border-ink/30 hover:text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="bg-ink py-20 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel light>The road so far</SectionLabel>
            <h2 className="display-2 mt-5 max-w-[10ch] font-sans text-white">
              <Words text="Six years, four divisions." />
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Built one conviction at a time — each division opened only when the problem was
              understood well enough to stay with it.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, delay: i * 0.04, ease: EASE }}
              className="group relative grid grid-cols-[4.5rem_1fr] gap-6 border-t border-white/12 py-9"
            >
              <span className="font-sans text-sm text-sky">{t.year}</span>
              <div>
                <h3 className="font-sans text-xl text-white transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">
                  {t.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60">{t.text}</p>
              </div>
              <span className="absolute left-0 top-0 h-px w-0 bg-sky transition-[width] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CultureGrid() {
  const items = [
    { t: "Patient capital", d: "We fund learning curves, not just launches." },
    { t: "Built in India", d: "Engineering depth and ownership close to home." },
    { t: "Research-led", d: "Every programme starts with evidence, not instinct." },
    { t: "Partnership first", d: "Institutions, industry and communities as co-authors." },
    { t: "Zero-waste ambition", d: "Responsibility designed in, not bolted on." },
    { t: "Measured honestly", d: "Outcomes reported the way we would want them reported to us." },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Rule />
        <div className="flex flex-wrap items-end justify-between gap-6 pt-12">
          <h2 className="display-3 max-w-[14ch] font-sans">
            <Words text="What holds four very different businesses together." />
          </h2>
          <ArrowLink href="/divisions">See the divisions</ArrowLink>
        </div>

        <div className="mt-12 grid gap-x-10 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="group border-b border-line py-8">
                <span className="font-sans text-xs text-sky">0{i + 1}</span>
                <h3 className="mt-4 font-sans text-lg text-ink">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
