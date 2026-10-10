"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
} as const;

const fadeInLeft = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-background text-foreground selection:bg-indigo-500/20 dark:selection:bg-indigo-400/25"
    >
      <div className="mx-auto grid min-h-[calc(88svh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:px-10 lg:py-24 xl:gap-16">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="relative z-10 order-2 mx-auto w-full max-w-2xl lg:order-1 lg:mx-0"
        >
          <motion.div variants={fadeInLeft} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-2 text-xs font-semibold tracking-wide text-muted-foreground shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Full-Stack Development <span className="text-muted-foreground/60">/</span> AI Solutions
            </span>
          </motion.div>

          <motion.div variants={fadeInLeft}>
            <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground sm:text-base">
              Hello, I&apos;m
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-5xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.25rem] xl:leading-[1.02]"
            >
              Shobhit
              <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text pb-2 text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-sky-300">
                Kumar.
              </span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 space-y-4">
            <h2 className="max-w-2xl text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
              Full-Stack Developer building practical web experiences and AI-powered applications.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I work across React, Next.js, Node.js, and databases to turn ideas into reliable,
              user-focused software. I enjoy solving problems, learning by building, and exploring
              how AI can make products more useful.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group h-12 w-full rounded-xl bg-indigo-600 px-6 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/15 dark:bg-indigo-500 dark:hover:bg-indigo-400 sm:w-auto"
              >
                Explore my work
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>

            <a href="/Shobhit_Kumar_Resume.pdf" download className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-xl border-border bg-card/70 px-6 font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-accent sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download résumé
              </Button>
            </a>

            <a
              href="https://github.com/ShobhitGupta1512"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:w-auto"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid max-w-lg grid-cols-2 border-t border-border pt-6 sm:mt-12 sm:pt-7"
          >
            <div className="pr-5">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">10+</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                Projects built
              </p>
            </div>
            <div className="border-l border-border pl-5">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Intern
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                Avora Ventures
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <Code2 className="h-4 w-4 text-indigo-500" />
              Full-stack development
            </span>
            <span className="inline-flex items-center gap-2">
              <BrainCircuit className="h-4 w-4 text-violet-500" />
              AI exploration
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: reduceMotion ? 0 : 0.12 }}
          className="relative order-1 mx-auto flex w-full max-w-[430px] items-center justify-center lg:order-2 lg:max-w-none"
        >
          <div className="relative aspect-square w-[min(76vw,330px)] sm:w-[min(68vw,370px)] lg:w-full lg:max-w-[420px]">
            <div className="absolute inset-3 rounded-full border border-indigo-500/15 dark:border-indigo-400/20" />
            <div className="absolute inset-0 rounded-full border border-dashed border-border" />
            <div className="absolute inset-7 rounded-full bg-indigo-500/[0.06] blur-2xl dark:bg-indigo-400/[0.08]" />

            <div className="absolute inset-5 overflow-hidden rounded-full border border-border bg-card p-2 shadow-[0_24px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:inset-6">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-muted">
                <Image
                  src="/shobhit_portfolio_image.jpg"
                  alt="Portrait of Shobhit Kumar"
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 370px, 420px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.035]"
                />
              </div>
            </div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-1 top-[18%] hidden rounded-2xl border border-border bg-card/95 p-3.5 shadow-lg backdrop-blur sm:block lg:-left-8"
            >
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-foreground">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                  <Code2 className="h-4 w-4" />
                </span>
                Core stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Next.js", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-muted px-2 py-1 text-[10px] font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-1 bottom-[17%] hidden max-w-[205px] items-start gap-3 rounded-2xl border border-border bg-card/95 p-3.5 shadow-lg backdrop-blur sm:flex lg:-right-7"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                <CheckCircle2 className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">Learning by building</p>
                <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                  Shipping projects and improving with every iteration.
                </p>
              </div>
            </motion.div>

            <div className="absolute right-[12%] top-[8%] grid h-10 w-10 place-items-center rounded-2xl border border-border bg-card text-indigo-600 shadow-md dark:text-indigo-300">
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto flex max-w-7xl justify-center px-5 pb-5 sm:justify-start sm:px-8 lg:px-10">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Scroll to explore
          <ArrowDownRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
