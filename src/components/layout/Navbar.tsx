import Link from "next/link";
import { NavbarMobileToggle } from "./NavbarMobileToggle";

const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Hakkımda" },
];

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
                aria-label="Ana navigasyon"
            >
                <Link
                    href="/"
                    className="logo-dot-wrapper font-heading text-lg font-bold tracking-tight text-text"
                >
                    MCK<span className="logo-dot text-accent">.</span>
                    <span className="ml-1 text-sm font-normal text-muted">Blog</span>
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="link-underline text-sm font-medium text-muted transition-colors duration-150 hover:text-text"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <NavbarMobileToggle navLinks={navLinks} />
            </nav>
        </header>
    );
}
