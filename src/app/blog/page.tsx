import type { Metadata } from "next";
import { getPosts, getPostsByCategory } from "@/lib/content";
import { BlogCard } from "@/components/blog/BlogCard";
import { TagFilter } from "@/components/blog/TagFilter";
import type { Category } from "@/types";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "AI, otomasyon, n8n workflow'ları ve yapay zeka araçları hakkında Türkçe yazılar.",
};

interface PageProps {
    searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
    const { category } = await searchParams;

    const posts = category
        ? getPostsByCategory(category as Category)
        : getPosts();

    return (
        <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <h1 className="font-heading text-3xl font-bold text-text md:text-4xl">
                Blog
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted">
                AI ve otomasyon dünyasından yazılar, rehberler ve workflow paylaşımları.
            </p>

            {/* Category filter */}
            <div className="mt-8">
                <TagFilter />
            </div>

            {/* Posts grid */}
            {posts.length > 0 ? (
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, i) => (
                        <BlogCard key={post.slug} post={post} index={i} />
                    ))}
                </div>
            ) : (
                <div className="mt-16 text-center">
                    <p className="text-sm text-muted">
                        Bu kategoride henüz yazı yok.
                    </p>
                </div>
            )}
        </section>
    );
}
