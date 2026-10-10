"use client";



import { motion, useReducedMotion } from "framer-motion";

import {

  ArrowRight,

  ArrowUpRight,

  BrainCircuit,

  CheckCircle2,

  Github,

  Image as ImageIcon,

  ScanFace,

  Sparkles,

  WandSparkles,

} from "lucide-react";

import type { LucideIcon } from "lucide-react";



type LabProject = {

  id: string;

  number: string;

  title: string;

  tagline: string;

  description: string;

  tech: string[];

  highlights: string[];

  github: string;

  demo?: string;

  Icon: LucideIcon;

  accent: string;

  label: string;

  visual: "interior" | "resume" | "classify" | "vision";

};



const projects: LabProject[] = [

  {

    id: "interior-ai",

    number: "01",

    title: "Gen AI Home Interior Designer",

    tagline: "Reimagine a space. Explore what's possible.",

    description:

      "An AI-assisted design experience exploring how room and exterior images can be reimagined through visual design concepts.",

    tech: ["React", "FastAPI", "Python", "Hugging Face Spaces"],

    highlights: [

      "Image-based design workflow",

      "Room and exterior design concepts",

      "Interactive design experience",

    ],

    github: "https://github.com/ShobhitGupta1512/Gen-AI-Home-Interior-Designer",

    Icon: WandSparkles,

    accent: "from-violet-500/30 via-fuchsia-500/10 to-slate-950",

    label: "GENERATIVE AI",

    visual: "interior",

  },

  {

    id: "ai-resume-analyzer",

    number: "02",

    title: "AI Resume Analyzer",

    tagline: "Make your next application more intentional.",

    description:

      "An application designed to help job seekers review resumes against job descriptions and identify areas for improvement with AI-assisted feedback.",

    tech: ["React", "Node.js", "Express.js", "MongoDB", "LLaMA AI"],

    highlights: [

      "Resume analysis workflow",

      "Job-description comparison",

      "AI-assisted improvement feedback",

    ],

    github: "https://github.com/ShobhitGupta1512/ai-resume-analyser",

    Icon: BrainCircuit,

    accent: "from-cyan-500/25 via-blue-500/10 to-slate-950",

    label: "AI APPLICATION",

    visual: "resume",

  },

  {

    id: "classifyx",

    number: "03",

    title: "ClassifyX",

    tagline: "Turn image inputs into understandable predictions.",

    description:

      "An image classification project exploring machine learning, image processing, and an interactive interface for visual predictions.",

    tech: ["Python", "Streamlit", "PyTorch", "OpenCV", "Transformers"],

    highlights: [

      "Image upload and classification",

      "Image-processing workflow",

      "Speech feedback",

    ],

    github: "https://github.com/ShobhitGupta1512/ClassifyX",

    Icon: ImageIcon,

    accent: "from-emerald-500/25 via-teal-500/10 to-slate-950",

    label: "MACHINE LEARNING",

    visual: "classify",

  },

  {

    id: "howold-ai",

    number: "04",

    title: "HowOld.AI",

    tagline: "Explore computer vision, one image at a time.",

    description:

      "A computer vision application that uses facial images to estimate age and predict gender, bringing image analysis into an interactive demo.",

    tech: ["Python", "Streamlit", "TensorFlow", "Keras", "OpenCV"],

    highlights: [

      "Image-based input",

      "Face detection workflow",

      "Age and gender prediction",

    ],

    github: "https://github.com/ShobhitGupta1512/HowOld.AI",

    demo: "https://howold.streamlit.app/",

    Icon: ScanFace,

    accent: "from-amber-500/25 via-orange-500/10 to-slate-950",

    label: "COMPUTER VISION",

    visual: "vision",

  },

];



const container = {

  hidden: { opacity: 0 },

  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },

};



const item = {

  hidden: { opacity: 0, y: 16 },

  visible: {

    opacity: 1,

    y: 0,

    transition: { duration: 0.42, ease: "easeOut" as const },

  },

};



function LabVisual({ project }: { project: LabProject }) {

  const Icon = project.Icon;



  return (

    <div

      className={`relative isolate min-h-[210px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-5 sm:min-h-[225px]`}

      aria-label={`${project.title} visual preview`}

    >

      <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-white/[0.08] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-16 left-1/4 h-40 w-40 rounded-full bg-violet-400/[0.10] blur-3xl" />



      <div className="relative flex items-center justify-between">

        <div className="flex items-center gap-2.5">

          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.08] text-white">

            <Icon className="h-5 w-5" />

          </span>

          <span className="text-xs font-semibold tracking-wide text-white/85">

            {project.title}

          </span>

        </div>

        <span className="font-mono text-xs text-white/45">{project.number} / 04</span>

      </div>



      {project.visual === "interior" ? (

        <div className="relative mt-6 grid grid-cols-2 gap-3">

          <div className="rounded-xl border border-white/10 bg-white/[0.07] p-3">

            <div className="mb-3 flex items-center gap-2 text-[10px] text-white/65">

              <ImageIcon className="h-3.5 w-3.5" /> Original space

            </div>

            <div className="h-16 rounded-lg border border-white/10 bg-gradient-to-br from-stone-300/40 via-amber-100/20 to-stone-500/20" />

          </div>

          <div className="rounded-xl border border-violet-200/20 bg-violet-300/[0.10] p-3">

            <div className="mb-3 flex items-center gap-2 text-[10px] text-white/75">

              <Sparkles className="h-3.5 w-3.5" /> Design concept

            </div>

            <div className="h-16 rounded-lg border border-white/10 bg-gradient-to-br from-amber-100/40 via-orange-200/20 to-violet-300/30" />

          </div>

        </div>

      ) : project.visual === "resume" ? (

        <div className="relative mt-6 grid grid-cols-[1fr_auto] gap-3">

          <div className="rounded-xl border border-white/10 bg-white/[0.08] p-3">

            <div className="mb-3 h-2 w-2/5 rounded-full bg-white/55" />

            <div className="mb-2 h-1.5 w-full rounded-full bg-white/20" />

            <div className="mb-2 h-1.5 w-4/5 rounded-full bg-white/15" />

            <div className="mb-2 h-1.5 w-3/5 rounded-full bg-white/15" />

            <div className="mt-4 h-7 rounded-lg bg-cyan-300/15" />

          </div>

          <div className="flex w-24 flex-col items-center justify-center rounded-xl border border-emerald-200/20 bg-emerald-300/[0.08] p-3">

            <div className="grid h-12 w-12 place-items-center rounded-full border-4 border-emerald-300/70 text-sm font-semibold text-white">85%</div>

            <span className="mt-2 text-[10px] text-white/65">Match score UI</span>

          </div>

        </div>

      ) : project.visual === "classify" ? (

        <div className="relative mt-6 grid grid-cols-[0.9fr_1.1fr] gap-3">

          <div className="grid place-items-center rounded-xl border border-white/10 bg-white/[0.07] p-3">

            <div className="grid h-16 w-full place-items-center rounded-lg border border-dashed border-white/25 bg-white/[0.04]">

              <ImageIcon className="h-6 w-6 text-white/60" />

            </div>

            <span className="mt-2 text-[10px] text-white/65">Image input</span>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.08] p-3">

            <div className="text-[10px] text-white/60">Prediction preview</div>

            <div className="mt-3 h-2 w-4/5 rounded-full bg-emerald-300/70" />

            <div className="mt-2 h-2 w-3/5 rounded-full bg-cyan-300/50" />

            <div className="mt-4 flex items-center gap-2 text-[10px] text-white/75">

              <span className="h-2 w-2 rounded-full bg-emerald-300" /> Classification result

            </div>

          </div>

        </div>

      ) : (

        <div className="relative mt-6 grid grid-cols-[1fr_auto] gap-3">

          <div className="rounded-xl border border-white/10 bg-white/[0.08] p-3">

            <div className="mb-3 text-[10px] text-white/65">Image analysis</div>

            <div className="flex h-16 items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/[0.04]">

              <ScanFace className="h-8 w-8 text-white/65" />

            </div>

          </div>

          <div className="flex w-28 flex-col justify-center rounded-xl border border-white/10 bg-white/[0.07] p-3">

            <span className="text-[10px] text-white/55">Prediction</span>

            <span className="mt-2 text-sm font-semibold text-white">Results</span>

            <span className="mt-1 text-[10px] text-amber-200/80">Computer vision</span>

          </div>

        </div>

      )}

      <div className="relative mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45">

        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

        Concept preview · not a live screenshot

      </div>

    </div>

  );

}



export default function AILabPage() {

  const reduceMotion = useReducedMotion();



  return (

    <main className="relative isolate min-h-screen overflow-hidden bg-slate-50 text-slate-900 selection:bg-violet-500/20 dark:bg-[#080a10] dark:text-white dark:selection:bg-violet-400/30">

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Same background treatment as the Projects page: dark base, violet glow, cyan glow, and fine grid. */}

        <div className="absolute left-1/2 top-[-22rem] h-[38rem] w-[55rem] -translate-x-1/2 rounded-full bg-violet-300/30 blur-[130px] dark:bg-violet-600/[0.13]" />

        <div className="absolute right-[-15rem] top-[38rem] h-[30rem] w-[30rem] rounded-full bg-cyan-200/25 blur-[110px] dark:bg-cyan-500/[0.06]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      </div>



      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32">

        <motion.header

          initial={reduceMotion ? false : "hidden"}

          animate="visible"

          variants={container}

          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"

        >

          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-medium tracking-wide text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65">

            <Sparkles className="h-4 w-4" />

            AI LAB / EXPERIMENTS & BUILDS

          </motion.div>



          <motion.h1 variants={item} className="text-balance text-4xl font-semibold tracking-[-0.055em] text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">

            Exploring intelligence.

            <span className="mt-2 block bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 dark:from-violet-300 dark:via-fuchsia-300 dark:to-cyan-200 bg-clip-text text-transparent">

              Building through practice.

            </span>

          </motion.h1>



          <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-600 dark:text-white/55 sm:text-lg sm:leading-8">

            A focused collection of my work in generative AI, machine learning, and computer vision. Each project represents a practical experiment, a problem explored, and another step in my learning.

          </motion.p>



          <motion.div variants={item} className="mt-6 flex flex-wrap justify-center gap-2">

            {["Generative AI", "Machine Learning", "Computer Vision"].map((topic) => (

              <span key={topic} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60">

                {topic}

              </span>

            ))}

          </motion.div>

        </motion.header>



        <section aria-labelledby="lab-projects-heading">

          <div className="mb-7 flex flex-col justify-between gap-3 sm:mb-9 sm:flex-row sm:items-end">

            <div>

              <h2 id="lab-projects-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">

                Built, tested, and explored

              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-white/60">

                Practical AI projects, presented with the same visual language as my portfolio.

              </p>

            </div>

            <a

              href="https://github.com/ShobhitGupta1512?tab=repositories"

              target="_blank"

              rel="noopener noreferrer"

              className="inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors text-violet-700 hover:text-violet-900 dark:text-white/75 dark:hover:text-violet-700 dark:text-violet-200"

            >

              All repositories <ArrowUpRight className="h-4 w-4" />

            </a>

          </div>



          <motion.div

            initial={reduceMotion ? false : "hidden"}

            whileInView="visible"

            viewport={{ once: true, amount: 0.05 }}

            variants={container}

            className="grid items-stretch gap-5 sm:grid-cols-2"

          >

            {projects.map((project) => {

              const Icon = project.Icon;

              return (

                <motion.article

                  key={project.id}

                  variants={item}

                  whileHover={reduceMotion ? undefined : { y: -4 }}

                  className="group flex h-full flex-col rounded-[26px] border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] dark:border-white/[0.09] dark:bg-white/[0.025] dark:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:border-white/20 dark:hover:bg-white/[0.045] sm:p-4"

                >

                  <LabVisual project={project} />

                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-3">

                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-violet-700 dark:text-violet-200">

                      <Icon className="h-3.5 w-3.5" /> {project.label}

                    </div>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">{project.title}</h3>

                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-white/80">{project.tagline}</p>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/60">{project.description}</p>



                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/[0.09] dark:bg-white/[0.025]">

                      <p className="mb-3 text-xs font-medium text-slate-800 dark:text-white/80">What it explores</p>

                      <ul className="space-y-2">

                        {project.highlights.map((highlight) => (

                          <li key={highlight} className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 dark:text-white/60">

                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-700 dark:text-violet-200" />

                            {highlight}

                          </li>

                        ))}

                      </ul>

                    </div>



                    <div className="mt-5">

                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-white/60">Technology stack</p>

                      <div className="flex flex-wrap gap-2">

                        {project.tech.map((technology) => (

                          <span key={technology} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700 dark:border-white/[0.09] dark:bg-white/[0.035] dark:text-white/65">

                            {technology}

                          </span>

                        ))}

                      </div>

                    </div>



                    <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-200 pt-5 dark:border-white/10">

                      <a

                        href={project.github}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-300 px-4 text-xs font-semibold text-slate-700 transition hover:border-violet-400 hover:bg-violet-50 dark:border-white/15 dark:text-white/85 dark:hover:border-white/30 dark:hover:bg-white/[0.07]"

                      >

                        <Github className="h-4 w-4" /> Source code <ArrowUpRight className="h-3.5 w-3.5" />

                      </a>

                      {project.demo && (

                        <a

                          href={project.demo}

                          target="_blank"

                          rel="noopener noreferrer"

                          className="inline-flex min-h-10 items-center gap-2 rounded-full bg-violet-600 px-4 text-xs font-semibold text-white transition hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-white/85"

                        >

                          Live demo <ArrowRight className="h-4 w-4" />

                        </a>

                      )}

                    </div>

                  </div>

                </motion.article>

              );

            })}

          </motion.div>

        </section>



        <section className="mt-16 sm:mt-20">

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-100 px-6 py-8 shadow-sm dark:border-white/10 dark:from-white/[0.07] dark:to-white/[0.02] sm:px-9 sm:py-10">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-200">The next experiment</p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">

                Curious by design. Better with every build.

              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/60 sm:text-base sm:leading-8">

                I’m an early-career developer exploring how AI can solve practical problems. I’m looking forward to learning from experienced teams, contributing thoughtfully, and turning experiments into useful software.

              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">

                <a href="/projects" className="inline-flex h-10 items-center gap-2 rounded-full bg-violet-600 px-5 text-sm font-semibold text-white transition hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-white/85">

                  Explore all projects <ArrowRight className="h-4 w-4" />

                </a>

                <a href="/contact" className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-white/75 dark:hover:bg-white/[0.06]">

                  Get in touch <ArrowUpRight className="h-4 w-4" />

                </a>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>

  );

}
