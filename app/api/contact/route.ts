import { NextResponse } from "next/server"
import { z } from "zod"

const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  company: z.string().max(160).optional().or(z.literal("")),
  message: z.string().min(10).max(5000),
  // simple honeypot
  website: z.string().optional().or(z.literal("")),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = ContactSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form submission", details: parsed.error.flatten() }, { status: 400 })
    }

    const { name, email, company, message, website } = parsed.data

    // Honeypot: if 'website' is filled, silently accept but do nothing
    if (website && website.trim().length > 0) {
      return NextResponse.json({ ok: true })
    }

    // Here you could integrate with email/CRM (Resend, Slack, etc.)
    // For now, we log for debugging in preview:
    console.log("[v0] Contact submission:", { name, email, company, message: message.slice(0, 200) + "..." })

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}
