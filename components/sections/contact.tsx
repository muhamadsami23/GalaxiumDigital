// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import FloatingIcons from "@/components/floating-icons"
// import { Mail } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { useToast } from "@/hooks/use-toast"

// export default function Contact() {
//   const { toast } = useToast()
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [company, setCompany] = useState("")
//   const [message, setMessage] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   // simple honeypot field (bots often fill "website")
//   const [website, setWebsite] = useState("")

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     if (isSubmitting) return

//     // very light client validation
//     if (!name.trim() || !email.trim() || !message.trim()) {
//       toast({
//         title: "Missing fields",
//         description: "Please fill in your name, email, and message.",
//         variant: "destructive",
//       })
//       return
//     }

//     try {
//       setIsSubmitting(true)
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, company, message, website }),
//       })

//       const data = await res.json().catch(() => ({}))
//       if (!res.ok) {
//         throw new Error(data?.error || "Failed to send message")
//       }

//       toast({ title: "Message sent", description: "Thanks! We’ll get back to you shortly." })
//       // reset
//       setName("")
//       setEmail("")
//       setCompany("")
//       setMessage("")
//       setWebsite("")
//     } catch (err: any) {
//       toast({ title: "Something went wrong", description: err?.message || "Please try again.", variant: "destructive" })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section id="contact" className="relative px-6 py-24">
//       <FloatingIcons items={[{ key: "m", icon: <Mail size={22} />, x: "10%", y: "22%", delay: 0.2 }]} />
//       <div className="mx-auto max-w-3xl">
//         <motion.h2
//           className="text-3xl font-semibold md:text-4xl"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Contact
//         </motion.h2>

//         <motion.form
//           onSubmit={onSubmit}
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-8 grid gap-4 rounded-xl border border-border bg-card/50 p-6"
//           aria-labelledby="contact-heading"
//         >
//           <div className="grid gap-4 md:grid-cols-2">
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Your name
//               </label>
//               <Input
//                 id="name"
//                 name="name"
//                 placeholder="Your name"
//                 className="bg-background/60 focus-visible:ring-accent"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 autoComplete="name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 className="bg-background/60 focus-visible:ring-accent"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 autoComplete="email"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="company" className="sr-only">
//               Company
//             </label>
//             <Input
//               id="company"
//               name="company"
//               placeholder="Company"
//               className="bg-background/60 focus-visible:ring-accent"
//               value={company}
//               onChange={(e) => setCompany(e.target.value)}
//               autoComplete="organization"
//             />
//           </div>

//           {/* honeypot field (hidden) */}
//           <div className="sr-only" aria-hidden="true">
//             <label htmlFor="website" className="sr-only">
//               Website
//             </label>
//             <input
//               id="website"
//               name="website"
//               type="text"
//               tabIndex={-1}
//               autoComplete="off"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="sr-only">
//               Message
//             </label>
//             <Textarea
//               id="message"
//               name="message"
//               placeholder="Tell us about your project..."
//               className="min-h-32 bg-background/60 focus-visible:ring-accent"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               minLength={10}
//             />
//           </div>

//           <div>
//             <Button
//               type="submit"
//               className="bg-primary text-primary-foreground hover:bg-primary/90"
//               disabled={isSubmitting}
//               aria-busy={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </div>

//           {/* social links below the form */}
//           <div className="mt-6 flex items-center gap-4">
//             <a
//               href="https://github.com/galaxium"
//               target="_blank"
//               rel="noreferrer"
//               className="text-sm text-accent underline underline-offset-4"
//             >
//               GitHub
//             </a>
//             <a
//               href="https://www.linkedin.com/company/galaxium"
//               target="_blank"
//               rel="noreferrer"
//               className="text-sm text-accent underline underline-offset-4"
//             >
//               LinkedIn
//             </a>
//             <a
//               href="https://twitter.com/galaxium"
//               target="_blank"
//               rel="noreferrer"
//               className="text-sm text-accent underline underline-offset-4"
//             >
//               X / Twitter
//             </a>
//           </div>
//         </motion.form>
//       </div>
//     </section>
//   )
// }

// "use client"

// import type React from "react"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import FloatingIcons from "@/components/floating-icons"
// import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { useToast } from "@/hooks/use-toast"

// export default function Contact() {
//   const { toast } = useToast()
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [company, setCompany] = useState("")
//   const [message, setMessage] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [website, setWebsite] = useState("")

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     if (isSubmitting) return

//     if (!name.trim() || !email.trim() || !message.trim()) {
//       toast({
//         title: "Missing fields",
//         description: "Please fill in your name, email, and message.",
//         variant: "destructive",
//       })
//       return
//     }

//     try {
//       setIsSubmitting(true)
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, company, message, website }),
//       })

//       const data = await res.json().catch(() => ({}))
//       if (!res.ok) throw new Error(data?.error || "Failed to send message")

//       toast({ title: "Message sent", description: "Thanks! We’ll get back to you shortly." })
//       setName("")
//       setEmail("")
//       setCompany("")
//       setMessage("")
//       setWebsite("")
//     } catch (err: any) {
//       toast({
//         title: "Something went wrong",
//         description: err?.message || "Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section id="contact" className="relative px-6 py-24">
//       <FloatingIcons items={[{ key: "m", icon: <Mail size={22} />, x: "10%", y: "22%", delay: 0.2 }]} />
//       <div className="mx-auto max-w-5xl grid gap-48 md:grid-cols-2 items-center">
//         {/* Left: Contact Form */}
//         <div>
//           <motion.h2
//             className="text-3xl font-semibold md:text-4xl"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Contact
//           </motion.h2>

//           <motion.form
//             onSubmit={onSubmit}
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-8 grid gap-4 rounded-xl border border-border bg-card/50 p-6"
//             aria-labelledby="contact-heading"
//           >
//             <div className="grid gap-4 md:grid-cols-2">
//               <Input
//                 id="name"
//                 name="name"
//                 placeholder="Your name"
//                 className="bg-background/60 focus-visible:ring-accent"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 autoComplete="name"
//               />
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 className="bg-background/60 focus-visible:ring-accent"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 autoComplete="email"
//               />
//             </div>

//             <Input
//               id="company"
//               name="company"
//               placeholder="Company"
//               className="bg-background/60 focus-visible:ring-accent"
//               value={company}
//               onChange={(e) => setCompany(e.target.value)}
//               autoComplete="organization"
//             />

//             {/* Honeypot */}
//             <div className="sr-only" aria-hidden="true">
//               <input
//                 id="website"
//                 name="website"
//                 type="text"
//                 tabIndex={-1}
//                 autoComplete="off"
//                 value={website}
//                 onChange={(e) => setWebsite(e.target.value)}
//               />
//             </div>

//             <Textarea
//               id="message"
//               name="message"
//               placeholder="Tell us about your project..."
//               className="min-h-32 bg-background/60 focus-visible:ring-accent"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               minLength={10}
//             />

//             <Button
//               type="submit"
//               className="bg-primary text-primary-foreground hover:bg-primary/90"
//               disabled={isSubmitting}
//               aria-busy={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </motion.form>
//         </div>

//         {/* Right: Icons + Info (one column) */}
//         <div className="space-y-6 md:pl-6">
//           <div className="flex items-center gap-3">
//             <Facebook className="text-accent" size={22} />
//             <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">
//               Facebook
//             </a>
//           </div>
//           <div className="flex items-center gap-3">
//             <Instagram className="text-accent" size={22} />
//             <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">
//               Instagram
//             </a>
//           </div>
//           <div className="flex items-center gap-3">
//             <Linkedin className="text-accent" size={22} />
//             <a href="https://linkedin.com/company/galaxium" target="_blank" rel="noreferrer" className="hover:underline">
//               LinkedIn
//             </a>
//           </div>
//           <div className="flex items-center gap-3">
//             <Mail className="text-accent" size={22} />
//             <a href="mailto:hello@galaxium.com" className="hover:underline">
//               hello@galaxium.com
//             </a>
//           </div>
//           <div className="flex items-center gap-3">
//             <Phone className="text-accent" size={22} />
//             <a href="tel:+1234567890" className="hover:underline">
//               +1 (234) 567-890
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { motion } from "framer-motion"
// import { Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
// import FloatingIcons from "@/components/floating-icons"
// import { Button } from "@/components/ui/button"

// export default function Contact() {
//   return (
//     <section id="contact" className="relative px-6 py-24 overflow-hidden">
//       {/* Floating Icons (background motion) */}
//       <FloatingIcons
//         items={[
//           { key: "fb", icon: <Facebook size={22} />, x: "12%", y: "28%", delay: 0.4 },
//           { key: "in", icon: <Instagram size={22} />, x: "70%", y: "15%", delay: 0.8 },
//           { key: "li", icon: <Linkedin size={22} />, x: "50%", y: "60%", delay: 1.2 },
//         ]}
//       />

//       <div className="mx-auto max-w-5xl text-center">
//         {/* Heading */}
//         <motion.h2
//           className="text-4xl md:text-5xl font-semibold mb-6"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Get in Touch
//         </motion.h2>

//         {/* Subheading */}
//         <motion.p
//           className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           We believe in quick, real conversations — no waiting, no endless forms.  
//           Just reach out directly through any of the platforms below, and let’s talk!
//         </motion.p>

//         {/* Socials */}
//         <motion.div
//           className="mt-12 flex flex-col gap-6 items-center text-lg"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center gap-4 hover:text-accent transition-all"
//           >
//             <Facebook className="text-accent" size={32} />
//             <span>Facebook</span>
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center gap-4 hover:text-accent transition-all"
//           >
//             <Instagram className="text-accent" size={32} />
//             <span>Instagram</span>
//           </a>
//           <a
//             href="https://linkedin.com/company/galaxium"
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center gap-4 hover:text-accent transition-all"
//           >
//             <Linkedin className="text-accent" size={32} />
//             <span>LinkedIn</span>
//           </a>
//           <a
//             href="mailto:hello@galaxium.com"
//             className="flex items-center gap-4 hover:text-accent transition-all"
//           >
//             <Mail className="text-accent" size={32} />
//             <span>hello@galaxium.com</span>
//           </a>
//           <a
//             href="tel:+1234567890"
//             className="flex items-center gap-4 hover:text-accent transition-all"
//           >
//             <Phone className="text-accent" size={32} />
//             <span>+1 (234) 567-890</span>
//           </a>
//         </motion.div>

//         {/* CTA Card */}
//         <motion.div
//           className="mt-16 mx-auto max-w-xl bg-gradient-to-r from-accent/10 to-transparent border border-accent/30 rounded-2xl p-8 backdrop-blur-sm shadow-lg"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-xl font-semibold text-accent mb-3">
//             Let’s Talk About Your Next Big Idea 🚀
//           </h3>
//           <p className="text-muted-foreground leading-relaxed">
//             Whether it’s web, mobile, or marketing — we help you make it shine.  
//             Drop us a message directly on any of our socials or email, and get started instantly.
//           </p>
//           <Button
//             asChild
//             className="mt-6 bg-accent text-black hover:bg-accent/80 rounded-full text-lg px-6 py-3"
//           >
//             <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
//               <MessageCircle className="mr-2" size={22} />
//               Chat on WhatsApp
//             </a>
//           </Button>
//         </motion.div>

//         {/* Info Cards */}
//         <motion.div
//           className="mt-16 grid gap-6 sm:grid-cols-3 text-center"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <div className="p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/40 transition-all">
//             <h4 className="text-accent font-semibold">Location</h4>
//             <p className="text-sm text-muted-foreground mt-1">Lahore, Pakistan</p>
//           </div>
//           <div className="p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/40 transition-all">
//             <h4 className="text-accent font-semibold">Available</h4>
//             <p className="text-sm text-muted-foreground mt-1">Mon – Sat, 10am – 8pm</p>
//           </div>
//           <div className="p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-accent/40 transition-all">
//             <h4 className="text-accent font-semibold">Response Time</h4>
//             <p className="text-sm text-muted-foreground mt-1">Within a few hours</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import FloatingIcons from "@/components/floating-icons"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 overflow-hidden">
      {/* Floating Icons (background motion) */}
      <FloatingIcons
        items={[
          { key: "fb", icon: <Facebook size={22} />, x: "12%", y: "28%", delay: 0.4 },
          { key: "in", icon: <Instagram size={22} />, x: "70%", y: "15%", delay: 0.8 },
        ]}
      />

      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-31 items-center">
        {/* Left Side — Heading + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            We Believe in Quick Conversations ⚡  
            <span className="block text-muted-foreground text-lg font-normal mt-3">
              No forms. No waiting. Just a fast, human response every time.
            </span>
          </h2>

          {/* CTA Card */}
          <motion.div
            className="mt-10 max-w-md bg-gradient-to-r from-accent/10 to-transparent border border-accent/30 rounded-2xl p-8 backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-accent mb-3">
              Let’s Talk About Your Next Big Idea 🚀
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether it’s web, mobile, or marketing — we’ll make it shine.  
              Message us directly and get started instantly!
            </p>
            <Button
              asChild
              className="mt-6 bg-accent text-black hover:bg-accent/80 rounded-full text-lg px-6 py-3"
            >
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2" size={22} />
                Chat on WhatsApp
              </a>
            </Button>

            <p className="text-sm text-gray-400 mt-4">
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side — Socials */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="flex flex-col justify-center items-start gap-6 text-lg"
>
  <a
    href="https://www.facebook.com/profile.php?id=61580428025839"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-4 hover:text-accent transition-all"
  >
    <div className="w-[44px] flex justify-center">
      <Facebook className="text-accent" size={36} />
    </div>
    <span>Facebook</span>
  </a>

  <a
    href="https://instagram.com/galaxiumdigital"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-4 hover:text-accent transition-all"
  >
    <div className="w-[44px] flex justify-center">
      <Instagram className="text-accent" size={36} />
    </div>
    <span>Instagram</span>
  </a>



  <a
    href="mailto:galaxiumdigital@gmail.com"
    className="flex items-center gap-4 hover:text-accent transition-all"
  >
    <div className="w-[44px] flex justify-center">
      <Mail className="text-accent" size={36} />
    </div>
    <span>galaxiumdigital@gmail.com</span>
  </a>

  <a
    href="tel:+923001234567"
    className="flex items-center gap-4 hover:text-accent transition-all"
  >
    <div className="w-[44px] flex justify-center">
      <Phone className="text-accent" size={36} />
    </div>
    <span>+92 300 1234567</span>
  </a>
</motion.div>

      </div>
    </section>
  )
}
