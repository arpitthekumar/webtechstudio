import Head from "next/head";
import { Metadata } from "next";
import AboutPage from "../../components/about/About";

export const metadata: Metadata = {
    title: "About WebTechStudio - Leading Web Development Agency",
    description:
      "Learn more about WebTechStudio, a top-rated web development agency in Agra, India. We create modern websites, UI/UX designs, and branding solutions.",
    openGraph: {
      title: "About WebTechStudio - Leading Web Development Agency",
      description:
        "Get to know WebTechStudio, a trusted web development company specializing in modern web solutions.",
      url: "https://webtechstudio.in/about",
      images: [
        {
          url: "https://webtechstudio.in/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "WebTechStudio - About Page",
        },
      ],
    },
  };

export default function About() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>About WebTechStudio - Leading Web Development Agency</title>
        <meta
          name="description"
          content="Learn more about WebTechStudio, a top-rated web development agency in Agra, India. We create modern websites, UI/UX designs, and branding solutions."
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
        <meta property="og:image" content="/opengraph-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WebTechStudio - Best Web Development Agency in Agra, India" />
        <meta
          name="twitter:description"
          content="We create high-performing websites and digital solutions for businesses in Agra, India."
        />
        <meta name="twitter:image" content="/opengraph-image.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the HomePage Component */}
      <AboutPage />
    </>
  );
}
