/** @type {import('next-sitemap').IConfig} */
const config = {
    // Keep the fallback in sync with `siteConfig.url` in src/config/site.ts.
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://mehmetcan.dev",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: "./public",
};

module.exports = config;
