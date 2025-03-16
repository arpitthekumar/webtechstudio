import AboutSection from "../main/About";
import ClientSuccessStories from "../main/ClientStories";
import Cta from "../main/cta/Cta";
import DevelopmentSection from "../main/DevelopmentSection";
import FAQ from "../main/faq";
import Footer from "../main/Footer";
import HeroSection from "../main/HeroSection";
import Navbar from "../main/Navbar";
import PricingPage from "../main/Pricing";
import ProcessSection from "../main/processsection/ProcessSection";
import ShowcaseExpertise from "../main/ShowcaseExpertise";
import Team from "../main/team/Team";

const HomePage: React.FC = () => {
    return (
       <>
        <div className="bg-black min-h-screen">
         <Navbar />
         <HeroSection />
         <AboutSection />
         <DevelopmentSection />
         <ShowcaseExpertise />
         <ProcessSection />
         <PricingPage />
         <Team />
         <ClientSuccessStories />
         <FAQ />
         <Cta/>
         <Footer />
       </div></>
    );
};

export default HomePage;