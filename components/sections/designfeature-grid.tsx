import { Paintbrush, Layout, Image, Palette } from "lucide-react"

const items = [
  { icon: Paintbrush, label: "Graphic Design" },
  { icon: Palette, label: "Logo & Branding" },
  { icon: Layout, label: "UI/UX Design" },
  { icon: Image, label: "Posters & Visuals" },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-lg border border-input bg-card px-4 py-3 shadow-sm hover:border-primary/40 transition"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium">{label}</span>
        </div>
      ))}
    </div>
  )
}
