import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">TEDxGwarinpa 2025</div>
      <ul className="nav-links">
        <li>About</li>
        <li>Speakers</li>
        <li>Schedule</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
