interface BlogContentProps {
    content: string;
}

export function BlogContent({ content }: BlogContentProps) {
    return (
        <div className="blog-prose">
            {content.split("\n").map((line, i) => {
                const trimmed = line.trim();

                if (trimmed.startsWith("## ")) {
                    return (
                        <h2
                            key={i}
                            id={trimmed
                                .replace("## ", "")
                                .toLowerCase()
                                .replace(/[^a-zğüşıöç0-9\s-]/g, "")
                                .replace(/\s+/g, "-")}
                            className="mt-10 mb-4 font-heading text-xl font-bold text-text md:text-2xl"
                        >
                            {trimmed.replace("## ", "")}
                        </h2>
                    );
                }

                if (trimmed.startsWith("### ")) {
                    return (
                        <h3
                            key={i}
                            className="mt-8 mb-3 font-heading text-lg font-semibold text-text"
                        >
                            {trimmed.replace("### ", "")}
                        </h3>
                    );
                }

                if (trimmed.startsWith("- **")) {
                    const match = trimmed.match(/^- \*\*(.+?)\*\*\s*(.*)$/);
                    if (match) {
                        return (
                            <div key={i} className="ml-4 mt-2 flex gap-2.5 text-sm leading-relaxed text-muted">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                                <span>
                                    <span className="font-semibold text-text">{match[1]}</span>{" "}
                                    {match[2]}
                                </span>
                            </div>
                        );
                    }
                }

                if (trimmed.startsWith("- ")) {
                    return (
                        <div key={i} className="ml-4 mt-2 flex gap-2.5 text-sm leading-relaxed text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                            <span>{renderInlineFormatting(trimmed.replace("- ", ""))}</span>
                        </div>
                    );
                }

                if (trimmed === "") {
                    return <div key={i} className="h-3" />;
                }

                // Regular paragraph
                return (
                    <p key={i} className="mt-2 text-sm leading-relaxed text-muted">
                        {renderInlineFormatting(trimmed)}
                    </p>
                );
            })}
        </div>
    );
}

/** Render inline **bold** and `code` markers */
function renderInlineFormatting(text: string) {
    // First handle code blocks, then bold
    const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
    return parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <span key={j} className="font-semibold text-text">
                    {part.slice(2, -2)}
                </span>
            );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
            return (
                <code
                    key={j}
                    className="rounded bg-bg px-1.5 py-0.5 font-mono text-xs text-accent"
                >
                    {part.slice(1, -1)}
                </code>
            );
        }
        return part;
    });
}
