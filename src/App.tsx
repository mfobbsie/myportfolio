/*App.tsx*/
/* App.tsx */
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContactPage from "./components/ContactSection";
import ProjectsPage from "./components/ProjectsSection";
import AboutPage from "./components/AboutSection";

function App() {
  const [theme, setTheme] = useState("light");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Show scroll-to-top button only after About section
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const triggerPoint = aboutSection
        ? aboutSection.offsetTop - 200
        : 400;

      setShowScrollTop(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />

      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
