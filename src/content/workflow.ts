import { WorkflowGraphSchema, type WorkflowGraph } from "@/types";

/**
 * Hero "b2b_growth_engine.json" diagram.
 * Positions are percentages of the diagram canvas; connecting lines are
 * derived from `edges`, so moving a node automatically moves its lines.
 */
export const heroWorkflow: WorkflowGraph = WorkflowGraphSchema.parse({
    nodes: [
        {
            id: "trigger",
            label: "WH",
            caption: "TRIGGER",
            position: { x: 15, y: 50 },
            details: {
                title: "Step 1: Multi-Channel Lead Ingestion",
                text: "The automation kicks off the moment a potential client interacts with your ecosystem. Whether it’s an inbound email, a LinkedIn message, or a website form, the webhook captures the raw lead data instantly, ensuring zero drop-off in your sales funnel.",
            },
        },
        {
            id: "enrich",
            label: "API",
            caption: "ENRICH",
            position: { x: 32, y: 75 },
            details: {
                title: "Step 2: Deep Data Scraping & Enrichment",
                text: "Raw data isn't enough. The system automatically triggers APIs to scrape the prospect's company website, recent news, and LinkedIn profiles. It transforms a simple email address into a comprehensive business profile with context.",
            },
        },
        {
            id: "analyze",
            label: "AI",
            caption: "ANALYZE",
            position: { x: 50, y: 50 },
            highlighted: true,
            details: {
                title: "Step 3: Intent Scoring & Sentiment Analysis",
                text: "A custom AI model processes the enriched data to qualify the lead. It analyzes sentiment, identifies pain points based on the company's industry, and calculates a Lead Score. High-priority leads are immediately fast-tracked.",
            },
        },
        {
            id: "sync",
            label: "CRM",
            caption: "SYNC",
            position: { x: 68, y: 25 },
            details: {
                title: "Step 4: CRM Synchronization",
                text: "Once the lead is qualified and analyzed by the AI, the system automatically logs all insights, scores, and enriched data into your CRM (e.g., Salesforce/HubSpot) to keep your sales team aligned.",
            },
        },
        {
            id: "execute",
            label: "ACTION",
            caption: "EXECUTE",
            position: { x: 85, y: 50 },
            details: {
                title: "Step 5: Automated Outreach",
                text: "Finally, the workflow triggers a personalized email sequence based on the AI's strategy and sends an executive summary to your sales team via Slack.",
            },
        },
    ],
    edges: [
        { from: "trigger", to: "enrich" },
        { from: "enrich", to: "analyze" },
        { from: "analyze", to: "sync" },
        { from: "sync", to: "execute" },
    ],
});
