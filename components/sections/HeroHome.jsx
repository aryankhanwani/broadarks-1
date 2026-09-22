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
  const width = useTransform(mediaP, [0, 1], ["62%", "100%"]);
  const radius = useTransform(mediaP, [0, 1], [24, 0]);
  const imgScale = useTransform(mediaP, [0, 1], [1.3, 1]);

  return (
    <section ref={ref} className="relative bg-white">
      <motion.div style={{ y, opacity }} className="container-x flex min-h-[88svh] flex-col justify-between pb-10 pt-32 lg:pb-14 lg:pt-40">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
            </span>
            <span className="eyebrow text-stone">One World · Four Divisions · Since 2020</span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-12">
          <h1 className="display-1 font-sans font-medium text-ink lg:col-span-9">
            <Words text="Building human" />{" "}
            <span className="text-sky">
              <Words text="possibility" delay={0.18} />
            </span>
            <br />
            <Words text="for a" delay={0.3} />{" "}
            <span className="font-serif font-normal italic tracking-[-0.01em]">
              <Words text="technology-shaped" delay={0.42} />
            </span>
            <br />
            <Words text="future." delay={0.55} />
          </h1>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.9 } } }}
              className="hidden self-end lg:col-span-3 lg:block"
            >
              {DIVISIONS.map((d) => (
                <motion.li
                  key={d.slug}
                  variants={{
                    hidden: { opacity: 0, x: 18 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
                  }}
                  className="group border-t border-line py-3.5"
                >
                  <Link href={`/divisions/${d.slug}`} className="flex items-baseline justify-between gap-4">
                    <span className="font-sans text-sm text-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1">
                      {d.name}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.14em] text-stone-soft">
                      {d.index}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
            className="lead max-w-xl text-stone lg:col-span-6"
          >
            BroadArks brings enterprise, technology and human development under one shared
            ambition: to create meaningful progress for people, businesses and communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.82, ease: EASE }}
            className="flex flex-wrap items-center gap-4 lg:col-span-4"
          >
            <ButtonLink href="/divisions">Explore the divisions</ButtonLink>
            <ButtonLink href="/about" variant="outline">Our story</ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden items-center justify-end gap-3 lg:col-span-2 lg:flex"
          >
            <span className="eyebrow text-stone-soft">Scroll</span>
            <span className="relative block h-12 w-px overflow-hidden bg-line">
              <motion.span
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 top-0 h-6 bg-ink"
              />
            </span>
          </motion.div>
        </div>
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
