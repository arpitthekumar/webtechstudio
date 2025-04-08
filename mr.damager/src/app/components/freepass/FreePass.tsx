"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const FreePass: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    websiteType: "",
    pages: "",
    designPreference: "",
    functionality: "",
    budget: "",
    timeline: "",
    additionalFeatures: ""
  });

  useEffect(() => {
    gsap.to(".badge-outer", {
      rotation: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, email, phone, websiteType, pages, designPreference, functionality, budget, timeline, additionalFeatures } = formData;

    const message = `Free Pass Request:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nWebsite Type: ${websiteType}\nPages: ${pages}\nDesign Preference: ${designPreference}\nFunctionality: ${functionality}\nBudget: ${budget}\nTimeline: ${timeline}\nAdditional Features: ${additionalFeatures}`;
    const whatsappNumber = "9184457203";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="relative section overflow-hidden">
      <motion.div
        className="md:block absolute right-0 top-0 bottom-0 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img
          src="/free-p-section/bg-image.jpg"
          alt="Free Pass"
          className="w-full h-full md:max-w-2xl object-cover"
        />
        <div className="relative z-10">
          <div className="relative flex justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674e9d6f5f091e516b57c5da_Group%201171275426.png"
              alt="Badge Outer"
              className="badge-outer w-20 sm:w-24 md:w-52"
            />
            <img
              src="/Mr.damager.png"
              alt="Badge Inner"
              className="absolute ml-5 mt-5 sm:ml-12 md:mt-12 inset-0 w-10 sm:w-12 md:w-28 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <div className="bg-black_4">
        <div id="events" className="max-w-[1200px] mx-auto px-4 pt-12 pb-20 md:pl-9 text-white z-20 relative">
          <div className="flex flex-col md:flex-row items-start md:text-left text-center">
            <div className="form-contact-us w-full md:mr-96 md:pr-64">
              <h2 className="text-5xl font-bold mb-8">Get Your Free Pass</h2>
              <p className="text-lg mb-6">Tell us about your website needs!</p>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 p-6 md:pl-0">
                  <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white" />
                  <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white" />
                  <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white" />
                  <select name="websiteType" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white">
                    <option value="">Select Website Type</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Portfolio">Portfolio</option>
                    <option value="Blog">Blog</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                  <select name="pages" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white">
                    <option value="">Select Page Type</option>
                    <option value="Single Page">Single Page</option>
                    <option value="Multi Page">Multi Page</option>
                  </select>
                  <input type="text" name="designPreference" placeholder="Design Preferences (Minimalist, Modern, etc.)" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white" />
                  <input type="text" name="functionality" placeholder="Required Features (Login, Payment, etc.)" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white" />
                  <input type="text" name="budget" placeholder="Budget (Approximate)" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white" />
                  <input type="text" name="timeline" placeholder="Expected Completion Time" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white" />
                  <textarea name="additionalFeatures" placeholder="Additional Features or Requirements" required onChange={handleChange} className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white"></textarea>
                  <input type="submit" value="Get Pass Now" className="primary-button px-6 py-3 mt-4 bg-tertiary text-black rounded-md cursor-pointer" />
                </form>
              ) : (
                <div className="success-message text-green-500 space-y-4 p-6 pb-40 md:pl-0">
                  Thank you! Your submission has been received!
                </div>
              )}
              <div className="error-message text-red-500 hidden">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePass;
