import { z } from "zod";
import { uniqueById } from "./shared";

export const ExperienceSchema = z.object({
    id: z.string().min(1),
    /** Human readable period, e.g. "2024 - 2026". */
    period: z.string().min(1),
    role: z.string().min(1),
    /** Short description shown on the timeline. */
    summary: z.string().min(1),
    /** Long description shown in the modal. */
    details: z.string().min(1),
});

export const ExperienceListSchema = uniqueById(ExperienceSchema);

export type Experience = z.infer<typeof ExperienceSchema>;
