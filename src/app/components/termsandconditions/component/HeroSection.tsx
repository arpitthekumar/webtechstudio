import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--acua-marine)] mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-300 mb-6">
          Last updated: <span className="font-semibold">March 22, 2025</span>
        </p>

        <p className="text-gray-300">
          Welcome to{" "}
          <span className="text-white font-semibold">Web Tech Studio</span>.
          These Terms & Conditions govern your use of our services and website.
        </p>

        {/* ✅ 1. Payment Terms & Binding Agreement */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          1. Payment Terms & Binding Agreement
        </h2>
        <p className="text-gray-300 mt-2">
          - Clients must **pay 30% advance** before the project starts. - The
          remaining **70% must be paid before final delivery**. - Once the
          agreement is signed, the client **agrees to pay the full decided
          amount** and **accepts all our policies**. - Failure to complete the
          payment **will result in legal action** if necessary.
        </p>
        <p className="text-gray-300 mt-2">
          - The client must **submit the following agreement form** before the
          project begins:
        </p>
        <Link
          href="/agreement-form"
          className="text-[var(--acua-marine)] underline mt-2"
        >
          Click here to submit the Payment & Agreement Form
        </Link>

        {/* ✅ 2. Free Hosting & Domain Policy */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          2. Free Hosting & Domain Policy
        </h2>
        <p className="text-gray-300 mt-2">
          - WebTech Studio provides **free hosting on Netlify** if requested. -
          If the client prefers **another hosting provider**, they must **cover
          the cost** as per the provider's pricing. - Domain registration **up
          to ₹1500 is covered**. If the cost exceeds ₹1500, the client must
          **pay the additional amount**.
        </p>

        {/* ✅ 3. Required Client Details */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          3. Required Client Details
        </h2>
        <p className="text-gray-300 mt-2">
          Before starting the project, the client must provide:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mt-2">
          <li>Full Name</li>
          <li>Business Name (if applicable)</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Physical Address</li>
          <li>Billing Details (if different from above)</li>
          <li>GitHub Account (if required for deployment)</li>
        </ul>

        {/* ✅ 4. Confidentiality & Non-Disclosure Agreement (NDA) */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          4. Confidentiality & NDA
        </h2>
        <p className="text-gray-300 mt-2">
          - WebTech Studio will keep all client information **confidential**. -
          We do not share any project details without **written consent**.
        </p>

        {/* ✅ 5. Refund & Cancellation Policy */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          5. Refund & Cancellation Policy
        </h2>
        <p className="text-gray-300 mt-2">
          - The **30% advance payment is non-refundable** under any
          circumstances. - If the client **cancels the project**, all **work
          completed up to that point must be paid for**.
        </p>

        {/* ✅ 6. Dispute Resolution & Legal Action */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          6. Dispute Resolution & Legal Action
        </h2>
        <p className="text-gray-300 mt-2">
          - Any **payment defaults or contract breaches** may result in **legal
          action**. - Disputes will be resolved under the **laws of India, in
          the courts of Agra**.
        </p>

        {/* ✅ 7. Force Majeure Clause */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          7. Force Majeure Clause
        </h2>
        <p className="text-gray-300 mt-2">
          - WebTech Studio will not be liable for any delays caused by
          **unforeseen events** such as natural disasters, pandemics, or
          political instability.
        </p>
        <p className="text-gray-300 mt-2">
          - Each plan includes a fixed number of revisions as outlined in the
          pricing section.
        </p>
        <p className="text-gray-300 mt-2">
          - Additional revisions may incur extra charges.
        </p>

        {/* ✅ Intellectual Property */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          8. Intellectual Property
        </h2>
        <p className="text-gray-300 mt-2">
          - Clients receive full ownership of the website and assets upon final
          payment.
        </p>
        <p className="text-gray-300 mt-2">
          - Web Tech Studio may showcase the project in our portfolio.
        </p>

        {/* ✅ Refund & Cancellation Policy */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          9. Refund & Cancellation Policy
        </h2>
        <p className="text-gray-300 mt-2">
          - Refunds are not available once the project has started.
        </p>
        <p className="text-gray-300 mt-2">
          - If the client cancels the project, the advance payment is
          non-refundable.
        </p>

        {/* ✅ Limitation of Liability */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          10. Limitation of Liability
        </h2>
        <p className="text-gray-300 mt-2">
          Web Tech Studio is not responsible for any business losses,
          interruptions, or damages resulting from the use of our services.
        </p>

        {/* ✅ Modifications to Terms */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          11. Modifications to Terms
        </h2>
        <p className="text-gray-300 mt-2">
          We may update these Terms & Conditions at any time. Changes will be
          reflected on this page.
        </p>

        {/* ✅ Governing Law */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          12. Governing Law
        </h2>
        <p className="text-gray-300 mt-2">
          These terms are governed by the laws of{" "}
          <span className="text-white font-semibold">India</span>. Any disputes
          will be resolved in the courts of Agra, India.
        </p>

        {/* ✅ 8. Contact Information */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          8. Contact Information
        </h2>
        <p className="text-gray-300 mt-2">
          If you have any questions about our Terms & Conditions, please contact
          us via our{" "}
          <Link href="/Contact" className="text-[var(--acua-marine)] underline">
            Contact Form
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
