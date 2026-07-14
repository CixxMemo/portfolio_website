import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
    post: BlogPost;
    index?: number;
}

const categoryColors: Record<string, string> = {
    "AI Agents": "bg-purple-500/15 text-purple-400 border-purple-500/20",
    "n8n Workflows": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    "Make Automations": "bg-blue-500/15 text-blue-400 border-blue-500/20",
    "Prompt Engineering": "bg-amber-500/15 text-amber-400 border-amber-500/20",
    "AI Araçları": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
    Rehberler: "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

export function BlogCard({ post, index = 0 }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={`card-glow stagger-${index + 1} group flex flex-col overflow-hidden rounded-xl border border-border bg-surface`}
        >
            {/* Cover image */}
            {post.coverImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                </div>
            )}

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                {/* Category badge */}
                <span
                    className={`w-fit rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category] || "bg-muted/10 text-muted border-border"}`}
                >
                    {post.category}
                </span>

                <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-text transition-colors duration-150 group-hover:text-accent">
                    {post.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
                    {post.description}
                </p>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-3 text-xs text-muted/70">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="h-1 w-1 rounded-full bg-muted/30" />
                    <span>{post.readingTime} dk okuma</span>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md border border-border/50 px-2 py-0.5 font-mono text-[10px] text-muted/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
