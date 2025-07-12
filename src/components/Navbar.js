import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="title-container">
        <h1 className="animated-title">IndianSweet</h1>
      </div>
      <div className="navbar-container">
        <nav className="comparison-table">
          <div className="table-wrapper">
            <Link to="/" className="cta-button">
              Home
            </Link>
            <Link to="/about" className="cta-button">
              About
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
