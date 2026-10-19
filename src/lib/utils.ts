import { type ClassValue, clsx } from "clsx";

/** Compose conditional class names. Minimal version without tailwind-merge to keep the bundle light. */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}
