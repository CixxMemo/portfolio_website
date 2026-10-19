import type { Metadata } from "next";
import { outfit, inter } from "@/lib/fonts";
import { Navbar, Footer } from "@/components/layout";
import { siteConfig } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        siteName: siteConfig.name,
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
        <html lang="en">
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
