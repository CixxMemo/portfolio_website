import { 
    HeroSection, 
    JourneySection, 
    ProjectsSection, 
    SkillsSection, 
    BlogsSection, 
    ContactSection 
} from "@/components/features";

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <HeroSection />
            <JourneySection />
            <ProjectsSection />
            <SkillsSection />
            <BlogsSection />
            <ContactSection />
        </div>
    );
}
