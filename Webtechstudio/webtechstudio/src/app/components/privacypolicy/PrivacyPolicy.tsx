import ClientSuccessStories from "../main/ClientStories";
import Cta from "../main/cta/Cta";
import FAQ from "../main/faq";
import Footer from "../main/Footer";
import Navbar from "../main/Navbar";
import HeroSection from "./component/HeroSection";


const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <HeroSection />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
