"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "@/components/Section";
import { ArrowLink } from "@/components/ArrowLink";
import { Reveal, Words } from "@/components/Motion";
import { DIVISIONS } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];

const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.816042630252!2d77.42007795791575!3d23.183624444824403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c433af6de395b%3A0x6dd5492ce91aedd6!2sBroadArks%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1787568361447!5m2!1sen!2sin";

const INTERESTS = [
  "Partnership",
  "Learning & skills",
  "Technology & engineering",
  "Craft & sourcing",
  "Foundation / CSR",
  "Careers",
  "Press",
];

function Field({ label, name, type = "text", value, onChange, error, placeholder, textarea }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <label htmlFor={name} className="eyebrow block text-stone-soft">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="mt-3 w-full resize-none bg-transparent pb-3 font-sans text-lg text-ink outline-none placeholder:text-stone-soft/70"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="mt-3 w-full bg-transparent pb-3 font-sans text-lg text-ink outline-none placeholder:text-stone-soft/70"
        />
      )}
      <span className="block h-px w-full bg-line" />
      <motion.span
        className="block h-px w-full origin-left bg-ink"
        style={{ marginTop: -1 }}
        animate={{ scaleX: focused || value ? 1 : 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-xs text-sky"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [interests, setInterests] = useState([]);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((x) => ({ ...x, [e.target.name]: undefined }));
  };

  const toggle = (item) =>
    setInterests((list) => (list.includes(item) ? list.filter((i) => i !== item) : [...list, item]));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "A valid email helps us reply.";
    if (form.message.trim().length < 10) next.message = "A sentence or two is plenty.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel>Write to us</SectionLabel>
            <h2 className="display-3 mt-5 max-w-[12ch] font-sans">
              <Words text="Tell us what you are building." />
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
              One form, four divisions. Tell us roughly where you fit and the message will find the
              right desk — usually within two working days.
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <a href="mailto:hello@broadarks.com" className="block text-ink transition-colors hover:text-sky">
                hello@broadarks.com
              </a>
              <a href="tel:+911140000000" className="block text-stone transition-colors hover:text-ink">
                +91 11 4000 0000
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="border border-line p-7 sm:p-10 lg:p-14"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg text-white">
                  ✓
                </span>
                <h3 className="mt-8 font-sans text-3xl text-ink">Message received.</h3>
                <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-stone">
                  Thank you, {form.name.split(" ")[0]}. We have your note
                  {interests.length ? ` about ${interests.join(", ").toLowerCase()}` : ""} and will
                  come back to you at {form.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", org: "", message: "" });
                    setInterests([]);
                  }}
                  className="group mt-8 inline-flex items-center text-sm text-ink"
                >
                  Send another message
                  <span className="ml-2 inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">
                    →
                  </span>
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-10"
                noValidate
              >
                <div className="grid gap-10 sm:grid-cols-2">
                  <Field label="Your name" name="name" value={form.name} onChange={update} error={errors.name} placeholder="Full name" />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} placeholder="you@company.com" />
                </div>
                <Field label="Organisation (optional)" name="org" value={form.org} onChange={update} placeholder="Company, institution or collective" />

                <div>
                  <p className="eyebrow text-stone-soft">I am here about</p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {INTERESTS.map((item) => {
                      const active = interests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggle(item)}
                          className={`rounded-full border px-4 py-2 text-xs tracking-tight transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                            active
                              ? "border-ink bg-ink text-white"
                              : "border-line text-stone hover:border-ink/40 hover:text-ink"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Field
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={update}
                  error={errors.message}
                  placeholder="A few lines about what you have in mind."
                  textarea
                />

                <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-ink bg-ink px-8 py-4 text-sm font-medium text-white transition-colors duration-500 hover:text-ink sm:w-auto sm:justify-start"
                  >
                    <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />
                    <span className="relative flex items-center">
                      Send message
                      <span className="ml-3 inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                  </button>
                  <p className="text-xs text-stone-soft">
                    This is a demonstration form — no data leaves your browser.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function DivisionContacts() {
  return (
    <section className="bg-shell py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Straight to a division</SectionLabel>
            <h2 className="display-3 mt-5 max-w-[16ch] font-sans">
              <Words text="Skip the switchboard." />
            </h2>
          </div>
          <ArrowLink href="/divisions">About the divisions</ArrowLink>
        </div>

        <div className="mt-12 grid gap-x-10 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.06}>
              <div className="group flex h-full flex-col justify-between border-b border-line py-8">
                <div>
                  <span className="font-sans text-xs text-sky">{d.index}</span>
                  <h3 className="mt-3 font-sans text-lg text-ink">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{d.summary}</p>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${d.email}`}
                    className="block break-all text-sm text-ink transition-colors hover:text-sky"
                  >
                    {d.email}
                  </a>
                  <ArrowLink href={d.href} external>
                    {d.site}
                  </ArrowLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const items = [
    {
      q: "Is BroadArks a single company or a group?",
      a: "BroadArks is a parent company. Y&Now, Vihanga.ai and Karigreen operate as ventures with their own markets and teams, while BroadArks Foundation is a separate not-for-profit entity.",
    },
    {
      q: "How do partnerships usually start?",
      a: "Almost always with a conversation rather than a proposal. Tell us the problem you are trying to solve and which division it maps to, and we will bring the right people in early.",
    },
    {
      q: "Do you work with academic institutions?",
      a: "Yes — bridging academia and industry is the founding premise of Y&Now. We work with universities, colleges and training institutions on curriculum, delivery and placement pathways.",
    },
    {
      q: "Can we support the Foundation's work?",
      a: "We welcome CSR partners, philanthropic funders and implementation collaborators. The Foundation reports on outcomes rather than reach, and we ask partners to hold us to that.",
    },
    {
      q: "Are you hiring?",
      a: "Continuously, across engineering, learning design, craft and programme delivery. Send us a note about the work you want to do rather than only a CV.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-shell py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="display-3 mt-5 max-w-[12ch] font-sans">
              <Words text="Before you write." />
            </h2>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-px">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-t border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-start justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans text-lg text-ink transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1.5 lg:text-xl">
                      {item.q}
                    </span>
                    <span className="relative mt-2 block h-3 w-3 shrink-0">
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
                      <motion.span
                        animate={{ rotate: isOpen ? 0 : 90 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink"
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-8 text-[0.95rem] leading-relaxed text-stone">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisitUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Find us</SectionLabel>
            <h2 className="display-3 mt-5 max-w-[14ch] font-sans">
              <Words text="Come and see the work." />
            </h2>
          </div>
          <ArrowLink
            href="https://www.google.com/maps/search/?api=1&query=BroadArks+Technology+Pvt.+Ltd."
            external
          >
            Open in Google Maps
          </ArrowLink>
        </div>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-stone-soft">Office</p>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink">
                BroadArks Technology Pvt. Ltd.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                Bhopal, Madhya Pradesh, India
              </p>
              <div className="mt-8 space-y-2 text-sm">
                <a
                  href="mailto:hello@broadarks.com"
                  className="block text-ink transition-colors hover:text-sky"
                >
                  hello@broadarks.com
                </a>
                <a
                  href="tel:+911140000000"
                  className="block text-stone transition-colors hover:text-ink"
                >
                  +91 11 4000 0000
                </a>
              </div>
              <p className="mt-8 max-w-xs text-sm leading-relaxed text-stone">
                Visits are by appointment — write ahead and we will make sure the right people
                are in the room.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <div className="aspect-[16/10] w-full overflow-hidden border border-line bg-shell sm:aspect-[16/9]">
                <iframe
                  src={MAPS_EMBED_SRC}
                  title="BroadArks Technology Pvt. Ltd. on Google Maps"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
