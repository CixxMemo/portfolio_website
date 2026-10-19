import { z } from "zod";
import { HttpUrlSchema } from "./shared";

export const BlogSchema = z.object({
    id: z.string(),
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    url: HttpUrlSchema,
});

export type Blog = z.infer<typeof BlogSchema>;
