import { z } from "zod";

/** Path to a file served from `/public`, e.g. `/images/card.jpg`. */
export const PublicAssetPathSchema = z.string().startsWith("/", "Asset paths must be absolute (start with '/')");

/** Absolute http(s) URL. Other protocols (e.g. `javascript:`) are rejected. */
export const HttpUrlSchema = z.url({ protocol: /^https?$/ });

/** Either an in-page anchor (`#projects`), a site-relative path or an absolute http(s) URL. */
export const LinkHrefSchema = z.union([
    z.string().regex(/^#[\w-]+$/, "Anchor links must look like '#section'"),
    z.string().startsWith("/"),
    HttpUrlSchema,
]);

/** Wraps an array schema so that every item must have a unique `id`. */
export function uniqueById<T extends z.ZodType<{ id: string }>>(item: T) {
    return z.array(item).superRefine((items, ctx) => {
        const seen = new Set<string>();
        items.forEach((entry, index) => {
            if (seen.has(entry.id)) {
                ctx.addIssue({
                    code: "custom",
                    message: `Duplicate id "${entry.id}"`,
                    path: [index, "id"],
                });
            }
            seen.add(entry.id);
        });
    });
}
