import React from "react";
import logo from "./images/logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="nav-logo" src={logo} alt="" />
        <h1 className="nav-title">Meme Generator</h1>
      </nav>
    </header>
  );
}
