import ClientSuccessStories from "../main/ClientStories";
import Cta from "../main/cta/Cta";
import FAQ from "../main/faq";
import Footer from "../main/Footer";
import Navbar from "../main/Navbar";
import HeroSection from "./components/HeroSection";
// import ShowcaseExpertise from "./components/ShowcaseExpertise";

const ServicesPage: React.FC = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <HeroSection/>
        {/* <ShowcaseExpertise/> */}
        <ClientSuccessStories />
        <FAQ />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
