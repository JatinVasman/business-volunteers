import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dedicatedIndustries } from "@/data/industries";
import IndustryBlogContent from "./IndustryBlogContent";

interface IndustryBlogPageProps {
  params: Promise<{ slug: string; blogSlug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; blogSlug: string }[] = [];
  for (const ind of dedicatedIndustries) {
    for (const article of ind.blogArticles) {
      params.push({ slug: ind.slug, blogSlug: article.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: IndustryBlogPageProps): Promise<Metadata> {
  const { slug, blogSlug } = await params;

  const industry = dedicatedIndustries.find((ind) => ind.slug === slug);
  const article = industry?.blogArticles.find((a) => a.slug === blogSlug);

  if (!industry || !article) {
    return { title: "Article Not Found | Business Volunteers" };
  }

  return {
    title: `${article.title} — ${industry.name} | Business Volunteers`,
    description: article.content[0]?.slice(0, 160),
    alternates: {
      canonical: `https://businessvolunteers.online/industries/${slug}/blog/${blogSlug}`,
    },
    openGraph: {
      title: `${article.title} | Business Volunteers`,
      description: article.content[0]?.slice(0, 160),
      url: `https://businessvolunteers.online/industries/${slug}/blog/${blogSlug}`,
      type: "article",
      siteName: "Business Volunteers",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Business Volunteers`,
      description: article.content[0]?.slice(0, 160),
    },
  };
}

export default async function IndustryBlogPage({ params }: IndustryBlogPageProps) {
  const { slug, blogSlug } = await params;

  const industry = dedicatedIndustries.find((ind) => ind.slug === slug);
  const article = industry?.blogArticles.find((a) => a.slug === blogSlug);

  if (!industry || !article) {
    notFound();
  }

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.content[0]?.slice(0, 160),
            author: {
              "@type": "Organization",
              name: "Business Volunteers",
              url: "https://businessvolunteers.online",
            },
            publisher: {
              "@type": "Organization",
              name: "Business Volunteers",
              logo: {
                "@type": "ImageObject",
                url: "https://businessvolunteers.online/logo-dark.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://businessvolunteers.online/industries/${slug}/blog/${blogSlug}`,
            },
          }),
        }}
      />
      <IndustryBlogContent
        article={article}
        industryName={industry.name}
        industrySlug={industry.slug}
        industryColor={industry.color}
      />
    </section>
  );
}
