"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/Section";
import { ArrowLink } from "@/components/ArrowLink";
import { CurtainMedia, Parallax, Reveal, Words, ZoomMedia } from "@/components/Motion";
import { SOCIALS } from "@/components/Social";

const EASE = [0.16, 1, 0.3, 1];

export function FeaturedPost({ post }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <SectionLabel>Latest</SectionLabel>
        <Link href={`/blog/${post.slug}`} className="group mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="overflow-hidden bg-shell">
              <img
                src={post.image}
                alt=""
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.16em] text-stone-soft">
              <span className="text-sky">{post.category}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-5 font-sans text-[clamp(1.75rem,2.8vw,2.5rem)] leading-tight text-ink">
              {post.title}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-stone">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-6 text-xs text-stone-soft">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 text-sm text-ink">
                Read the piece
                <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">→</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("sent");
  };

  return (
    <section className="bg-shell py-20 lg:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel>Stay close</SectionLabel>
          <h2 className="display-3 mt-5 max-w-[14ch] font-sans">
            <Words text="A few times a year. Nothing in between." />
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="text-[1.0625rem] leading-relaxed text-stone">
              We send the journal when there is something genuinely worth sending — new writing,
              new capability, occasionally a decision we got wrong and what it taught us.
            </p>
            <form onSubmit={submit} className="mt-8">
              <div className="relative flex items-center border-b border-ink/25 pb-3 transition-colors focus-within:border-ink">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state !== "idle") setState("idle");
                  }}
                  placeholder="you@company.com"
                  className="w-full bg-transparent font-sans text-lg text-ink outline-none placeholder:text-stone-soft"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="group ml-4 shrink-0 text-sm font-medium text-ink"
                >
                  Subscribe
                  <span className="ml-2 inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">→</span>
                </button>
              </div>
              <div className="mt-3 h-5">
                <AnimatePresence mode="wait">
                  {state === "error" && (
                    <motion.p
                      key="err"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-sky"
                    >
                      Please enter a valid email address.
                    </motion.p>
                  )}
                  {state === "sent" && (
                    <motion.p
                      key="ok"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-ink"
                    >
                      Thank you — you are on the list.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ArticleHero({ post }) {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-x pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.16em]"
        >
          <Link href="/blog" className="text-stone-soft transition-colors hover:text-ink">
            Journal
          </Link>
          <span className="text-stone-soft">/</span>
          <span className="text-sky">{post.category}</span>
        </motion.div>

        <h1 className="mt-8 max-w-[20ch] font-sans text-[clamp(2rem,4.6vw,4rem)] leading-[1.03] tracking-[-0.03em] text-ink">
          <Words text={post.title} />
        </h1>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-6 text-xs text-stone-soft">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </section>
  );
}

export function ArticleBody({ post }) {
  return (
    <>
      <section className="bg-white pt-10 lg:pt-14">
        <div className="container-x">
          <ZoomMedia src={post.image} alt="" className="h-[38vh] w-full lg:h-[64vh]" />
        </div>
      </section>

      <article className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-stone-soft">Share</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`Share on ${s.label}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-stone transition-colors duration-500 hover:border-ink/30 hover:text-ink"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7 lg:col-start-5">
            {post.body.map((block, i) => {
              if (block.type === "h") {
                return (
                  <Reveal key={i}>
                    <h2 className="mt-14 font-sans text-[clamp(1.5rem,2.2vw,2rem)] leading-tight text-ink">
                      {block.text}
                    </h2>
                  </Reveal>
                );
              }
              if (block.type === "quote") {
                return (
                  <Reveal key={i}>
                    <blockquote className="my-12 border-l-2 border-sky pl-8">
                      <p className="font-serif text-[clamp(1.375rem,2.4vw,2rem)] italic leading-snug text-ink">
                        “{block.text}”
                      </p>
                      <cite className="mt-4 block text-xs not-italic uppercase tracking-[0.16em] text-stone-soft">
                        {block.cite}
                      </cite>
                    </blockquote>
                  </Reveal>
                );
              }
              return (
                <Reveal key={i}>
                  <p className="mt-6 text-[1.0625rem] leading-[1.75] text-stone">{block.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}

export function NextPost({ post }) {
  return (
    <section className="bg-shell py-16 lg:py-24">
      <div className="container-x">
        <SectionLabel>Read next</SectionLabel>
        <Link href={`/blog/${post.slug}`} className="group mt-8 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Parallax distance={18}>
              <CurtainMedia src={post.image} alt="" ratio="aspect-[16/10]" />
            </Parallax>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <span className="text-[0.7rem] uppercase tracking-[0.16em] text-sky">{post.category}</span>
            <h3 className="mt-4 font-sans text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight text-ink">
              {post.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">{post.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-ink">
              Continue reading
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
