import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notas de produto, decisões de design e novidades da mytek — escritas enquanto construímos a plataforma.",
};

export default function BlogPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Notas do <span className="text-primary">time mytek</span>
          </>
        }
        description="Decisões de produto, automações e a métrica certa — escritas enquanto construímos CRM, Landing Page e Dashboard."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-3xl space-y-6 px-4 lg:px-8">
          {blogPosts.map((post, i) => (
            <BlurFade key={post.slug} delay={Math.min(i * 0.1, 0.3)}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <Badge className="bg-primary/15 text-primary hover:bg-primary/15">
                    {post.category}
                  </Badge>
                  <time dateTime={post.dateISO}>{post.date}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-balance group-hover:text-primary lg:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Ler post
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
