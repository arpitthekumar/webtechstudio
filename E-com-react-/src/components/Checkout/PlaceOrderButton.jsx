import React, { useEffect } from "react";

const RazorpayButton = () => {
  useEffect(() => {
    // Dynamically load the Razorpay payment button script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_PlfsalDmy1eNrZ"); // Replace with your button ID
    script.async = true;
    document.getElementById("razorpay-button-container").appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.getElementById("razorpay-button-container").innerHTML = "";
    };
  }, []);

  return (
    <div id="razorpay-button-container">
      {/* The Razorpay button script will append here */}
    </div>
  );
};

export default RazorpayButton;
