/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://webtechstudio.site", // Your website URL
  generateRobotsTxt: true, // Generates robots.txt

  additionalPaths: async (config) => {
    const blogPaths = [
      {
        loc: "/Blog/nextjs-performance-optimization",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        loc: "/Blog/animation-framer-motion-gsap",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        loc: "/Blog/ui-ux-design-nextjs-framer-motion-gsap",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        loc: "/Blog/ecommerce-website-development-nextjs-framer-motion-gsap",
        changefreq: "weekly",
        priority: 0.8,
      },
      { loc: "/Blog/seo-nextjs", changefreq: "weekly", priority: 0.8 },
      {
        loc: "/Blog/performance-optimization-nextjs-framer-motion-gsap",
        changefreq: "weekly",
        priority: 0.8,
      },
    ];

    const projectPaths = [
      {
        loc: "/Projects/triguna-coaching-classes",
        changefreq: "monthly",
        priority: 0.7,
      },
      { loc: "/Projects/gurukul-skills", changefreq: "monthly", priority: 0.7 },
      {
        loc: "/Projects/universal-taekwondo-academy",
        changefreq: "monthly",
        priority: 0.7,
      },
      { loc: "/Projects/adsuper", changefreq: "monthly", priority: 0.7 },
      {
        loc: "/Projects/mrdamager_portfolio",
        changefreq: "monthly",
        priority: 0.7,
      },
    ];

    return [...blogPaths, ...projectPaths];
  },
};
