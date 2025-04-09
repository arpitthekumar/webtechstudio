const fs = require("fs");
const path = require("path");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://webtechstudio.site",
  generateRobotsTxt: true,

  additionalPaths: async () => {
    // ✅ Load projects.json from src/app/lib
    const projectsPath = path.join(__dirname, "src/app/lib/projects.json");
    const projectFile = fs.readFileSync(projectsPath, "utf-8");
    const { projects } = JSON.parse(projectFile);

    const projectPaths = projects.map((project) => ({
      loc: `/Projects/${project.id}`,
      changefreq: "monthly",
      priority: 0.7,
    }));

    // ✅ Load blog slugs from src/app/lib/data.ts
    const blogDataPath = path.join(__dirname, "src/app/lib/data.ts");
    const blogRaw = fs.readFileSync(blogDataPath, "utf-8");

    // Extract blog slugs from export (assuming it's like: export const blogPosts = [...])
    const slugMatches = [...blogRaw.matchAll(/slug:\s*["'`](.*?)["'`]/g)];
    const blogPaths = slugMatches.map((match) => ({
      loc: `/Blog/${match[1]}`,
      changefreq: "weekly",
      priority: 0.8,
    }));

    return [...projectPaths, ...blogPaths];
  },
};
