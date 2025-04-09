

import Image from "next/image";
import Button from "@/app/components/main/button/Button";
import Chip from "@/app/components/main/chip/chip";
import Navbar from "@/app/components/main/Navbar";
import Footer from "@/app/components/main/Footer";
import Cta from "@/app/components/main/cta/Cta";

type HardwareProduct = {
    id: string;
    name: string;
    price: string;
    description: string;
    details: string;
    image: string;
    link: string;
    gallery: string[];
  };

const HardwareDetailPage = ({ product }: { product: HardwareProduct }) => {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <Chip text="POS Hardware" isDark={true} />

        <div className="mt-4">
          <h1 className="text-3xl md:text-5xl font-bold">{product.name}</h1>
          <p className="text-bluish-gray mt-3 text-lg">{product.description}</p>
          <p className="text-acua-marine text-2xl font-semibold mt-4">{product.price}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {product.gallery.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={product.name}
              width={800}
              height={500}
              className="rounded-3xl border border-gray-700 object-contain w-full h-[400px]"
            />
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Product Details</h2>
          <p className="text-bluish-gray text-base mt-3">{product.details}</p>
        </div>

        <div className="mt-6">
          <Button href={product.link} text="Buy Now" mode="light" />
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  );
};

export default HardwareDetailPage;
