import Head from "next/head";
import { Metadata } from "next";
import TermsAndConditionsPage from "../../components/termsandconditions/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions - WebTechStudio",
  description:
    "Read the Terms & Conditions of WebTechStudio. Understand our policies on payments, intellectual property, refunds, and client responsibilities.",
  openGraph: {
    title: "Terms & Conditions - WebTechStudio",
    description:
      "Learn about WebTechStudio's Terms & Conditions regarding our web development, SEO, and design services.",
    url: "https://webtechstudio.in/terms-and-conditions",
    images: [
      {
        url: "https://webtechstudio.in/terms-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio - Terms & Conditions",
      },
    ],
  },
};

export default function Terms() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Terms & Conditions - WebTechStudio</title>
        <meta
          name="description"
          content="Read the Terms & Conditions of WebTechStudio. Understand our policies on payments, intellectual property, refunds, and client responsibilities."
        />
        <meta name="keywords" content="Terms and Conditions, WebTechStudio, Web Development, SEO, Payments, Policies" />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph for Social Media */}
        <meta property="og:title" content="Terms & Conditions - WebTechStudio" />
        <meta
          property="og:description"
          content="Learn about WebTechStudio's Terms & Conditions regarding our web development, SEO, and design services."
        />
        <meta property="og:image" content="/legal/terms-og-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.in/terms-and-conditions" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions - WebTechStudio" />
        <meta
          name="twitter:description"
          content="Understand the policies of WebTechStudio for web development, SEO, payments, and services."
        />
        <meta name="twitter:image" content="/legal/terms-twitter-image.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the TermsAndConditions Component */}
      <TermsAndConditionsPage />
    </>
  );
}
