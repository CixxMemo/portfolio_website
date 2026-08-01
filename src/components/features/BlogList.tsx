"use client";

import { Blog } from "@/types/blog";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui";

interface BlogListProps {
    blogs: Blog[];
}

export const BlogList = ({ blogs }: BlogListProps) => {
    const { isOpen, data: selectedBlog, openModal, closeModal } = useModal<Blog>();

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {blogs.map((blog) => (
                    <div 
                        key={blog.id} 
                        className="group cursor-pointer border-t-4 border-navy pt-8 hover:-translate-y-2 transition-transform duration-300"
                        onClick={() => openModal(blog)}
                    >
                        <div className="font-mono text-xs uppercase tracking-widest text-orange font-bold mb-6">
                            {blog.date}
                        </div>
                        <h3 className="text-3xl font-heading font-black uppercase leading-tight mb-4 group-hover:text-orange transition-colors">
                            {blog.title}
                        </h3>
                        <p className="text-navy/70 line-clamp-3">
                            {blog.excerpt}
                        </p>
                    </div>
                ))}
            </div>

            <Modal 
                isOpen={isOpen} 
                onClose={closeModal} 
                title={selectedBlog?.title || ""}
            >
                {selectedBlog && (
                    <div className="space-y-6">
                        <div className="font-mono text-sm uppercase tracking-widest text-orange font-bold">
                            Published on: {selectedBlog.date}
                        </div>
                        <p className="text-xl leading-relaxed">
                            {selectedBlog.excerpt}
                        </p>
                        <div className="pt-8 mt-8 border-t-4 border-navy/10 flex justify-end">
                            <a 
                                href={selectedBlog.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-navy text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-orange hover:text-navy transition-colors border-2 border-navy"
                            >
                                Read Full Article -{">"}
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};
