import Head from "next/head";
import HomePage from "../components/home/home";
import { Metadata } from "next";
import { seoData } from "@/app/components/seo";

// Get a random index based on the available titles
const randomIndex = Math.floor(Math.random() * seoData.titles.length);

export const metadata: Metadata = {
  title: seoData.titles[randomIndex],
  description: seoData.descriptions[randomIndex],
  keywords: seoData.keywords.join(","),
  openGraph: {
    title: seoData.titles[randomIndex],
    description: seoData.descriptions[randomIndex],
    url: "https://webtechstudio.site",
    images: [
      {
        url: "https://webtechstudio.site/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: seoData.titles[randomIndex],
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>{seoData.titles[randomIndex]}</title>
        <meta name="description" content={seoData.descriptions[randomIndex]} />
        <meta name="keywords" content={seoData.keywords.join(",")} />
        <meta name="author" content="WebTechStudio" />
        
        {/* ✅ Open Graph for Social Media (Facebook, LinkedIn) */}
        <meta property="og:title" content={seoData.titles[randomIndex]} />
        <meta property="og:description" content={seoData.descriptions[randomIndex]} />
        <meta property="og:image" content="/mainpage/webtechstudio-og-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.site" />
        <meta property="og:type" content="website" />
        
        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.titles[randomIndex]} />
        <meta name="twitter:description" content={seoData.descriptions[randomIndex]} />
        <meta name="twitter:image" content="/mainpage/webtechstudio-twitter-image.jpg" />
        
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the HomePage Component */}
      <HomePage />
    </>
  );
}
