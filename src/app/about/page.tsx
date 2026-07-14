import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Hakkımda",
    description:
        "Mehmet Can Kocakurt — AI & Otomasyon Mühendisi. Workflow'lar, AI agent'lar ve otomasyon sistemleri üzerine çalışıyorum.",
};

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/mehmetcankocakurt",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/mehmetcankocakurt",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "X (Twitter)",
        href: "https://x.com",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

const skills = [
    { name: "n8n", category: "Otomasyon" },
    { name: "Make", category: "Otomasyon" },
    { name: "OpenAI API", category: "AI" },
    { name: "LangChain", category: "AI" },
    { name: "Python", category: "Geliştirme" },
    { name: "Next.js", category: "Geliştirme" },
    { name: "REST APIs", category: "Entegrasyon" },
    { name: "Notion API", category: "Entegrasyon" },
];

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            {/* Hero section — avatar + workflow visual */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
                {/* Background workflow visual */}
                <div className="absolute inset-0">
                    <Image
                        src="/blog/about-hero.png"
                        alt=""
                        fill
                        className="object-cover opacity-40"
                        sizes="960px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="relative flex flex-col items-center gap-8 p-8 sm:flex-row sm:items-center sm:p-12">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                        <div className="about-avatar-ring h-32 w-32 overflow-hidden rounded-full border-2 border-accent/30 sm:h-40 sm:w-40">
                            <Image
                                src="/blog/avatar.png"
                                alt="Mehmet Can Kocakurt"
                                width={160}
                                height={160}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        {/* Online indicator */}
                        <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-surface bg-accent" />
                    </div>

                    {/* Info */}
                    <div className="text-center sm:text-left">
                        <p className="text-xs font-medium uppercase tracking-widest text-accent">
                            Merhaba, ben
                        </p>
                        <h1 className="mt-2 font-heading text-3xl font-bold text-text md:text-4xl">
                            Mehmet Can Kocakurt
                        </h1>
                        <p className="mt-2 text-base text-muted">
                            AI &amp; Otomasyon Mühendisi
                        </p>
                        <p className="mt-1 font-mono text-xs text-muted/50">
                            Türkiye · Uzaktan çalışmaya açık
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content — 2 column layout */}
            <div className="mt-12 grid gap-12 lg:grid-cols-3">
                {/* Left column — About text (2/3 width) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* About */}
                    <section>
                        <h2 className="font-heading text-lg font-bold text-text">
                            Hakkımda
                        </h2>
                        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
                            <p>
                                Otomasyon ve yapay zeka entegrasyonuna odaklanan bir yazılım
                                mühendisiyim. Araçları birbirine bağlayan, verileri işleyen ve
                                tekrarlayan işleri otomatikleştiren sistemler kuruyorum — böylece
                                ekipler veri girişi yerine karar vermeye odaklanabiliyor.
                            </p>
                            <p>
                                Çalışmalarımın büyük bölümü n8n, Python ve REST API&apos;ler
                                etrafında dönüyor. Ölçülebilir sonuçları olan, net kapsamlı
                                problemler üzerinde çalışmayı tercih ediyorum.
                            </p>
                            <p>
                                Bu blog&apos;da AI ve otomasyon dünyasından öğrendiklerimi,
                                workflow rehberlerini ve pratik ipuçlarını paylaşıyorum.
                            </p>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h2 className="font-heading text-lg font-bold text-text">
                            Teknolojiler
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-150 hover:border-accent/30 hover:text-text"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right column — Contact & Social (1/3 width) */}
                <div className="space-y-8">
                    {/* Email */}
                    <section>
                        <h2 className="text-xs font-medium uppercase tracking-widest text-muted/50">
                            İletişim
                        </h2>
                        <a
                            href="mailto:hello.mck@gmail.com"
                            className="mt-3 inline-flex items-center gap-2.5 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm text-text transition-all duration-200 hover:border-accent/30 hover:bg-surface/80 group w-full"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-accent"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <span className="transition-colors duration-150 group-hover:text-accent">
                                hello.mck@gmail.com
                            </span>
                        </a>
                    </section>

                    {/* Social */}
                    <section>
                        <h2 className="text-xs font-medium uppercase tracking-widest text-muted/50">
                            Sosyal
                        </h2>
                        <div className="mt-3 space-y-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3.5 text-sm text-muted transition-all duration-200 hover:border-accent/30 hover:bg-surface/80 hover:text-text group"
                                >
                                    <span className="text-muted/60 transition-colors duration-150 group-hover:text-accent">
                                        {link.icon}
                                    </span>
                                    <span>{link.label}</span>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="ml-auto text-muted/30 transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5"
                                    >
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7h10v10" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
