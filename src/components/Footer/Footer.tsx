import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">grape</div>
            <p className="footer-tagline">
              We build financial clarity and safety into every tap—no jargon, no
              guesswork.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Product</h4>
              <Link to="/features">Features</Link>
              <Link to="/security">Security</Link>
              <Link to="/download">Download</Link>
              <Link to="/early-access">Early Access</Link>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/press">Press</Link>
              <Link to="/investors">Investors</Link>
              <Link to="/help">Help</Link>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <Link to="/legal/privacy">Privacy Policy</Link>
              <Link to="/legal/terms">Terms of Service</Link>
              <Link to="/legal/disclosures">Disclosures</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <p>Grape Financial Inc.</p>
            <p>contact@grapebanking.com</p>
          </div>

          <div className="social-links">
            <a
              href="https://twitter.com/grapebanking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/grapebanking"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/grapebanking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
