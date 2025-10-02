// // "use client"

// // import FooterSection from "@/components/sections/footer"
// // import { motion } from "framer-motion"
// // import { CheckCircle } from "lucide-react"
// // import Image from "next/image"

// // export default function WebDevelopment() {
// //   return (
// //     <section className="relative">
// //       {/* Hero Section */}
// //       <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
// //         <span className="inline-block rounded-full bg-accent/30 px-4 py-1 text-sm font-medium text-foreground">
// //           Services
// //         </span>
// //         <h1 className="mt-4 text-4xl font-bold md:text-6xl">Web Development</h1>
// //         <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
// //           Transforming visions into impactful websites — custom development, responsive design, and robust solutions for growth.
// //         </p>
// //       </div>

// //       {/* Pill Navigation (optional modules) */}
// //       <div className="flex justify-center gap-4 flex-wrap px-6">
// //         {["Design", "CMS", "API", "Security", "Performance"].map((item) => (
// //           <span
// //             key={item}
// //             className="rounded-full bg-accent/20 px-4 py-1 text-sm font-medium text-foreground"
// //           >
// //             {item}
// //           </span>
// //         ))}
// //       </div>

// //       {/* Features with Ticks */}
// //       <div className="mt-12 max-w-3xl mx-auto grid gap-4 px-6">
// //         {["Custom Web Design", "Responsive Layouts", "Security Implementation", "Maintenance & Support"].map(
// //           (f) => (
// //             <div key={f} className="flex items-center gap-3 text-foreground">
// //               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0" />
// //               <span className="text-lg font-medium">{f}</span>
// //             </div>
// //           )
// //         )}
// //       </div>

// //       {/* Detail Sections */}
// //       <div className="mt-20 space-y-20 px-6 max-w-6xl mx-auto">
// //         {/* Module */}
// //         <div className="grid md:grid-cols-2 gap-10 items-center">
// //           <div>
// //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">Custom Web Development</span>
// //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Craft Unique Online Presence</h3>
// //             <p className="mt-2 text-muted-foreground">
// //               We design tailored websites that meet your business needs, ensuring both functionality and aesthetics.
// //             </p>
// //           </div>
// //           <Image src="/images/web-custom.png" alt="Custom Web" width={400} height={300} className="mx-auto" />
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-10 items-center">
// //           <Image src="/images/responsive.png" alt="Responsive Design" width={400} height={300} className="mx-auto" />
// //           <div>
// //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">Responsive Design</span>
// //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Optimal Experience Across Devices</h3>
// //             <p className="mt-2 text-muted-foreground">
// //               Your site adapts seamlessly to varying screen sizes, ensuring consistent and engaging user experiences.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-10 items-center">
// //           <div>
// //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">CMS Integration</span>
// //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Effortless Content Control</h3>
// //             <p className="mt-2 text-muted-foreground">
// //               Easily manage your content with powerful CMS integration — no technical expertise needed.
// //             </p>
// //           </div>
// //           <Image src="/images/cms.png" alt="CMS Integration" width={400} height={300} className="mx-auto" />
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-10 items-center">
// //           <Image src="/images/api.png" alt="API Integration" width={400} height={300} className="mx-auto" />
// //           <div>
// //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">API Integration</span>
// //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Seamless Connectivity</h3>
// //             <p className="mt-2 text-muted-foreground">
// //               Build powerful APIs to integrate your website with other platforms for scalability and growth.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-10 items-center">
// //           <div>
// //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">Performance & Security</span>
// //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Fast & Secure Experiences</h3>
// //             <p className="mt-2 text-muted-foreground">
// //               We fine-tune your site for speed and protect it against vulnerabilities with best-in-class security.
// //             </p>
// //           </div>
// //           <Image src="/images/security.png" alt="Security" width={400} height={300} className="mx-auto" />
// //         </div>
// //       </div>

// //       {/* CTA */}
// //       <div className="mt-20 text-center px-6">
// //         <h2 className="text-3xl font-bold text-foreground">Ready to Transform Your Website?</h2>
// //         <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
// //           Elevate your online identity with expert development. Stand out in the digital landscape and drive results.
// //         </p>
// //         <motion.a
// //           href="/contact"
// //           className="mt-6 inline-block rounded-full bg-accent px-8 py-3 text-lg font-semibold text-background hover:bg-accent/80 transition"
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //         >
// //           Discuss Your Project
// //         </motion.a>
// //       </div>
// //       <FooterSection/>
// //     </section> 
// //   )
// // }

// "use client"

// import { motion } from "framer-motion"
// import { FaReact, FaNodeJs } from "react-icons/fa"
// import { SiNextdotjs, SiTailwindcss, SiPython } from "react-icons/si"
// import { CheckCircle2 } from "lucide-react"

// export default function WebDevelopmentPage() {
//   return (
//     <div className="relative mx-auto max-w-6xl px-6 py-20">

//       {/* Hero Section */}
//       <section className="relative flex flex-col items-center justify-center text-center">
//         {/* Floating Tech Icons */}
//         <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute text-blue-500 text-7xl"
//             animate={{ y: [0, -25, 0] }}
//             transition={{ duration: 6, repeat: Infinity }}
//           >
//             <FaReact />
//           </motion.div>
//           <motion.div
//             className="absolute text-green-500 text-6xl left-1/3"
//             animate={{ x: [0, 30, 0] }}
//             transition={{ duration: 5, repeat: Infinity }}
//           >
//             <FaNodeJs />
//           </motion.div>
//           <motion.div
//             className="absolute text-black text-7xl right-1/4"
//             animate={{ y: [0, 35, 0] }}
//             transition={{ duration: 7, repeat: Infinity }}
//           >
//             <SiNextdotjs />
//           </motion.div>
//           <motion.div
//             className="absolute text-cyan-500 text-6xl top-1/4"
//             animate={{ x: [0, -25, 0] }}
//             transition={{ duration: 4, repeat: Infinity }}
//           >
//             <SiTailwindcss />
//           </motion.div>
//           <motion.div
//             className="absolute text-yellow-500 text-6xl bottom-1/4"
//             animate={{ y: [0, -30, 0] }}
//             transition={{ duration: 8, repeat: Infinity }}
//           >
//             <SiPython />
//           </motion.div>
//         </div>

//         {/* Hero Title */}
//         <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-foreground">
//           Web Development
//         </h1>
//         <p className="relative z-10 mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//           We craft modern, secure, and high-performing websites that elevate your brand and deliver results.
//         </p>

//         {/* Golden CTA */}
//         <div className="relative z-10 mt-8">
//           <button className="rounded-full bg-amber-500 px-8 py-3 text-white font-semibold text-lg shadow-lg hover:bg-amber-600 transition">
//             Discuss Your Project
//           </button>
//         </div>
//       </section>

//       {/* Horizontal Features Section */}
//       <section className="mt-20 flex flex-wrap justify-center gap-6">
//         {["Custom Web Design", "Responsive Layouts", "Security Implementation", "Maintenance & Support"].map(
//           (item, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm"
//             >
//               <CheckCircle2 className="text-amber-500 w-5 h-5" />
//               <span className="text-sm md:text-base font-medium">{item}</span>
//             </div>
//           )
//         )}
//       </section>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Code, Workflow, ShoppingCart, Layout } from "lucide-react"

export default function WebDevelopment() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative text-center py-24 px-6">
        <h1 className="text-5xl font-bold">Website Development</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Build modern, secure, and scalable websites that drive growth for your business.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg"
        >
          Start Your Project
        </motion.a>
      </section>

      {/* Features Row */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Feature icon="🔌" text="API Integration" />
        <Feature icon="🛠️" text="Maintenance" />
        <Feature icon="🔒" text="Security" />
        <Feature icon="⚡" text="Performance" />
      </section>

      {/* Excellence Paragraph */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-lg text-muted-foreground">
          At <span className="font-semibold">Galaxium Digital</span>, we excel in delivering robust web development
          solutions. Our approach combines innovation, scalability, and security to ensure your digital presence is not
          only visually impressive but also technically flawless.
        </p>
      </section>

      {/* Full Stretched Info Sections */}
      <InfoSection
        title="Custom Web Solutions"
        text="We craft tailored websites that perfectly align with your brand identity and business goals. Our solutions ensure your website is not only beautiful but also functional and growth-driven."
        icon={<Layout className="w-20 h-20 text-primary" />}
        reverse={false}
      />
      <InfoSection
        title="System Integrations"
        text="We specialize in seamless API and system integrations to streamline workflows and enhance productivity. From CRMs to payment gateways, we connect it all."
        icon={<Workflow className="w-20 h-20 text-primary" />}
        reverse={true}
      />
      <InfoSection
        title="E-Commerce Platforms"
        text="Launch your online store with advanced e-commerce solutions. From product catalogs to secure checkout, we build scalable platforms designed for sales."
        icon={<ShoppingCart className="w-20 h-20 text-primary" />}
        reverse={false}
      />
      <InfoSection
        title="CMS Development"
        text="Take control of your website with our content management systems. Update, edit, and manage content effortlessly without technical expertise."
        icon={<Code className="w-20 h-20 text-primary" />}
        reverse={true}
      />

      {/* Final CTA */}
      <section className="text-center py-20">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg"
        >
          Let’s Build Your Website
        </motion.a>
      </section>
    </main>
  )
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div>
      <div className="text-3xl">{icon}</div>
      <p className="mt-3 text-sm font-medium">{text}</p>
    </div>
  )
}

function InfoSection({
  title,
  text,
  icon,
  reverse,
}: {
  title: string
  text: string
  icon: React.ReactNode
  reverse?: boolean
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-4 text-muted-foreground">{text}</p>
        </div>
        {/* Right Infographic */}
        <div className="flex justify-center">{icon}</div>
      </div>
    </section>
  )
}
