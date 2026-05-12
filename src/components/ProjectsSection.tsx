/*ProjectsSection.tsx*/

/* ProjectsSection.tsx */

import "./ProjectsSection.css";
import { useState } from "react";
import { projects, type Project } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

export default function ProjectsSection() {
  // State can now hold either a Project or null
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setActiveProject(project)}
          >
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

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
      </div>
    </section>
  );
}
