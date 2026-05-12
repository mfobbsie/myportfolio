/*NavBar.tsx*/

import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import favicon from "/favicon.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Brand */}
        <div className="nav-brand">
          <img src={favicon} alt="dragonfly favicon" className="nav-icon" />
          <Link
            to="/"
            className="nav-logo"
            onClick={() => setOpen(false)}
          ></Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>

        {/* Links */}
        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          <a href="#about" className="nav-link">
            About
          </a>

          <a
            href="#projects"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>

          <a
            href="/resume.pdf"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
