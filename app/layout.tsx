// // import type React from "react"
// // import type { Metadata } from "next"
// // import { GeistSans } from "geist/font/sans"
// // import { GeistMono } from "geist/font/mono"
// // import { Analytics } from "@vercel/analytics/next"
// // import { Suspense } from "react"
// // import Navbar from "@/components/navbar"
// // import "./globals.css"
// // import { ParticleBackground } from "@/components/particlebackground"
// // import ClickBalls from "@/components/click"

// // export const metadata: Metadata = {
// //   title: "Galaxium Digital | Innovative Web, Software & Marketing Solutions",
// //   description:
// //     "Galaxium Digital helps businesses grow with cutting-edge web development, software solutions, and digital marketing. From idea to launch, we partner with you.",
// //   keywords: [
// //     "Galaxium Digital",
// //     "software house",
// //     "web development",
// //     "custom software",
// //     "digital marketing",
// //     "SEO services",
// //     "mobile app development",
// //     "IT solutions",
// //   ],
// //   icons: {
// //     icon: "/logo.ico",   // ✅ your favicon
// //     shortcut: "/logo.ico",
// //     apple: "/logo.ico",
// //   },
// //   authors: [{ name: "Galaxium Digital", url: "https://galaxiumdigital.app" }],
// //   creator: "Galaxium Digital",
// //   publisher: "Galaxium Digital",
// //   metadataBase: new URL("https://galaxiumdigital.app"),
// //   alternates: {
// //     canonical: "https://galaxiumdigital.app",
// //   },
// //   openGraph: {
// //     title: "Galaxium Digital | Web, Software & Marketing Experts",
// //     description:
// //       "We design, build, and grow digital experiences that deliver results. Explore Galaxium Digital's web, software, and marketing services today.",
// //     url: "https://galaxiumdigital.app",
// //     siteName: "Galaxium Digital",
// //     images: [
// //       {
// //         url: "https://galaxiumdigital.app/og-image.jpg", // replace with real OG image
// //         width: 1200,
// //         height: 630,
// //         alt: "Galaxium Digital - Web, Software & Marketing Solutions",
// //       },
// //     ],
// //     locale: "en_US",
// //     type: "website",
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: "Galaxium Digital | Innovative Web & Software Solutions",
// //     description:
// //       "Partner with Galaxium Digital for web development, software engineering, and digital marketing services that drive growth.",
// //     creator: "@galaxium", // replace with your Twitter handle
// //     images: ["https://galaxiumdigital.app/og-image.jpg"], // replace with your image
// //   },
// // }

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode
// // }>) {
// //   return (
// //     <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}>
// //       <head>
// //         {/* ✅ SEO Schema */}
// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{
// //             __html: JSON.stringify({
// //               "@context": "https://schema.org",
// //               "@type": "Organization",
// //               name: "Galaxium Digital",
// //               url: "https://galaxiumdigital.app",
// //               logo: "/logo.ico",
// //               sameAs: [
// //                 "https://www.linkedin.com/company/galaxium",
// //                 "https://twitter.com/galaxium",
// //                 "https://facebook.com/galaxium",
// //                 "https://instagram.com/galaxium",
// //               ],
// //               description:
// //                 "Galaxium Digital is a software house specializing in web development, custom software, and digital marketing solutions.",
// //             }),
// //           }}
// //         />
// //       </head>
// //       <body className="font-sans">
// //         <Navbar />
// //         <ParticleBackground />
// //         <ClickBalls />
// //         <Suspense fallback={null}>{children}</Suspense>
// //         <Analytics />
// //       </body>
// //     </html>
// //   )
// // }

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
//          <div className="fixed inset-0 -z-10">
//           <ParticleBackground />
//         </div>

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
    icon: "/logo.ico",
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
        url: "https://galaxiumdigital.app/og-image.jpg",
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
    creator: "@galaxium",
    images: ["https://galaxiumdigital.app/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const preloadFiles = [
    "1.png",
    "117444640_600.jpg",
    "20944138.jpg",
    "280412-P6ATOW-488.jpg",
    "3227635.jpg",
    "3675525.jpg",
    "3d-product-teaser.jpg",
    "4020769.jpg",
    "4964200.jpg",
    "5476534.jpg",
    "5778985.jpg",
    "6076520.jpg",
    "7100345.jpg",
    "9846834.jpg",
    "ab-testing-dashboard.jpg",
    "about1.png",
    "abstract-subtle-shapes-for-about-hero.jpg",
    "all.png",
    "animated-ecommerce-ui.jpg",
    "api-integration-nodes.jpg",
    "apiweb.png",
    "appdev.png",
    "application-development-hero.jpg",
    "automation-pipelines-hero.jpg",
    "automation.png",
    "brand-story-illustration.jpg",
    "cms-integration-illustration.jpg",
    "cmsweb.png",
    "copywriting-hero.jpg",
    "crossplat.webp",
    "custom-web-design-illustration.jpg",
    "design.png",
    "digital-marketing-hero.jpg",
    "digitalmar.png",
    "gfx.png",
    "hand-drawn-flat-design-rpa-illustration.png",
    "image.png",
    "mobdev2.png",
    "mobile-app-screens-mockup.png",
    "nativeapp.jpg",
    "neon-analytics-dashboard.jpg",
    "notepad-laptop-concept.jpg",
    "offline-sync-illustration.jpg",
    "online-strategy-media-marketing-icons.jpg",
    "placeholder-logo.png",
    "responsiveWeb2.png",
    "securityweb.png",
    "seo-graphs-and-charts.jpg",
    "service-hero-background-image.jpg",
    "SL-031720-29020-09.jpg",
    "team-collaboration-workspace.png",
    "ui.jpg",
    "ux-writing-microcopy.jpg",
    "web-page.png",
    "website-illustration.png",
    "workflow-orchestration-diagram.jpg",
    "741.mp4",
  ]

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}
    >
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

        {/* ✅ Preload all major images and videos */}
        {preloadFiles.map((file) => {
          const ext = file.split(".").pop()?.toLowerCase()
          const asType =
            ext === "mp4"
              ? "video"
              : ext === "ico"
              ? "image/x-icon"
              : "image"
          return (
            <link
              key={file}
              rel="preload"
              href={`/${file}`}
              as={asType}
              type={asType === "video" ? "video/mp4" : undefined}
            />
          )
        })}
      </head>

      <body className="font-sans relative">
        {/* ✅ Backgrounds always below everything */}
        <div className="fixed inset-0 -z-10">
          <ParticleBackground />
        </div>

        {/* ✅ Click effect above particles but below content */}
        <ClickBalls />

        {/* ✅ Navigation & Content */}
        <Navbar />
        <Suspense fallback={null}>{children}</Suspense>

        <Analytics />
      </body>
    </html>
  )
}
