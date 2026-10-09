"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    description: "Languages used for development and problem solving.",
    items: ["JavaScript", "TypeScript", "C++", "SQL", "Python"],
  },
  {
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend Development",
    description: "Building server-side applications and APIs.",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    category: "Databases & ORM",
    description: "Working with relational and NoSQL databases.",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Drizzle ORM",
      "Neon",
      "Redis",
    ],
  },
  {
    category: "Authentication & Email",
    description: "Integrating authentication and email functionality.",
    items: [
      "Clerk",
      "Resend",
    ],
  },
  {
    category: "AI & Generative AI",
    description: "Integrating AI capabilities into web applications.",
    items: [
      "LLM API Integration",
      "Generative AI",
      "Hugging Face Spaces",
      "FastAPI",
    ],
  },
  {
    category: "Tools & Deployment",
    description: "Development workflow, version control, and deployment.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Docker",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5 mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">
            My Technical Expertise
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Technical Skills
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build full-stack web
            applications, develop backend APIs, work with databases,
            and integrate AI-powered features.
          </p>
        </motion.header>

        {/* Skills Categories */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Technical skills by category"
          className="space-y-12"
        >
          {skillCategories.map((section) => (
            <motion.div
              key={section.category}
              variants={itemVariants}
              className="space-y-5"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">
                  {section.category}
                </h2>

                <p className="text-sm text-foreground/60">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {section.items.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.035, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group h-full"
                  >
                    <div className="h-full min-h-16 flex items-center justify-center p-4 rounded-xl glassmorphic border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-colors text-center">
                      <span className="font-medium text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Development Focus */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="rounded-2xl glassmorphic border border-primary/20 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What I Build
            </h2>

            <p className="text-foreground/70 leading-relaxed mb-8 max-w-3xl">
              I focus on combining frontend development, backend
              engineering, database integration, and AI capabilities
              to create practical, user-focused applications.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  Full-Stack Applications
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Developing web applications with React, Next.js,
                  Node.js, Express, and databases.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  Backend & APIs
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Creating REST APIs, integrating authentication,
                  and connecting applications to databases.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary">
                  AI-Powered Features
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Exploring practical AI integrations that make
                  web applications more useful and interactive.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 space-y-4"
        >
          <h2 className="text-2xl font-bold">
            Let&apos;s Build Something Together
          </h2>

          <p className="text-foreground/70 max-w-2xl mx-auto">
            I&apos;m open to internships, entry-level opportunities,
            interesting projects, and collaborations.
          </p>

          <a
            href="https://www.linkedin.com/in/shobhitkumar-webdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

      </div>
    </main>
  );
}
