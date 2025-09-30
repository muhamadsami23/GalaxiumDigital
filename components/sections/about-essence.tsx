import Image from "next/image"

const points = [
  {
    title: "Mission",
    body: "We partner with forward-thinking teams to build resilient, user-centered products.",
  },
  {
    title: "Sustainability",
    body: "We prefer pragmatic choices that stand the test of time—maintainable code and maintainable ops.",
  },
  {
    title: "Industry Expertise",
    body: "From B2B platforms to consumer apps, we bring patterns that reduce risk and speed up delivery.",
  },
]

export default function AboutEssence() {
  return (
    <section aria-labelledby="essence-title" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
            Overview
          </span>
          <h2 id="essence-title" className="mt-4 text-balance text-2xl font-semibold text-foreground md:text-4xl">
            Unveiling our essence
          </h2>
          <p className="mt-3 max-w-prose text-pretty text-base leading-relaxed text-muted-foreground">
            We combine strategy, UX, and robust engineering to ship software that creates long-term value. Our approach
            emphasizes clarity, collaboration, and quality at every step.
          </p>

          <ul className="mt-8 grid gap-4">
            {points.map((p) => (
              <li key={p.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 md:gap-6">
          {/* Collage, avoiding decorative blobs; simple rounded images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
              <Image
                src="/team-collaboration-workspace.png"
                alt="Team collaborating at a workspace"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl border border-border">
              <Image
                src="/design-whiteboard-sketches.jpg"
                alt="Design sketches on a whiteboard"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-xl border border-border">
            <Image
              src="/about1.png"
              alt="Reference aesthetic of a modern About page"
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
