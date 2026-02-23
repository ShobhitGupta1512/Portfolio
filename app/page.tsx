"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/sections/hero-section"
import { TechStackMarquee } from "@/components/sections/tech-stack-marquee"
import { FloatingShapes } from "@/components/sections/floating-shapes"
import { AIChatSection } from "@/components/sections/ai-chat-section"

export default function Home() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center">
        <FloatingShapes />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-secondary/30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Tech Stack I Work With
            </h2>
          </motion.div>

          <TechStackMarquee />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to collaborate?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto"
          >
            Whether you need a website redesign, AI integration, or a full-stack
            application, I&apos;m here to turn your ideas into reality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
              </Button>
            </Link>

            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Let&apos;s Talk
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* AI Chat Section */}
      <AIChatSection />

    </div>
  )
}