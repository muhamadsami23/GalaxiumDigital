"use client"

import Link from "next/link"

export default function CtaDiscuss() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/60 p-10 text-center backdrop-blur shadow-lg relative overflow-hidden">
        <h2 className="text-balance text-3xl font-semibold md:text-4xl">
          Have an idea?{" "}
          <span className="text-primary">let&apos;s discuss.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Share your vision with us and we&apos;ll help bring it to life.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground hover:opacity-95 transition"
        >
          Contact Us
        </Link>

        {/* Decorative glowing shapes matching primary color */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-primary/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/40 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse blur-xl"></div>
      </div>
    </section>
  )
}
