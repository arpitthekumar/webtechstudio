/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webtechstudio.site',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/_not-found'],
};
