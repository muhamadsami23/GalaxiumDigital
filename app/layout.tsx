import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navbar from "@/components/navbar"
import "./globals.css"
import { ParticleBackground } from "@/components/particlebackground"
import ClickBalls from "@/components/click"

export const metadata: Metadata = {
  title: "Galaxium Digital",
  description: "Futuristic software house portfolio",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}>
      <body className="font-sans">
        <Navbar />
        <ParticleBackground/>
        <ClickBalls/>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
