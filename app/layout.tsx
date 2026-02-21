import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Shobhit Kumar - Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Shobhit Kumar, a Full-Stack Web Developer and AI Enthusiast. Explore projects, skills, and innovative solutions.",
  generator: "sk.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${_inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

          {/* Navbar */}
          <Navbar />

          {/* Main Content (Adjusted for Fixed Navbar Height) */}
          <main className="min-h-screen ">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}