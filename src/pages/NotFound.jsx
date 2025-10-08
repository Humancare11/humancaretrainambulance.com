import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"; // CSS file import

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Oops! Page not found</h2>
        <p className="notfound-text">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate("/")}
          className="notfound-button"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
