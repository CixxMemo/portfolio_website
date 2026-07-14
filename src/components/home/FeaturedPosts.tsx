"use client";

import Link from "next/link";
import { getFeaturedPosts } from "@/lib/content";
import { BlogCard } from "@/components/blog/BlogCard";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function FeaturedPosts() {
    const posts = getFeaturedPosts().slice(0, 3);
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section ref={sectionRef} className="scroll-reveal border-t border-border">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
                <div className="flex items-baseline justify-between">
                    <h2 className="font-heading text-xl font-bold text-text md:text-2xl">
                        Öne Çıkan Yazılar
                    </h2>
                    <Link
                        href="/blog"
                        className="link-underline text-sm text-muted transition-colors duration-150 hover:text-text"
                    >
                        Tüm yazılar →
                    </Link>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, i) => (
                        <BlogCard key={post.slug} post={post} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
