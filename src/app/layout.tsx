import type { Metadata } from "next";
import { outfit, inter } from "@/lib/fonts";
import { Navbar, Footer } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Mehmet Can Koçakurt — AI System Developer & Architect",
        template: "%s | Mehmet Can Koçakurt",
    },
    description:
        "Portfolio of Mehmet Can Koçakurt, AI System Developer & Architect.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mehmetcan.dev"),
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Mehmet Can Koçakurt",
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
        <html lang="en" className="dark">
            <body
                className={`${outfit.variable} ${inter.variable} antialiased`}
            >
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main id="main-content" className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
