import { siteConfig } from "@/lib/site-config";

interface BlogPostingSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}

/** JSON-LD for a blog post, rendered inline in each post's MDX. */
export function BlogPostingSchema({
  title,
  description,
  slug,
  datePublished,
}: BlogPostingSchemaProps) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
