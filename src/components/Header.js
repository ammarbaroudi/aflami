import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./Header.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">AFLAMI</Link>
        </div>

        <div className="navbar-right">
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <FiMenu size={28} />
          </button>

          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <a className="name-item" href="/">Home</a>
            <a className="name-item" href="#featured">Featured</a>
            <a className="name-item" href="#creators">Creators</a>
             <Link className="nav-item" to="/movies">Movies</Link>
            <a className="name-item" href="#contactus">Contact</a>
      
          </nav>

          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>
    </header>
  );
}
