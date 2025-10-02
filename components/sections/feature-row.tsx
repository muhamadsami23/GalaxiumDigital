import { Pill } from "./section-pill"

type Props = {
  eyebrow: string
  title: string
  description: string
  imageAlt: string
  imageQuery?: string
  imageUrl?: string
  reverse?: boolean
}

export function FeatureRow({
  eyebrow,
  title,
  description,
  imageAlt,
  imageQuery,
  imageUrl,
  reverse,
}: Props) {
  return (
    <section
      aria-labelledby={`${eyebrow.replace(/\s+/g, "-").toLowerCase()}-title`}
      className={`grid items-center gap-12 md:grid-cols-2 ${
        reverse ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div>
        <Pill>{eyebrow}</Pill>
        <h3
          id={`${eyebrow.replace(/\s+/g, "-").toLowerCase()}-title`}
          className="mt-3 text-2xl font-semibold md:text-3xl"
        >
          {title}
        </h3>
        <p className="mt-4 max-w-prose text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div>
        <img
          src={
            imageUrl
              ? imageUrl
              : `/.jpg?height=360&width=520&query=${encodeURIComponent(
                  imageQuery || ""
                )}`
          }
          alt={imageAlt}
          className="mx-auto w-full max-w-[520px]"
          loading="lazy"
        />
      </div>
    </section>
  )
}
