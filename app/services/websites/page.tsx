// // // // // "use client"

// // // // // import FooterSection from "@/components/sections/footer"
// // // // // import { motion } from "framer-motion"
// // // // // import { CheckCircle } from "lucide-react"
// // // // // import Image from "next/image"

// // // // // export default function WebDevelopment() {
// // // // //   return (
// // // // //     <section className="relative">
// // // // //       {/* Hero Section */}
// // // // //       <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
// // // // //         <span className="inline-block rounded-full bg-accent/30 px-4 py-1 text-sm font-medium text-foreground">
// // // // //           Services
// // // // //         </span>
// // // // //         <h1 className="mt-4 text-4xl font-bold md:text-6xl">Web Development</h1>
// // // // //         <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
// // // // //           Transforming visions into impactful websites — custom development, responsive design, and robust solutions for growth.
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* Pill Navigation (optional modules) */}
// // // // //       <div className="flex justify-center gap-4 flex-wrap px-6">
// // // // //         {["Design", "CMS", "API", "Security", "Performance"].map((item) => (
// // // // //           <span
// // // // //             key={item}
// // // // //             className="rounded-full bg-accent/20 px-4 py-1 text-sm font-medium text-foreground"
// // // // //           >
// // // // //             {item}
// // // // //           </span>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Features with Ticks */}
// // // // //       <div className="mt-12 max-w-3xl mx-auto grid gap-4 px-6">
// // // // //         {["Custom Web Design", "Responsive Layouts", "Security Implementation", "Maintenance & Support"].map(
// // // // //           (f) => (
// // // // //             <div key={f} className="flex items-center gap-3 text-foreground">
// // // // //               <CheckCircle className="text-accent w-6 h-6 flex-shrink-0" />
// // // // //               <span className="text-lg font-medium">{f}</span>
// // // // //             </div>
// // // // //           )
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Detail Sections */}
// // // // //       <div className="mt-20 space-y-20 px-6 max-w-6xl mx-auto">
// // // // //         {/* Module */}
// // // // //         <div className="grid md:grid-cols-2 gap-10 items-center">
// // // // //           <div>
// // // // //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">Custom Web Development</span>
// // // // //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Craft Unique Online Presence</h3>
// // // // //             <p className="mt-2 text-muted-foreground">
// // // // //               We design tailored websites that meet your business needs, ensuring both functionality and aesthetics.
// // // // //             </p>
// // // // //           </div>
// // // // //           <Image src="/images/web-custom.png" alt="Custom Web" width={400} height={300} className="mx-auto" />
// // // // //         </div>

// // // // //         <div className="grid md:grid-cols-2 gap-10 items-center">
// // // // //           <Image src="/images/responsive.png" alt="Responsive Design" width={400} height={300} className="mx-auto" />
// // // // //           <div>
// // // // //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">Responsive Design</span>
// // // // //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Optimal Experience Across Devices</h3>
// // // // //             <p className="mt-2 text-muted-foreground">
// // // // //               Your site adapts seamlessly to varying screen sizes, ensuring consistent and engaging user experiences.
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="grid md:grid-cols-2 gap-10 items-center">
// // // // //           <div>
// // // // //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">CMS Integration</span>
// // // // //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Effortless Content Control</h3>
// // // // //             <p className="mt-2 text-muted-foreground">
// // // // //               Easily manage your content with powerful CMS integration — no technical expertise needed.
// // // // //             </p>
// // // // //           </div>
// // // // //           <Image src="/images/cms.png" alt="CMS Integration" width={400} height={300} className="mx-auto" />
// // // // //         </div>

// // // // //         <div className="grid md:grid-cols-2 gap-10 items-center">
// // // // //           <Image src="/images/api.png" alt="API Integration" width={400} height={300} className="mx-auto" />
// // // // //           <div>
// // // // //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">API Integration</span>
// // // // //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Seamless Connectivity</h3>
// // // // //             <p className="mt-2 text-muted-foreground">
// // // // //               Build powerful APIs to integrate your website with other platforms for scalability and growth.
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="grid md:grid-cols-2 gap-10 items-center">
// // // // //           <div>
// // // // //             <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium">Performance & Security</span>
// // // // //             <h3 className="mt-3 text-2xl font-semibold text-foreground">Fast & Secure Experiences</h3>
// // // // //             <p className="mt-2 text-muted-foreground">
// // // // //               We fine-tune your site for speed and protect it against vulnerabilities with best-in-class security.
// // // // //             </p>
// // // // //           </div>
// // // // //           <Image src="/images/security.png" alt="Security" width={400} height={300} className="mx-auto" />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* CTA */}
// // // // //       <div className="mt-20 text-center px-6">
// // // // //         <h2 className="text-3xl font-bold text-foreground">Ready to Transform Your Website?</h2>
// // // // //         <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
// // // // //           Elevate your online identity with expert development. Stand out in the digital landscape and drive results.
// // // // //         </p>
// // // // //         <motion.a
// // // // //           href="/contact"
// // // // //           className="mt-6 inline-block rounded-full bg-accent px-8 py-3 text-lg font-semibold text-background hover:bg-accent/80 transition"
// // // // //           whileHover={{ scale: 1.05 }}
// // // // //           whileTap={{ scale: 0.95 }}
// // // // //         >
// // // // //           Discuss Your Project
// // // // //         </motion.a>
// // // // //       </div>
// // // // //       <FooterSection/>
// // // // //     </section> 
// // // // //   )
// // // // // }

// // // // "use client"

// // // // import { motion } from "framer-motion"
// // // // import { FaReact, FaNodeJs } from "react-icons/fa"
// // // // import { SiNextdotjs, SiTailwindcss, SiPython } from "react-icons/si"
// // // // import { CheckCircle2 } from "lucide-react"

// // // // export default function WebDevelopmentPage() {
// // // //   return (
// // // //     <div className="relative mx-auto max-w-6xl px-6 py-20">

// // // //       {/* Hero Section */}
// // // //       <section className="relative flex flex-col items-center justify-center text-center">
// // // //         {/* Floating Tech Icons */}
// // // //         <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
// // // //           <motion.div
// // // //             className="absolute text-blue-500 text-7xl"
// // // //             animate={{ y: [0, -25, 0] }}
// // // //             transition={{ duration: 6, repeat: Infinity }}
// // // //           >
// // // //             <FaReact />
// // // //           </motion.div>
// // // //           <motion.div
// // // //             className="absolute text-green-500 text-6xl left-1/3"
// // // //             animate={{ x: [0, 30, 0] }}
// // // //             transition={{ duration: 5, repeat: Infinity }}
// // // //           >
// // // //             <FaNodeJs />
// // // //           </motion.div>
// // // //           <motion.div
// // // //             className="absolute text-black text-7xl right-1/4"
// // // //             animate={{ y: [0, 35, 0] }}
// // // //             transition={{ duration: 7, repeat: Infinity }}
// // // //           >
// // // //             <SiNextdotjs />
// // // //           </motion.div>
// // // //           <motion.div
// // // //             className="absolute text-cyan-500 text-6xl top-1/4"
// // // //             animate={{ x: [0, -25, 0] }}
// // // //             transition={{ duration: 4, repeat: Infinity }}
// // // //           >
// // // //             <SiTailwindcss />
// // // //           </motion.div>
// // // //           <motion.div
// // // //             className="absolute text-yellow-500 text-6xl bottom-1/4"
// // // //             animate={{ y: [0, -30, 0] }}
// // // //             transition={{ duration: 8, repeat: Infinity }}
// // // //           >
// // // //             <SiPython />
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* Hero Title */}
// // // //         <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-foreground">
// // // //           Web Development
// // // //         </h1>
// // // //         <p className="relative z-10 mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
// // // //           We craft modern, secure, and high-performing websites that elevate your brand and deliver results.
// // // //         </p>

// // // //         {/* Golden CTA */}
// // // //         <div className="relative z-10 mt-8">
// // // //           <button className="rounded-full bg-amber-500 px-8 py-3 text-white font-semibold text-lg shadow-lg hover:bg-amber-600 transition">
// // // //             Discuss Your Project
// // // //           </button>
// // // //         </div>
// // // //       </section>

// // // //       {/* Horizontal Features Section */}
// // // //       <section className="mt-20 flex flex-wrap justify-center gap-6">
// // // //         {["Custom Web Design", "Responsive Layouts", "Security Implementation", "Maintenance & Support"].map(
// // // //           (item, i) => (
// // // //             <div
// // // //               key={i}
// // // //               className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm"
// // // //             >
// // // //               <CheckCircle2 className="text-amber-500 w-5 h-5" />
// // // //               <span className="text-sm md:text-base font-medium">{item}</span>
// // // //             </div>
// // // //           )
// // // //         )}
// // // //       </section>
// // // //     </div>
// // // //   )
// // // // }

// // // "use client"

// // // import { motion } from "framer-motion"
// // // import { Code, Workflow, ShoppingCart, Layout } from "lucide-react"

// // // export default function WebDevelopment() {
// // //   return (
// // //     <main className="bg-background text-foreground">
// // //       {/* Hero Section */}
// // //       <section className="relative text-center py-24 px-6">
// // //         <h1 className="text-5xl font-bold">Website Development</h1>
// // //         <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
// // //           Build modern, secure, and scalable websites that drive growth for your business.
// // //         </p>
// // //         <motion.a
// // //           whileHover={{ scale: 1.05 }}
// // //           href="/contact"
// // //           className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg"
// // //         >
// // //           Start Your Project
// // //         </motion.a>
// // //       </section>

// // //       {/* Features Row */}
// // //       <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
// // //         <Feature icon="🔌" text="API Integration" />
// // //         <Feature icon="🛠️" text="Maintenance" />
// // //         <Feature icon="🔒" text="Security" />
// // //         <Feature icon="⚡" text="Performance" />
// // //       </section>

// // //       {/* Excellence Paragraph */}
// // //       <section className="max-w-4xl mx-auto px-6 py-16 text-center">
// // //         <p className="text-lg text-muted-foreground">
// // //           At <span className="font-semibold">Galaxium Digital</span>, we excel in delivering robust web development
// // //           solutions. Our approach combines innovation, scalability, and security to ensure your digital presence is not
// // //           only visually impressive but also technically flawless.
// // //         </p>
// // //       </section>

// // //       {/* Full Stretched Info Sections */}
// // //       <InfoSection
// // //         title="Custom Web Solutions"
// // //         text="We craft tailored websites that perfectly align with your brand identity and business goals. Our solutions ensure your website is not only beautiful but also functional and growth-driven."
// // //         icon={<Layout className="w-20 h-20 text-primary" />}
// // //         reverse={false}
// // //       />
// // //       <InfoSection
// // //         title="System Integrations"
// // //         text="We specialize in seamless API and system integrations to streamline workflows and enhance productivity. From CRMs to payment gateways, we connect it all."
// // //         icon={<Workflow className="w-20 h-20 text-primary" />}
// // //         reverse={true}
// // //       />
// // //       <InfoSection
// // //         title="E-Commerce Platforms"
// // //         text="Launch your online store with advanced e-commerce solutions. From product catalogs to secure checkout, we build scalable platforms designed for sales."
// // //         icon={<ShoppingCart className="w-20 h-20 text-primary" />}
// // //         reverse={false}
// // //       />
// // //       <InfoSection
// // //         title="CMS Development"
// // //         text="Take control of your website with our content management systems. Update, edit, and manage content effortlessly without technical expertise."
// // //         icon={<Code className="w-20 h-20 text-primary" />}
// // //         reverse={true}
// // //       />

// // //       {/* Final CTA */}
// // //       <section className="text-center py-20">
// // //         <motion.a
// // //           whileHover={{ scale: 1.05 }}
// // //           href="/contact"
// // //           className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg"
// // //         >
// // //           Let’s Build Your Website
// // //         </motion.a>
// // //       </section>
// // //     </main>
// // //   )
// // // }

// // // function Feature({ icon, text }: { icon: string; text: string }) {
// // //   return (
// // //     <div>
// // //       <div className="text-3xl">{icon}</div>
// // //       <p className="mt-3 text-sm font-medium">{text}</p>
// // //     </div>
// // //   )
// // // }

// // // function InfoSection({
// // //   title,
// // //   text,
// // //   icon,
// // //   reverse,
// // // }: {
// // //   title: string
// // //   text: string
// // //   icon: React.ReactNode
// // //   reverse?: boolean
// // // }) {
// // //   return (
// // //     <section className="max-w-6xl mx-auto px-6 py-16">
// // //       <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
// // //         {/* Left Content */}
// // //         <div>
// // //           <h2 className="text-2xl font-semibold">{title}</h2>
// // //           <p className="mt-4 text-muted-foreground">{text}</p>
// // //         </div>
// // //         {/* Right Infographic */}
// // //         <div className="flex justify-center">{icon}</div>
// // //       </div>
// // //     </section>
// // //   )
// // // }


// // import { FeatureGrid } from "@/components/sections/feature-grid"
// // import { FeatureRow } from "@/components/sections/feature-row"
// // import FooterSection from "@/components/sections/footer"

// // export default function WebDevelopmentPage() {
// //   return (
// //     <main className="min-h-dvh bg-background text-foreground">

// //       {/* Hero */}
// //       <section aria-labelledby="hero-title" className="relative overflow-hidden">
// //         <div className="mx-auto max-w-6xl px-4 py-20">
// //           <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
// //             {/* Left Content */}
// //             <div className="text-center md:text-left flex-1">
// //               <h1
// //                 id="hero-title"
// //                 className="mt-4 text-4xl font-bold leading-tight md:text-6xl"
// //               >
// //                 Website <span className="text-primary">Development</span>
// //               </h1>
// //               <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
// //                 Galaxium Digital crafts secure, scalable, and visually stunning
// //                 websites. From custom solutions to enterprise-ready platforms, our
// //                 development ensures performance and growth.
// //               </p>
// //             </div>

// //             {/* Right Image */}
// //             <div className="flex-1">
// //               <img
// //                 src="/web-page.png" // 👈 Update to actual path
// //                 alt="Web development illustration"
// //                 className="w-full max-w-lg md:max-w-xl mx-auto md:mx-0"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Background accents */}
// //         <div
// //           aria-hidden="true"
// //           className="pointer-events-none absolute -top-12 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
// //         />
// //         <div
// //           aria-hidden="true"
// //           className="pointer-events-none absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-accent/30 blur-2xl"
// //         />
// //       </section>

// //       {/* Tech badges section */}
// //       <section className="mt-12 text-center px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="flex justify-center gap-2 flex-wrap">
// //             {[
// //               "HTML5", "CSS", "JavaScript", "PHP", "React.js",
// //               "Next.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"
// //             ].map((t) => (
// //               <span
// //                 key={t}
// //                 className="rounded-full bg-muted px-5 py-1 text-xs font-medium text-muted-foreground"
// //               >
// //                 {t}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Feature Grid section */}
// //       <section className="mt-16 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <FeatureGrid />
// //         </div>
// //       </section>

// //       {/* Alternating full-width feature sections */}
// //       <div
// //         id="features"
// //         className="mx-auto max-w-6xl px-4 py-16 space-y-36"
// //       >
// //         <FeatureRow
// //           eyebrow="Custom Web Development"
// //           title="Craft unique, scalable solutions"
// //           description="We build sites around your specific functionality and aesthetics. From simple landing pages to complex applications, our work ensures performance and accessibility."
// //           imageAlt="Custom website illustration"
// //           imageUrl="/customweb2.png"
// //         />
// //         <FeatureRow
// //           eyebrow="Responsive Design"
// //           title="Consistent experience across all devices"
// //           description="With a mobile-first approach, your website adapts seamlessly across devices, ensuring a fast and engaging experience for every user."
// //           imageAlt="Responsive design illustration"
// //           imageUrl="/responsiveWeb.png"

// //         />
// //         <FeatureRow
// //           eyebrow="CMS Integration"
// //           title="Effortless content management"
// //           description="We integrate modern CMS solutions that let you update blogs, media, and pages without needing technical knowledge."
// //           imageAlt="CMS dashboard illustration"
// //           imageUrl="/cmsweb.png"
// //         />
// //         <FeatureRow
// //           eyebrow="API & Integrations"
// //           title="Extend your digital ecosystem"
// //           description="Secure APIs and integrations connect your site to CRMs, payment systems, and external services, powering seamless workflows."
// //           imageAlt="API integrations illustration"
// //           imageUrl="/apiweb.png"
// //         />
// //         <FeatureRow
// //           eyebrow="Security & Support"
// //           title="Keep your site protected and maintained"
// //           description="From continuous monitoring to best-practice security enhancements, we ensure your site stays reliable, safe, and future-proof."
// //           imageAlt="Security illustration"
// //           imageUrl="/securityweb.png"
// //         />
// //       </div>

// //       {/* CTA */}
// //       <section
// //         id="cta"
// //         aria-labelledby="cta-title"
// //         className="mx-auto max-w-5xl px-4 py-24 text-center"
// //       >
// //         <h2
// //           id="cta-title"
// //           className="text-3xl font-bold md:text-4xl text-balance"
// //         >
// //           Ready to <span className="text-primary">Transform</span> Your Website?
// //         </h2>
// //         <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
// //           Partner with Galaxium Digital to unlock excellence in web development.
// //           From strategy to deployment, we deliver solutions built for impact.
// //         </p>
// //         <div className="mt-8 flex justify-center">
// //           <a
// //             href="/contact"
// //             className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md"
// //           >
// //             Let’s Build Together
// //           </a>
// //         </div>
// //       </section>

// //       <FooterSection/>
// //     </main>
// //   )
// // }

// import { FeatureGrid } from "@/components/sections/feature-grid"
// import { FeatureRow } from "@/components/sections/feature-row"
// import FooterSection from "@/components/sections/footer"

// export default function WebDevelopmentPage() {
//   return (
//     <main className="min-h-dvh bg-background text-foreground">

//       {/* Hero */}
//       <section aria-labelledby="hero-title" className="relative overflow-hidden">
//         <div className="mx-auto max-w-6xl px-4 py-20">
//           <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
//             {/* Left Content */}
//             <div className="text-center md:text-left flex-1">
//               <h1
//                 id="hero-title"
//                 className="mt-4 text-4xl font-bold leading-tight md:text-6xl"
//               >
//                 Website <span className="text-primary">Development</span>
//               </h1>
//               <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
//                 Galaxium Digital crafts secure, scalable, and visually stunning
//                 websites. From custom solutions to enterprise-ready platforms, our
//                 development ensures performance and growth.
//               </p>
//             </div>

//             {/* Right Image */}
//             <div className="flex-1">
//               <img
//                 src="/web-page.png"
//                 alt="Web development illustration"
//                 className="w-full max-w-lg md:max-w-xl mx-auto md:mx-0"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Background accents */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -top-12 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
//         />
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-accent/30 blur-2xl"
//         />
//       </section>

//       {/* Tech badges */}
//       <section className="mt-12 text-center px-4">
//         <div className="max-w-6xl mx-auto flex justify-center gap-2 flex-wrap">
//           {[
//             "HTML5", "CSS", "JavaScript", "PHP", "React.js",
//             "Next.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"
//           ].map((t) => (
//             <span
//               key={t}
//               className="rounded-full bg-muted px-5 py-1 text-xs font-medium text-muted-foreground"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Feature Grid */}
//       <section className="mt-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           <FeatureGrid />
//         </div>
//       </section>

//       {/* Alternating full-width sections */}
//       <div id="features" className="mx-auto max-w-6xl px-4 py-16 space-y-36">
//         <FeatureRow
//           eyebrow="Custom Web Development"
//           title="Craft unique, scalable solutions"
//           description="We build sites around your specific functionality and aesthetics. From simple landing pages to complex applications, our work ensures performance and accessibility."
//           imageAlt="Custom website illustration"
//           imageUrl="/customweb2.png"
//         />
//         <FeatureRow
//           eyebrow="Responsive Design"
//           title="Consistent experience across all devices"
//           description="With a mobile-first approach, your website adapts seamlessly across devices, ensuring a fast and engaging experience for every user."
//           imageAlt="Responsive design illustration"
//           imageUrl="/responsiveWeb.png"
//         />
//         <FeatureRow
//           eyebrow="CMS Integration"
//           title="Effortless content management"
//           description="We integrate modern CMS solutions that let you update blogs, media, and pages without needing technical knowledge."
//           imageAlt="CMS dashboard illustration"
//           imageUrl="/cmsweb.png"
//         />
//         <FeatureRow
//           eyebrow="API & Integrations"
//           title="Extend your digital ecosystem"
//           description="Secure APIs and integrations connect your site to CRMs, payment systems, and external services, powering seamless workflows."
//           imageAlt="API integrations illustration"
//           imageUrl="/apiweb.png"
//         />
//         <FeatureRow
//           eyebrow="Security & Support"
//           title="Keep your site protected and maintained"
//           description="From continuous monitoring to best-practice security enhancements, we ensure your site stays reliable, safe, and future-proof."
//           imageAlt="Security illustration"
//           imageUrl="/securityweb.png"
//         />
//       </div>

//       {/* CTA */}
//       <section
//         id="cta"
//         aria-labelledby="cta-title"
//         className="mx-auto max-w-5xl px-4 py-24 text-center"
//       >
//         <h2
//           id="cta-title"
//           className="text-3xl font-bold md:text-4xl text-balance"
//         >
//           Ready to <span className="text-primary">Transform</span> Your Website?
//         </h2>
//         <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
//           Partner with Galaxium Digital to unlock excellence in web development.
//           From strategy to deployment, we deliver solutions built for impact.
//         </p>
//         <div className="mt-8 flex justify-center">
//           <a
//             href="/contact"
//             className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md"
//           >
//             Let’s Build Together
//           </a>
//         </div>
//       </section>

//       <FooterSection />
//     </main>
//   )
// }

import { FeatureGrid } from "@/components/sections/feature-grid"
import { FeatureRow } from "@/components/sections/feature-row"
import FooterSection from "@/components/sections/footer"

export default function WebDevelopmentPage() {
  return (
    <main className="relative z-10 min-h-dvh text-foreground">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="text-center md:text-left flex-1">
              <h1 id="hero-title" className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Website <span className="text-primary">Development</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
                Galaxium Digital crafts secure, scalable, and visually stunning websites. From custom solutions to
                enterprise-ready platforms, our development ensures performance and growth.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative z-10">
              <img
                src="/web-page.png"
                alt="Web development illustration"
                className="w-full max-w-lg md:max-w-xl mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>

        {/* Decorative blobs (behind content) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-accent/30 blur-2xl -z-10"
        />
      </section>

      {/* Tech badges */}
      <section className="mt-12 text-center px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex justify-center gap-2 flex-wrap">
          {[
            "HTML5",
            "CSS",
            "JavaScript",
            "PHP",
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MERN Stack",
          ].map((t) => (
            <span key={t} className="rounded-full px-5 py-1 text-xs font-medium text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mt-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FeatureGrid />
        </div>
      </section>

      {/* Alternating full-width sections */}
      <div id="features" className="mx-auto max-w-6xl px-4 py-16 space-y-36 relative z-10">
        <FeatureRow
          eyebrow="Custom Web Development"
          title="Craft unique, scalable solutions"
          description="We build sites around your specific functionality and aesthetics. From simple landing pages to complex applications, our work ensures performance and accessibility."
          imageAlt="Custom website illustration"
          imageUrl="/customweb2.png"
        />
        <FeatureRow
          eyebrow="Responsive Design"
          title="Consistent experience across all devices"
          description="With a mobile-first approach, your website adapts seamlessly across devices, ensuring a fast and engaging experience for every user. We prioritize performance, accessibility, and intuitive navigation to maximize user satisfaction. Every pixel is optimized for consistency and impact."
          imageAlt="Responsive design illustration"
          imageUrl="/responsiveWeb.png"
        />
        <FeatureRow
          eyebrow="CMS Integration"
          title="Effortless content management"
          description="We integrate modern CMS solutions that let you update blogs, media, and pages without needing technical knowledge. Our setups give you full control over your content with minimal effort. Manage everything easily while keeping your design intact."
          imageAlt="CMS dashboard illustration"
          imageUrl="/cmsweb.png"
        />
        <FeatureRow
          eyebrow="API & Integrations"
          title="Extend your digital ecosystem"
          description="Secure APIs and integrations connect your site to CRMs, payment systems, and external services, powering seamless workflows. We ensure data flows reliably between platforms, enabling automation and smarter decision-making. Your website becomes the hub of your operations."
          imageAlt="API integrations illustration"
          imageUrl="/apiweb.png"
        />
        <FeatureRow
          eyebrow="Security & Support"
          title="Keep your site protected and maintained"
          description="From continuous monitoring to best-practice security enhancements, we ensure your site stays reliable, safe, and future-proof. Our team manages updates, backups, and issue resolution proactively. You focus on growth while we keep your site running flawlessly."
          imageAlt="Security illustration"
          imageUrl="/securityweb.png"
        />
      </div>

      {/* CTA */}
      <section id="cta" aria-labelledby="cta-title" className="mx-auto max-w-5xl px-4 py-24 text-center relative z-10">
        <h2 id="cta-title" className="text-3xl font-bold md:text-4xl text-balance">
          Ready to <span className="text-primary">Transform</span> Your Website?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Partner with Galaxium Digital to unlock excellence in web development. From strategy to deployment, we deliver
          solutions built for impact.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="/contact" className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md">
            Let’s Build Together
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
