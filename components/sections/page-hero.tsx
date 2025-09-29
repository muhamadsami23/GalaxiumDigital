"use client"

import Image from "next/image"

export default function PageHero({
  title,
  image = "/images/hero-generic.png",
}: {
  title: string
  image?: string
}) {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image || "/placeholder.svg?height=800&width=1600&query=section background image"}
          alt=""
          fill
          priority={false}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <h1 className="px-6 text-center text-4xl font-semibold md:text-6xl">{title}</h1>
    </section>
  )
}
