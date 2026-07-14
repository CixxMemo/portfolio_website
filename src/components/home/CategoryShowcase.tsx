"use client";

import Link from "next/link";
import { getCategories } from "@/lib/content";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function CategoryShowcase() {
    const categories = getCategories();
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={sectionRef}
            id="kategoriler"
            className="scroll-reveal border-t border-border"
        >
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
                <h2 className="font-heading text-xl font-bold text-text md:text-2xl">
                    Kategoriler
                </h2>
                <p className="mt-2 text-sm text-muted">
                    İlgi alanına göre içerikleri keşfet
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((cat, i) => (
                        <Link
                            key={cat.name}
                            href={`/blog?category=${encodeURIComponent(cat.name)}`}
                            className={`card-glow stagger-${i + 1} group flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-colors duration-150`}
                        >
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-bg text-xl">
                                {cat.emoji}
                            </span>
                            <div className="min-w-0">
                                <h3 className="font-heading text-sm font-semibold text-text transition-colors duration-150 group-hover:text-accent">
                                    {cat.name}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-muted">
                                    {cat.description}
                                </p>
                                {cat.count > 0 && (
                                    <p className="mt-2 font-mono text-xs text-muted/50">
                                        {cat.count} yazı
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
