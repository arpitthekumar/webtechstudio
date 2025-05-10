import ClientSuccessStories from "../home/main/ClientStories";
import Cta from "../home/main/cta/Cta";
import FAQ from "../home/main/faq";
import Footer from "../home/main/Footer";
import Navbar from "../home/main/Navbar";
import HeroSection from "./component/HeroSection";
// import ShowcaseExpertise from "./components/ShowcaseExpertise";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <HeroSection/>
        {/* <ShowcaseExpertise/> */}
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
