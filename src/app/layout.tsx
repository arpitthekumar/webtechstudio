import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "WebTechStudio - Best Web Development Agency in Agra, India",
    template: "%s | WebTechStudio",
  },
  description:
    "WebTechStudio is a leading web development agency in Agra, India. We specialize in modern websites, UI/UX design, SEO, and branding.",
  openGraph: {
    title: "WebTechStudio - Best Web Development Agency in Agra, India",
    description:
      "We provide high-quality websites, UI/UX design, and SEO solutions in Agra, India.",
    url: "https://webtechstudio.site",
    siteName: "WebTechStudio",
    images: [
      {
        url: "https://webtechstudio.site/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebTechStudio - Web Development Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@WebTechStudio",
    title: "WebTechStudio - Best Web Development Agency in Agra, India",
    description:
      "We provide high-quality websites, UI/UX design, and SEO solutions in Agra, India.",
    images: ["https://webtechstudio.site/opengraph-image.jpg"],
  },
  alternates: {
    canonical: "https://webtechstudio.site",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
