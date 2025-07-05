/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://webtechstudio.in",
  generateRobotsTxt: false,
  sitemapBaseFileName: "sitemap-1", // ⬅ rename output
  outDir: "./public", // keep same folder
  exclude: ["/_not-found"],
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
};
