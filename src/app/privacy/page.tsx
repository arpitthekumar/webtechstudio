import Head from "next/head";
import { Metadata } from "next";
    import PrivacyPolicyPage from "../../components/privacypolicy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy - WebTechStudio",
  description:
    "Read the Privacy Policy of WebTechStudio. Learn how we collect, use, and protect your data while providing top-tier web development services.",
  openGraph: {
    title: "Privacy Policy - WebTechStudio",
    description:
      "Understand how WebTechStudio handles your personal data and privacy.",
    url: "https://webtechstudio.in/privacy",
    images: [
      {
        url: "https://webtechstudio.in/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - WebTechStudio",
      },
    ],
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Privacy Policy - WebTechStudio</title>
        <meta
          name="description"
          content="Read the Privacy Policy of WebTechStudio. Learn how we collect, use, and protect your data while providing top-tier web development services."
        />
        <meta
          name="keywords"
          content="Privacy Policy, WebTechStudio, Data Protection, Web Development"
        />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph for Social Media (Facebook, LinkedIn) */}
        <meta property="og:title" content="Privacy Policy - WebTechStudio" />
        <meta
          property="og:description"
          content="Understand how WebTechStudio handles your personal data and privacy."
        />
        <meta property="og:image" content="/opengraph-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.com/privacy" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - WebTechStudio" />
        <meta
          name="twitter:description"
          content="Learn about WebTechStudio’s privacy policies and how we protect your data."
        />
        <meta name="twitter:image" content="/opengraph-image.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the Privacy Policy Component */}
      <PrivacyPolicyPage />
    </>
  );
}
