import Link from "next/link";

const socialLinks = [
    { href: "https://github.com/mehmetcankocakurt", label: "GitHub" },
    { href: "https://linkedin.com/in/mehmetcankocakurt", label: "LinkedIn" },
];

const footerLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Hakkımda" },
];

export function Footer() {
    return (
        <footer className="border-t border-border bg-bg">
            <div className="mx-auto max-w-5xl px-6 py-10">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="font-heading text-lg font-bold tracking-tight text-text"
                        >
                            MCK<span className="text-accent">.</span>
                            <span className="ml-1 text-sm font-normal text-muted">Blog</span>
                        </Link>
                        <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted/60">
                            AI ve otomasyon dünyasından yazılar, workflow rehberleri
                            ve pratik ipuçları.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-muted/40">
                                Sayfalar
                            </p>
                            <ul className="mt-3 space-y-2">
                                {footerLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted transition-colors duration-150 hover:text-text"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-muted/40">
                                Sosyal
                            </p>
                            <ul className="mt-3 space-y-2">
                                {socialLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted transition-colors duration-150 hover:text-text"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col items-center gap-2 border-t border-border/50 pt-6 sm:flex-row sm:justify-between">
                    <p className="text-xs text-muted/40">
                        © {new Date().getFullYear()} Mehmet Can Kocakurt
                    </p>
                    <p className="text-xs text-muted/30">
                        Next.js ile geliştirildi
                    </p>
                </div>
            </div>
        </footer>
    );
}
