"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { aiProjects } from "@/data/portfolio"
import { ArrowRight, Github, Zap } from "lucide-react"

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

export default function AILabPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [-100, 100, -100],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [100, -100, 100],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4 mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-accent" />
            <span className="text-accent font-semibold">AI EXPERIMENTATION LAB</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold">
            Experimental AI{" "}
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Innovations
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Exploring the cutting edge of artificial intelligence, machine learning, and generative AI technologies
          </motion.p>
        </motion.div>

        {/* AI Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {aiProjects.map((project, idx) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="p-6 glassmorphic border-accent/30 hover:border-accent/60 group cursor-pointer h-full flex flex-col justify-between transition-all">
                {/* Neon corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/30 group-hover:border-accent/60 transition-colors rounded-bl-3xl -z-10" />

                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                    </div>
                    <Zap className="h-6 w-6 text-accent/60 group-hover:text-accent transition-colors mt-1" />
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-6 mt-4 border-t border-accent/20">
                  <Link href={project.github} target="_blank" className="flex-1 pt-4">
                    <Button variant="outline" className="w-full group/btn bg-transparent">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6 py-12"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-3xl font-bold">Interested in AI collaboration?</h2>
            <p className="text-foreground/70">Let&apos;s explore how AI can transform your next project</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <Button size="lg" className="group">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
