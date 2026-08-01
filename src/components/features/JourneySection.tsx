"use client";

import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui";

interface Experience {
    id: string;
    period: string;
    role: string;
    shortDesc: string;
    detailedDesc: string;
}

const experiences: Experience[] = [
    {
        id: "exp1",
        period: "2026 - Present",
        role: "Freelance B2B AI Workflow System Architect",
        shortDesc: "Designing and building autonomous AI-driven business workflows.",
        detailedDesc: "As a freelance system architect, I partner with B2B companies to eliminate operational bottlenecks. I design end-to-end automation pipelines using tools like n8n, Make.com, and Python. My day-to-day involves integrating LLMs into existing CRMs, building custom RAG architectures for data retrieval, and ensuring high-availability systems that directly impact revenue growth and operational efficiency."
    },
    {
        id: "exp2",
        period: "2024 - 2026",
        role: "Software Developer Intern",
        shortDesc: "Gained foundational expertise in scalable architecture and clean code principles.",
        detailedDesc: "During this internship, I immersed myself in the fundamentals of scalable software architecture. I collaborated with senior engineers to develop backend APIs using Python and worked on frontend mobile interfaces with Flutter. I learned the critical importance of writing clean, maintainable code and how robust CI/CD pipelines function in a real-world enterprise environment."
    }
];

export const JourneySection = () => {
    const { isOpen, data: selectedExp, openModal, closeModal } = useModal<Experience>();

    return (
        <section id="journey" className="min-h-screen bg-white text-navy flex items-center justify-center p-12">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                
                {/* Left Column: Title and Intro */}
                <div className="flex flex-col justify-start">
                    <h2 className="text-[5rem] md:text-[7rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-12">
                        MY<br />JOURNEY
                    </h2>

                </div>

                {/* Right Column: Timeline */}
                <div className="flex flex-col justify-center">
                    <div className="border-l-4 border-orange pl-8 space-y-12">
                        {experiences.map((exp) => (
                            <div 
                                key={exp.id}
                                onClick={() => openModal(exp)}
                                className="group cursor-pointer p-4 -ml-4 rounded-xl hover:bg-orange/5 transition-colors duration-300"
                            >
                                <div className="font-heading font-black text-2xl uppercase group-hover:text-orange transition-colors duration-300">
                                    {exp.period}
                                </div>
                                <div className="font-bold text-navy uppercase tracking-widest text-sm mt-1">
                                    {exp.role}
                                </div>
                                <p className="mt-3 text-navy/70 leading-relaxed max-w-lg group-hover:text-navy/90 transition-colors duration-300">
                                    {exp.shortDesc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for Detailed Experience */}
            <Modal 
                isOpen={isOpen} 
                onClose={closeModal} 
                title={selectedExp?.period || ""}
            >
                {selectedExp && (
                    <div className="flex flex-col">
                        <div className="font-bold text-orange uppercase tracking-widest text-sm mb-6">
                            {selectedExp.role}
                        </div>
                        <p className="text-lg leading-relaxed text-navy font-medium mb-10">
                            {selectedExp.detailedDesc}
                        </p>
                        <div className="self-end mt-4">
                            <a 
                                href="#projects" 
                                onClick={closeModal} 
                                className="text-navy font-bold uppercase tracking-widest text-sm border-b-2 border-orange pb-1 hover:text-orange transition-colors duration-300"
                            >
                                View Related Project ➔
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};
