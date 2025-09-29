// // // "use client"

// // // import { useEffect, useRef } from "react"
// // // import Matter from "matter-js"

// // // const logos = [
// // //   "React",
// // //   "Next.js",
// // //   "Node.js",
// // //   "Flutter",
// // //   "Figma",
// // //   "Python",
// // //   "TypeScript",
// // //   "Tailwind",
// // //   "Angular",
// // //   "Ruby",
// // //   "MongoDB",
// // //   "MERN",
// // //   "Google Ads",
// // //   "Facebook",
// // //   "Instagram",
// // //   "LinkedIn",
// // //   "App Dev",
// // //   "UI/UX",
// // //   "Graphic Design",
// // //   "Digital Marketing",
// // //   "Automation",
// // //   "Linear Programming",
// // //   "Java", "C++", "C#", "PHP", "Go", "Rust", "Kotlin", "Swift", "SQL", "NoSQL",
// // // "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Linux", "Git", "CI/CD", "GraphQL", "REST API",
// // // "SEO", "Content Writing", "Email Marketing", "Social Media Marketing", "Branding", "UX Research", "Prototyping", "Wireframing", "Illustrator", "Photoshop",
// // // "After Effects", "Premiere Pro", "Blender", "3D Modeling", "Animation", "AR/VR", "Machine Learning", "AI", "Data Analysis", "Data Science",
// // // "Excel", "Power BI", "Tableau", "Big Data", "Cybersecurity", "Penetration Testing", "Blockchain", "Smart Contracts", "NFTs", "Game Development"

// // // ]

// // // export default function TechStack() {
// // //   const sceneRef = useRef<HTMLDivElement>(null)

// // //   useEffect(() => {
// // //     const scene = sceneRef.current
// // //     if (!scene) return

// // //     const { Engine, Render, World, Bodies, Events, Runner, Body } = Matter
// // //     const engine = Engine.create()
// // //     engine.world.gravity.y = 1.1

// // //     const width = scene.clientWidth
// // //     const height = scene.clientHeight

// // //     const render = Render.create({
// // //       element: scene,
// // //       engine,
// // //       options: {
// // //         width,
// // //         height,
// // //         wireframes: false,
// // //         background: "transparent",
// // //         pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
// // //       },
// // //     })

// // //     const floor = Bodies.rectangle(width / 2, height + 10, width + 80, 40, {
// // //       isStatic: true,
// // //     })
// // //     const leftWall = Bodies.rectangle(-20, height / 2, 40, height + 200, {
// // //       isStatic: true,
// // //     })
// // //     const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height + 200, {
// // //       isStatic: true,
// // //     })
// // //     World.add(engine.world, [floor, leftWall, rightWall])

// // //     const cleanupDivs: HTMLDivElement[] = []
// // //     const bodies: Matter.Body[] = []

// // //     logos.forEach((logo, i) => {
// // //       const w = 70 + Math.random() * 60
// // //       const h = 26 + Math.random() * 18
// // //       const x = 40 + Math.random() * Math.max(40, width - 80)
// // //       const y = -60 - i * 40

// // //       const body = Bodies.rectangle(x, y, w, h, {
// // //         restitution: 0.2,
// // //         friction: 0.7,
// // //         frictionAir: 0.02,
// // //         chamfer: { radius: 10 },
// // //         density: 0.0015 + Math.random() * 0.001,
// // //         render: { fillStyle: "transparent" },
// // //       })
// // //       World.add(engine.world, body)
// // //       bodies.push(body)

// // //       const el = document.createElement("div")
// // //       el.textContent = logo
// // //       el.style.position = "absolute"
// // //       el.style.left = "0px"
// // //       el.style.top = "0px"
// // //       el.style.width = `${w}px`
// // //       el.style.height = `${h}px`
// // //       el.style.display = "flex"
// // //       el.style.alignItems = "center"
// // //       el.style.justifyContent = "center"
// // //       el.style.fontSize = "12px"
// // //       el.style.fontWeight = "600"
// // //       el.style.borderRadius = "9999px"
// // //       el.style.border = "1px solid var(--border)"
// // //       el.style.background = "color-mix(in oklab, var(--card), transparent 30%)"
// // //       el.style.color = "var(--foreground)"
// // //       el.style.backdropFilter = "blur(4px)"
// // //       el.style.pointerEvents = "none"
// // //       el.style.userSelect = "none"
// // //       scene.appendChild(el)
// // //       cleanupDivs.push(el)

// // //       Events.on(engine, "afterUpdate", () => {
// // //         el.style.left = `${body.position.x - w / 2}px`
// // //         el.style.top = `${body.position.y - h / 2}px`
// // //         el.style.transform = `rotate(${body.angle}rad)`
// // //       })
// // //     })

// // //     const runner = Runner.create()
// // //     Runner.run(runner, engine)
// // //     Render.run(render)

// // //     const handleResize = () => {
// // //       const newW = scene.clientWidth
// // //       const newH = scene.clientHeight

// // //       render.canvas.width = newW
// // //       render.canvas.height = newH
// // //       Body.setPosition(floor, { x: newW / 2, y: newH + 10 })
// // //       Body.setVertices(floor, Bodies.rectangle(newW / 2, newH + 10, newW + 80, 40, { isStatic: true }).vertices)
// // //       Body.setPosition(leftWall, { x: -20, y: newH / 2 })
// // //       Body.setPosition(rightWall, { x: newW + 20, y: newH / 2 })
// // //     }
// // //     window.addEventListener("resize", handleResize)

// // //     return () => {
// // //       window.removeEventListener("resize", handleResize)
// // //       Render.stop(render)
// // //       render.canvas.remove()
// // //       Engine.clear(engine)
// // //       cleanupDivs.forEach((d) => d.remove())
// // //       scene.innerHTML = ""
// // //     }
// // //   }, [])

// // //   return (
// // //     <section className="relative px-6 py-24">
// // //       <div className="mx-auto max-w-6xl">
// // //         <h2 className="text-balance text-3xl font-semibold md:text-4xl">
// // //           We build with the tools your future deserves.
// // //         </h2>

// // //         <div className="relative mt-10 h-72 w-full overflow-hidden rounded-2xl border border-dashed border-border bg-card/40">
// // //           <div ref={sceneRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
// // //           <div className="relative z-10 h-full w-full" />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // "use client"

// // import { useEffect, useRef } from "react"
// // import Matter from "matter-js"

// // const logos = [
// //   "React","Next.js","Node.js","Flutter","Figma",
// //   "Python","TypeScript","Tailwind","Angular","Ruby",
// //   "MongoDB","MERN","Google Ads","Facebook","Instagram",
// //   "LinkedIn","App Dev","UI/UX","Graphic Design","Digital Marketing",
// //   "Automation","Linear Programming","Java","C++","C#","PHP","Go",
// //   "Rust","Kotlin","Swift","SQL","NoSQL","Docker","Kubernetes","AWS",
// //   "Azure","GCP","Linux","Git","CI/CD","GraphQL","REST API","SEO",
// //   "Content Writing","Email Marketing","Social Media Marketing","Branding",
// //   "UX Research","Prototyping","Wireframing","Illustrator","Photoshop",
// //   "After Effects","Premiere Pro","Blender","3D Modeling","Animation","AR/VR",
// //   "Machine Learning","AI","Data Analysis","Data Science","Excel","Power BI",
// //   "Tableau","Big Data","Cybersecurity","Penetration Testing","Blockchain",
// //   "Smart Contracts","NFTs","Game Development"
// // ]

// // export default function TechStack() {
// //   const sceneRef = useRef<HTMLDivElement>(null)
// //   const engineRef = useRef<Matter.Engine | null>(null)
// //   const renderRef = useRef<Matter.Render | null>(null)
// //   const cleanupDivsRef = useRef<HTMLDivElement[]>([])

// //   const initAnimation = () => {
// //     const scene = sceneRef.current
// //     if (!scene) return

// //     // Clean up previous animation if exists
// //     if (engineRef.current) {
// //       Matter.Render.stop(renderRef.current!)
// //       Matter.Runner.stop(Matter.Runner.create())
// //       engineRef.current.world.bodies.forEach(b => Matter.World.remove(engineRef.current!.world, b))
// //       cleanupDivsRef.current.forEach(d => d.remove())
// //       scene.innerHTML = ""
// //     }

// //     const { Engine, Render, World, Bodies, Events, Runner, Body } = Matter
// //     const engine = Engine.create()
// //     engine.world.gravity.y = 1.1
// //     engineRef.current = engine

// //     const width = scene.clientWidth
// //     const height = scene.clientHeight

// //     const render = Render.create({
// //       element: scene,
// //       engine,
// //       options: {
// //         width,
// //         height,
// //         wireframes: false,
// //         background: "transparent",
// //         pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
// //       },
// //     })
// //     renderRef.current = render

// //     const floor = Bodies.rectangle(width / 2, height + 10, width + 80, 40, { isStatic: true })
// //     const leftWall = Bodies.rectangle(-20, height / 2, 40, height + 200, { isStatic: true })
// //     const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height + 200, { isStatic: true })
// //     World.add(engine.world, [floor, leftWall, rightWall])

// //     const cleanupDivs: HTMLDivElement[] = []

// //     logos.forEach((logo, i) => {
// //       const w = 70 + Math.random() * 60
// //       const h = 26 + Math.random() * 18
// //       const x = 40 + Math.random() * Math.max(40, width - 80)
// //       const y = -60 - i * 40

// //       const body = Bodies.rectangle(x, y, w, h, {
// //         restitution: 0.2,
// //         friction: 0.7,
// //         frictionAir: 0.02,
// //         chamfer: { radius: 10 },
// //         density: 0.0015 + Math.random() * 0.001,
// //         render: { fillStyle: "transparent" },
// //       })
// //       World.add(engine.world, body)

// //       const el = document.createElement("div")
// //       el.textContent = logo
// //       el.style.position = "absolute"
// //       el.style.left = "0px"
// //       el.style.top = "0px"
// //       el.style.width = `${w}px`
// //       el.style.height = `${h}px`
// //       el.style.display = "flex"
// //       el.style.alignItems = "center"
// //       el.style.justifyContent = "center"
// //       el.style.fontSize = "12px"
// //       el.style.fontWeight = "600"
// //       el.style.borderRadius = "9999px"
// //       el.style.border = "1px solid var(--border)"
// //       el.style.background = "color-mix(in oklab, var(--card), transparent 30%)"
// //       el.style.color = "var(--foreground)"
// //       el.style.backdropFilter = "blur(4px)"
// //       el.style.pointerEvents = "none"
// //       el.style.userSelect = "none"
// //       scene.appendChild(el)
// //       cleanupDivs.push(el)

// //       Events.on(engine, "afterUpdate", () => {
// //         el.style.left = `${body.position.x - w / 2}px`
// //         el.style.top = `${body.position.y - h / 2}px`
// //         el.style.transform = `rotate(${body.angle}rad)`
// //       })
// //     })

// //     cleanupDivsRef.current = cleanupDivs

// //     const runner = Runner.create()
// //     Runner.run(runner, engine)
// //     Render.run(render)
// //   }

// //   useEffect(() => {
// //     if (!sceneRef.current) return

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             initAnimation()
// //           }
// //         })
// //       },
// //       { threshold: 0.3 } // trigger when 30% of section is visible
// //     )

// //     observer.observe(sceneRef.current)

// //     return () => observer.disconnect()
// //   }, [])

// //   return (
// //     <section className="relative px-6 py-24">
// //       <div className="mx-auto max-w-6xl">
// //         <h2 className="text-balance text-3xl font-semibold md:text-4xl">
// //           We build with the tools your future deserves.
// //         </h2>

// //         <div className="relative mt-10 h-72 w-full overflow-hidden rounded-2xl border border-dashed border-border bg-card/40">
// //           <div ref={sceneRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
// //           <div className="relative z-10 h-full w-full" />
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useEffect, useRef } from "react"
// import Matter from "matter-js"

// const logos = [
//   "React","Next.js","Node.js","Flutter","Figma",
//   "Python","TypeScript","Tailwind","Angular","Ruby",
//   "MongoDB","MERN","Google Ads","Facebook","Instagram",
//   "LinkedIn","App Dev","UI/UX","Graphic Design","Digital Marketing",
//   "Automation","Linear Programming","Java","C++","C#","PHP","Go",
//   "Rust","Kotlin","Swift","SQL","NoSQL","Docker","Kubernetes","AWS",
//   "Azure","GCP","Linux","Git","CI/CD","GraphQL","REST API","SEO",
//   "Content Writing","Email Marketing","Social Media Marketing","Branding",
//   "UX Research","Prototyping","Wireframing","Illustrator","Photoshop",
//   "After Effects","Premiere Pro","Blender","3D Modeling","Animation","AR/VR",
//   "Machine Learning","AI","Data Analysis","Data Science","Excel","Power BI",
//   "Tableau","Big Data","Cybersecurity","Penetration Testing","Blockchain",
//   "Smart Contracts","NFTs","Game Development"
// ]

// export default function TechStack() {
//   const sceneRef = useRef<HTMLDivElement>(null)
//   const engineRef = useRef<Matter.Engine | null>(null)
//   const renderRef = useRef<Matter.Render | null>(null)
//   const cleanupDivsRef = useRef<HTMLDivElement[]>([])
//   const runnerRef = useRef<Matter.Runner | null>(null)

//   const initAnimation = () => {
//     const scene = sceneRef.current
//     if (!scene) return

//     // Cleanup existing animation if any
//     if (engineRef.current) {
//       Matter.Render.stop(renderRef.current!)
//       Matter.Runner.stop(runnerRef.current!)
//       engineRef.current.world.bodies.forEach(b => Matter.World.remove(engineRef.current!.world, b))
//       cleanupDivsRef.current.forEach(d => d.remove())
//       scene.innerHTML = ""
//     }

//     const { Engine, Render, World, Bodies, Events, Runner, Body } = Matter
//     const engine = Engine.create()
//     engine.world.gravity.y = 1.1
//     engineRef.current = engine

//     const width = scene.clientWidth
//     const height = scene.clientHeight

//     const render = Render.create({
//       element: scene,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//         pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
//       },
//     })
//     renderRef.current = render

//     const floor = Bodies.rectangle(width / 2, height + 10, width + 80, 40, { isStatic: true })
//     const leftWall = Bodies.rectangle(-20, height / 2, 40, height + 200, { isStatic: true })
//     const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height + 200, { isStatic: true })
//     World.add(engine.world, [floor, leftWall, rightWall])

//     const cleanupDivs: HTMLDivElement[] = []

//     logos.forEach((logo, i) => {
//       const w = 70 + Math.random() * 60
//       const h = 26 + Math.random() * 18
//       const x = 40 + Math.random() * Math.max(40, width - 80)
//       const y = -60 - i * 40

//       const body = Bodies.rectangle(x, y, w, h, {
//         restitution: 0.2,
//         friction: 0.7,
//         frictionAir: 0.02,
//         chamfer: { radius: 10 },
//         density: 0.0015 + Math.random() * 0.001,
//         render: { fillStyle: "transparent" },
//       })
//       World.add(engine.world, body)

//       const el = document.createElement("div")
//       el.textContent = logo
//       el.style.position = "absolute"
//       el.style.left = "0px"
//       el.style.top = "0px"
//       el.style.width = `${w}px`
//       el.style.height = `${h}px`
//       el.style.display = "flex"
//       el.style.alignItems = "center"
//       el.style.justifyContent = "center"
//       el.style.fontSize = "12px"
//       el.style.fontWeight = "600"
//       el.style.borderRadius = "9999px"
//       el.style.border = "1px solid var(--border)"
//       el.style.background = "color-mix(in oklab, var(--card), transparent 30%)"
//       el.style.color = "var(--foreground)"
//       el.style.backdropFilter = "blur(4px)"
//       el.style.pointerEvents = "none"
//       el.style.userSelect = "none"
//       el.style.opacity = "0"
//       el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
//       scene.appendChild(el)
//       cleanupDivs.push(el)

//       // Animate opacity
//       setTimeout(() => {
//         el.style.opacity = "1"
//       }, i * 50) // stagger fade-in

//       Events.on(engine, "afterUpdate", () => {
//         el.style.left = `${body.position.x - w / 2}px`
//         el.style.top = `${body.position.y - h / 2}px`
//         el.style.transform = `rotate(${body.angle}rad)`
//       })
//     })

//     cleanupDivsRef.current = cleanupDivs

//     const runner = Runner.create()
//     runnerRef.current = runner
//     Runner.run(runner, engine)
//     Render.run(render)
//   }

//   const cleanupAnimation = () => {
//     const scene = sceneRef.current
//     if (!scene) return

//     // Animate blocks going up before removing
//     cleanupDivsRef.current.forEach((el, i) => {
//       el.style.transition = "transform 0.6s ease, opacity 0.6s ease"
//       el.style.transform = `translateY(-${scene.clientHeight + 50}px)`
//       el.style.opacity = "0"
//     })

//     setTimeout(() => {
//       if (engineRef.current) {
//         Matter.Render.stop(renderRef.current!)
//         Matter.Runner.stop(runnerRef.current!)
//         engineRef.current.world.bodies.forEach(b => Matter.World.remove(engineRef.current!.world, b))
//       }
//       cleanupDivsRef.current.forEach(d => d.remove())
//       scene.innerHTML = ""
//     }, 700) // wait for animation
//   }

//   useEffect(() => {
//     if (!sceneRef.current) return

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             initAnimation()
//           } else {
//             cleanupAnimation()
//           }
//         })
//       },
//       { threshold: 0.3 }
//     )

//     observer.observe(sceneRef.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="relative px-6 py-24">
//       <div className="mx-auto max-w-6xl">
//         <h2 className="text-balance text-3xl font-semibold md:text-4xl">
//           Future-ready tools for visionary projects.
//         </h2>

//         <div className="relative mt-10 h-72 w-full overflow-hidden rounded-2xl border border-dashed border-border bg-card/40">
//           <div ref={sceneRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
//           <div className="relative z-10 h-full w-full" />
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useEffect, useRef } from "react"
import Matter from "matter-js"

const logos = [
  "React","Next.js","Node.js","Flutter","Figma",
  "Python","TypeScript","Tailwind","Angular","Ruby",
  "MongoDB","MERN","Google Ads","Facebook","Instagram",
  "LinkedIn","App Dev","UI/UX","Graphic Design","Digital Marketing",
  "Automation","Linear Programming","Java","C++","C#","PHP","Go",
  "Rust","Kotlin","Swift","SQL","NoSQL","Docker","Kubernetes","AWS",
  "Azure","GCP","Linux","Git","CI/CD","GraphQL","REST API","SEO",
  "Content Writing","Email Marketing","Social Media Marketing","Branding",
  "UX Research","Prototyping","Wireframing","Illustrator","Photoshop",
  "After Effects","Premiere Pro","Blender","3D Modeling","Animation","AR/VR",
  "Machine Learning","AI","Data Analysis","Data Science","Excel","Power BI",
  "Tableau","Big Data","Cybersecurity","Penetration Testing","Blockchain",
  "Smart Contracts","NFTs","Game Development"
]

export default function TechStack() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const renderRef = useRef<Matter.Render | null>(null)
  const cleanupDivsRef = useRef<HTMLDivElement[]>([])
  const runnerRef = useRef<Matter.Runner | null>(null)

  const initAnimation = () => {
    const scene = sceneRef.current
    if (!scene) return

    // Cleanup existing animation if any
    if (engineRef.current) {
      Matter.Render.stop(renderRef.current!)
      Matter.Runner.stop(runnerRef.current!)
      engineRef.current.world.bodies.forEach(b => Matter.World.remove(engineRef.current!.world, b))
      cleanupDivsRef.current.forEach(d => d.remove())
      scene.innerHTML = ""
    }

    const { Engine, Render, World, Bodies, Events, Runner } = Matter
    const engine = Engine.create()
    engine.world.gravity.y = 1.1
    engineRef.current = engine

    const width = scene.clientWidth
    const height = scene.clientHeight

    const render = Render.create({
      element: scene,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
      },
    })
    renderRef.current = render

    const floor = Bodies.rectangle(width / 2, height + 10, width + 80, 40, { isStatic: true })
    const leftWall = Bodies.rectangle(-20, height / 2, 40, height + 200, { isStatic: true })
    const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height + 200, { isStatic: true })
    World.add(engine.world, [floor, leftWall, rightWall])

    const cleanupDivs: HTMLDivElement[] = []

    logos.forEach((logo, i) => {
      const w = 70 + Math.random() * 60
      const h = 26 + Math.random() * 18
      const x = 40 + Math.random() * Math.max(40, width - 80)
      const y = -60 - i * 40

      const body = Bodies.rectangle(x, y, w, h, {
        restitution: 0.2,
        friction: 0.7,
        frictionAir: 0.02,
        chamfer: { radius: 10 },
        density: 0.0015 + Math.random() * 0.001,
        render: { fillStyle: "transparent" },
      })
      World.add(engine.world, body)

      const el = document.createElement("div")
      el.textContent = logo
      el.style.position = "absolute"
      el.style.left = "0px"
      el.style.top = "0px"
      el.style.width = `${w}px`
      el.style.height = `${h}px`
      el.style.display = "flex"
      el.style.alignItems = "center"
      el.style.justifyContent = "center"
      el.style.fontSize = "12px"
      el.style.fontWeight = "600"
      el.style.borderRadius = "9999px"
      el.style.border = "1px solid var(--border)"
      el.style.background = "color-mix(in oklab, var(--card), transparent 30%)"
      el.style.color = "var(--foreground)"
      el.style.backdropFilter = "blur(4px)"
      el.style.pointerEvents = "none"
      el.style.userSelect = "none"
      el.style.opacity = "0"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      scene.appendChild(el)
      cleanupDivs.push(el)

      // Animate opacity
      setTimeout(() => {
        el.style.opacity = "1"
      }, i * 50) // stagger fade-in

      Events.on(engine, "afterUpdate", () => {
        el.style.left = `${body.position.x - w / 2}px`
        el.style.top = `${body.position.y - h / 2}px`
        el.style.transform = `rotate(${body.angle}rad)`
      })
    })

    cleanupDivsRef.current = cleanupDivs

    const runner = Runner.create()
    runnerRef.current = runner
    Runner.run(runner, engine)
    Render.run(render)
  }

  const cleanupAnimation = () => {
    const scene = sceneRef.current
    if (!scene) return

    cleanupDivsRef.current.forEach((el) => {
      el.style.transition = "transform 0.6s ease, opacity 0.6s ease"
      el.style.transform = `translateY(-${scene.clientHeight + 50}px)`
      el.style.opacity = "0"
    })

    setTimeout(() => {
      if (engineRef.current) {
        Matter.Render.stop(renderRef.current!)
        Matter.Runner.stop(runnerRef.current!)
        engineRef.current.world.bodies.forEach(b => Matter.World.remove(engineRef.current!.world, b))
      }
      cleanupDivsRef.current.forEach(d => d.remove())
      scene.innerHTML = ""
    }, 700)
  }

  useEffect(() => {
    if (!sceneRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initAnimation()
          } else {
            cleanupAnimation()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(sceneRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Label exactly like Services */}
        <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
          Tech Stack
        </span>

        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Future-ready tools for visionary projects.
        </h2>

        <div className="relative mt-10 h-72 w-full overflow-hidden rounded-2xl border border-dashed border-border bg-card/40">
          <div ref={sceneRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
          <div className="relative z-10 h-full w-full" />
        </div>
      </div>
    </section>
  )
}
