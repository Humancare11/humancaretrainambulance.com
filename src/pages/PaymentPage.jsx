import React, { useState } from "react";
import axios from "axios";

export default function PaymentPage() {
  const [form, setForm] = useState({
    firstname: "",
    email: "",
    phone: "",
    amount: "",
    productinfo: "Test Product",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/api/payment", form);

      // Create form and submit
      const paymentForm = document.createElement("form");
      paymentForm.action = data.payuURL;
      paymentForm.method = "POST";

      Object.entries(data).forEach(([key, value]) => {
        if (key === "payuURL") return;
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        paymentForm.appendChild(input);
      });

      document.body.appendChild(paymentForm);
      paymentForm.submit();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Cannot initiate payment");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
      <h2>PayU Payment</h2>
      <form onSubmit={handlePayment}>
        <input name="firstname" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="amount" placeholder="Amount" onChange={handleChange} required />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
