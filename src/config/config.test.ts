import { describe, expect, it } from "vitest";
import { NAV_ITEMS, SECTION_IDS, sectionHref, siteConfig } from "@/config";

describe("navigation config", () => {
    it("builds anchor hrefs from section ids", () => {
        expect(sectionHref(SECTION_IDS.projects)).toBe("#projects");
    });

    it("only links to known sections", () => {
        const known = new Set<string>(Object.values(SECTION_IDS));
        NAV_ITEMS.forEach((item) => expect(known.has(item.sectionId)).toBe(true));
    });
});

describe("site config", () => {
    it("has a valid email", () => {
        expect(siteConfig.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it("only has absolute https social links", () => {
        siteConfig.socials.forEach(({ href }) => expect(href).toMatch(/^https:\/\//));
    });

    it("points GitHub to the right profile", () => {
        expect(siteConfig.socials.find((s) => s.label === "GitHub")?.href).toBe("https://github.com/CixxMemo");
    });
});
