/*MrFestinPage.tsx*/

import "../pages/ProjectsPage.css";
import festinVideo from "../assets/videos/mrfestin.mp4";

export default function MrFestinPage() {
  return (
    <section className="project-page">
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
          experience. This project showcases my ability to translate a creative
          vision into a fully realized digital identity.
        </p>

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

        <h2>Links</h2>
        <p>
          <a href="https://github.com/mfobbsie/mrfestinwebsite" target="_blank">
            GitHub Repository
          </a>
        </p>
        <p>
          <a href="https://mrfestinwebsite.vercel.app" target="_blank">
            Live Demo
          </a>
        </p>

        <h2>What I Learned</h2>
        <p>
          How to translate an artist’s brand into a cohesive digital experience,
          build a responsive layout system from scratch, and create a custom
          navigation experience with smooth transitions.
        </p>
      </div>
    </section>
  );
}
