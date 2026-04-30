/*ProjectsPage.tsx*/

import "./ProjectsPage.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/ptd1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project2.avif";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Local Artist Website",
      image: project1,
      description:
        "A custom‑built artist website designed for mr. festin, blending a neon‑editorial aesthetic with responsive layouts, dynamic galleries, and a playful, immersive brand experience.",
      tags: ["TypeScript", "React", "CSS", "Responsive Design"],
      link: "/mrfestin",
    },
    {
      title: "Energy‑Based Python To‑Do App",
      image: project2,
      description:
        "A smart, human‑centered command‑line productivity tool built in Python. It recommends tasks based on your energy level, available time, and focus, blending clean data modeling with thoughtful user experience.",
      tags: ["Python", "CLI", "Logic Design", "User‑Centered Systems"],
      link: "/todoapp",
    },
    {
      title: "Enhanced TypeScript Task Manager",
      image: project3,
      description:
        "A polished, responsive task management app built with TypeScript and React. Features include task creation, editing, filtering, and a clean, accessible UI.",
      tags: ["TypeScript", "React", "Vite", "CSS Modules"],
      link: "/taskmanager",
    },
    {
      title: "Community Program Connector",
      image: project4,
      description:
        "A full backend system designed for public libraries to connect community presenters with patrons. Features include presenter profiles, program proposals, patron requests, scheduling, and registrations — built with SQL, CRUD operations, and scalable data models.",
      tags: ["FastAPI", "SQL", "CRUD", "Data Modeling", "Backend Architecture"],
      link: "/communityconnector",
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

            <Link to={project.link} className="project-btn">
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
