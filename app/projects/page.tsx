"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/portfolio"
import { ExternalLink, Github } from "lucide-react"

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

export default function ProjectsPage() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4 mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold">
            Featured Projects
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Showcasing my best work across web development, AI integration, and full-stack applications
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden glow-border">
              <Card className="bg-secondary/30 border-accent/30 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Featured Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-80 md:h-full rounded-lg overflow-hidden"
                  >
                    <Image
                      src={featuredProject.image || "/placeholder.svg"}
                      alt={featuredProject.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Featured Project Content */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                        Featured
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">{featuredProject.title}</h2>
                      <p className="text-foreground/70 leading-relaxed">{featuredProject.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {featuredProject.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 pt-8">
                      <Link href={featuredProject.liveDemo} target="_blank">
                        <Button className="group">
                          Explore Case Study
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link href={featuredProject.github} target="_blank">
                        <Button variant="outline" size="icon">
                          <Github className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project, idx) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-all group cursor-pointer glassmorphic">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4 flex flex-col h-full">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-foreground/70 text-sm line-clamp-2">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded text-xs font-medium bg-secondary/50 text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded text-xs font-medium text-foreground/70">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Link href={project.liveDemo} target="_blank" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </Link>
                    <Link href={project.github} target="_blank">
                      <Button size="sm" variant="ghost" className="px-2">
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
