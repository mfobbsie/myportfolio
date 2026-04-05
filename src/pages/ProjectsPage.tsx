/*ProjectsPage.tsx*/

import "./ProjectsPage.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.avif";
import project3 from "../assets/project3.jpg";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Common Thread Café",
      image: project1,
      description:
        "A warm, community-focused café site featuring interactive menus, responsive layouts, and a soft editorial aesthetic.",
      tags: ["JavaScript", "CSS", "Responsive Design"],
    },
    {
      title: "Dog Image Generator",
      image: project2,
      description:
        "A playful React app that fetches random dog images using an API, with clean UI and smooth loading states.",
      tags: ["React", "APIs", "UI Design"],
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
