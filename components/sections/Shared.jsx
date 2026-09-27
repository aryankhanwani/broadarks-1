"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/Section";
import { ArrowLink, ButtonLink } from "@/components/ArrowLink";
import { Counter, Reveal, Stagger, StaggerItem, Words } from "@/components/Motion";
import { POSTS, STATS } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];

/* ---------------- Page hero used by inner pages ---------------- */
export function PageHero({ eyebrow, title, accent, lead, meta }) {
  return (
    <section className="relative border-b border-line bg-white">
      <div className="container-x pb-14 pt-28 sm:pt-32 lg:pb-24 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky" />
          <span className="eyebrow text-stone-soft">{eyebrow}</span>
        </motion.div>

        <h1 className="display-1 mt-8 max-w-[22ch] font-sans">
          <Words text={title} />
          {accent ? (
            <>
              {" "}
              <span className="font-serif font-normal italic text-sky">
                <Words text={accent} delay={0.16} />
              </span>
            </>
          ) : null}
        </h1>

        <div className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
          {lead ? (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
              className="lead text-stone lg:col-span-7"
            >
              {lead}
            </motion.p>
          ) : null}

          {meta?.length ? (
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 lg:col-span-4 lg:col-start-9">
              {meta.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55 + i * 0.08, ease: EASE }}
                >
                  <p className="eyebrow text-stone-soft">{m.label}</p>
                  <p className="mt-2 font-sans text-base text-ink">{m.value}</p>
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
export function StatsBand({ tone = "ink" }) {
  const dark = tone === "ink";
  return (
    <section className={`${dark ? "bg-ink" : "bg-shell"} py-20 lg:py-28`}>
      <div className="container-x">
        <SectionLabel light={dark}>BroadArks in numbers</SectionLabel>
        <div className="mt-12 grid gap-x-10 gap-y-0 border-t sm:grid-cols-2 lg:grid-cols-4"
             style={{ borderColor: dark ? "rgba(255,255,255,0.14)" : "var(--color-line)" }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
              className="group relative py-10 sm:py-14"
            >
              <span
                className="absolute left-0 top-0 h-px w-0 transition-[width] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full"
                style={{ background: "var(--color-sky)" }}
              />
              <p className={`font-sans text-[clamp(2.75rem,5vw,4.5rem)] leading-none tracking-[-0.04em] ${dark ? "text-white" : "text-ink"}`}>
                <Counter value={s.value} suffix={s.suffix} plain={s.plain} />
              </p>
              <p className={`mt-5 max-w-[22ch] text-sm leading-relaxed ${dark ? "text-white/70" : "text-stone"}`}>
                {s.label}
              </p>
              <p className={`mt-2 text-xs ${dark ? "text-white/35" : "text-stone-soft"}`}>{s.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Journal teaser ---------------- */
export function JournalTeaser({ limit = 3 }) {
  const posts = POSTS.slice(0, limit);
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>The Journal</SectionLabel>
            <h2 className="display-2 mt-5 max-w-[14ch] font-sans">
              <Words text="Thinking, from" />
              <br />
              <span className="font-serif font-normal italic text-sky">
                <Words text="inside the work." delay={0.12} />
              </span>
            </h2>
          </div>
          <ArrowLink href="/blog">Read the journal</ArrowLink>
        </div>

        <div className="mt-14">
          <Stagger className="grid items-stretch gap-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
            {posts.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <PostCard post={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col border-t border-line pt-8"
    >
      <div className="mb-6 aspect-[16/10] overflow-hidden bg-shell">
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.08]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] uppercase tracking-[0.16em] text-stone-soft">
        <span className="text-sky">{post.category}</span>
        <span aria-hidden>·</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-4 font-sans text-lg leading-snug text-ink sm:text-xl">{post.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone">{post.excerpt}</p>
      <p className="mt-auto pt-6 text-xs text-stone-soft">{post.date}</p>
    </Link>
  );
}

/* ---------------- Closing CTA ---------------- */
export function CTABand({
  eyebrow = "Work with us",
  title = "Let's build what comes next.",
  text = "Whether you are a learner, an institution, an investor, a partner or simply curious — we would like to hear from you.",
  primary = { href: "/contact", label: "Start a conversation" },
  secondary = { href: "/divisions", label: "Explore divisions" },
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div className="container-x relative">
        <SectionLabel light>{eyebrow}</SectionLabel>
        <h2 className="display-2 mt-6 max-w-[18ch] font-sans text-white">
          <Words text={title} />
        </h2>
        <Reveal delay={0.15}>
          <p className="lead mt-8 max-w-xl text-white/65">{text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ButtonLink href={primary.href} variant="lightSolid">{primary.label}</ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="light">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </div>

      <motion.div
        aria-hidden
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: EASE }}
        className="pointer-events-none absolute right-0 top-0 hidden h-[36rem] w-[36rem] lg:block"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            style={{ width: `${i * 9}rem`, height: `${i * 9}rem` }}
          />
        ))}
      </motion.div>
    </section>
  );
}
