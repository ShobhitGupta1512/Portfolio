
"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowUp,
  Code2,
  MapPin,
} from "lucide-react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ShobhitGupta1512",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shobhitkumar-webdev/",
    icon: Linkedin,
  },
{
  label: "Email",
  href: "mailto:shobhitkumargupta1111@gmail.com?subject=Job%20Opportunity%20-%20Shobhit%20Kumar",
  icon: Mail,
},
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border/70 bg-background">
      {/* Subtle theme accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-primary/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Main footer */}
        <div className="grid gap-12 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Brand and introduction */}
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Shobhit Kumar - Home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <Code2 size={23} strokeWidth={2} />
              </span>

              <span>
                <span className="block text-lg font-bold tracking-tight">
                  Shobhit Kumar
                </span>
                <span className="mt-0.5 block text-xs text-foreground/55">
                  Developer Portfolio
                </span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-foreground/65">
              Building modern web applications with React, Next.js,
              Node.js, databases, and AI-powered technologies.
              Focused on creating useful, reliable, and user-friendly
              digital experiences.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-400">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-cyan-400"
              />
              Open to Opportunities
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold tracking-wide">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-foreground/30 transition-colors group-hover:bg-primary"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact and socials */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide">
              Let&apos;s Connect
            </h2>

            <p className="mt-5 text-sm leading-6 text-foreground/60">
              Have an opportunity, a project idea, or a collaboration
              in mind? I&apos;d be happy to connect.
            </p>


<a
  href="/contact"
  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:opacity-80"
>
  Contact Me

              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label === "Email" ? undefined : "_blank"
                    }
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/20 text-foreground/65 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Icon size={19} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-foreground/45">
              <MapPin size={14} aria-hidden="true" />
              Open to Onsite & Remote Opportunities
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-border/70 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs leading-6 text-foreground/50 sm:text-left">
            © {year} Shobhit Kumar. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-foreground/50 sm:justify-end">
            <span className="inline-flex items-center gap-1.5">
              Crafted with
              <span className="font-medium text-primary">passion</span>
              <span aria-label="and care"> &amp; care</span>
            </span>

            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Back to top
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
