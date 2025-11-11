import React, { useRef, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const btnRef = useRef(null);

  useEffect(() => {
    const button = btnRef.current;

    // After the spin animation ends, allow the button to follow the mouse
    const handleAnimationEnd = () => {
      button.classList.remove("spinning"); // remove the spin animation class
    };

    button.addEventListener("animationend", handleAnimationEnd);

    return () => {
      button.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const handleMouseMove = (e) => {
  const hero = e.currentTarget;
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Closer follow → divide by smaller number (try 8–15)
  const moveX = (x - centerX) / 8;
  const moveY = (y - centerY) / 8;

  if (btnRef.current && !btnRef.current.classList.contains("spinning")) {
    // Add easing effect using requestAnimationFrame
    const button = btnRef.current;
    if (!button.targetX) button.targetX = 0;
    if (!button.targetY) button.targetY = 0;

    button.targetX += (moveX - button.targetX) * 0.4; // 0.3 = smoothness
    button.targetY += (moveY - button.targetY) * 0.4;

    button.style.transform = `translate(${button.targetX}px, ${button.targetY}px)`;
  }
  };

  const handleMouseLeave = () => {
    if (btnRef.current && !btnRef.current.classList.contains("spinning")) {
      btnRef.current.style.transition = "transform 0.3s ease";
      btnRef.current.style.transform = "translate(0, 0)";
      setTimeout(() => {
        btnRef.current.style.transition = ""; // reset after
      }, 300);
    }
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="hero-content">
        <img className="horizon" src="/limitlong.png" alt="limitless" />
        <p>
          Explore the uncharted territories of innovation and creativity <br />
          at TEDxGWARINPA2025. Join us for a day of inspiring talks, networking, <br />
          and groundbreaking ideas that push the boundaries of what's possible.
        </p>
        <a
          href="https://app.eventpadi.com/tedx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-btn spinning" ref={btnRef}>
            Get Tickets
          </button>
        </a>
      </div>
    </section>
  );
}