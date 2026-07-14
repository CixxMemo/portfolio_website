import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { BlogContent } from "@/components/blog/BlogContent";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogCard } from "@/components/blog/BlogCard";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const categoryColors: Record<string, string> = {
    "AI Agents": "bg-purple-500/15 text-purple-400 border-purple-500/20",
    "n8n Workflows": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    "Make Automations": "bg-blue-500/15 text-blue-400 border-blue-500/20",
    "Prompt Engineering": "bg-amber-500/15 text-amber-400 border-amber-500/20",
    "AI Araçları": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
    Rehberler: "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export async function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            type: "article",
            title: post.title,
            description: post.description,
            images: post.coverImage ? [{ url: post.coverImage }] : [],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const related = getRelatedPosts(slug, 2);

    return (
        <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            {/* Back link */}
            <Link
                href="/blog"
                className="link-underline text-sm text-muted transition-colors duration-150 hover:text-text"
            >
                ← Blog&apos;a dön
            </Link>

            {/* Cover image */}
            {post.coverImage && (
                <div className="mt-8 relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-bg">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 960px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                </div>
            )}

            {/* Header */}
            <div className="mt-8">
                {/* Category badge */}
                <span
                    className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category] || "bg-muted/10 text-muted border-border"}`}
                >
                    {post.category}
                </span>

                <h1 className="mt-4 font-heading text-3xl font-bold text-text md:text-4xl">
                    {post.title}
                </h1>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="h-1 w-1 rounded-full bg-muted/30" />
                    <span>{post.readingTime} dk okuma</span>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md border border-border/50 px-2 py-0.5 font-mono text-xs text-muted/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content + ToC layout */}
            <div className="mt-10 flex gap-12">
                {/* Main content */}
                <div className="min-w-0 flex-1">
                    <BlogContent content={post.body} />
                </div>

                {/* Table of Contents sidebar */}
                <div className="w-48 flex-shrink-0">
                    <TableOfContents content={post.body} />
                </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
                <div className="mt-16 border-t border-border pt-12">
                    <h2 className="font-heading text-lg font-bold text-text">
                        İlgili Yazılar
                    </h2>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {related.map((p, i) => (
                            <BlogCard key={p.slug} post={p} index={i} />
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
