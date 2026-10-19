import { ProjectListSchema, type Project } from "@/types";

/** Shared placeholder mockups until real project screenshots are available. */
const PLACEHOLDER_IMAGES = {
    cardImage: "/images/card_mockup.jpg",
    modalImage: "/images/modal_mockup.jpg",
} as const;

export const projects: readonly Project[] = ProjectListSchema.parse([
    {
        id: "b2b-lead-generator",
        title: "B2B Lead Generator",
        summary: "Automated intent scraping & CRM injection.",
        details:
            "This advanced AI pipeline ingests thousands of leads daily, scrapes the web for real-time intent data, and autonomously injects qualified leads directly into Salesforce. It reduced manual data entry by 95% and increased conversion rates by 300%.",
        ...PLACEHOLDER_IMAGES,
    },
    {
        id: "ai-support-agent",
        title: "AI Support Agent",
        summary: "24/7 autonomous L1 tech support.",
        details:
            "Built with a custom RAG (Retrieval-Augmented Generation) architecture, this autonomous agent resolves 80% of L1 support tickets instantly. It integrates directly with Zendesk and reads through complex technical documentation to provide highly accurate, contextual answers.",
        ...PLACEHOLDER_IMAGES,
    },
    {
        id: "sales-outreach-bot",
        title: "Sales Outreach Bot",
        summary: "Hyper-personalized email sequence automation.",
        details:
            "By analyzing recent news and company milestones of target accounts, this LLM-powered bot drafts and schedules hyper-personalized email sequences. It sounds 100% human and dynamically adjusts follow-ups based on sentiment analysis of replies.",
        ...PLACEHOLDER_IMAGES,
    },
    {
        id: "invoice-processor",
        title: "Invoice Processor",
        summary: "Visual AI for automated accounting.",
        details:
            "An automated pipeline that uses Vision AI to scan incoming invoices via email, extracts critical financial data points (Vendor, Total, Tax), and automatically synchronizes them into QuickBooks. Eliminates human error and processing delays.",
        ...PLACEHOLDER_IMAGES,
    },
    {
        id: "growth-engine-db",
        title: "Growth Engine DB",
        summary: "Centralized AI orchestration database.",
        details:
            "A highly optimized vector database architecture that serves as the memory center for multiple AI agents. It handles millions of concurrent embedding requests and ensures real-time context retrieval for enterprise-scale AI deployments.",
        ...PLACEHOLDER_IMAGES,
    },
    {
        id: "market-sentiment-ai",
        title: "Market Sentiment AI",
        summary: "Real-time industry trend analysis.",
        details:
            "A sophisticated data pipeline that continuously scrapes industry forums, news outlets, and social media. It scores market sentiment and provides actionable intelligence dashboards to enterprise decision-makers in real-time.",
        ...PLACEHOLDER_IMAGES,
    },
]);
