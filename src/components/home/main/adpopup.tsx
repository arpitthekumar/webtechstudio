"use client";
import { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";

const PromoPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 500);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const mobile = (form.elements.namedItem("mobile") as HTMLInputElement)
      .value;

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, mobile }),
      });

      if (res.ok) {
        alert("Discount Activated! We'll contact you shortly.");
        setShowPopup(false);
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
      <div className="relative bg-black bg-[url('/gears-bg.png')] bg-cover text-white p-6 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-4 text-white text-2xl"
        >
          ×
        </button>

        <h2 className="text-acua-marine font-bold text-xl text-center">
          Get 50% OFF on web development!
        </h2>
        <p className="text-center mt-2">CALL NOW FOR FREE QUOTE</p>

        <p className="group text-center font-bold text-3xl my-1 flex items-center justify-center gap-2">
          <FiPhoneCall className="text-4xl text-acua-marine hover:text-white" />
          <a
            href="tel:+919259493075"
            className="text-white hover:text-[var(--acua-marine)]"
          >
            +91 92594 93075
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded bg-white text-black"
            required
          />
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 rounded bg-white text-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-acua-marine py-2 hover:bg-white text-black rounded-full  transition duration-200 "
          >
            ACTIVATE DISCOUNT
          </button>
        </form>

        <p className="py-3 mt-3 rounded-4xl text-center text-xl bg-gray-900 text-gray-100">
          24*7 HELPLINE{" "}
          <a
            href="tel:+919259493075"
            className="text-acua-marine font-semibold "
          >
            +91 92594 93075
          </a>
        </p>

        <p className="mt-2 text-lg text-center flex items-center justify-center gap-2">
          <RiSecurePaymentLine className="text-4xl text-acua-marine" />
          Your information will never be shared with any third party.
        </p>
      </div>
    </div>
  );
};

export default PromoPopup;
