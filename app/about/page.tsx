"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { GraduationCap, LucideGraduationCap, Mail, MapPin } from "lucide-react";
import {Footer} from "@/components/footer";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      easing: "easeInOut",
    },
  },
};

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden pt-10 lg:pt-28 pb-20">
      {/* Same Glow System as Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(188,226,255,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.08),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-2 mb-11"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold tracking-tight bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            About Me
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Full-Stack Developer building scalable, performance-driven
            applications with clean architecture and modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1.0fr_2.2fr] gap-11  mb-20"
        >
          {/* LEFT PROFILE CARD */}
          <motion.div variants={itemVariants}>
            <Card className="p-7 bg-secondary/40 border border-border backdrop-blur-xl rounded-2xl hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Profile Image */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_60px_rgba(188,226,255,0.35)]">
                  <Image
                    src="/shobhit_portfolio_image.jpg"
                    alt="Shobhit Kumar"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground">
                  Shobhit Kumar
                </h3>

                {/* Education */}
                <p className="text-foreground/60 text-sm leading-relaxed">
                  B.Tech CSE Student
                  <br />
                  Quantum University, Roorkee
                </p>

                {/* Badges */}
                <div className="flex gap-3 flex-wrap justify-center mt-2">
                  <span className="px-4 py-1 rounded-full text-sm bg-primary/15 text-primary border border-primary/30">
                    DSA Enthusiast
                  </span>
                  <span className="px-4 py-1 rounded-full text-sm bg-accent/15 text-accent border border-accent/30">
                    MERN Stack
                  </span>
                </div>

                {/* Club Badge */}
                <div className="mt-4 px-5 py-2 rounded-full bg-linear-to-r from-primary via-accent to-primary text-sm font-medium text-background shadow-lg">
                  Core Team Member — Codex Club
                </div>

                {/* Contact Info */}
                <div className="w-full border-t border-border pt-6 space-y-4 text-sm text-foreground/80">
                  <div className="flex items-center gap-3 justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Roorkee, India</span>
                  </div>

                  <div className="flex items-center gap-3 justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>shobhitkumargupta1111@gmail.com</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="w-full border-t border-border pt-6">
                  <h4 className="text-sm font-semibold text-foreground/70 mb-4">
                    Quick Stats
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 p-4 rounded-xl text-center border border-blue-500/20">
                      <p className="text-2xl font-bold text-blue-500">5+</p>
                      <p className="text-xs text-foreground/70">
                        Hackathon paticipation.
                      </p>
                    </div>

                    <div className="bg-purple-500/10 p-4 rounded-xl text-center border border-purple-500/20">
                      <p className="text-2xl font-bold text-purple-500">4</p>
                      <p className="text-xs text-foreground/70">
                        Certifications
                      </p>
                    </div>

                    <div className="bg-green-500/10 p-4 rounded-xl text-center border border-green-500/20">
                      <p className="text-2xl font-bold text-green-500">15+</p>
                      <p className="text-xs text-foreground/70">Technologies</p>
                    </div>

                    <div className="bg-orange-500/10 p-4 rounded-xl text-center border border-orange-500/20">
                      <p className="text-2xl font-bold text-orange-500">7+</p>
                      <p className="text-xs text-foreground/70">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* RIGHT SUMMARY CARD */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-secondary/40 border border-border backdrop-blur-xl rounded-2xl hover:border-accent/40 transition-all duration-300 space-y-1">
              <h3 className="text-2xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Professional Summary
              </h3>

              <p className="text-foreground/70 leading-8 text-base">
                I am a B.Tech Computer Science student focused on Full-Stack
                Development and Data Structures & Algorithms. I build modern web
                applications using the MERN stack and continuously improve my
                backend architecture and problem-solving skills.
              </p>

              <p className="text-foreground/70 leading-8 text-base">
                I have solved 50+ DSA problems, strengthening my logical
                thinking and coding efficiency. As a Core Team Member of Codex
                Club, I actively contribute to technical initiatives and
                collaborate on development-focused projects within the
                university community.
              </p>

              {/* Professional Goals */}
              <div className="space-y-3 pt-4 border-t border-border">
                <h4 className="text-2xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Professional Goals
                </h4>

                <p className="text-foreground/70 leading-8 text-base">
                  Seeking entry-level Software Developer roles and internship
                  opportunities where I can apply my full-stack and
                  problem-solving skills to build scalable and efficient
                  applications.
                </p>

                <p className="text-foreground/70 leading-8 text-base">
                  Focused on strengthening backend development, system design
                  fundamentals, and writing clean, maintainable code aligned
                  with industry standards.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h4 className="text-xl font-semibold text-primary">
                  Core Competencies
                </h4>

                <div className="grid md:grid-cols-2 gap-6 text-foreground/70 text-sm leading-7">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">
                      Full-Stack Development
                    </h5>
                    <ul className="space-y-1">
                      <li>• MERN Stack Applications</li>
                      <li>• RESTful API Development</li>
                      <li>• Responsive UI Design</li>
                      <li>• Authentication & Authorization</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">
                      Problem Solving
                    </h5>
                    <ul className="space-y-1">
                      <li>• 50+ DSA Problems Solved</li>
                      <li>• Strong Logical Thinking</li>
                      <li>• Algorithm Optimization</li>
                      <li>• Competitive Coding Practice</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">
                      Computer Science Fundamentals
                    </h5>
                    <ul className="space-y-1">
                      <li>• Operating Systems</li>
                      <li>• DBMS & SQL</li>
                      <li>• Computer Networks</li>
                      <li>• Software Engineering Principles</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2">
                      Leadership & Collaboration
                    </h5>
                    <ul className="space-y-1">
                      <li>• Core Team Member – Codex Club</li>
                      <li>• Team Collaboration</li>
                      <li>• Technical Event Participation</li>
                      <li>• Continuous Learning Mindset</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* ================= EDUCATION ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            variants={itemVariants}
            className="flex items-center gap-4 text-3xl font-bold 
               bg-linear-to-r from-primary via-accent to-primary 
               bg-clip-text text-transparent"
          >
            <GraduationCap className="w-8 h-8 text-violet-500" />
            <span>Education</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-secondary/40 border border-border backdrop-blur-xl rounded-xl hover:border-primary/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  Bachelor of Technology (CSE)
                </h3>
                <p className="text-accent font-medium">
                  Quantum School of Technology, Roorkee
                </p>
                <p className="text-foreground/50 text-sm mt-1">
                  2023 – Present
                </p>
                <p className="text-foreground/70 mt-4 leading-relaxed">
                  Focused on Full-Stack Architecture, Data Structures &
                  Algorithms, Operating Systems, DBMS, Computer Networks, and
                  Software Engineering principles to build scalable and
                  maintainable systems.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-secondary/40 border border-border backdrop-blur-xl rounded-xl hover:border-accent/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  Higher Secondary Education
                </h3>
                <p className="text-primary font-medium">
                  +2 High School Bengabad, Giridih
                </p>
                <p className="text-foreground/50 text-sm mt-1">2020 – 2022</p>
                <p className="text-foreground/70 mt-4 leading-relaxed">
                  Completed Higher Secondary Education in the Science stream
                  with a focus on IT/ITES, developing strong analytical and
                  technical foundations.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    
  );
}
