import { BlogService } from "@/services/blogService";
import { BlogList } from "./BlogList";

export const BlogsSection = async () => {
    const blogs = await BlogService.getLatestBlogs();

    return (
        <section id="blogs" className="min-h-screen bg-white text-navy flex flex-col items-center justify-center p-12 py-32">
            <div className="w-full max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <h2 className="text-[5rem] md:text-[8rem] font-heading font-black leading-[0.85] tracking-tighter uppercase">
                        LATEST<br />THOUGHTS
                    </h2>
                    <a href="#" className="font-mono text-sm uppercase tracking-widest font-bold border-b-2 border-orange pb-1 hover:text-orange transition-colors">
                        View All Articles -{">"}
                    </a>
                </div>
                
                <BlogList blogs={blogs} />
            </div>
        </section>
    );
};
