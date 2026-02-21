"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/portfolio"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const skillCategories = Object.entries(skills).map(([key, value]) => ({
  category: key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()),
  items: value,
}))

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4 mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold">
            Skills & Expertise
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of technologies and tools I&apos;ve mastered throughout my development journey
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skillCategories.map((section, sectionIdx) => (
            <motion.div key={sectionIdx} variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">{section.category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {section.items.map((skill, skillIdx) => (
                  <motion.div key={skillIdx} whileHover={{ scale: 1.05, y: -5 }} className="group">
                    <div className="p-4 rounded-lg glassmorphic border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all cursor-pointer text-center">
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Chart */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 space-y-8"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold">
            Proficiency Levels
          </motion.h2>
          {[
            { name: "Full-Stack Development", level: 95 },
            { name: "AI/ML Integration", level: 85 },
            { name: "UI/UX Design", level: 80 },
            { name: "DevOps & Cloud", level: 75 },
          ].map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">{item.name}</span>
                <span className="text-sm text-foreground/70">{item.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
