"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export function NewsletterCTA() {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section ref={sectionRef} className="scroll-reveal border-t border-border">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
                <div className="newsletter-card relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-8 md:p-12">
                    {/* Subtle gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5 pointer-events-none" />

                    <div className="relative">
                        <h2 className="font-heading text-xl font-bold text-text md:text-2xl">
                            Yeni Yazılardan Haberdar Ol
                        </h2>
                        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                            AI ve otomasyon dünyasındaki yenilikleri, workflow rehberlerini ve
                            pratik ipuçlarını kaçırma. Spam yok, sadece değerli içerik.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
                        >
                            <input
                                type="email"
                                placeholder="email@ornek.com"
                                className="flex-1 rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-muted/40 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors duration-200"
                                aria-label="E-posta adresi"
                            />
                            <button
                                type="submit"
                                className="btn-hover rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-bg transition-colors duration-150"
                            >
                                Abone Ol
                            </button>
                        </form>

                        <p className="mt-3 text-xs text-muted/40">
                            İstediğin zaman abonelikten çıkabilirsin.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
