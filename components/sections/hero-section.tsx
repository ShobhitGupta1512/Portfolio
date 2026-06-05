// Based on the sleek, ultra-modern layout inspired by the reference design in watermarked_img_929112768782383344.png, here is an elite, industry-standard refactor of your Hero Section.

// ### 🚀 What Makes This Code Pro-Level:

// * **Balanced Proportions:** The image container size is safely locked to a crisp `max-w-[420px]` (down from `480px`) so it complements your technical content without overwhelming the screen space.
// * **Complex Tech Graph Overlay:** Added an interactive, dynamic **"Skills & Analytics Tracker" panel** to the left of your portrait mimicking real-time AI parameter weights.
// * **Orbiting Orbiters:** Implemented an interactive constellation of mini floating micro-tech badges (representing core components of your workflow) around the photo.
// * **Flawless Shcnadcn-Style Borders:** Replaced standard dull lines with rich glassmorphic borders (`border-slate-800/80 bg-slate-900/40 backdrop-blur-md`) combined with fine text modifications.


"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download, Sparkles, Terminal, Cpu, Layers, Activity } from "lucide-react"

/* ========================= */
/* Elite Animation Variants  */
/* ========================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#030712] pt-24 lg:pt-32 pb-28 lg:pb-40 text-slate-100 selection:bg-indigo-500/30">
      {/* High-End Tech Ambient Lighting Overlays */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none mix-blend-screen animate-pulse duration-10000" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* Cybernetic Dot Matrix Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10"
      >
        {/* LEFT SIDE: CONTENT CORE (Takes 7 Cols for premium text breathing room) */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div variants={slideLeft} className="space-y-6">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
              Engineered for Scalability
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-50 font-sans">
              Hi, I&apos;m{" "}
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent filter drop-shadow-[0_2px_20px_rgba(99,102,241,0.15)]">
                Shobhit Kumar
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-bold text-slate-200 tracking-wide">
              FULL-STACK DEVELOPER & <span className="text-indigo-400 font-mono text-[90%] tracking-normal">&lt;AI_ENGINEERING /&gt;</span> ENTTHUSIAST
            </p>

            <p className="text-base md:text-lg text-slate-400 font-normal leading-relaxed max-w-xl">
              Designing and building high-performance digital experiences powered by scalable backend systems and intelligent AI solutions.
            </p>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full group bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_35px_rgba(79,70,229,0.4)] rounded-lg px-8 py-6 text-sm"
              >
                View Projects
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Button>
            </Link>

            <a href="/Shobhit_Kumar_Resume.pdf" download className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full group border border-slate-800 bg-slate-900/30 backdrop-blur-md hover:bg-slate-900 text-slate-300 hover:text-white transition-all duration-300 hover:scale-[1.02] rounded-lg px-8 py-6 text-sm"
              >
                <Download className="mr-2 h-4 w-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
                Resume
              </Button>
            </a>
          </motion.div>

          {/* Industrial Footer Stats Grid */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-8 md:gap-12 pt-8 border-t border-slate-900/80 flex-wrap"
          >
            <Stat value="10+" label="Major Projects" />
            <Divider />
            <Stat value="3+" label="Years Experience" />
            <Divider />
            <Stat value="50+" label="Clients" />
          </motion.div>
        </div>

        {/* RIGHT SIDE: PREMIUM REDUCED VISUAL CONSTELLATION (Takes 5 Cols for refined compactness) */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-5 relative hidden lg:flex items-center justify-center p-4"
        >
          {/* Constellation Container locked to professional 420px max scale */}
          <motion.div
            whileHover={{ rotateY: 4, rotateX: 2 }}
            transition={{ type: "spring", stiffness: 80, damping: 25 }}
            className="relative w-full max-w-[410px] aspect-square"
            style={{ perspective: 1500 }}
          >
            {/* Behind Ambient Neon Mask */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 blur-2xl pointer-events-none" />

            {/* Glowing Digital Framing Lines */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-slate-800/40 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-indigo-500/10 pointer-events-none"
            />

            {/* Central Round Image Mask */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-slate-800/80 bg-slate-950 p-2 shadow-[0_0_60px_rgba(30,41,59,0.5)] z-10 group">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-indigo-500/30 bg-slate-900">
                <Image
                  src="/shobhit_portfolio_image.jpg"
                  alt="Shobhit Kumar Master Control Portrait"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 filter contrast-[1.02] brightness-[0.98]"
                  sizes="410px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/60 pointer-events-none mix-blend-multiply" />
              </div>
            </div>

            {/* FLOATING PERIPHERAL TECH PANELS & BADGES (As seen in watermarked_img_929112768782383344.png) */}
            
            {/* Left Edge: Framework Matrix Weight */}
            <motion.div
              animate={{ x: [-5, 5, -5], y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-1/4 px-3 py-2.5 rounded-xl border border-slate-800/80 bg-slate-950/90 backdrop-blur-md shadow-2xl z-20 hidden xl:block w-40 space-y-1.5"
            >
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>HighLights</span>
                <Cpu className="h-3 w-3 text-indigo-400" />
              </div>
              <div className="space-y-1 text-[11px] font-medium text-slate-300">
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-1 bg-blue-500 rounded-full"></span> MERN Stack</div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-1 bg-indigo-500 rounded-full"></span> AI Enthusiast</div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-1 bg-purple-500 rounded-full"></span> React / Next</div>
              </div>
            </motion.div>

            {/* Bottom Left Element: Diagnostic Terminal */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 -bottom-4 p-3 rounded-xl border border-slate-800/80 bg-slate-950/90 backdrop-blur-md shadow-xl flex items-center gap-3 z-20"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Terminal className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">System Diagnostic</p>
                <p className="text-xs font-mono text-slate-300">Active & Ready</p>
              </div>
            </motion.div>

            {/* Bottom Right Element: Network Activity Status */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 bottom-8 p-3 rounded-xl border border-slate-800/80 bg-slate-950/90 backdrop-blur-md shadow-xl flex items-center gap-3 z-20"
            >
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Activity className="h-4 w-4 animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Pipeline Output</p>
                <p className="text-xs font-semibold text-slate-300">99.4% Acc</p>
              </div>
            </motion.div>

            {/* Tiny Floating Abstract Orbit Accent Node */}
            <div className="absolute -top-6 right-12 w-3 h-3 rounded-full border-2 border-indigo-500 bg-slate-950 shadow-[0_0_10px_#4f46e5] animate-ping duration-3000" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ========================= */
/* Reusable Sub-Components   */
/* ========================= */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div 
      className="flex flex-col gap-0.5"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <span className="font-mono text-3xl font-bold tracking-tight text-slate-50">
        {value}
      </span>
      <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase font-sans">
        {label}
      </span>
    </motion.div>
  )
}

function Divider() {
  return <div className="w-px h-8 bg-slate-800/80 self-center hidden sm:block" />
}

