import React from "react";
import { CreditCard } from "./CreditCard";
import { CTAButton } from "./CTAButton";
import "./HeroSection.css";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="content-section">
        <div className="title-container">
          <h1 className="main-heading">
            <img
              src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd643561bc21ff17a87ad_icon.svg"
              alt="Grape Icon"
              className="grape-icon"
            />
            A FRESH
            <br />
            TAKE ON
            <br />
            FINANCE
          </h1>
        </div>
        <p className="sub-heading">
          AI-enhanced banking for better security, smarter decisions, and
          seamless transactions. Launching soon on iOS + Android.
        </p>
        <CTAButton />
      </div>
      <div className="card-section">
        <CreditCard />
      </div>
    </section>
  );
};
