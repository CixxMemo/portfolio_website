export const ContactSection = () => {
    return (
        <section id="contact" className="min-h-screen bg-orange flex flex-col items-center justify-center p-12 text-navy">
            <h2 className="text-[8rem] md:text-[14rem] font-heading font-black leading-[0.8] tracking-tighter uppercase text-center mb-12">
                LET&apos;S<br />TALK
            </h2>
            <p className="text-2xl font-bold uppercase tracking-widest mb-16 text-center max-w-2xl">
                Ready to build something extraordinary? Drop me a line.
            </p>
            <a 
                href="mailto:hello@example.com" 
                className="text-4xl md:text-6xl font-heading font-black uppercase hover:text-white transition-colors border-b-8 border-navy hover:border-white pb-2"
            >
                hello@mehmetcan.dev
            </a>
            <div className="mt-32 flex gap-12 font-mono text-sm uppercase tracking-widest font-bold">
                <a href="https://www.linkedin.com/in/mehmet-can-kocakurt-254a01170" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/CixxMemo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
            </div>
        </section>
    );
};
