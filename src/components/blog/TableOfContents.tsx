"use client";

import { useEffect, useState } from "react";

interface TocItem {
    id: string;
    text: string;
}

interface TableOfContentsProps {
    content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState("");

    const headings: TocItem[] = content
        .split("\n")
        .filter((line) => line.trim().startsWith("## "))
        .map((line) => {
            const text = line.trim().replace("## ", "");
            const id = text
                .toLowerCase()
                .replace(/[^a-zğüşıöç0-9\s-]/g, "")
                .replace(/\s+/g, "-");
            return { id, text };
        });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0px 0px -80% 0px", threshold: 0 }
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length < 2) return null;

    return (
        <nav className="hidden lg:block" aria-label="İçindekiler">
            <div className="sticky top-24">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted/60">
                    İçindekiler
                </p>
                <ul className="space-y-1.5 border-l border-border/50 pl-4">
                    {headings.map((heading) => (
                        <li key={heading.id}>
                            <a
                                href={`#${heading.id}`}
                                className={`block text-xs leading-relaxed transition-colors duration-150 ${
                                    activeId === heading.id
                                        ? "text-accent font-medium"
                                        : "text-muted/60 hover:text-text"
                                }`}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
