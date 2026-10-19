import { NAV_ITEMS, sectionHref, siteConfig } from "@/config";

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="font-heading font-black text-2xl tracking-tighter uppercase">{siteConfig.shortName}</div>
            <nav className="flex gap-8 font-heading font-bold text-sm tracking-widest uppercase">
                {NAV_ITEMS.map(({ label, sectionId }) => (
                    <a key={sectionId} href={sectionHref(sectionId)} className="hover:text-orange transition-colors">
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
};
