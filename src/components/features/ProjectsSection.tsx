"use client";

import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    cardImage: string;
    modalImage: string;
}

const placeholderProjects: Project[] = [
    {
        id: "proj1",
        title: "B2B Lead Generator",
        shortDescription: "Automated intent scraping & CRM injection.",
        detailedDescription: "This advanced AI pipeline ingests thousands of leads daily, scrapes the web for real-time intent data, and autonomously injects qualified leads directly into Salesforce. It reduced manual data entry by 95% and increased conversion rates by 300%.",
        cardImage: "/images/card_mockup.jpg",
        modalImage: "/images/modal_mockup.jpg"
    },
    {
        id: "proj2",
        title: "AI Support Agent",
        shortDescription: "24/7 autonomous L1 tech support.",
        detailedDescription: "Built with a custom RAG (Retrieval-Augmented Generation) architecture, this autonomous agent resolves 80% of L1 support tickets instantly. It integrates directly with Zendesk and reads through complex technical documentation to provide highly accurate, contextual answers.",
        cardImage: "/images/card_mockup.jpg",
        modalImage: "/images/modal_mockup.jpg"
    },
    {
        id: "proj3",
        title: "Sales Outreach Bot",
        shortDescription: "Hyper-personalized email sequence automation.",
        detailedDescription: "By analyzing recent news and company milestones of target accounts, this LLM-powered bot drafts and schedules hyper-personalized email sequences. It sounds 100% human and dynamically adjusts follow-ups based on sentiment analysis of replies.",
        cardImage: "/images/card_mockup.jpg",
        modalImage: "/images/modal_mockup.jpg"
    },
    {
        id: "proj4",
        title: "Invoice Processor",
        shortDescription: "Visual AI for automated accounting.",
        detailedDescription: "An automated pipeline that uses Vision AI to scan incoming invoices via email, extracts critical financial data points (Vendor, Total, Tax), and automatically synchronizes them into QuickBooks. Eliminates human error and processing delays.",
        cardImage: "/images/card_mockup.jpg",
        modalImage: "/images/modal_mockup.jpg"
    },
    {
        id: "proj5",
        title: "Growth Engine DB",
        shortDescription: "Centralized AI orchestration database.",
        detailedDescription: "A highly optimized vector database architecture that serves as the memory center for multiple AI agents. It handles millions of concurrent embedding requests and ensures real-time context retrieval for enterprise-scale AI deployments.",
        cardImage: "/images/card_mockup.jpg",
        modalImage: "/images/modal_mockup.jpg"
    },
    {
        id: "proj6",
        title: "Market Sentiment AI",
        shortDescription: "Real-time industry trend analysis.",
        detailedDescription: "A sophisticated data pipeline that continuously scrapes industry forums, news outlets, and social media. It scores market sentiment and provides actionable intelligence dashboards to enterprise decision-makers in real-time.",
        cardImage: "/images/card_mockup.jpg",
        modalImage: "/images/modal_mockup.jpg"
    }
];

export const ProjectsSection = () => {
    const { isOpen, data: selectedProject, openModal, closeModal } = useModal<Project>();

    return (
        <section id="projects" className="min-h-screen bg-orange flex flex-col items-center justify-center p-4 md:p-12 py-32">
            <div className="w-full max-w-7xl">
                <h2 className="relative -top-4 md:-top-8 text-[6rem] md:text-[10rem] font-heading font-black text-navy leading-[0.8] tracking-tighter uppercase mb-16 md:mb-24 text-left">
                    WORK
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
                    {placeholderProjects.map((project) => (
                        <div 
                            key={project.id} 
                            onClick={() => openModal(project)}
                            className="bg-navy rounded-3xl p-6 flex flex-col cursor-pointer group hover:-translate-y-2 transition-transform duration-300 shadow-2xl border border-white/5"
                        >
                            {/* Mockup & Short Summary Area */}
                            <div className="flex flex-col gap-4">
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                                    <Image 
                                        src={project.cardImage} 
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <p className="text-white/70 text-sm font-mono leading-relaxed mt-2 line-clamp-2">
                                    {project.shortDescription}
                                </p>
                            </div>

                            {/* Orange Divider */}
                            <hr className="border-t-2 border-orange my-6" />

                            {/* Project Name */}
                            <div>
                                <h3 className="text-2xl font-heading font-black text-white uppercase leading-none group-hover:text-orange transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Modal with details */}
            <Modal 
                isOpen={isOpen} 
                onClose={closeModal} 
                title={selectedProject?.title || ""}
            >
                {selectedProject && (
                    <div className="flex flex-col gap-8">
                        {/* Detailed Mockup */}
                        <div className="relative w-full aspect-[21/9] bg-black rounded-xl overflow-hidden border border-navy/20">
                            <Image 
                                src={selectedProject.modalImage} 
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Detailed Text */}
                        <div>
                            <div className="font-mono text-sm uppercase tracking-widest text-orange font-bold mb-4">
                                {"// Technical Summary"}
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed text-navy font-medium">
                                {selectedProject.detailedDescription}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};
