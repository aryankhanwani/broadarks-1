import { notFound } from "next/navigation";
import { POSTS } from "@/data/site";
import { CTABand } from "@/components/sections/Shared";
import { ArticleBody, ArticleHero, NextPost } from "@/components/sections/BlogSections";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const index = POSTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = POSTS[index];
  const next = POSTS[(index + 1) % POSTS.length];

  return (
    <>
      <ArticleHero post={post} />
      <ArticleBody post={post} />
      <NextPost post={next} />
      <CTABand
        eyebrow="Continue"
        title="More of this work happens off the page."
        text="If something here maps to what you are building, we would like to hear about it."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/blog", label: "Back to the journal" }}
      />
    </>
  );
}
