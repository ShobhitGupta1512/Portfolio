
"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiHuggingface,
  SiFastapi,
} from "react-icons/si";
import {
  FiCode,
  FiDatabase,
  FiShield,
  FiMail,
  FiCpu,
  FiCloud,
  FiGlobe,
  FiLayers,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  category: string;
  description: string;
  icon: IconType;
  items: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description:
      "Programming languages for application development, problem-solving, and database queries.",
    icon: FiCode,
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: SiMysql },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Frontend Development",
    description:
      "Responsive user interfaces, component-based architecture, and interactive web experiences.",
    icon: FiLayers,
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "Backend Development",
    description:
      "Server-side development, RESTful APIs, request handling, and backend integration.",
    icon: FiGlobe,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FiGlobe },
      { name: "JWT Authentication", icon: FiShield },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    category: "Databases & ORM",
    description:
      "Relational and NoSQL databases, data modeling, queries, and database integration.",
    icon: FiDatabase,
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySql" , icon: SiMysql }
    ],
  },
  {
    category: "Authentication & Email",
    description:
      "User authentication, identity management, and transactional email integration.",
    icon: FiShield,
    items: [
      { name: "Clerk", icon: FiShield },
      { name: "Resend", icon: FiMail },
    ],
  },
  {
    category: "AI & Generative AI",
    description:
      "AI-powered application features, model integrations, and Python-based AI services.",
    icon: FiCpu,
    items: [
      { name: "LLM API Integration", icon: FiCpu },
      { name: "Generative AI", icon: FiLayers },
      { name: "Hugging Face Spaces", icon: SiHuggingface },
    ],
  },
  {
    category: "Tools & Deployment",
    description:
      "Version control, development tools, containerization, and application deployment.",
    icon: FiCloud,
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      // { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Vercel", icon: SiVercel },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const focusAreas = [
  {
    title: "Full-Stack Web Applications",
    description:
      "Building responsive applications using React, Next.js, Node.js, Express.js, and modern databases.",
    icon: FiLayers,
  },
  {
    title: "Backend Development & APIs",
    description:
      "Developing REST APIs, implementing authentication, and integrating reliable database solutions.",
    icon: FiDatabase,
  },
  {
    title: "AI-Powered Applications",
    description:
      "Integrating generative AI capabilities and Python-based services into practical web applications.",
    icon: FiCpu,
  },
];

export default function SkillsPage() {
  const totalSkills = skillCategories.reduce(
    (total, category) => total + category.items.length,
    0
  );

  return (
    <main className="min-h-screen overflow-hidden pt-28 pb-20 md:pt-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* SEO-friendly page introduction */}
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative mb-16 text-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-48 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <FiCode aria-hidden="true" />
            Technical Expertise
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Technical Skills &{" "}
            <span className="text-primary">Technologies</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-foreground/70 sm:text-lg">
            I&apos;m a developer focused on full-stack web development,
            MERN stack technologies, backend engineering, database
            integration, and AI-powered applications. Explore the
            programming languages, frameworks, tools, and platforms
            I use to build modern web experiences.
          </p>

<div className="flex flex-wrap justify-center gap-3">
  {[
    "Full-Stack Development",
    "MERN Stack",
    "Backend APIs",
    "AI Integration",
  ].map((label, index) => (
    <span
      key={label}
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
        index % 2 === 0
          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/15"
          : "border-orange-400/30 bg-orange-400/10 text-orange-400 hover:bg-orange-400/15"
      }`}
    >
      {label}
    </span>
  ))}
</div>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div>
              <p className="text-3xl font-bold text-primary">
                {totalSkills}+
              </p>
              <p className="mt-1 text-xs text-foreground/60 sm:text-sm">
                Technologies & Tools
              </p>
            </div>

            <div className="h-12 w-px bg-foreground/10" />

            <div>
              <p className="text-3xl font-bold text-primary">
                {skillCategories.length}
              </p>
              <p className="mt-1 text-xs text-foreground/60 sm:text-sm">
                Skill Categories
              </p>
            </div>
          </div>
        </motion.header>

        {/* Interactive technology cards */}
        <motion.section
          aria-label="Programming languages, frameworks, and technical skills"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {skillCategories.map((section, index) => {
            const CategoryIcon = section.icon;

            return (
              <motion.section
                key={section.category}
                variants={cardVariants}
                aria-labelledby={`skill-category-${index}`}
                className="relative"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <CategoryIcon size={23} aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2
                      id={`skill-category-${index}`}
                      className="text-xl font-bold tracking-tight sm:text-2xl"
                    >
                      {section.category}
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-foreground/60 sm:text-base">
                      {section.description}
                    </p>
                  </div>

                  <span className="hidden rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/50 sm:inline-flex">
                    {section.items.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {section.items.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        variants={cardVariants}
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="group h-full"
                      >
                        <div className="relative flex h-full min-h-25 items-center gap-3 overflow-hidden rounded-2xl border border-primary/15 bg-foreground/2.5 p-4 transition-colors duration-300 hover:border-primary/50 hover:bg-primary/7 sm:p-5">
                          <div
                            aria-hidden="true"
                            className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-primary/0 blur-2xl transition-colors group-hover:bg-primary/15"
                          />

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-background text-foreground/80 transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary">
                            <SkillIcon size={23} aria-hidden="true" />
                          </div>

                          <div className="relative min-w-0">
                            <h3 className="wrap-break-word text-sm font-semibold leading-5 text-foreground transition-colors group-hover:text-primary sm:text-base">
                              {skill.name}
                            </h3>

                            <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-foreground/45">
                              <FiCheckCircle
                                size={11}
                                aria-hidden="true"
                              />
                              Technology
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </motion.section>

        {/* Development focus */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          aria-labelledby="development-focus"
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-foreground/2.5 p-6 sm:p-9 md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What I Do
              </span>

              <h2
                id="development-focus"
                className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Turning Ideas Into Applications
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/65 sm:text-base">
                I combine frontend development, backend engineering,
                database design, and AI integration to build practical,
                responsive, and user-focused digital products.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {focusAreas.map((area) => {
                  const FocusIcon = area.icon;

                  return (
                    <div
                      key={area.title}
                      className="rounded-2xl border border-foreground/10 bg-background/60 p-5 transition-colors hover:border-primary/40"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FocusIcon size={22} aria-hidden="true" />
                      </div>

                      <h3 className="font-bold">{area.title}</h3>

                      <p className="mt-3 text-sm leading-6 text-foreground/65">
                        {area.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-labelledby="skills-contact"
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="skills-contact"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Let&apos;s Build Something Together
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/65 sm:text-base">
              I&apos;m open to software development internships,
              entry-level developer opportunities, collaborative
              projects, and opportunities to work on meaningful
              full-stack and AI-powered applications.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/shobhitkumar-webdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Connect on LinkedIn
                <FiArrowUpRight size={17} aria-hidden="true" />
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-foreground/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Contact Me
                <FiMail size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
