import Head from "next/head";
import { Metadata } from "next";
import HardwarePage from "../components/hardware/Hardware";

// ✅ App Router Metadata
export const metadata: Metadata = {
  title: "Hardware Products for Businesses | WebTechStudio",
  description:
    "Explore our range of high-quality hardware products for businesses, including barcode scanners, biometric machines, and more — all at competitive prices.",
  keywords: [
    "Hardware",
    "Business Devices",
    "Barcode Scanner",
    "Biometric Machine",
    "POS Kits",
    "WebTechStudio Hardware",
    "Affordable Business Hardware",
  ],
  openGraph: {
    title: "Business Hardware Devices | WebTechStudio",
    description:
      "Discover professional hardware devices for businesses — including scanners, ID systems, and more. Buy reliable tech at great prices.",
    url: "https://webtechstudio.site/HardWare",
    type: "website",
    images: [
      {
        url: "https://webtechstudio.site/hardware/hardware-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio Hardware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Hardware for Sale | WebTechStudio",
    description:
      "Buy reliable and affordable hardware devices for your business including scanners, biometric systems, and more.",
    images: ["https://webtechstudio.site/hardware/hardware-twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Hardware() {
  return (
    <>
      {/* ✅ Fallback/custom SEO for older bots */}
      <Head>
        <title>Hardware Products for Businesses | WebTechStudio</title>
        <meta
          name="description"
          content="Explore our range of high-quality hardware products for businesses, including barcode scanners, biometric machines, and more — all at competitive prices."
        />
        <meta
          name="keywords"
          content="Hardware, Business Devices, Barcode Scanner, Biometric Machine, POS Kits, WebTechStudio Hardware"
        />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Business Hardware Devices | WebTechStudio" />
        <meta
          property="og:description"
          content="Discover professional hardware devices for businesses — including scanners, ID systems, and more. Buy reliable tech at great prices."
        />
        <meta property="og:image" content="/hardware/hardware-og-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.site/HardWare" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Hardware for Sale | WebTechStudio" />
        <meta
          name="twitter:description"
          content="Buy reliable and affordable hardware devices for your business including scanners, biometric systems, and more."
        />
        <meta name="twitter:image" content="/hardware/hardware-twitter-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render All Hardware */}
      <HardwarePage />
    </>
  );
}
