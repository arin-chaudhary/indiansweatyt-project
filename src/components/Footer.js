import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-content-simple">
          <p>
            &copy; 2025 By - Arin Chaudhary. All rights reserved. |
            <a href="#"> Privacy Policy</a> |<a href="#"> Terms of Service</a> |
            <a href="#"> Cookie Policy</a>
          </p>
          <a
            href="https://github.com/arin-chaudhary"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <img src="/github-logo.png" alt="GitHub" className="github-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
