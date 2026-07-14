/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://mehmetcan.dev",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: "./public",
};

module.exports = config;
