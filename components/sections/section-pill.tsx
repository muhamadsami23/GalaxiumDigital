import type React from "react"
import { cn } from "@/lib/utils"

export function Pill({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-wide text-primary",
        className,
      )}
    >
      {children}
    </span>
  )
}
