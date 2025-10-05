import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://galaxiumdigital.app"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}