import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactSection } from "@/components/features/ContactSection";
import { siteConfig } from "@/config";

describe("ContactSection", () => {
    it("uses the same address for the mailto link and the visible text", () => {
        render(<ContactSection />);
        const link = screen.getByRole("link", { name: siteConfig.email });
        expect(link).toHaveAttribute("href", `mailto:${siteConfig.email}`);
    });

    it("renders every social link from config in a new tab", () => {
        render(<ContactSection />);
        siteConfig.socials.forEach(({ label, href }) => {
            const link = screen.getByRole("link", { name: label });
            expect(link).toHaveAttribute("href", href);
            expect(link).toHaveAttribute("target", "_blank");
            expect(link).toHaveAttribute("rel", "noopener noreferrer");
        });
    });

    it("has no dead '#' links", () => {
        render(<ContactSection />);
        screen.getAllByRole("link").forEach((link) => expect(link).not.toHaveAttribute("href", "#"));
    });
});
