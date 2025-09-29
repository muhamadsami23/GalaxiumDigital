// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/about" , label: "About" },
//   { href: "/services", label: "Services" },
//   { href: "/portfolio", label: "Portfolio" },
//   { href: "/contact", label: "Contact" },
// ]

// export default function Navbar() {
//   const pathname = usePathname()
//   return (
//     <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
//         <Link href="/" className="text-lg font-semibold tracking-wide text-primary">
//           Galaxium Digital
//         </Link>

//         <nav aria-label="Main">
//           <ul className="flex items-center gap-6 text-sm">
//             {links.map((l) => (
//               <li key={l.href}>
//                 <Link
//                   href={l.href}
//                   className={`hover:text-primary ${pathname === l.href ? "text-primary" : "text-foreground/80"}`}
//                 >
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   )
// }

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          prefetch={true}
          className="text-lg font-semibold tracking-wide text-primary"
        >
          Galaxium Digital
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  prefetch={true}
                  className={`hover:text-primary ${
                    pathname === l.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
