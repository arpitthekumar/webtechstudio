import Head from "next/head";
import { Metadata } from "next";
import AboutPage from "../components/about/About";

export const metadata: Metadata = {
  title: "WebTechStudio - Best Web Development Agency in Agra",
  description:
    "WebTechStudio is a professional web development agency in Agra, India, specializing in UI/UX design, SEO, and branding solutions.",
  openGraph: {
    title: "WebTechStudio - Best Web Development Agency in Agra",
    description:
      "We provide expert web development, SEO, and branding solutions for businesses in Agra.",
    url: "https://webtechstudio.site",
    images: [
      {
        url: "https://webtechstudio.site/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio - Homepage",
      },
    ],
  },
};

export default function About() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>WebTechStudio - Best Web Development Agency in Agra, India</title>
        <meta
          name="description"
          content="WebTechStudio is a leading web development agency in Agra, India, providing high-quality websites, UI/UX design, and SEO-friendly digital solutions."
        />
        <meta
          name="keywords"
          content="Web Development, UI/UX Design, SEO, Web Design, WebTechStudio, Agra, India"
        />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph for Social Media (Facebook, LinkedIn) */}
        <meta property="og:title" content="WebTechStudio - Best Web Development Agency in Agra, India" />
        <meta
          property="og:description"
          content="Get high-quality websites and digital solutions from WebTechStudio, the top web development company in Agra, India."
        />
        <meta property="og:image" content="/mainpage/webtechstudio-og-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebTechStudio - Best Web Development Agency in Agra, India" />
        <meta
          name="twitter:description"
          content="We create high-performing websites and digital solutions for businesses in Agra, India."
        />
        <meta name="twitter:image" content="/mainpage/webtechstudio-twitter-image.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the HomePage Component */}
      <AboutPage />
    </>
  );
}
