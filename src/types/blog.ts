import { z } from "zod";

export const BlogSchema = z.object({
    id: z.string(),
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    url: z.string().url(),
});

export type Blog = z.infer<typeof BlogSchema>;
