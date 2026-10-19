import { z } from "zod";
import { LinkHrefSchema, uniqueById } from "./shared";

export const SkillSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    /** Proficiency on a 0–100 scale. */
    score: z.number().int().min(0).max(100),
    /** Short description of related work, shown in the modal. */
    summary: z.string().min(1),
    /** Where the "View Project" button points to. */
    projectHref: LinkHrefSchema,
});

export const SkillListSchema = uniqueById(SkillSchema);

export type Skill = z.infer<typeof SkillSchema>;
