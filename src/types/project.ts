import { z } from "zod";
import { PublicAssetPathSchema, uniqueById } from "./shared";

export const ProjectSchema = z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    /** One-liner shown on the card. */
    summary: z.string().min(1),
    /** Long technical description shown in the modal. */
    details: z.string().min(1),
    cardImage: PublicAssetPathSchema,
    modalImage: PublicAssetPathSchema,
});

export const ProjectListSchema = uniqueById(ProjectSchema);

export type Project = z.infer<typeof ProjectSchema>;
