import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingBar from "./LoadingBar";
import Script from "next/script";
import Head from "next/head";
import TrackingScripts from "./TrackingScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webtechstudio.site"),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: "Web Tech Studio - Best Web Development Company in Agra, India",
    template: "%s | Web Tech Studio",
  },
  keywords: [
    "web development agency",
    "website design company",
    "SEO services",
    "webtechstudio",
    "Webtechstudio",
    "webTechsStudio",
    "web techs Studio",
    "UI/UX design",
    "custom web development",
    "e-commerce website development",
    "web tech studio",
    "best web development company",
    "website development services",
  ],
  description:
    "Web Tech Studio is a top-rated web development agency specializing in modern website design, UI/UX, SEO, and branding. Build your dream website with us!",
  openGraph: {
    title: "Web Tech Studio - Professional Website Design & SEO Services",
    description:
      "We provide expert web development, UI/UX design, and SEO solutions worldwide. Let's create a powerful online presence for your business!",
    url: "https://webtechstudio.site",
    siteName: "Web Tech Studio",
    images: [
      {
        url: "https://webtechstudio.site/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Tech Studio - Website Design & Development Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@WebTechStudio",
    title: "Web Tech Studio - Build Your Dream Website Today!",
    description:
      "Web Tech Studio is a trusted website design & development agency offering premium SEO services. Get a modern website that ranks & converts!",
    images: ["https://webtechstudio.site/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://webtechstudio.site",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Web Tech Studio",
              url: "https://webtechstudio.site",
              logo: "https://webtechstudio.site/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/webtechstudio",
                "https://twitter.com/WebTechStudio",
                "https://www.instagram.com/web_tech_studio/",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Address Here",
                addressLocality: "Agra",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 92594 93075",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <Head>
        <meta
          name="google-site-verification"
          content="avlaj4hsl80raElN6J_6Do1K39M50iybjbBXr-HebmM"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Web Tech Studio",
              url: "https://webtechstudio.site",
              logo: "https://webtechstudio.site/logo.png",
              alternateName: [
                "Web Tech Studio",
                "Web-Tech Studio",
                "WebTechStudio",
              ],
              sameAs: [
                "https://www.linkedin.com/company/webtechstudio",
                "https://twitter.com/WebTechStudio",
                "https://www.instagram.com/web_tech_studio/",
              ],
              description:
                "Web Tech Studio is a top-rated web development agency in Agra, India, specializing in website design, SEO, and branding.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Address Here",
                addressLocality: "Agra",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 92594 93075",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingBar />
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
