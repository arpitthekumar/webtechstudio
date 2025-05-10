import ClientSuccessStories from "../home/main/ClientStories";
import Cta from "../home/main/cta/Cta";
import FAQ from "../home/main/faq";
import Footer from "../home/main/Footer";
import Navbar from "../home/main/Navbar";
import Team from "../home/main/team/Team";
import AboutCards from "./components/AboutCards";
import HeroSection from "./components/HeroSection";
import Journey from "./components/Journey";

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutCards/>
        <Journey/>
        <Team />
        <ClientSuccessStories />
        <FAQ />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
