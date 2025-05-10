import ClientSuccessStories from "../home/main/ClientStories";
import Cta from "../home/main/cta/Cta";
import FAQ from "../home/main/faq";
import Footer from "../home/main/Footer";
import Navbar from "../home/main/Navbar";
import HeroSection from "./component/Herosection";


const BlogPage: React.FC = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <HeroSection />
        <ClientSuccessStories />
        <FAQ />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
