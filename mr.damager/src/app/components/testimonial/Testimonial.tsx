
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Arlene McCoy",
    role: "Marketing Manager",
    rating: "4.9",
    image: "/testimonials/0.png",
    text: "Working with this company has been a game-changer. Their tailored strategies helped us grow our brand and increase sales. The team is professional.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Dog Trainer",
    rating: "4.9",
    image: "/testimonials/1.png",
    text: "The team at Maxorin took the time to understand our needs and delivered beyond expectations. Their expertise helped us reach new customers.",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Business Owner",
    rating: "4.9",
    image: "/testimonials/3.png",
    text: "Maxorin provided excellent service and helped our business thrive. Highly recommend working with them!",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-wwrcolor text-white py-10 md:py-52 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-40 relative z-10">
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between mb-12 items-center">
          <div className="mb-8 md:mb-0">
            <div className="inline-block px-4 py-2 mb-2 text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 max-w-2xl">
              Let’s See What Our Client Say Us
            </h2>
          </div>
          <div className="flex md:gap-4 gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 md:w-16 md:h-16 flex text-lg md:text-3xl items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:scale-110 transition-transform"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-16 md:h-16 flex text-lg md:text-3xl items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:scale-110 transition-transform"
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Profile Image */}
          <motion.div
            className="flex-shrink-0 w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Right: Testimonial Details */}
          <motion.div
            className="relative bg-opacity-80 backdrop-blur-sm p-6 rounded-lg md:w-1/2 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            // transition={{ duration: 0.6 }}
          >
            {/* Background Image */}
            <img
              src="/bg-needs/0.png"
              alt="Background"
              className="absolute inset-0 w-full h-full "
            />
            
            {/* Content */}
            <div className="relative z-10">

            {/* Star Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-400 text-lg">
                {"★".repeat(5)}
              </div>
              <h4 className="ml-3 text-lg font-semibold">
                {currentTestimonial.rating} Average Rating
              </h4>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 mb-6 italic text-lg">
              {currentTestimonial.text}
            </p>

            {/* Quotation Icon */}
            <div className="absolute right-0 text-7xl md:text-9xl text-blue-600 opacity-50">
              &ldquo;
            </div>

            {/* Profile Section */}
            <div className="flex items-center">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-12 h-12 rounded-full mr-4"
                />
              <div>
                <h6 className="text-lg font-bold">
                  {currentTestimonial.name}
                </h6>
                <p className="text-sm text-gray-400">
                  {currentTestimonial.role}
                </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
