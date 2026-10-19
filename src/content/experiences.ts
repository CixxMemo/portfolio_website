import { ExperienceListSchema, type Experience } from "@/types";

export const experiences: readonly Experience[] = ExperienceListSchema.parse([
    {
        id: "freelance-ai-architect",
        period: "2026 - Present",
        role: "Freelance B2B AI Workflow System Architect",
        summary: "Designing and building autonomous AI-driven business workflows.",
        details:
            "As a freelance system architect, I partner with B2B companies to eliminate operational bottlenecks. I design end-to-end automation pipelines using tools like n8n, Make.com, and Python. My day-to-day involves integrating LLMs into existing CRMs, building custom RAG architectures for data retrieval, and ensuring high-availability systems that directly impact revenue growth and operational efficiency.",
    },
    {
        id: "software-developer-intern",
        period: "2024 - 2026",
        role: "Software Developer Intern",
        summary: "Gained foundational expertise in scalable architecture and clean code principles.",
        details:
            "During this internship, I immersed myself in the fundamentals of scalable software architecture. I collaborated with senior engineers to develop backend APIs using Python and worked on frontend mobile interfaces with Flutter. I learned the critical importance of writing clean, maintainable code and how robust CI/CD pipelines function in a real-world enterprise environment.",
    },
]);
