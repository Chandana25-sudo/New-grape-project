import React from "react";
import "./MenuToggle.css";

export const MenuToggle: React.FC = () => {
  return (
    <button className="menu-button">
      <div className="menu-line"></div>
      <div className="menu-line"></div>
      <div className="menu-line"></div>
    </button>
  );
};
