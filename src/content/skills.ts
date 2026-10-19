import { sectionHref, SECTION_IDS } from "@/config";
import { SkillListSchema, type Skill } from "@/types";

const PROJECTS_HREF = sectionHref(SECTION_IDS.projects);

export const skills: readonly Skill[] = SkillListSchema.parse([
    {
        id: "csharp-dotnet",
        name: "C# / .NET",
        score: 70,
        summary:
            "Developed a comprehensive enterprise architecture using C# and .NET, resulting in a highly scalable backend system for a major client.",
        projectHref: PROJECTS_HREF,
    },
    {
        id: "react-js",
        name: "React / JS",
        score: 55,
        summary:
            "Built several dynamic, high-performance web applications using React and vanilla JS, focusing on interactive user experiences.",
        projectHref: PROJECTS_HREF,
    },
    {
        id: "unity",
        name: "Unity Engine",
        score: 68,
        summary:
            "Created 3D simulations and interactive environments utilizing Unity, optimizing render pipelines for smooth performance.",
        projectHref: PROJECTS_HREF,
    },
    {
        id: "devops",
        name: "DevOps",
        score: 72,
        summary:
            "Implemented robust CI/CD pipelines and containerized applications using Docker and Kubernetes, ensuring zero-downtime deployments.",
        projectHref: PROJECTS_HREF,
    },
    {
        id: "php",
        name: "PHP",
        score: 65,
        summary:
            "Maintained and upgraded legacy backend systems in PHP, improving security and database query efficiency.",
        projectHref: PROJECTS_HREF,
    },
    {
        id: "html-css",
        name: "HTML / CSS",
        score: 58,
        summary:
            "Crafted pixel-perfect, responsive layouts and animations for various landing pages and marketing websites.",
        projectHref: PROJECTS_HREF,
    },
    {
        id: "flutter",
        name: "Flutter",
        score: 65,
        summary:
            "Developed cross-platform mobile applications for iOS and Android using Flutter, ensuring a native-like feel and smooth animations.",
        projectHref: PROJECTS_HREF,
    },
    {
        id: "frontend",
        name: "Frontend",
        score: 50,
        summary:
            "Architected modern frontend ecosystems and design systems that streamline development across multiple teams.",
        projectHref: PROJECTS_HREF,
    },
    {
        id: "backend",
        name: "Backend",
        score: 75,
        summary:
            "Designed robust, scalable microservices architectures to handle high-throughput data processing and real-time syncing.",
        projectHref: PROJECTS_HREF,
    },
]);
