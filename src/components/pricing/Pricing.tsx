import ClientSuccessStories from "../home/main/ClientStories";
import Cta from "../home/main/cta/Cta";
import FAQ from "../home/main/faq";
import Footer from "../home/main/Footer";
import Navbar from "../home/main/Navbar";
import PricingPag from "../home/main/Pricing";
import GymPOSPricing from "./components/gympospricing/GymPOSPricing";
import MaintenancePricing from "./components/mpricing/MPricing";

const PricingPage: React.FC = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <PricingPag />
        <div id="Maintenance">
          <MaintenancePricing />
        </div>

        <div id="GymPOSPricing">
          <GymPOSPricing />
        </div>
        <ClientSuccessStories />
        <FAQ />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
