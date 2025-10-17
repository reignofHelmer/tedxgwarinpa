import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Limitless Horizon</h1>
        <p>Join us for TEDxGwarinpa 2025 — as we take you beyond the Horizon.</p>
        <a href="https://app.eventpadi.com/tedx" target="_blank" rel="noopener noreferrer">
          <button className="hero-btn">Get Tickets</button>
        </a>
      </div>
    </section>
  );
}