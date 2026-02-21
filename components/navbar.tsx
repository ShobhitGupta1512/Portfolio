"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Github, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "AI Lab", href: "/ai-lab" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          SK
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-primary/10 h-9 w-9"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Link
            href="https://github.com/ShobhitGupta1512"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 h-9 w-9">
              <Github className="h-4 w-4" />
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:bg-primary/10 h-9 w-9"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}