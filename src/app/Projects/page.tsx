import Head from "next/head";
import { Metadata } from "next";
import ProjectsPage from "../../components/project/Project";

export const metadata: Metadata = {
  title: "Our Projects - WebTechStudio's Portfolio",
  description:
    "Explore our latest web development projects at WebTechStudio. We build modern, high-performing websites for businesses.",
  openGraph: {
    title: "Our Projects - WebTechStudio's Portfolio",
    description:
      "Check out WebTechStudio's portfolio of innovative web design and development projects.",
    url: "https://webtechstudio.in/projects",
    images: [
      {
        url: "https://webtechstudio.in/projects-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio - Projects Page",
      },
    ],
  },
};

export default function Projects() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Our Projects - WebTechStudio's Portfolio</title>
        <meta
          name="description"
          content="Explore our latest web development projects at WebTechStudio. We build modern, high-performing websites for businesses."
        />
        <meta name="keywords" content="Web Development, Portfolio, Projects, WebTechStudio" />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph for Social Media */}
        <meta property="og:title" content="Our Projects - WebTechStudio's Portfolio" />
        <meta
          property="og:description"
          content="Check out WebTechStudio's portfolio of innovative web design and development projects."
        />
        <meta property="og:image" content="/projects/projects-og-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.in/projects" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects - WebTechStudio's Portfolio" />
        <meta
          name="twitter:description"
          content="We create modern websites and innovative solutions for businesses. Check our latest projects."
        />
        <meta name="twitter:image" content="/projects/projects-twitter-image.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the ProjectsPage Component */}
      <ProjectsPage />
    </>
  );
}
