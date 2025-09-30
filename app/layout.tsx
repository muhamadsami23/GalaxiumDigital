// import type React from "react"
// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import Navbar from "@/components/navbar"
// import "./globals.css"
// import { ParticleBackground } from "@/components/particlebackground"
// import ClickBalls from "@/components/click"

// export const metadata: Metadata = {
//   title: "Galaxium Digital | Innovative Web, Software & Marketing Solutions",
//   description:
//     "Galaxium Digital helps businesses grow with cutting-edge web development, software solutions, and digital marketing. From idea to launch, we partner with you.",
//   keywords: [
//     "Galaxium Digital",
//     "software house",
//     "web development",
//     "custom software",
//     "digital marketing",
//     "SEO services",
//     "mobile app development",
//     "IT solutions",
//   ],
//   icons: {
//     icon: "/logo.ico",   // ✅ your favicon
//     shortcut: "/logo.ico",
//     apple: "/logo.ico",
//   },
//   authors: [{ name: "Galaxium Digital", url: "https://galaxiumdigital.app" }],
//   creator: "Galaxium Digital",
//   publisher: "Galaxium Digital",
//   metadataBase: new URL("https://galaxiumdigital.app"),
//   alternates: {
//     canonical: "https://galaxiumdigital.app",
//   },
//   openGraph: {
//     title: "Galaxium Digital | Web, Software & Marketing Experts",
//     description:
//       "We design, build, and grow digital experiences that deliver results. Explore Galaxium Digital's web, software, and marketing services today.",
//     url: "https://galaxiumdigital.app",
//     siteName: "Galaxium Digital",
//     images: [
//       {
//         url: "https://galaxiumdigital.app/og-image.jpg", // replace with real OG image
//         width: 1200,
//         height: 630,
//         alt: "Galaxium Digital - Web, Software & Marketing Solutions",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Galaxium Digital | Innovative Web & Software Solutions",
//     description:
//       "Partner with Galaxium Digital for web development, software engineering, and digital marketing services that drive growth.",
//     creator: "@galaxium", // replace with your Twitter handle
//     images: ["https://galaxiumdigital.app/og-image.jpg"], // replace with your image
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}>
//       <head>
//         {/* ✅ SEO Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Galaxium Digital",
//               url: "https://galaxiumdigital.app",
//               logo: "/logo.ico",
//               sameAs: [
//                 "https://www.linkedin.com/company/galaxium",
//                 "https://twitter.com/galaxium",
//                 "https://facebook.com/galaxium",
//                 "https://instagram.com/galaxium",
//               ],
//               description:
//                 "Galaxium Digital is a software house specializing in web development, custom software, and digital marketing solutions.",
//             }),
//           }}
//         />
//       </head>
//       <body className="font-sans">
//         <Navbar />
//         <ParticleBackground />
//         <ClickBalls />
//         <Suspense fallback={null}>{children}</Suspense>
//         <Analytics />
//       </body>
//     </html>
//   )
// }

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
  title: "Galaxium Digital | Innovative Web, Software & Marketing Solutions",
  description:
    "Galaxium Digital helps businesses grow with cutting-edge web development, software solutions, and digital marketing. From idea to launch, we partner with you.",
  keywords: [
    "Galaxium Digital",
    "software house",
    "web development",
    "custom software",
    "digital marketing",
    "SEO services",
    "mobile app development",
    "IT solutions",
  ],
  icons: {
    icon: "/logo.ico",   // ✅ your favicon
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  authors: [{ name: "Galaxium Digital", url: "https://galaxiumdigital.app" }],
  creator: "Galaxium Digital",
  publisher: "Galaxium Digital",
  metadataBase: new URL("https://galaxiumdigital.app"),
  alternates: {
    canonical: "https://galaxiumdigital.app",
  },
  openGraph: {
    title: "Galaxium Digital | Web, Software & Marketing Experts",
    description:
      "We design, build, and grow digital experiences that deliver results. Explore Galaxium Digital's web, software, and marketing services today.",
    url: "https://galaxiumdigital.app",
    siteName: "Galaxium Digital",
    images: [
      {
        url: "https://galaxiumdigital.app/og-image.jpg", // replace with real OG image
        width: 1200,
        height: 630,
        alt: "Galaxium Digital - Web, Software & Marketing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galaxium Digital | Innovative Web & Software Solutions",
    description:
      "Partner with Galaxium Digital for web development, software engineering, and digital marketing services that drive growth.",
    creator: "@galaxium", // replace with your Twitter handle
    images: ["https://galaxiumdigital.app/og-image.jpg"], // replace with your image
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}>
      <head>
        {/* ✅ SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Galaxium Digital",
              url: "https://galaxiumdigital.app",
              logo: "/logo.ico",
              sameAs: [
                "https://www.linkedin.com/company/galaxium",
                "https://twitter.com/galaxium",
                "https://facebook.com/galaxium",
                "https://instagram.com/galaxium",
              ],
              description:
                "Galaxium Digital is a software house specializing in web development, custom software, and digital marketing solutions.",
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <ParticleBackground />
        <ClickBalls />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
