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

"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import FloatingIcons from "@/components/floating-icons"
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [website, setWebsite] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isSubmitting) return

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, website }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.error || "Failed to send message")

      toast({ title: "Message sent", description: "Thanks! We’ll get back to you shortly." })
      setName("")
      setEmail("")
      setCompany("")
      setMessage("")
      setWebsite("")
    } catch (err: any) {
      toast({
        title: "Something went wrong",
        description: err?.message || "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <FloatingIcons items={[{ key: "m", icon: <Mail size={22} />, x: "10%", y: "22%", delay: 0.2 }]} />
      <div className="mx-auto max-w-5xl grid gap-48 md:grid-cols-2 items-center">
        {/* Left: Contact Form */}
        <div>
          <motion.h2
            className="text-3xl font-semibold md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid gap-4 rounded-xl border border-border bg-card/50 p-6"
            aria-labelledby="contact-heading"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                className="bg-background/60 focus-visible:ring-accent"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="bg-background/60 focus-visible:ring-accent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <Input
              id="company"
              name="company"
              placeholder="Company"
              className="bg-background/60 focus-visible:ring-accent"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoComplete="organization"
            />

            {/* Honeypot */}
            <div className="sr-only" aria-hidden="true">
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              className="min-h-32 bg-background/60 focus-visible:ring-accent"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              minLength={10}
            />

            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>

        {/* Right: Icons + Info (one column) */}
        <div className="space-y-6 md:pl-6">
          <div className="flex items-center gap-3">
            <Facebook className="text-accent" size={22} />
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">
              Facebook
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="text-accent" size={22} />
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="text-accent" size={22} />
            <a href="https://linkedin.com/company/galaxium" target="_blank" rel="noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-accent" size={22} />
            <a href="mailto:hello@galaxium.com" className="hover:underline">
              hello@galaxium.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-accent" size={22} />
            <a href="tel:+1234567890" className="hover:underline">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
