"use client";

import Image from "next/image";
import Chip from "@/app/components/main/chip/chip";
import Navbar from "@/app/components/main/Navbar";
import Footer from "@/app/components/main/Footer";
import Cta from "@/app/components/main/cta/Cta";
import { HardwareProduct } from "@/app/lib/hardware";
import Breadcrumb from "@/app/components/Breadcrumb";

type Props = {
  product: HardwareProduct;
};

const HardwareDetailPage = ({ product }: Props) => {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white  px-6 md:px-20">
      <Breadcrumb />
        {/* Header */}
        <Chip text="POS Hardware" isDark={true} />
        <div className="mt-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            {product.name}
          </h1>
          <p className="text-acua-marine text-xl md:text-2xl font-semibold mt-3">
            {product.price}
          </p>
          <p className="text-bluish-gray text-lg md:text-xl mt-4 max-w-3xl">
            {product.description}
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {product.gallery.map((img: string, i: number) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-acua-marine transition duration-300"
            >
              <Image
                src={img}
                alt={`${product.name} Image ${i + 1}`}
                width={800}
                height={500}
                className="object-cover w-full h-[400px]"
              />
            </div>
          ))}
        </div>

        {/* Specs */}
        <div className="mt-16 bg-[#111118] border border-gray-800 rounded-3xl p-6 md:p-10 max-w-9xl mx-auto shadow-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-acua-marine">
            Technical Specifications
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-bluish-gray">
            {product.specs.map((spec: { label: string; value: string }, idx: number) => (
              <li
                key={idx}
                className="flex justify-between border-b border-gray-700 pb-3 text-base md:text-lg"
              >
                <span className="text-white font-medium">{spec.label}</span>
                <span>{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Ideal Use Cases
          </h2>
          <ul className="list-disc pl-6 text-lg text-bluish-gray space-y-3">
            {product.useCases.map((useCase: string, index: number) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>

        {/* Long Description */}
        <div className="mt-16 bg-[#111118] border border-gray-800 rounded-3xl p-6 md:p-10 max-w-5xl mx-auto shadow-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            Product Overview
          </h2>
          <p className="text-bluish-gray text-lg md:text-xl leading-relaxed">
            {product.details}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-24">
          <Cta />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HardwareDetailPage;