import React from 'react';
import './termsandconditions.css'; // Assuming you have a CSS file for styling

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      
      <div className="terms-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using this website and making payments through the payment gateway, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please refrain from using the website and payment services.
          </p>
        </section>

        <section>
          <h2>2. Payment Process</h2>
          <p>
            Payments made through the payment gateway are processed securely using industry-standard encryption technology. We accept payments through credit cards, debit cards, and other payment methods as indicated on the payment page.
          </p>
        </section>

        <section>
          <h2>3. Payment Confirmation</h2>
          <p>
            Upon successful payment, you will receive a confirmation email with a receipt of the transaction. If you do not receive a confirmation email within 24 hours, please contact our customer service team for assistance.
          </p>
        </section>

        <section>
          <h2>4. Payment Security</h2>
          <p>
            We prioritize the security of your personal and financial information. All payment transactions are processed through secure servers, and sensitive data is encrypted using SSL (Secure Socket Layer) technology.
          </p>
        </section>

        <section>
          <h2>5. Refunds and Cancellations</h2>
          <p>
            Refunds, if applicable, will be processed as per the refund policy outlined on our website. If you wish to request a refund, please contact our support team within the specified time frame for processing.
          </p>
        </section>

        <section>
          <h2>6. User Responsibilities</h2>
          <p>
            You are responsible for providing accurate and up-to-date payment information. Any incorrect or fraudulent payment information may result in transaction failure or delays.
          </p>
        </section>

        <section>
          <h2>7. Liability</h2>
          <p>
            We are not liable for any loss, damage, or unauthorized transaction that may occur as a result of using the payment gateway. In case of any dispute or issue with the payment, please contact the payment provider or your bank for resolution.
          </p>
        </section>

        <section>
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Any changes will be updated on this page, and the updated version will take effect immediately.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;