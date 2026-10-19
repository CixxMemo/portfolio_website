import { describe, expect, it } from "vitest";
import {
    BlogSchema,
    ExperienceListSchema,
    LinkHrefSchema,
    ProjectSchema,
    PublicAssetPathSchema,
    SkillSchema,
    WorkflowGraphSchema,
} from "@/types";

const node = (id: string) => ({
    id,
    label: id.toUpperCase(),
    caption: "STEP",
    position: { x: 10, y: 20 },
    details: { title: "Title", text: "Text" },
});

describe("shared schemas", () => {
    it.each(["#projects", "/about", "https://example.com"])("accepts href %s", (href) => {
        expect(LinkHrefSchema.safeParse(href).success).toBe(true);
    });

    it.each(["projects", "#", "javascript:alert(1)"])("rejects href %s", (href) => {
        expect(LinkHrefSchema.safeParse(href).success).toBe(false);
    });

    it("requires public asset paths to be absolute", () => {
        expect(PublicAssetPathSchema.safeParse("/images/a.jpg").success).toBe(true);
        expect(PublicAssetPathSchema.safeParse("images/a.jpg").success).toBe(false);
    });

    it("rejects lists with duplicate ids", () => {
        const item = { id: "a", period: "2024", role: "Dev", summary: "s", details: "d" };
        const result = ExperienceListSchema.safeParse([item, item]);
        expect(result.success).toBe(false);
        expect(result.error?.issues[0].message).toContain('Duplicate id "a"');
    });
});

describe("SkillSchema", () => {
    const skill = { id: "s1", name: "TS", score: 80, summary: "x", projectHref: "#projects" };

    it("accepts a valid skill", () => {
        expect(SkillSchema.safeParse(skill).success).toBe(true);
    });

    it.each([-1, 101, 50.5])("rejects score %s", (score) => {
        expect(SkillSchema.safeParse({ ...skill, score }).success).toBe(false);
    });
});

describe("ProjectSchema", () => {
    it("rejects relative image paths", () => {
        const result = ProjectSchema.safeParse({
            id: "p",
            title: "t",
            summary: "s",
            details: "d",
            cardImage: "card.jpg",
            modalImage: "/modal.jpg",
        });
        expect(result.success).toBe(false);
    });
});

describe("BlogSchema", () => {
    it.each(["not-a-url", "javascript:alert(1)", "ftp://example.com"])("rejects url %s", (url) => {
        const result = BlogSchema.safeParse({ id: "1", title: "t", excerpt: "e", date: "d", url });
        expect(result.success).toBe(false);
    });
});

describe("WorkflowGraphSchema", () => {
    it("defaults `highlighted` to false", () => {
        const graph = WorkflowGraphSchema.parse({ nodes: [node("a")], edges: [] });
        expect(graph.nodes[0].highlighted).toBe(false);
    });

    it("rejects edges pointing to unknown nodes", () => {
        const result = WorkflowGraphSchema.safeParse({
            nodes: [node("a")],
            edges: [{ from: "a", to: "missing" }],
        });
        expect(result.success).toBe(false);
        expect(result.error?.issues[0].message).toContain('unknown node "missing"');
    });

    it("rejects positions outside the 0–100 canvas", () => {
        const result = WorkflowGraphSchema.safeParse({
            nodes: [{ ...node("a"), position: { x: 120, y: 0 } }],
            edges: [],
        });
        expect(result.success).toBe(false);
    });
});
