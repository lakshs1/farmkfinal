// src/pages/Terms.tsx
import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Terms & Conditions – Farmik</h1>
        <p className="text-sm text-gray-600 mt-1">Last Updated: 5 Sep 2025</p>
      </header>

      <section className="prose prose-lg">
        <p>
          Welcome to Farmik (referred to as “we”, “our”, “us”). By accessing or
          using our website <strong>www.myfarmik.com</strong> (the “Site”), you
          agree to the following Terms & Conditions. Please read them carefully
          before making any purchase.
        </p>

        <h2>1. General</h2>
        <p>
          - By using this website, you confirm that you are at least 18 years of
          age or accessing the site under the supervision of a
          parent/guardian.
          <br />
          - We reserve the right to update, modify, or discontinue any part of
          the site or services without prior notice.
        </p>

        <h2>2. Products & Services</h2>
        <p>
          - Farmik specializes in cold-pressed oils and related natural
          products.
          <br />
          - We make every effort to display our products accurately, but colors,
          packaging, or descriptions may slightly vary due to natural
          variations.
          <br />
          - All products are subject to availability.
        </p>

        <h2>3. Orders & Payments</h2>
        <p>
          - Placing an order on Farmik means you agree to provide accurate
          details including name, delivery address, and contact information.
          <br />
          - We accept payments through PhonePe, UPI, debit/credit cards, net
          banking, and other supported gateways.
          <br />
          - Prices are inclusive/exclusive of GST as applicable. Final pricing
          will be shown at checkout.
        </p>

        <h2>4. Shipping & Delivery</h2>
        <p>
          - Orders are processed within 2–4 business days and delivery timelines
          vary by location.
          <br />
          - Any delays due to courier, unforeseen weather, or natural causes are
          beyond our control, but we will support you in tracking your order.
        </p>

        <h2>5. Cancellations & Refunds</h2>
        <p>
          - Orders once processed cannot be cancelled.
          <br />
          - Refunds are issued only if:
          <br />a. You receive a damaged or incorrect product.
          <br />b. You notify us within 48 hours of delivery with proof (photos).
          <br />
          - Refunds will be credited back to your original payment method within
          7–10 business days.
        </p>

        <h2>6. User Responsibilities</h2>
        <p>
          - You agree not to misuse the site by attempting fraud, hacking, or
          spreading false information.
          <br />
          - Content (images, product descriptions, logos) belongs to Farmik and
          cannot be copied without prior permission.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          - Farmik shall not be held responsible for any indirect, incidental,
          or consequential damages arising out of the use of our products or
          website.
          <br />
          - Our liability in any case is limited to the purchase price of the
          product.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          - These Terms & Conditions are governed by the laws of India. Any
          disputes will fall under the jurisdiction of courts in Noida, Uttar
          Pradesh.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For any questions, please contact:
          <br />
          Email: <a href="mailto:care@myfarmik.com">care@myfarmik.com</a>
          <br />
          Phone: <a href="tel:+918287317599">+91 8287317599</a>
        </p>
      </section>

      <footer className="mt-10 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Farmik. All rights reserved.</p>
      </footer>
    </main>
  );
}
