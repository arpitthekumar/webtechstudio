"use client";
import { gtag_report_conversions } from "@/lib/gtag"; 
import { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const PromoPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState<{ name?: string; mobile?: string }>({});

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("promo_shown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("promo_shown", "true");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const validateForm = () => {
    const newErrors: { name?: string; mobile?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      newErrors.name = "Only letters and spaces allowed.";
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const gtag_report_conversion = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16974052698/PGUWCJeM5MkaENr67Z0_", // Replace with your actual ID
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const res = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, mobile }),
      });

      if (res.ok) {
        gtag_report_conversion();
        gtag_report_conversions("AW-16974052698/PGUWCJeM5MkaENr67Z0_");
        setShowPopup(false);
        setName("");
        setMobile("");
        setErrors({});
      } else {
        const data = await res.json();
        setErrors({ mobile: data?.error || "Something went wrong." });
      }
    } catch (err) {
      console.error(err);
      setErrors({ mobile: "Server error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
      <div className="relative bg-black bg-cover text-white p-6 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-4 text-white text-2xl"
        >
          ×
        </button>

        <h2 className="text-acua-marine font-bold text-xl text-center">
          Get 20% OFF on web development!
        </h2>
        <p className="text-center mt-2">CALL NOW FOR FREE QUOTE</p>

        <p className="group text-center font-bold text-3xl my-1 flex items-center justify-center gap-2 cursor-pointer">
          <FiPhoneCall className="text-4xl text-acua-marine group-hover:text-white transition duration-200" />
          <a
            href="tel:+919259493075"
            className="text-white group-hover:text-[var(--acua-marine)] transition duration-200"
          >
            +91 92594 93075
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="mobile"
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
            {errors.mobile && (
              <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-acua-marine py-2 hover:bg-white text-black rounded-full transition duration-200"
          >
            {loading ? "Sending..." : "ACTIVATE DISCOUNT"}
          </button>
        </form>

        <p className="py-3 mt-3 rounded-4xl text-center text-xl bg-gray-900 text-gray-100">
          24*7 HELPLINE{" "}
          <a
            href="tel:+919259493075"
            className="text-acua-marine font-semibold"
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
