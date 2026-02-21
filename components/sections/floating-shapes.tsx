"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <motion.div
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 100, 0],
          x: [0, -50, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
          delay: 2,
        }}
        className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -60, 0],
          x: [0, 30, 0],
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-violet-500/10 blur-2xl"
      />

    </div>
  )
}