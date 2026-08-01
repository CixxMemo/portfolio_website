export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="font-heading font-black text-2xl tracking-tighter uppercase">MCK.</div>
            <nav className="flex gap-8 font-heading font-bold text-sm tracking-widest uppercase">
                <a href="#hero" className="hover:text-orange transition-colors">Home</a>
                <a href="#journey" className="hover:text-orange transition-colors">Journey</a>
                <a href="#projects" className="hover:text-orange transition-colors">Work</a>
                <a href="#contact" className="hover:text-orange transition-colors">Contact</a>
            </nav>
        </header>
    );
};
