"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react"

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
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all fields")
      return
    }

    try {
      setIsSubmitted(true)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        alert(`Error: ${data.error || "Failed to send email"}`)
        setIsSubmitted(false)
        return
      }

      alert("Message sent successfully! I'll get back to you soon.")
      setFormData({ fullName: "", email: "", message: "" })
      setTimeout(() => {
        setIsSubmitted(false)
      }, 2000)
    } catch (error) {
      alert("Failed to send message. Please try again.")
      console.error("Contact form error:", error)
      setIsSubmitted(false)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4 mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold">
            Get In Touch
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate and create something extraordinary together
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 glassmorphic border-accent/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Shobhit Kumar"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitted}>
                  {isSubmitted ? "Message Sent! 🎉" : "Send Message"}
                  <ArrowRight className={`ml-2 h-5 w-5 transition-transform ${isSubmitted ? "text-green-400" : ""}`} />
                </Button>


              </form>
            </Card>
          </motion.div>

          {/* Right Side - Info & Illustration */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Gradient art section */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden glassmorphic border border-accent/30">
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute inset-0 bg-linear-to-br from-accent/40 via-primary/20 to-transparent"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
                    Let&apos;s
                  </div>
                  <div className="text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    Build
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="space-y-3">
              <p className="font-semibold text-lg">Prefer direct contact?</p>
              <div className="space-y-2">
                <Link href="mailto:hello@example.com">
                  <Button variant="outline" className="w-full justify-start group bg-transparent">
                    <Mail className="mr-3 h-5 w-5" />
                    hello@example.com
                    <ArrowRight className="ml-auto h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="font-semibold text-lg">Connect on social</p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="https://github.com/ShobhitGupta1512/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full bg-transparent">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shobhitkumar-webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full bg-transparent">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
