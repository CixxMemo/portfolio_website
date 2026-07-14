import { type ClassValue, clsx } from "clsx";

/** Merge Tailwind classes safely. Minimal version without tailwind-merge to keep bundle light. */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

/** Format a date string to readable Turkish format */
export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

/** Estimate reading time from content (words) */
export function readingTime(content: string): number {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}
