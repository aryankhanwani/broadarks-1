"use client";

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const EASE = [0.16, 1, 0.3, 1];

/* ---------- Generic scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- Staggered children ---------- */
export function Stagger({ children, className = "", gap = 0.08, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{ show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 24 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Word-by-word headline reveal ---------- */
export function Words({ text, className = "", delay = 0, stagger = 0.045, once = true }) {
  const words = String(text).split(" ");
  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px" }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.16em] -mb-[0.16em]"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "108%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.95, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ---------- Scroll-linked word highlight (signature section) ---------- */
export function HighlightParagraph({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = String(text).split(" ");

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <HighlightWord key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </HighlightWord>
        );
      })}
    </p>
  );
}

function HighlightWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <span className="absolute inset-0 opacity-15">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

/* ---------- Drawing rule ---------- */
export function Rule({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`h-px w-full origin-left bg-line ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    />
  );
}

/* ---------- Count-up number ---------- */
export function Counter({ value, suffix = "", plain = false, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  if (plain) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {inView ? <Ticker value={value} /> : 0}
      {suffix}
    </span>
  );
}

function Ticker({ value }) {
  const mv = useSpring(0, { stiffness: 60, damping: 22, mass: 1 });
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("en-IN"));
  useEffect(() => {
    mv.set(value);
  }, [mv, value]);
  return <motion.span>{rounded}</motion.span>;
}

/* ---------- Parallax wrapper ---------- */
export function Parallax({ children, distance = 70, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* ---------- Image that scales down as it enters ---------- */
export function ZoomMedia({ src, alt, className = "", imgClass = "", intensity = 1.18 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [intensity, 1, intensity]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className={`overflow-hidden bg-shell ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ scale, y }}
        className={`h-full w-full object-cover ${imgClass}`}
        loading="lazy"
      />
    </div>
  );
}

/* ---------- Curtain reveal for media ---------- */
export function CurtainMedia({ src, alt, className = "", ratio = "aspect-[4/5]" }) {
  return (
    <div className={`relative overflow-hidden bg-shell ${ratio} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        initial={{ scale: 1.22 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.5, ease: EASE }}
        loading="lazy"
      />
      <motion.span
        className="absolute inset-0 bg-ink"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.1, ease: EASE }}
        style={{ originY: 0 }}
      />
    </div>
  );
}

export { EASE };
