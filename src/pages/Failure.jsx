import React from "react";
import { useLocation } from "react-router-dom";

export default function Failure() {
  const location = useLocation();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Payment Failed ❌</h1>
      <p>{location.search}</p>
    </div>
  );
}
