"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Lightweight ambient decoration for a section with `relative isolate`.
 * Use this as an optional layer, not as a replacement for the shared page
 * background. The Projects-style grid and main glows should remain on the page.
 */
export function FloatingShapes() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div
        initial={false}
        animate={
          reduceMotion
            ? { opacity: 0.18 }
            : {
                y: [0, -28, 0],
                x: [0, 14, 0],
                opacity: [0.14, 0.24, 0.14],
                scale: [1, 1.035, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[6%] top-[18%] h-36 w-36 rounded-full bg-violet-500/10 blur-3xl sm:h-52 sm:w-52"
      />

      <motion.div
        initial={false}
        animate={
          reduceMotion
            ? { opacity: 0.12 }
            : {
                y: [0, 24, 0],
                x: [0, -14, 0],
                opacity: [0.09, 0.18, 0.09],
                scale: [1, 1.04, 1],
              }
        }
        transition={{
          duration: 26,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-[12%] right-[6%] h-40 w-40 rounded-full bg-cyan-500/[0.07] blur-3xl sm:h-56 sm:w-56"
      />
    </div>
  );
}
