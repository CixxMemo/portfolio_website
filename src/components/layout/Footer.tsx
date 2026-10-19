import { siteConfig } from "@/config";

export const Footer = () => {
    return (
        <footer className="bg-navy text-white p-12 text-center border-t border-white/10">
            <p className="font-heading font-bold tracking-widest uppercase text-sm">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
        </footer>
    );
};
