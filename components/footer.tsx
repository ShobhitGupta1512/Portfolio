import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/ShobhitGupta1512"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shobhit-kumargupta-webdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <a
              href="mailto:shobhitkumargupta1111@gmail.com"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/60 text-center md:text-right">
            Crafted with passion — Shobhit Kumar © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
