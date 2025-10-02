// "use client"
// import { Facebook, Instagram, Linkedin } from "lucide-react"

// export default function FooterSection() {
//   return (
//     <footer className="relative mt-16 px-6 pb-12">
//       <div className="mx-auto h-1 w-full max-w-6xl rounded-full bg-gradient-to-r from-accent via-primary to-secondary" />
//       <div className="mx-auto mt-6 flex max-w-6xl flex-col justify-between gap-6 text-sm text-muted-foreground md:flex-row">
//         <div>
//           <p className="font-medium text-foreground">Galaxium Digital</p>
//           <p className="mt-1 max-w-md text-pretty">
//             Designing and engineering fast, beautiful, and reliable digital products.
//           </p>
//           <p className="mt-3 text-xs italic">“Don’t just exist online. Thrive.”</p>
//         </div>
//          <div className="flex items-center gap-5 mt-4 md:mt-0">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Facebook"
//             className="text-foreground/80 hover:text-foreground transition transform hover:scale-110"
//           >
//             <Facebook size={24} />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Instagram"
//             className="text-foreground/80 hover:text-foreground transition transform hover:scale-110"
//           >
//             <Instagram size={24} />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="LinkedIn"
//             className="text-foreground/80 hover:text-foreground transition transform hover:scale-110"
//           >
//             <Linkedin size={24} />
//           </a>
//         </div>
//       </div>

//       <div className="mx-auto mt-4 max-w-6xl text-xs text-muted-foreground">
//         © {new Date().getFullYear()} Galaxium Digital
//       </div>
//     </footer>
//   )
// }
"use client"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="relative mt-12 px-6 py-10">
      {/* Top Gradient Separator */}
      <div className="mx-auto h-1 w-full max-w-6xl rounded-full bg-gradient-to-r from-accent via-primary to-secondary" />

      {/* Main Content */}
      <div className="mx-auto mt-6 max-w-6xl flex flex-col md:flex-row justify-between items-start gap-6 text-sm text-muted-foreground">
        {/* Left: Brand Info */}
        <div className="flex flex-col gap-2">
          <p className="font-medium text-foreground text-lg">Galaxium Digital</p>
          <p className="text-pretty max-w-md">
            Designing and engineering fast, beautiful, and reliable digital products.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.facebook.com/profile.php?id=61580428025839"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-foreground/80 hover:text-foreground transition transform hover:scale-110"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/galaxiumdigital/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-foreground/80 hover:text-foreground transition transform hover:scale-110"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Centered: Motto + Copyright */}
      <div className="mt-8 text-center text-xs text-muted-foreground">
        <p className="italic mb-1">“Don’t just exist online. Thrive.”</p>
        <p>© {new Date().getFullYear()} Galaxium Digital</p>
      </div>
    </footer>
  )
}
