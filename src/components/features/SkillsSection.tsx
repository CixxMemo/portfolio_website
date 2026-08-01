"use client";

import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui";

interface Skill {
    id: string;
    name: string;
    score: number;
    color: string;
    projectSummary: string;
    projectUrl: string;
}

const skillsData: Skill[] = [
    { 
        id: "s1",
        name: "C# / .NET", 
        score: 70, 
        color: "bg-orange",
        projectSummary: "Developed a comprehensive enterprise architecture using C# and .NET, resulting in a highly scalable backend system for a major client.",
        projectUrl: "#projects"
    },
    { 
        id: "s2",
        name: "React / JS", 
        score: 55, 
        color: "bg-orange",
        projectSummary: "Built several dynamic, high-performance web applications using React and vanilla JS, focusing on interactive user experiences.",
        projectUrl: "#projects"
    },
    { 
        id: "s3",
        name: "Unity Engine", 
        score: 68, 
        color: "bg-orange",
        projectSummary: "Created 3D simulations and interactive environments utilizing Unity, optimizing render pipelines for smooth performance.",
        projectUrl: "#projects"
    },
    { 
        id: "s4",
        name: "DevOps", 
        score: 72, 
        color: "bg-orange",
        projectSummary: "Implemented robust CI/CD pipelines and containerized applications using Docker and Kubernetes, ensuring zero-downtime deployments.",
        projectUrl: "#projects"
    },
    { 
        id: "s5",
        name: "PHP", 
        score: 65, 
        color: "bg-orange",
        projectSummary: "Maintained and upgraded legacy backend systems in PHP, improving security and database query efficiency.",
        projectUrl: "#projects"
    },
    { 
        id: "s6",
        name: "HTML / CSS", 
        score: 58, 
        color: "bg-orange",
        projectSummary: "Crafted pixel-perfect, responsive layouts and animations for various landing pages and marketing websites.",
        projectUrl: "#projects"
    },
    { 
        id: "s7",
        name: "Flutter", 
        score: 65, 
        color: "bg-orange",
        projectSummary: "Developed cross-platform mobile applications for iOS and Android using Flutter, ensuring a native-like feel and smooth animations.",
        projectUrl: "#projects"
    },
    { 
        id: "s8",
        name: "Frontend", 
        score: 50, 
        color: "bg-orange",
        projectSummary: "Architected modern frontend ecosystems and design systems that streamline development across multiple teams.",
        projectUrl: "#projects"
    },
    { 
        id: "s9",
        name: "Backend", 
        score: 75, 
        color: "bg-orange",
        projectSummary: "Designed robust, scalable microservices architectures to handle high-throughput data processing and real-time syncing.",
        projectUrl: "#projects"
    }
];

export const SkillsSection = () => {
    const { isOpen, data: selectedSkill, openModal, closeModal } = useModal<Skill>();

    return (
        <section id="skills" className="min-h-screen bg-navy flex flex-col items-center justify-center p-12 py-32">
            <div className="w-full max-w-5xl">
                <h2 className="text-[5rem] md:text-[8rem] font-heading font-black text-white leading-[0.85] tracking-tighter uppercase mb-24 text-center md:text-left">
                    EXPERTISE
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {skillsData.map((skill) => (
                        <div 
                            key={skill.id} 
                            className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                            onClick={() => openModal(skill)}
                        >
                            <div className="flex justify-between items-end mb-3 font-mono font-bold uppercase tracking-widest text-white group-hover:text-orange transition-colors">
                                <span className="text-xl md:text-2xl">{skill.name}</span>
                                <span className="text-lg opacity-90">{skill.score}/100</span>
                            </div>
                            <div className="h-8 w-full border-2 border-white/20 p-1 flex">
                                <div 
                                    className={`h-full ${skill.color} transition-all duration-1000 ease-out`} 
                                    style={{ width: `${skill.score}%` }}
                                />
                                <div className="h-full bg-white flex-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal 
                isOpen={isOpen} 
                onClose={closeModal} 
                title={selectedSkill?.name || ""}
            >
                {selectedSkill && (
                    <div className="space-y-6">
                        <div className="font-mono text-sm uppercase tracking-widest text-orange font-bold">
                            Proficiency Score: {selectedSkill.score}/100
                        </div>
                        <p className="text-xl leading-relaxed text-navy">
                            {selectedSkill.projectSummary}
                        </p>
                        <div className="pt-8 mt-8 border-t-4 border-navy/10 flex justify-end">
                            <a 
                                href={selectedSkill.projectUrl} 
                                className="bg-navy text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-orange hover:text-navy transition-colors border-2 border-navy inline-block"
                            >
                                View Project -{">"}
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};
