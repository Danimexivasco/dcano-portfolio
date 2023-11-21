import { MetadataRoute } from "next"
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dcano.dev",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.dcano.dev/projects",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.dcano.dev/about",
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}