import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// Next.js handles this stylesheet import at build time; TypeScript may not resolve it.
// @ts-expect-error
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const siteUrl = new URL("https://shobhitdev.online")
const siteName = "Shobhit Kumar | Full-Stack Developer & AI Enthusiast"
const siteDescription =
  "Explore Shobhit Kumar's portfolio of full-stack web development, backend engineering, and practical AI projects."

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: "%s | Shobhit Kumar",
  },
  description: siteDescription,
  applicationName: "Shobhit Kumar Portfolio",
  authors: [{ name: "Shobhit Kumar", url: siteUrl }],
  creator: "Shobhit Kumar",
  publisher: "Shobhit Kumar",
  category: "technology",
  keywords: [
    "Shobhit Kumar",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "AI Projects",
    "Web Development Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shobhit Kumar — Full-Stack Developer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080a10" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only z-[100] rounded-md bg-background px-4 py-2 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>

          <Navbar />

          <main id="main-content" className="min-h-screen outline-none">
            {children}
          </main>

          <Footer />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
