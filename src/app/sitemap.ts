import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogs";
import { dedicatedIndustries, genericSectors } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://businessvolunteers.online";

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.64,
  }));

  const dedicatedIndustryEntries: MetadataRoute.Sitemap = dedicatedIndustries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const genericIndustryEntries: MetadataRoute.Sitemap = genericSectors.map((sec) => ({
    url: `${baseUrl}/industries/${sec.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const industryBlogEntries: MetadataRoute.Sitemap = dedicatedIndustries.flatMap((ind) =>
    ind.blogArticles.map((article) => ({
      url: `${baseUrl}/industries/${ind.slug}/blog/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.64,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/b2b-offer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogEntries,
    ...dedicatedIndustryEntries,
    ...genericIndustryEntries,
    ...industryBlogEntries,
  ];
}
