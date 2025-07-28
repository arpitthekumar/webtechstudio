import Head from "next/head";
import { Metadata } from "next";
import ContactSection from "../../components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us - WebTechStudio",
  description:
    "Get in touch with WebTechStudio for web development services, inquiries, and support. We're here to help you with all your digital needs.",
  openGraph: {
    title: "Contact Us - WebTechStudio",
    description:
      "Reach out to WebTechStudio for web development services, project inquiries, or collaborations.",
    url: "https://webtechstudio.site/Contact",
    images: [
      {
        url: "https://webtechstudio.site/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio - Contact Page",
      },
    ],
  },
};

export default function Contact() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>Contact Us - WebTechStudio</title>
        <meta
          name="description"
          content="Get in touch with WebTechStudio for web development services, inquiries, and support. We're here to help you with all your digital needs."
        />
        <meta name="keywords" content="Contact, WebTechStudio, Support, Web Development" />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph for Social Media */}
        <meta property="og:title" content="Contact Us - WebTechStudio" />
        <meta
          property="og:description"
          content="Reach out to WebTechStudio for web development services, project inquiries, or collaborations."
        />
        <meta property="og:image" content="/opengraph-image.jpg" />
        <meta property="og:url" content="https://webtechstudio.site/Contact" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - WebTechStudio" />
        <meta
          name="twitter:description"
          content="Have questions? Contact WebTechStudio for web development services, inquiries, and support."
        />
        <meta name="twitter:image" content="/opengraph-image.jpg" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Render the ContactSection Component */}
      <ContactSection />
    </>
  );
}
