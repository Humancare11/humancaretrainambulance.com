import React from "react";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Payment Successful 🎉</h1>
      <p>{location.search}</p>
    </div>
  );
}
