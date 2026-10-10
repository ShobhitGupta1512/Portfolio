"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  TerminalSquare,
  UsersRound,
  Workflow,
} from "lucide-react";

type Project = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  liveDemo?: string;
  kind:
    | "portfolio"
    | "pipeline"
    | "resume"
    | "classroom"
    | "commerce"
    | "interior"
    | "atlas"
    | "travel"
    | "vision"
    | "classify";
  accent: string;
  label: string;
};

const projects: Project[] = [
  {
    id: "portfolio",
    number: "01",
    title: "Developer Portfolio",
    tagline: "Thoughtful code. Useful experiences.",
    description:
      "A personal space for my work, technical skills, and journey as a developer.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ShobhitGupta1512/Portfolio",
    liveDemo: "https://shobhitdev.online",
    kind: "portfolio",
    accent: "from-violet-500/30 via-fuchsia-500/10 to-slate-950",
    label: "PERSONAL WEBSITE",
  },
  {
    id: "pipeline-dag-analyzer",
    number: "02",
    title: "Pipeline DAG Analyzer",
    tagline: "Make complex workflows easier to see.",
    description:
      "A workflow analysis tool for visualizing and examining directed acyclic graphs.",
    tech: ["React", "FastAPI", "Python"],
    github: "https://github.com/ShobhitGupta1512/pipeline-dag-analyzer",
    liveDemo: "https://pipeline-dag-analyzer.vercel.app/",
    kind: "pipeline",
    accent: "from-cyan-500/25 via-blue-500/10 to-slate-950",
    label: "WORKFLOW VISUALIZATION",
  },
  {
    id: "ai-resume-analyzer",
    number: "03",
    title: "AI Resume Analyzer",
    tagline: "Turn a resume into actionable feedback.",
    description:
      "A resume analysis application designed to help users review their profile and identify areas to improve.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/ShobhitGupta1512/ai-resume-analyser",
    kind: "resume",
    accent: "from-indigo-500/25 via-violet-500/10 to-slate-950",
    label: "AI-ASSISTED TOOL",
  },
  {
    id: "classroom-dashboard",
    number: "04",
    title: "Student Dashboard",
    tagline: "Student essentials, in one place.",
    description:
      "A dashboard interface for organizing student information, courses, and academic activity.",
    tech: ["React", "TypeScript", "Refine", "shadcn/ui"],
    github: "https://github.com/ShobhitGupta1512/classroom-frontend",
    kind: "classroom",
    accent: "from-sky-500/25 via-cyan-500/10 to-slate-950",
    label: "DASHBOARD UI",
  },
  {
    id: "zetpro",
    number: "05",
    title: "ZETPRO",
    tagline: "A cleaner way to explore electronics.",
    description:
      "A responsive electronics shopping experience with product categories and a modern interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ShobhitGupta1512/Zetpro",
    kind: "commerce",
    accent: "from-blue-500/25 via-violet-500/10 to-slate-950",
    label: "E-COMMERCE EXPERIENCE",
  },
  {
    id: "interior-ai",
    number: "06",
    title: "Gen AI Home Interior Designer",
    tagline: "Imagine a room in a different way.",
    description:
      "An AI-assisted interior design experience exploring room-image uploads and visual redesign ideas.",
    tech: ["React", "FastAPI", "Python", "Hugging Face Spaces"],
    github: "https://github.com/ShobhitGupta1512/Gen-AI-Home-Interior-Designer",
    kind: "interior",
    accent: "from-amber-500/25 via-orange-500/10 to-slate-950",
    label: "GENERATIVE AI",
  },
  {
    id: "openatlas",
    number: "07",
    title: "OpenAtlas",
    tagline: "Explore the world, one place at a time.",
    description:
      "An interactive atlas concept for exploring countries and geographic information through a responsive interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ShobhitGupta1512/OpenAtlas",
    kind: "atlas",
    accent: "from-emerald-500/25 via-teal-500/10 to-slate-950",
    label: "INTERACTIVE ATLAS",
  },
  {
    id: "travel-website",
    number: "08",
    title: "Travel Website",
    tagline: "Bring the next destination closer.",
    description:
      "A travel-focused website concept built around destination discovery and visual presentation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ShobhitGupta1512/Travel_website",
    kind: "travel",
    accent: "from-cyan-500/25 via-blue-500/10 to-slate-950",
    label: "TRAVEL & DISCOVERY",
  },
  {
    id: "howold-ai",
    number: "09",
    title: "HowOld.AI",
    tagline: "Explore computer vision through images.",
    description:
      "A computer vision application that estimates age and predicts gender from facial images.",
    tech: ["Python", "Streamlit", "TensorFlow", "OpenCV"],
    github: "https://github.com/ShobhitGupta1512/HowOld.AI",
    liveDemo: "https://howold.streamlit.app/",
    kind: "vision",
    accent: "from-pink-500/25 via-violet-500/10 to-slate-950",
    label: "COMPUTER VISION",
  },
  {
    id: "classifyx",
    number: "10",
    title: "ClassifyX",
    tagline: "Make image classification interactive.",
    description:
      "An image classification project exploring image uploads, image-processing workflows, predictions, and speech feedback.",
    tech: ["Python", "Streamlit", "PyTorch", "OpenCV", "Transformers"],
    github: "https://github.com/ShobhitGupta1512/ClassifyX",
    kind: "classify",
    accent: "from-fuchsia-500/25 via-purple-500/10 to-slate-950",
    label: "MACHINE LEARNING",
  },
];

function ProjectVisual({ project }: { project: Project }) {
  const iconClass = "h-5 w-5";
  const iconMap = {
    portfolio: <Code2 className={iconClass} />,
    pipeline: <Workflow className={iconClass} />,
    resume: <BriefcaseBusiness className={iconClass} />,
    classroom: <UsersRound className={iconClass} />,
    commerce: <ShoppingBag className={iconClass} />,
    interior: <Sparkles className={iconClass} />,
    atlas: <Globe2 className={iconClass} />,
    travel: <ArrowUpRight className={iconClass} />,
    vision: <MonitorSmartphone className={iconClass} />,
    classify: <BrainCircuit className={iconClass} />,
  };

  return (
    <div
      className={`relative isolate h-[210px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-5 sm:h-[225px]`}
    >
      <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/[0.07] blur-3xl" />
      <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-violet-400/[0.08] blur-3xl" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.08] text-white">
            {iconMap[project.kind]}
          </span>
          <span className="text-xs font-semibold tracking-wide text-white/80">
            {project.title}
          </span>
        </div>
        <span className="font-mono text-xs text-white/40">/{project.number}</span>
      </div>

      {project.kind === "pipeline" ? (
        <div className="relative mt-7 flex items-center justify-center gap-2 text-[10px] font-medium text-white/85">
          <span className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-2">Start</span>
          <ArrowRight className="h-3 w-3 text-white/50" />
          <span className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2">Process</span>
          <ArrowRight className="h-3 w-3 text-white/50" />
          <span className="rounded-lg border border-violet-300/30 bg-violet-300/10 px-3 py-2">Validate</span>
          <div className="absolute -bottom-8 left-[18%] h-5 w-px bg-white/20" />
          <div className="absolute -bottom-8 left-1/2 h-5 w-px bg-white/20" />
          <div className="absolute -bottom-8 right-[18%] h-5 w-px bg-white/20" />
        </div>
      ) : project.kind === "resume" || project.kind === "classroom" ? (
        <div className="relative mt-6 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/[0.07] p-3">
              <div className="mb-3 h-2 w-2/3 rounded-full bg-white/30" />
              <div className="mb-2 h-7 rounded-md bg-white/[0.08]" />
              <div className="h-1.5 w-full rounded-full bg-white/10" />
              <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      ) : project.kind === "commerce" || project.kind === "interior" || project.kind === "travel" ? (
        <div className="relative mt-6 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className={`flex h-[76px] items-end rounded-xl border border-white/10 p-2 ${item === 1 ? "bg-white/[0.14]" : "bg-white/[0.06]"}`}
            >
              <div className="w-full">
                <div className="mb-1 h-5 w-5 rounded-lg bg-white/15" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/35" />
                <div className="mt-1 h-1 w-1/2 rounded-full bg-white/15" />
              </div>
            </div>
          ))}
        </div>
      ) : project.kind === "atlas" ? (
        <div className="relative mt-4 flex items-center justify-center">
          <Globe2 className="h-28 w-28 stroke-[0.8] text-emerald-200/75" />
          <div className="absolute h-20 w-32 rotate-[-18deg] rounded-[50%] border border-emerald-200/30" />
          <div className="absolute h-24 w-16 rounded-[50%] border border-emerald-200/25" />
        </div>
      ) : project.kind === "classify" || project.kind === "vision" ? (
        <div className="relative mt-6 flex items-center gap-4">
          <div className="grid h-20 w-20 place-items-center rounded-2xl border border-white/15 bg-white/[0.08]">
            <BrainCircuit className="h-9 w-9 text-white/75" />
          </div>
          <div className="flex-1 space-y-2 rounded-xl border border-white/10 bg-black/10 p-3">
            <div className="h-2 w-1/2 rounded-full bg-white/45" />
            <div className="h-1.5 w-full rounded-full bg-white/15" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/15" />
            <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-200">
              <AudioLines className="h-3 w-3" /> Visual prediction
            </div>
          </div>
        </div>
      ) : (
        <div className="relative mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-300/70" />
            <span className="h-2 w-2 rounded-full bg-amber-200/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-200/70" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-white/35" />
            <div className="h-2 w-1/2 rounded-full bg-white/15" />
            <div className="mt-4 flex gap-2">
              <div className="h-8 w-20 rounded-lg bg-white/15" />
              <div className="h-8 w-16 rounded-lg border border-white/15" />
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-white/55">
        Project preview
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay: reduceMotion ? 0 : (index % 3) * 0.07 }}
      className="group flex h-full flex-col rounded-[26px] border border-slate-200/80 bg-white/85 p-3.5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] dark:border-white/[0.09] dark:bg-white/[0.025] dark:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:border-white/20 dark:hover:bg-white/[0.045] sm:p-4"
    >
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/45">
            {project.label}
          </span>
          <span className="font-mono text-xs text-slate-400 dark:text-white/30">
            {project.number}
          </span>
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-[22px]">
          {project.title}
        </h2>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-700 dark:text-white/75">
          {project.tagline}
        </p>
        <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-white/50">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700 dark:border-white/[0.09] dark:bg-white/[0.035] dark:text-white/65"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-300 px-4 text-xs font-semibold text-slate-700 transition hover:border-violet-400 hover:bg-violet-50 dark:border-white/15 dark:text-white/85 dark:hover:border-white/30 dark:hover:bg-white/[0.07]"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github className="h-4 w-4" /> Source code
            <ExternalLink className="h-3 w-3 text-slate-400 dark:text-white/45" />
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-violet-600 px-4 text-xs font-semibold text-white transition hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-white/85"
              aria-label={`Open ${project.title} live demo`}
            >
              Live demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-50 text-slate-900 selection:bg-violet-500/20 dark:bg-[#080a10] dark:text-white dark:selection:bg-violet-400/30">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-[-22rem] h-[38rem] w-[55rem] -translate-x-1/2 rounded-full bg-violet-300/30 blur-[130px] dark:bg-violet-600/[0.13]" />
        <div className="absolute right-[-15rem] top-[38rem] h-[30rem] w-[30rem] rounded-full bg-cyan-200/25 blur-[110px] dark:bg-cyan-500/[0.06]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-medium tracking-wide text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.45)] dark:bg-emerald-300 dark:shadow-[0_0_12px_rgba(110,231,183,0.7)]" />
            A selection of things I’ve built
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-[-0.055em] text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            Ideas into{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent dark:from-violet-300 dark:via-fuchsia-300 dark:to-cyan-200">
              working experiences.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-600 dark:text-white/55 sm:text-lg sm:leading-8">
            A growing collection of projects where I learn by building—from full-stack applications and thoughtful interfaces to experiments in AI and computer vision.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#project-grid"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-violet-600 px-5 text-sm font-semibold text-white transition hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-white/85"
            >
              Explore projects <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/ShobhitGupta1512"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-white/75 dark:hover:bg-white/[0.06]"
            >
              <Github className="h-4 w-4" /> GitHub profile
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-5 dark:divide-white/10 dark:border-white/10">
            <div className="px-3">
              <p className="text-2xl font-semibold tracking-tight">10</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-white/45">Projects</p>
            </div>
            <div className="px-3">
              <p className="text-2xl font-semibold tracking-tight">Build</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-white/45">Learn by doing</p>
            </div>
            <div className="px-3">
              <p className="text-2xl font-semibold tracking-tight">Improve</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-white/45">One iteration at a time</p>
            </div>
          </div>
        </motion.div>

        <div id="project-grid" className="scroll-mt-8 pt-16 sm:pt-20">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:mb-9 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-200/70">
                Selected work
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Projects, all in one place.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-white/45">
              Explore the idea, check the stack, and open the source. Live demos are linked where available.
            </p>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-7 shadow-sm dark:border-white/10 dark:from-white/[0.07] dark:to-white/[0.02] sm:p-10 lg:p-12">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 dark:border-white/10 dark:bg-white/[0.05]">
                <TerminalSquare className="h-5 w-5 text-violet-700 dark:text-violet-200" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Good work starts with a conversation.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-white/50 sm:text-base">
                I’m a developer who enjoys solving problems, learning new tools, and turning ideas into useful software. Have a project or opportunity in mind?
              </p>
            </div>
            <a
              href="mailto:shobhitkumargupta1111@gmail.com"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-violet-600 px-5 text-sm font-semibold text-white transition hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-white/85"
            >
              Let’s connect <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <footer className="flex flex-col items-center justify-between gap-3 py-8 text-xs text-slate-500 dark:text-white/35 sm:flex-row">
          <span>Designed and built by Shobhit Kumar.</span>
          <a
            href="https://github.com/ShobhitGupta1512"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-violet-700 dark:hover:text-white/70"
          >
            More on GitHub <ArrowUpRight className="ml-1 inline h-3 w-3" />
          </a>
        </footer>
      </section>
    </main>
  );
}
