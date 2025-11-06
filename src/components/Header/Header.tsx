import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className="header-container">
      <Logo />
      <Navigation />
      <MenuToggle />
    </header>
  );
};
