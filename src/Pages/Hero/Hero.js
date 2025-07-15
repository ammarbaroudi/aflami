import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
 return (
    <section id="#home" className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Welcome to <span className="aflami">AFLAMI</span> Website
        </h1>
        <Link to="/featured" className="hero-btn">Get Started</Link>
      </div>
    </section>
  );
}

