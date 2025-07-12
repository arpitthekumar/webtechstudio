"use client";

import { useEffect } from "react";
import Head from "next/head";
import AboutSection from "./main/About";
import BlogSection from "./main/blog/Bilog";
import ClientSuccessStories from "./main/ClientStories";
import Cta from "./main/cta/Cta";
import DevelopmentSection from "./main/DevelopmentSection";
import FAQ from "./main/faq";
import Footer from "./main/Footer";
import HeroSection from "./main/HeroSection";
import Navbar from "./main/Navbar";
import PricingPage from "./main/Pricing";
import ProcessSection from "./main/processsection/ProcessSection";
import ShowcaseExpertise from "./main/ShowcaseExpertise";
import Team from "./main/team/Team";
import Link from "next/link";
import ContactPage from "../contact/component/HeroSection";
import PopupModal from "./main/adpopup";
import Clarity from "@microsoft/clarity";

const HomePage: React.FC = () => {
  useEffect(() => {
    Clarity.init("sdlqym662t");
  }, []);
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Head>
        <title>
          WebTechStudio - Leading Web Development Agency in Agra, India
        </title>
        <meta
          name="description"
          content="WebTechStudio is a top web development agency in Agra, India, specializing in modern websites, UI/UX design, and SEO-friendly web solutions."
        />
        <meta
          name="keywords"
          content="Web Development, UI/UX Design, SEO, Web Design, Agra, India, WebTechStudio"
        />
        <meta name="author" content="WebTechStudio" />

        {/* ✅ Open Graph (For Social Media) */}
        <meta
          property="og:title"
          content="WebTechStudio - Leading Web Development Agency in Agra, India"
        />
        <meta
          property="og:description"
          content="Get high-quality websites and digital solutions from WebTechStudio, the top web development company in Agra, India."
        />
        <meta
          property="og:image"
          content="/mainpage/webtechstudio-og-image.jpg"
        />
        <meta property="og:url" content="https://webtechstudio.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="WebTechStudio - Leading Web Development Agency in Agra, India"
        />
        <meta
          name="twitter:description"
          content="We create high-performing websites and digital solutions for businesses of all sizes in Agra, India."
        />
        <meta
          name="twitter:image"
          content="/mainpage/webtechstudio-twitter-image.jpg"
        />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black min-h-screen">
        <Navbar />
        <HeroSection />
        <PopupModal />
        <ContactPage />
        <AboutSection />
        <DevelopmentSection />
        <ShowcaseExpertise />
        <ProcessSection />
        <PricingPage />
        <Link
          href="/Pricing#Maintenance"
          className="text-white hover:text-[var(--acua-marine)] text-center block mt-4 underline"
        >
          View Maintenance Pricing
        </Link>
        <Team />
        <ClientSuccessStories />
        <FAQ />
        <BlogSection />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
