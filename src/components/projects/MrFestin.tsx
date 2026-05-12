/*MrFestinPage.tsx*/

import festinVideo from "../../assets/videos/mrfestin.mp4";
import "../../components/ProjectsSection.css";

export default function MrFestin() {
  return (
    <div className="project-page">
      <div className="project-hero">
        <video className="project-video" controls>
          <source src={festinVideo} type="video/mp4" />
        </video>
      </div>

      <div className="project-content">
        <h1>mr. festin — Artist Portfolio Website</h1>

        <p className="project-description">
          A custom-built artist website designed for Bay Area artist{" "}
          <strong>mr. festin</strong>, blending a neon-editorial aesthetic with
          responsive layouts, dynamic galleries, and a playful, immersive brand
          experience.
        </p>

        {/* ⭐ NEW: Prominent links section */}
        <div className="project-links">
          <a
            href="https://github.com/mfobbsie/mrfestinwebsite"
            target="_blank"
            className="project-link-btn"
          >
            GitHub Repository
          </a>

          <a
            href="https://mrfestinwebsite.vercel.app"
            target="_blank"
            className="project-link-btn primary"
          >
            Live Demo
          </a>
        </div>

        <h2>Features</h2>
        <ul>
          <li>Fully responsive multi-page React site</li>
          <li>Editorial neon-inspired theme</li>
          <li>Dynamic gallery layout</li>
          <li>Custom favicon + branding system</li>
          <li>Soft, immersive UI with intentional spacing</li>
        </ul>

        <h2>Tools & Technologies</h2>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>CSS Modules</li>
          <li>Responsive Design</li>
          <li>Vercel Deployment</li>
        </ul>

        <h2>What I Learned</h2>
        <p>
          How to translate an artist’s brand into a cohesive digital experience,
          build a responsive layout system from scratch, and create a custom
          navigation experience with smooth transitions.
        </p>
      </div>
    </div>
  );
}
