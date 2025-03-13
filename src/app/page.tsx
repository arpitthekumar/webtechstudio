import Navbar from "./components/main/Navbar";
import HeroSection from "./components/main/HeroSection";
import AboutSection from "./components/main/About";
import DevelopmentSection from "./components/main/DevelopmentSection";
// import ShowcaseExpertise from "./components/ShowcaseExpertise";
// import PricingPage from "./components/Pricing";
// import ClientSuccessStories from "./components/ClientStories";
// import FAQ from "./components/faq";
// import HomePage from "./components/Footer";


export default function Home() {
  return (
   <>
   <div className="bg-black min-h-screen">
         <Navbar />
         <HeroSection />
         <AboutSection />
         <DevelopmentSection />
         {/* <ShowcaseExpertise /> */}
         {/* <PricingPage /> */}
         {/* <ClientSuccessStories /> */}
         {/* <FAQ /> */}
         {/* <HomePage /> */}
       </div>
   </>
  );
}
