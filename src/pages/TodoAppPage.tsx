/*TodoAppPage.tsx*/

import "./ProjectsPage.css";
import ptd1 from "../assets/ptd1.png";
import ptd2 from "../assets/ptd2.png";
import ptd3 from "../assets/ptd3.png";
import ptd4 from "../assets/ptd4.png";
import ptd5 from "../assets/ptd5.png";
import ptd6 from "../assets/ptd6.png";
import ptd7 from "../assets/ptd7.png";
import { useState } from "react";

export default function TodoAppPage() {
  const images = [ptd1, ptd2, ptd3, ptd4, ptd5, ptd6, ptd7];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };


  return (
    <section className="project-page">
      <div className="project-hero">
        <img src={ptd1} alt="Python To-Do App screenshot" />
      </div>

      <div className="project-content">
        <h1>Energy‑Based Python To‑Do App</h1>

        <p className="project-description">
          A smart, human-centered command-line productivity tool built in
          Python. Instead of a traditional to-do list, this app asks questions
          about your <strong>energy level</strong>,{" "}
          <strong>available time</strong>, and <strong>focus</strong>, then
          recommends tasks that match your current capacity.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Energy-based task recommendations</li>
          <li>Time-based filtering</li>
          <li>Daily reflection mode</li>
          <li>Clean, readable CLI interface</li>
          <li>JSON or SQLite storage</li>
        </ul>

        <h2>Tools & Technologies</h2>
        <ul>
          <li>Python</li>
          <li>Click (CLI framework)</li>
          <li>Data Modeling</li>
          <li>Logic Design</li>
        </ul>

        <h2>Screenshots</h2>
        <div className="project-gallery">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Screenshot ${index + 1}`}
              onClick={() => openLightbox(index)}
              className="gallery-thumb"
            />
          ))}
        </div>
        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                ×
              </button>

              <img
                src={images[currentIndex]}
                alt="Expanded screenshot"
                className="lightbox-image"
              />

              <button className="lightbox-prev" onClick={prevImage}>
                ‹
              </button>
              <button className="lightbox-next" onClick={nextImage}>
                ›
              </button>
            </div>
          </div>
        )}

        <h2>Links</h2>
        <p>
          <a
            href="https://github.com/mfobbsie/PythonToDoApplication"
            target="_blank"
          >
            GitHub Repository
          </a>
        </p>

        <h2>What I Learned</h2>
        <p>
          Designing a CLI that feels warm and human, modeling tasks with
          metadata, and writing clean, modular Python code.
        </p>
      </div>
    </section>
  );
}
