"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 500, damping: 45, mass: 0.35 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      setHot(Boolean(t.closest?.("a, button, [data-cursor]")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
    >
      <motion.span
        animate={{ scale: hot ? 2.6 : 1, opacity: hot ? 0.25 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky"
      />
    </motion.div>
  );
}
