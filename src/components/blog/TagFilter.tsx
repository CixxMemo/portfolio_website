"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, Suspense } from "react";
import type { Category } from "@/types";

const categories: { name: Category | "Tümü"; emoji: string }[] = [
    { name: "Tümü", emoji: "📋" },
    { name: "AI Agents", emoji: "🤖" },
    { name: "n8n Workflows", emoji: "⚡" },
    { name: "Make Automations", emoji: "🔧" },
    { name: "Prompt Engineering", emoji: "✨" },
    { name: "AI Araçları", emoji: "🧠" },
    { name: "Rehberler", emoji: "📚" },
];

function TagFilterInner() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const active = searchParams.get("category") || "Tümü";

    const handleClick = useCallback(
        (category: string) => {
            const params = new URLSearchParams(searchParams.toString());
            if (category === "Tümü") {
                params.delete("category");
            } else {
                params.set("category", category);
            }
            router.push(`/blog?${params.toString()}`, { scroll: false });
        },
        [router, searchParams]
    );

    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
                <button
                    key={cat.name}
                    onClick={() => handleClick(cat.name)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200
                        ${active === cat.name
                            ? "border-accent/40 bg-accent/10 text-accent"
                            : "border-border bg-surface text-muted hover:border-border hover:bg-surface/80 hover:text-text"
                        }`}
                >
                    <span>{cat.emoji}</span>
                    {cat.name}
                </button>
            ))}
        </div>
    );
}

export function TagFilter() {
    return (
        <Suspense fallback={
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <span
                        key={cat.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted"
                    >
                        <span>{cat.emoji}</span>
                        {cat.name}
                    </span>
                ))}
            </div>
        }>
            <TagFilterInner />
        </Suspense>
    );
}
