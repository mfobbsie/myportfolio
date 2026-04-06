/*ProjectsPage.tsx*/

import "./ProjectsPage.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.avif";
import project3 from "../assets/project3.jpg";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Local Artist Website",
      image: project1,
      description:
        "A custom‑built artist website designed for mr. festin, blending a neon‑editorial aesthetic with responsive layouts, dynamic galleries, and a playful, immersive brand experience.",
      tags: ["TypeScript", "React", "CSS", "Responsive Design"],
    },
    {
      title: "Python To‑Do App",
      image: project2,
      description:
        "A simple but powerful command-line to‑do application built in Python, emphasizing clarity and structure.",
      tags: ["Python", "CLI", "Data Structures"],
    },
    {
      title: "Python To‑Do App",
      image: project3,
      description:
        "A simple but powerful command-line to‑do application built in Python, emphasizing clarity and structure.",
      tags: ["Python", "CLI", "Data Structures"],
    },
  ];

  return (
    <section className="projects-page">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />

            <h2>{project.title}</h2>
            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>

            <button className="project-btn">View More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
