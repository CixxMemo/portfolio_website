import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Background effects */}
            <div className="hero-blob hero-blob--primary" />
            <div className="hero-blob hero-blob--secondary" />
            <div className="hero-grid" />

            {/* Content */}
            <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-32">
                <p className="hero-reveal hero-reveal-1 text-sm font-medium uppercase tracking-widest text-accent">
                    MCK Blog
                </p>
                <h1 className="hero-reveal hero-reveal-2 mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-text md:text-5xl lg:text-6xl">
                    AI &amp; Otomasyon
                    <br />
                    <span className="text-muted">Dünyasını Keşfet</span>
                </h1>
                <p className="hero-reveal hero-reveal-3 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                    Yapay zeka workflow&apos;ları, otomasyon araçları, AI agent&apos;lar ve
                    pratik rehberler. Gerçek projelerden öğrenilen dersler.
                </p>
                <p className="hero-reveal hero-reveal-4 mt-4 font-mono text-xs text-muted/50">
                    n8n · OpenAI · Make · LangChain · API Entegrasyonları
                </p>
                <div className="hero-reveal hero-reveal-5 mt-10 flex gap-4">
                    <Link
                        href="/blog"
                        className="btn-hover inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg"
                    >
                        Yazıları Oku
                    </Link>
                    <Link
                        href="#kategoriler"
                        className="btn-hover inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text"
                    >
                        Kategoriler
                    </Link>
                </div>
            </div>
        </section>
    );
}
