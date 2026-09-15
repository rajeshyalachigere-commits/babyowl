import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/approach", priority: 0.8 },
  { path: "/criteria", priority: 0.8 },
  { path: "/sectors", priority: 0.8 },
  { path: "/portfolio", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route.path, site.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
