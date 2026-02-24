import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogs";
import BlogPostContent from "@/components/BlogPostContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Business Volunteers",
    };
  }

  return {
    title: `${post.title} | Business Volunteers`,
    description: post.excerpt,
    alternates: {
      canonical: `https://businessvolunteers.online/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Business Volunteers`,
      description: post.excerpt,
      url: `https://businessvolunteers.online/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Business Volunteers"],
      siteName: "Business Volunteers",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Business Volunteers`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
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
              "@id": `https://businessvolunteers.online/blog/${post.slug}`,
            },
          }),
        }}
      />
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </section>
  );
}
