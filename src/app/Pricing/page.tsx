import Head from "next/head";
import { Metadata } from "next";
import PricingPage from "../../components/pricing/Pricing";

export const metadata: Metadata = {
  title: "Pricing - Affordable Web Development Packages | WebTechStudio",
  description:
    "Explore our affordable web development pricing plans at WebTechStudio. Get high-quality websites, UI/UX design, and SEO services at the best rates.",
  openGraph: {
    title: "Pricing - Affordable Web Development Packages | WebTechStudio",
    description:
      "Check out our pricing for web development, UI/UX design, and digital marketing services. Get top-notch solutions at competitive rates.",
    url: "https://webtechstudio.in/pricing",
    images: [
      {
        url: "https://webtechstudio.in/pricing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio Pricing Page",
      },
    ],
  },
};

export default function Pricing() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Pricing - Affordable Web Development Packages | WebTechStudio</title>
        <meta
          name="description"
          content="Explore our affordable web development pricing plans at WebTechStudio. Get high-quality websites, UI/UX design, and SEO services at the best rates."
        />
        <meta
          name="keywords"
          content="Web Development Pricing, Website Cost, UI/UX Design Packages, SEO Pricing, WebTechStudio"
        />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph for Social Media (Facebook, LinkedIn) */}
        <meta property="og:title" content="Affordable Web Development Pricing | WebTechStudio" />
        <meta
          property="og:description"
          content="Check out our pricing for web development, UI/UX design, and digital marketing services. Get top-notch solutions at competitive rates."
        />
        <meta property="og:image" content="/mainpage/webtechstudio-pricing-og.jpg" />
        <meta property="og:url" content="https://webtechstudio.com/pricing" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Affordable Web Development Pricing | WebTechStudio" />
        <meta
          name="twitter:description"
          content="Get high-quality websites, UI/UX design, and SEO services at affordable prices. Choose the best plan for your business."
        />
        <meta name="twitter:image" content="/mainpage/webtechstudio-pricing-twitter.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the PricingPage Component */}
      <PricingPage />
    </>
  );
}
