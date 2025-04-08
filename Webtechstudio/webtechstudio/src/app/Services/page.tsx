import Head from "next/head";
import { Metadata } from "next";
import ServicesPage from "../components/services/Services";

export const metadata: Metadata = {
  title: "Our Services - WebTechStudio",
  description:
    "Discover our professional web development services at WebTechStudio. We offer cutting-edge solutions for businesses to thrive online.",
  openGraph: {
    title: "Our Services - WebTechStudio",
    description:
      "Explore WebTechStudio's top-notch web development services tailored for businesses looking to scale digitally.",
    url: "https://webtechstudio.in/services",
    images: [
      {
        url: "https://webtechstudio.in/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio - Services Page",
      },
    ],
  },
};

export default function Services() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Our Services - WebTechStudio</title>
        <meta
          name="description"
          content="Discover our professional web development services at WebTechStudio. We offer cutting-edge solutions for businesses to thrive online."
        />
        <meta name="keywords" content="Web Development, Services, WebTechStudio, Business Solutions" />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph for Social Media */}
        <meta property="og:title" content="Our Services - WebTechStudio" />
        <meta
          property="og:description"
          content="Explore WebTechStudio's top-notch web development services tailored for businesses looking to scale digitally."
        />
        <meta property="og:image" content="/services/services-og-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.in/services" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - WebTechStudio" />
        <meta
          name="twitter:description"
          content="We provide professional web solutions to help businesses succeed online. Check our services."
        />
        <meta name="twitter:image" content="/services/services-twitter-image.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the ServicesPage Component */}
      <ServicesPage />
    </>
  );
}
