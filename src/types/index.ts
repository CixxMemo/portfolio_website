export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    updatedAt?: string;
    category: Category;
    tags: string[];
    coverImage?: string;
    featured: boolean;
    readingTime: number;
    body: string;
}

export type Category =
    | "AI Agents"
    | "n8n Workflows"
    | "Make Automations"
    | "Prompt Engineering"
    | "AI Araçları"
    | "Rehberler";

export interface CategoryInfo {
    name: Category;
    emoji: string;
    description: string;
    count: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    projectType: string;
    budgetRange: string;
    timeline: string;
    message: string;
    loomLink?: string;
    honeypot?: string;
}
