import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation: React.FC = () => {
  return (
    <nav className="nav-container">
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/features" className="nav-link">
        Features
      </Link>
      <Link to="/security" className="nav-link">
        Security
      </Link>
      <Link to="/help" className="nav-link">
        Help
      </Link>
      <Link to="/download" className="nav-link">
        Download
      </Link>
    </nav>
  );
};
