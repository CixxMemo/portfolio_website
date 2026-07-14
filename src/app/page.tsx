import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { NewsletterCTA } from "@/components/home/NewsletterCTA";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturedPosts />
            <CategoryShowcase />
            <NewsletterCTA />
        </>
    );
}
