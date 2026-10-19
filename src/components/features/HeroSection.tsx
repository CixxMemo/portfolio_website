"use client";

import { useState } from "react";

interface WorkflowNode {
    id: string;
    label: string;
    title: string;
    left: string;
    top: string;
    modalTitle: string;
    modalText: string;
}

const workflowNodes: WorkflowNode[] = [
    {
        id: "node1",
        label: "WH",
        title: "TRIGGER",
        left: "15%",
        top: "50%",
        modalTitle: "Step 1: Multi-Channel Lead Ingestion",
        modalText: "The automation kicks off the moment a potential client interacts with your ecosystem. Whether it’s an inbound email, a LinkedIn message, or a website form, the webhook captures the raw lead data instantly, ensuring zero drop-off in your sales funnel."
    },
    {
        id: "node2",
        label: "API",
        title: "ENRICH",
        left: "32%",
        top: "75%",
        modalTitle: "Step 2: Deep Data Scraping & Enrichment",
        modalText: "Raw data isn't enough. The system automatically triggers APIs to scrape the prospect's company website, recent news, and LinkedIn profiles. It transforms a simple email address into a comprehensive business profile with context."
    },
    {
        id: "node3",
        label: "AI",
        title: "ANALYZE",
        left: "50%",
        top: "50%",
        modalTitle: "Step 3: Intent Scoring & Sentiment Analysis",
        modalText: "A custom AI model processes the enriched data to qualify the lead. It analyzes sentiment, identifies pain points based on the company's industry, and calculates a Lead Score. High-priority leads are immediately fast-tracked."
    },
    {
        id: "node4",
        label: "CRM",
        title: "SYNC",
        left: "68%",
        top: "25%",
        modalTitle: "Step 4: CRM Synchronization",
        modalText: "Once the lead is qualified and analyzed by the AI, the system automatically logs all insights, scores, and enriched data into your CRM (e.g., Salesforce/HubSpot) to keep your sales team aligned."
    },
    {
        id: "node5",
        label: "ACTION",
        title: "EXECUTE",
        left: "85%",
        top: "50%",
        modalTitle: "Step 5: Automated Outreach",
        modalText: "Finally, the workflow triggers a personalized email sequence based on the AI's strategy and sends an executive summary to your sales team via Slack."
    }
];

export const HeroSection = () => {
    const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);

    return (
        <section id="hero" className="min-h-screen flex flex-col md:flex-row">
            <div className="flex-1 bg-orange flex items-center justify-center p-12">
                <div className="max-w-xl">
                    <h1 className="text-[6rem] md:text-[8rem] font-heading font-black text-navy leading-[0.85] tracking-tighter uppercase break-words">
                        HI, THIS IS MEHMET
                    </h1>
                    <p className="mt-8 text-2xl font-bold text-navy uppercase tracking-widest">
                    AI SYSTEMS ARCHITECT // B2B WORKFLOW AUTOMATION
                    </p>
                    <div className="mt-12 flex gap-6">
                        <a href="#projects" className="bg-navy text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-navy transition-colors">
                            Explore Projects
                        </a>
                        <a href="#contact" className="border-4 border-navy text-navy px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-navy hover:text-white transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 bg-navy flex items-center justify-center p-4 md:p-12 overflow-hidden">
                <div className="w-full aspect-square bg-black/40 border border-white/10 flex flex-col max-w-2xl mx-auto">
                    {/* Top Half: n8n Workflow Placeholder (Custom Sketch Design) */}
                    <div className="flex-[1.2] p-4 md:p-8 flex flex-col border-b border-white/10 relative">
                        <div className="text-orange font-mono text-sm uppercase tracking-widest mb-4">{"// b2b_growth_engine.json"}</div>
                        
                        <div className="flex-1 w-full relative">
                            {/* SVG Lines connecting the nodes */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                <line x1="15%" y1="50%" x2="32%" y2="75%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="32%" y1="75%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="68%" y2="25%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="68%" y1="25%" x2="85%" y2="50%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>

                            {/* Nodes */}
                            {workflowNodes.map((node) => (
                                <div 
                                    key={node.id}
                                    className="absolute z-10 cursor-pointer group"
                                    style={{ left: node.left, top: node.top, transform: 'translate(-50%, -50%)' }}
                                    onClick={() => setSelectedNode(node)}
                                >
                                    {/* Node Box */}
                                    <div className={`
                                        w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-sm md:text-xl font-bold transition-all duration-300 group-hover:scale-110 shadow-lg relative
                                        ${node.label === "AI" 
                                            ? "bg-orange text-navy shadow-glow-orange" 
                                            : "bg-navy/80 border-2 border-white/20 text-white group-hover:border-orange/50 group-hover:text-orange backdrop-blur-sm"
                                        }
                                    `}>
                                        {node.label}
                                        
                                        {/* Label Below */}
                                        <div className={`
                                            absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap
                                            text-[10px] md:text-xs uppercase tracking-widest font-mono text-center transition-colors
                                            ${node.label === "AI" ? "text-orange font-bold" : "text-white/50 group-hover:text-white/90 font-normal"}
                                        `}>
                                            {node.title}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Bottom Half: About Me */}
                    <div className="flex-[0.8] p-4 md:p-8 flex flex-col justify-center bg-black/20">
                         <div className="text-orange font-mono text-sm uppercase tracking-widest mb-4">{"// About Me"}</div>
                         <p className="text-white/90 font-heading text-base md:text-xl leading-relaxed uppercase tracking-wider">
                         I architect and develop intelligent B2B workflow automations that turn complex bottlenecks into streamlined, cost-effective engines. From deep API integrations with Python and n8n, to cross-platform mobile apps in Flutter, I build scalable systems focused on clean code and tangible business results.
                         </p>
                    </div>
                </div>
            </div>

            {/* Custom Modal based on user's sketch */}
            {selectedNode && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-sm p-4"
                    onClick={() => setSelectedNode(null)}
                >
                    <div 
                        className="bg-navy border-2 border-white/10 text-white p-8 md:p-12 rounded-[2rem] max-w-xl w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform animate-in fade-in zoom-in duration-300 relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedNode(null)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-2xl md:text-3xl mb-6 tracking-tight text-orange">{selectedNode.modalTitle}</h3>
                        <p className="text-base md:text-lg leading-relaxed opacity-90">{selectedNode.modalText}</p>
                    </div>
                </div>
            )}
        </section>
    );
};
