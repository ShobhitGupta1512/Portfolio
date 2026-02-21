"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

/* ========================= */
/* Animation Variants */
/* ========================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
    },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-24 pb-24 lg:pb-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <motion.div variants={slideLeft} className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Shobhit Kumar
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-foreground/90">
              Full-Stack Developer & AI Engineering Enthusiast
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              I design and build modern, high-performance digital experiences
              powered by scalable backend systems and intelligent AI solutions.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <a href="/resume.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="group bg-transparent hover:bg-accent/10 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-8 pt-6 text-sm text-foreground/60"
          >
            <Stat value="10+" label="Projects" />
            <Divider />
            <Stat value="3+" label="Years" />
          

          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          variants={fadeUp}
          className="relative hidden lg:flex items-center justify-end pr-6"
        >
          <motion.div
            whileHover={{ rotateY: 8, rotateX: 4 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative w-full max-w-[550px] aspect-square"
            style={{ perspective: 1000 }}
          >
            {/* Glow Background */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-2xl "
            />

            {/* Rotating Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40"
            />

            {/* Image */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_80px_rgba(188,226,255,0.5)]">
              <Image
                src="/shobhit_portfolio_image.jpg"
                alt="Shobhit Kumar Professional Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
                priority
              />
            </div>

            {/* Floating Shapes */}
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 left-2 w-20 h-20 rounded-xl bg-primary/30 backdrop-blur-md border border-primary/50"
            />

            <motion.div
              animate={{ y: [20, -20, 20] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-3 right-3 w-24 h-24 rounded-full bg-accent/20 backdrop-blur-md border border-accent/50"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ========================= */
/* Small Components */
/* ========================= */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-foreground text-lg">{value}</span>
      <span>{label}</span>
    </div>
  )
}

function Divider() {
  return <div className="w-px h-12 bg-border" />
}
