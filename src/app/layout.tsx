import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "MCK Blog — AI & Otomasyon",
        template: "%s | MCK Blog",
    },
    description:
        "Yapay zeka, otomasyon workflow'ları, AI agent'lar ve pratik rehberler. n8n, Make, OpenAI ve daha fazlası.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mehmetcan.dev"),
    openGraph: {
        type: "website",
        locale: "tr_TR",
        siteName: "MCK Blog",
        images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className="dark">
            <body
                className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <a href="#main-content" className="skip-link">
                    İçeriğe atla
                </a>
                <Navbar />
                <main id="main-content" className="min-h-screen pt-[65px]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
