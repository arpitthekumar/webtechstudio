import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--acua-marine)] mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-300 mb-6">
          Last updated: <span className="font-semibold">October 08, 2024</span>
        </p>
        <p className="text-gray-300">
          At <span className="text-white font-semibold">Web Tech Studio</span>,
          we value your privacy and are committed to protecting your personal
          data. This Privacy Policy outlines how we collect, use, and safeguard
          your information.
        </p>

        {/* Information We Collect */}
        <h2 className="text-3xl font-bold text-[var(--acua-marine)] mt-8">
           Information We Collect
        </h2>
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          1. Use of Your Personal Data
        </h2>
        <ul className="list-disc pl-5 text-gray-300 mt-2">
          <li>To provide, maintain, and improve our services.</li>
          <li>To contact with you regarding inquiries or support.</li>
          <li>
            To personalize user experience and improve site functionality.
          </li>
          <li>To comply with legal obligations and enforce our policies.</li>
          <li>To analyze trends and track user engagement.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          2. Required Client Details
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

        {/* Use of Your Personal Data */}

        {/* Data Protection */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          3. Data Protection
        </h2>
        <p className="text-gray-300 mt-2">
          We implement industry-standard security measures to safeguard your
          data. However, no online transmission is 100% secure, and we encourage
          safe browsing practices.
        </p>
        {/* Payment Terms & Late Fees */}
        {/* <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          4. Payment Terms & Late Fees
        </h2>
        <p className="text-gray-300 mt-2">
          To begin any project, we require a{" "}
          <span className="text-white font-semibold">40% advance payment</span>.
          The remaining balance must be paid by the due date specified in the
          contract.
        </p>
        <p className="text-gray-300 mt-2">
          If full payment is not received by the agreed-upon deadline, a{" "}
          <span className="text-white font-semibold">daily late fee</span> will
          be charged. This penalty ensures timely payments and smooth project
          completion.
        </p>
        <p className="text-gray-300 mt-2">
          By proceeding with our services, you acknowledge and agree to these
          payment terms.
        </p> */}

        {/* Disclosure of Your Personal Data */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          5. Disclosure of Your Personal Data
        </h2>
        <p className="text-gray-300 mt-2">
          Your personal data may be shared in the following cases:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mt-2">
          <li>
            <span className="text-white font-semibold">Legal Compliance:</span>{" "}
            If required by law or to respond to valid legal requests.
          </li>
          <li>
            <span className="text-white font-semibold">
              Business Transfers:
            </span>{" "}
            If we are involved in a merger, acquisition, or asset sale, your
            data may be transferred.
          </li>
          <li>
            <span className="text-white font-semibold">
              Third-Party Services:
            </span>{" "}
            We may share data with service providers assisting in analytics,
            marketing, and customer support.
          </li>
          <li>
            <span className="text-white font-semibold">Protecting Rights:</span>{" "}
            If necessary to prevent fraud, enforce our policies, or protect the
            rights and safety of users.
          </li>
        </ul>

        {/* Third-Party Services */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          5. Third-Party Services
        </h2>
        <p className="text-gray-300 mt-2">
          We may use third-party tools for analytics and marketing. These
          services comply with standard privacy policies.
        </p>

        {/* Your Rights */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          6. Your Rights
        </h2>
        <ul className="list-disc pl-5 text-gray-300 mt-2">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Request information on data handling practices.</li>
        </ul>

        {/* Changes to This Policy */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          7. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-300 mt-2">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the updated Privacy Policy on this page.
        </p>
        <p className="text-gray-300 mt-2">
          the newly updated privacy policy will be enforced moment it's updated. 
          the "Last updated" date at the top of this policy.
        </p>
        <p className="text-gray-300 mt-2">
          You are encouraged to review this Privacy Policy periodically for
          updates. Changes become effective when posted on this page.
        </p>

        {/* Contact Us */}
        <h2 className="text-2xl font-semibold text-[var(--acua-marine)] mt-8">
          8. Contact Us
        </h2>
        <p className="text-gray-300 mt-2">
          If you have any inquires about our Privacy Policy, contact us via our{" "}
          <Link href="/Contact" className="text-[var(--acua-marine)] underline">
            Contact Form
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
