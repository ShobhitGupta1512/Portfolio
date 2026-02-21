"use client"

import { motion } from "framer-motion"
import { techStackMarquee } from "@/data/portfolio"

export function TechStackMarquee() {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        ease: "linear",
      },
    },
  }

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div variants={marqueeVariants} animate="animate" className="flex gap-8 whitespace-nowrap">
        {[...techStackMarquee, ...techStackMarquee].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-3 rounded-full glassmorphic hover:bg-primary/10 transition-colors cursor-pointer"
          >
            <span className={`text-2xl font-bold ${item.color}`}>●</span>
            <span className="text-lg font-semibold text-foreground whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
