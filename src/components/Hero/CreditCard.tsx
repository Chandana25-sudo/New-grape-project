import React, { useRef } from "react";
import "./CreditCard.css";

export const CreditCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const card = cardRef.current;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;
    const translateX = (x - centerX) / 10;
    const translateY = (y - centerY) / 15;

    card.style.transform = `
      translate3d(${translateX}px, ${translateY - 10}px, 20px) 
      scale3d(1.05, 1.05, 1.05) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      rotateZ(-5deg) 
      skew(0deg, 0deg)
    `;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-9deg) skew(0deg, 0deg)";
    }
  };

  return (
    <div className="card-container">
      <div
        className="hero__card-contain"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero__video">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd85058323b1a1485dae4_blue-bg-poster-00001.jpg')",
            }}
          >
            <source
              src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd85058323b1a1485dae4_blue-bg-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd85058323b1a1485dae4_blue-bg-transcode.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className="hero__card" ref={cardRef}>
          <div className="hero__card-content">
            <div className="hero__card-top">
              <div className="hero__card-logo">grape</div>
              <div className="hero__card-icon">g</div>
            </div>
            <div className="hero__card-bottom">
              <p className="hero__card-text">4323 7645 2828 0713</p>
              <div className="hero__card-bar"></div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffd187853b7aaf987f0090d_white-bar.svg"
              loading="lazy"
              alt=""
              className="hero__card-bar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
