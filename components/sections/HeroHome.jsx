"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ButtonLink } from "@/components/ArrowLink";
import { Words } from "@/components/Motion";
import Marquee from "@/components/Marquee";
import { DIVISIONS } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];

export default function HeroHome() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const mediaRef = useRef(null);
  const { scrollYProgress: mediaP } = useScroll({
    target: mediaRef,
    offset: ["start end", "end center"],
  });
  const width = useTransform(mediaP, [0, 1], ["82%", "100%"]);
  const radius = useTransform(mediaP, [0, 1], [24, 0]);
  const imgScale = useTransform(mediaP, [0, 1], [1.3, 1]);

  return (
    <section ref={ref} className="relative bg-white">
      <motion.div
        style={{ y, opacity }}
        className="container-x grid min-h-[86svh] items-center gap-12 pb-14 pt-28 lg:grid-cols-12 lg:gap-14 lg:pb-20 lg:pt-40"
      >
        {/* Column one — the statement */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
            </span>
            <span className="eyebrow text-[0.625rem] text-stone sm:text-[0.6875rem]">
              One World · Four Divisions · Since 2020
            </span>
          </motion.div>

          <h1 className="display-1 mt-7 font-sans font-medium text-ink lg:mt-10">
            <Words text="Building human" />{" "}
            <span className="text-sky">
              <Words text="possibility" delay={0.18} />
            </span>
            <br />
            <Words text="for a" delay={0.3} />{" "}
            <span className="font-serif font-normal italic">
              <Words text="technology-shaped" delay={0.42} />
            </span>
            <br />
            <Words text="future." delay={0.55} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
            className="lead mt-8 max-w-xl text-stone lg:mt-10"
          >
            BroadArks brings enterprise, technology and human development under one shared
            ambition: to create meaningful progress for people, businesses and communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.82, ease: EASE }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <ButtonLink href="/divisions">
              Explore the divisions
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">
              Our story
            </ButtonLink>
          </motion.div>
        </div>

        {/* Column two — the divisions index */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.7 } } }}
          className="lg:col-span-4 lg:col-start-9"
        >
          <motion.li
            variants={{
              hidden: { opacity: 0, x: 18 },
              show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className="pb-4"
          >
            <span className="eyebrow text-stone-soft">The divisions</span>
          </motion.li>
          {DIVISIONS.map((d) => (
            <motion.li
              key={d.slug}
              variants={{
                hidden: { opacity: 0, x: 18 },
                show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className="group border-t border-line py-4"
            >
              <Link href={`/divisions/${d.slug}`} className="flex items-baseline justify-between gap-4">
                <span className="font-sans text-[0.95rem] text-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1 sm:text-base">
                  {d.name}
                </span>
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.14em] text-stone-soft">
                  {d.index}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="border-y border-line bg-white py-5">
        <Marquee
          speed={40}
          className="font-sans text-sm uppercase tracking-[0.18em] text-ink"
          items={DIVISIONS.map((d) => (
            <span key={d.slug} className="flex items-baseline gap-3">
              <span className="text-[0.65rem] text-sky">{d.index}</span>
              {d.name}
              <span className="font-body text-[0.65rem] normal-case tracking-[0.14em] text-stone-soft">
                {d.category.split("/")[1]}
              </span>
            </span>
          ))}
        />
      </div>

      <div ref={mediaRef} className="flex justify-center bg-white py-16 lg:py-24">
        <motion.div style={{ width, borderRadius: radius }} className="relative overflow-hidden bg-ink">
          <motion.img
            src="/img/home-scope.svg"
            alt="Abstract representation of the BroadArks operating scope"
            style={{ scale: imgScale }}
            className="h-[46vh] w-full object-cover lg:h-[78vh]"
          />
          <div className="absolute inset-0 flex items-end p-6 lg:p-14">
            <div className="max-w-md">
              <p className="eyebrow text-white/60">The shared ambition</p>
              <p className="mt-3 font-sans text-xl leading-snug text-white lg:text-3xl">
                Progress becomes meaningful when technology expands human possibility.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
