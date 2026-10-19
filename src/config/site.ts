/**
 * Single source of truth for personal / site-wide information.
 * Anything that identifies the site owner or is reused across
 * metadata, layout and sections belongs here.
 */

export interface SocialLink {
    label: string;
    href: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehmetcan.dev";

export const siteConfig = {
    name: "Mehmet Can Koçakurt",
    shortName: "MCK.",
    title: "Mehmet Can Koçakurt — AI System Developer & Architect",
    description: "Portfolio of Mehmet Can Koçakurt, AI System Developer & Architect.",
    url: siteUrl,
    locale: "en_US",
    email: "hello@mehmetcan.dev",
    blogUrl: "https://blog.mehmetcan.dev",
    socials: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mehmet-can-kocakurt-254a01170" },
        { label: "GitHub", href: "https://github.com/CixxMemo" },
    ] satisfies SocialLink[],
} as const;

export type SiteConfig = typeof siteConfig;
