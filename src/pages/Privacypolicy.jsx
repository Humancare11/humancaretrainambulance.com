import React from 'react';
import './Privacypolicy.css'; // Assuming you have a CSS file for styling
const Privacypolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      
      <div className="privacy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you make payments through our payment gateway.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            When you make a payment, we may collect the following information:
          </p>
          <ul>
            <li>Name</li>
            <li>Billing address</li>
            <li>Contact information (email, phone number)</li>
            <li>Payment details (credit/debit card information, bank account information)</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul>
            <li>To process your payments</li>
            <li>To send payment confirmation and receipts</li>
            <li>To communicate with you regarding your transactions or account</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section>
          <h2>4. Payment Security</h2>
          <p>
            We use secure payment gateways that comply with industry standards (PCI DSS) to protect your payment information. Your payment details are processed directly by the payment provider, and we do not store sensitive payment data.
          </p>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal and payment information only for as long as necessary to complete the transaction and for any legal obligations that may require retention.
          </p>
        </section>

        <section>
          <h2>6. Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties except in the following cases:
          </p>
          <ul>
            <li>With payment processors to complete transactions</li>
            <li>When required by law or legal processes</li>
            <li>With third-party service providers who assist in business operations, subject to confidentiality agreements</li>
          </ul>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Request the deletion of your data, subject to legal retention requirements</li>
            <li>Opt-out of marketing communications (if applicable)</li>
          </ul>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>
            Our website may use cookies to enhance user experience. Cookies are small files stored on your device to remember preferences and improve website functionality.
          </p>
        </section>

        <section>
          <h2>9. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated version will take effect immediately.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacypolicy;