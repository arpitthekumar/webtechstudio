import Head from "next/head";
import { Metadata } from "next";
import BlogPage from "../components/blog/Blog";

export const metadata: Metadata = {
  title: "Our Blog - WebTechStudio",
  description:
    "Stay updated with the latest web development trends, tips, and insights from WebTechStudio. Read our expert blogs to enhance your knowledge.",
  openGraph: {
    title: "Our Blog - WebTechStudio",
    description:
      "Explore WebTechStudio's blog for the latest trends, tips, and insights in web development and design.",
    url: "https://webtechstudio.site/Blog",
    images: [
      {
        url: "https://webtechstudio.site/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio - Blog Page",
      },
    ],
  },
};

export default function Blog() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Our Blog - WebTechStudio</title>
        <meta
          name="description"
          content="Stay updated with the latest web development trends, tips, and insights from WebTechStudio. Read our expert blogs to enhance your knowledge."
        />
        <meta name="keywords" content="Web Development, Blog, WebTechStudio, Technology Insights" />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph for Social Media */}
        <meta property="og:title" content="Our Blog - WebTechStudio" />
        <meta
          property="og:description"
          content="Explore WebTechStudio's blog for the latest trends, tips, and insights in web development and design."
        />
        <meta property="og:image" content="/blog/blog-og-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.site/Blog" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Blog - WebTechStudio" />
        <meta
          name="twitter:description"
          content="Check out the latest web development trends, insights, and expert advice on our blog."
        />
        <meta name="twitter:image" content="/blog/blog-twitter-image.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the BlogPage Component */}
      <BlogPage />
    </>
  );
}
