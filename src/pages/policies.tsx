import React from "react";

const Policies: React.FC = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">Organisation’s Policies and Procedures – Farmik</h1>

      {/* Privacy Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="italic mb-4">Last Updated: 5 SEP 2025</p>
        <p className="mb-4">
          At Farmik, your privacy is extremely important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you visit{" "}
          <a href="https://www.myfarmik.com" className="text-blue-600 underline">www.myfarmik.com</a>.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal details such as name, email, phone number, address (during checkout or account creation).</li>
          <li>Payment details (processed securely by third-party gateways, we do not store card/UPI details).</li>
          <li>Website usage data (cookies, IP address, browser type) to improve our services.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Process and deliver orders.</li>
          <li>Communicate updates, promotions, or service notices.</li>
          <li>Improve our website’s performance and user experience.</li>
          <li>Ensure compliance with legal and financial obligations.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>We use SSL encryption and secure servers to protect your personal information.</li>
          <li>We do not sell, trade, or rent your information to third parties.</li>
          <li>Limited access is given only to trusted service providers (payment gateways, delivery partners).</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h3>
        <p className="mb-4">
          Our site uses cookies to remember user preferences and improve navigation.  
          You can disable cookies in your browser, but certain features may not work properly.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Services</h3>
        <p className="mb-4">
          Payments are processed securely through PhonePe and other authorized gateways.  
          These third-party providers have their own privacy policies. We recommend reading them.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>You can request to update, correct, or delete your personal data anytime by contacting us.</li>
          <li>You may opt out of promotional emails by clicking the unsubscribe link.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Changes will be reflected on this page
          with a new “Last Updated” date.
        </p>
      </section>

      {/* Refund & Cancellation Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Refund and Cancellation Policy</h2>
        <p className="italic mb-4">Last Updated: 5 SEP 2025</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Order Cancellations</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Orders once placed and confirmed cannot be cancelled.</li>
          <li>If there is a genuine error, you may contact us within 2 hours at care@myfarmik.com.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Refunds for Damaged or Incorrect Products</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Refunds apply if the product delivered is damaged or defective.</li>
          <li>Refund requests must be made within 48 hours of delivery with proof.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Non-Refundable Situations</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Orders refused at delivery without valid reason will not be refunded.</li>
          <li>No refunds for delays due to courier/weather issues.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Refund Process</h3>
        <p className="mb-4">
          Once verified, refunds will be processed to your original payment mode within 7–10 business days.  
          Delays beyond that depend on your bank/payment provider.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">5. Replacement Option</h3>
        <p>
          In case of quality issues, Farmik may offer a product replacement instead of a monetary refund.
        </p>
      </section>

      {/* Shipping & Delivery Policy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Shipping & Delivery Policy</h2>
        <p className="italic mb-4">Last Updated: 5 SEP 2025</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Order Processing</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Orders are processed within 2–4 business days after payment confirmation.</li>
          <li>Customers are notified in case of delays.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Shipping Methods</h3>
        <p className="mb-4">
          We partner with trusted courier providers. Delivery options may vary by location.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Delivery Timelines</h3>
        <p className="mb-4">
          Estimated delivery in India: 5–10 business days after dispatch.  
          Rural or remote areas may take longer.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Shipping Charges</h3>
        <p className="mb-4">
          Charges (if any) are shown at checkout. Free shipping promotions may apply.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">5. Order Tracking</h3>
        <p className="mb-4">
          Once dispatched, customers receive a tracking ID in order history in their profile section.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">6. Delivery Issues</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>If the recipient is unavailable, redelivery may be attempted.</li>
          <li>Incorrect addresses/contact details are customer responsibility.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">7. International Shipping</h3>
        <p className="mb-4">Currently, Farmik ships only within India.</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h3>
        <p>
          Email: <a href="mailto:care@myfarmik.com" className="text-blue-600 underline">care@myfarmik.com</a> <br />
          Phone: +91 8287317599
        </p>
      </section>
    </div>
  );
};

export default Policies;
