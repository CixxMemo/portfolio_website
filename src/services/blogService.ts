import { Blog, BlogSchema } from "@/types/blog";
import { z } from "zod";

export class BlogService {
    /**
     * Fetches the latest blog posts.
     * Currently returns mock data. When the ASP.NET API is ready, 
     * this will be updated to fetch from the real endpoint.
     */
    static async getLatestBlogs(): Promise<Blog[]> {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // TODO: Replace with real API fetch when ASP.NET backend is ready
        // const response = await fetch('https://api.mehmetcan.dev/blogs/latest');
        // const data = await response.json();
        // return z.array(BlogSchema).parse(data);

        const rawData = [
            {
                id: "1",
                title: "How to build autonomous AI Agents",
                excerpt: "A deep dive into the architecture of modern AI agents using Next.js and external automation tools. Learn how to structure your prompts and tools effectively.",
                date: "OCT 24, 2026",
                url: "https://blog.mehmetcan.dev/autonomous-ai-agents"
            },
            {
                id: "2",
                title: "Scaling n8n workflows for Enterprise",
                excerpt: "Discover the best practices for structuring complex automation pipelines. From error handling to rate limiting, everything you need to know about enterprise n8n.",
                date: "SEP 15, 2026",
                url: "https://blog.mehmetcan.dev/scaling-n8n"
            },
            {
                id: "3",
                title: "SOLID Principles in React Architectures",
                excerpt: "How to apply backend software engineering principles like SOLID to modern React and Next.js applications for highly maintainable codebases.",
                date: "AUG 02, 2026",
                url: "https://blog.mehmetcan.dev/solid-in-react"
            }
        ];
        
        return z.array(BlogSchema).parse(rawData);
    }
}
