import React from "react";
import { Typography } from "@mui/material";

const categories = [
  {
    id: "all",
    title: "All",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c5934366ec1f0519f21d62_953.avif",
  },
  {
    id: "monitor",
    title: "Monitor",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66d0a099cf9b7c9616b7a4d2_alienware-Hpaq-kBcYHk-unsplash.jpg",
  },
  {
    id: "phone",
    title: "Phone",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c75d65aeeae9a3e31a9004_2150470457.avif",
  },
  {
    id: " speaker",
    title: "Speaker",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c5934366ec1f0519f21d5a_95%20(1).avif",
  },
  {
    id: "keyboard",
    title: "Keyboard",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c5934366ec1f0519f21d3a_51072%20(1).avif",
  },
  {
    id: "headphone",
    title: "Headphone",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c75f7a5081a476defad155_30936801_7725172.avif",
  },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 justify-center gap-4 py-4 px-8 md:px-32">
      {categories.map((category) => (
        <a
          href={`/?category=${category.title}`} // Dynamic URL with category as query parameter
          key={category.id}
          className="relative z-30 bg-white text-gray-800 hover:text-white font-semibold md:w-56 md:h-48 w-full h-36 overflow-hidden cursor-pointer transition-transform transform md:hover:scale-105 rounded-lg shadow-md"
        >
          {/* Background Image */}
          <img
            src={category.image}
            alt={category.title}
            className="absolute h-full w-full inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-500 md:hover:scale-110"
          />

          {/* White Overlay */}
          <div className="absolute bg-white inset-0 z-10 flex items-center justify-center transition-opacity duration-300  hover:bg-opacity-0">
            <Typography variant="h6" className="">
              {category.title}
            </Typography>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CategoryGrid;
