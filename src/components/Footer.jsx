import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© TEDxGwarinpa 2025. All Rights Reserved.</p>
      <div className="social-icons">
        <a
          href="https://www.tiktok.com/@tedxgwarinpa_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <img src="/icons/tiktok.svg" alt="TikTok" />
        </a>
        <a
          href="https://www.instagram.com/@tedxgwarinpa_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a
          href="https://twitter.com/@TEDxGwarinpa_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <img src="/icons/x.svg" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
}