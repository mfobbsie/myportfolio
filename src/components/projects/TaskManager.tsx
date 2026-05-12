import "../../components/ProjectsSection.css";
import taskManagerVideo from "../../assets/videos/taskmanager.mp4";

export default function TaskManager() {
  return (
    <div className="project-page">
      <div className="project-hero">
        <video className="project-video" controls>
          <source src={taskManagerVideo} type="video/mp4" />
        </video>
      </div>

      <div className="project-content">
        <h1>Enhanced TypeScript Task Manager</h1>

        <p className="project-description">
          A polished, responsive task management app built with TypeScript and
          React. This version focuses on clean UI, accessibility, and a
          structured component architecture that scales.
        </p>

        <div className="project-links">
          <a
            href="https://github.com/mfobbsie/TypescriptTaskManagement"
            target="_blank"
            className="project-link-btn"
          >
            GitHub Repository
          </a>

          <a
            href="https://taskmanagementupdated.vercel.app/"
            target="_blank"
            className="project-link-btn primary"
          >
            Live Demo
          </a>
        </div>

        <h2>Features</h2>
        <ul>
          <li>Task creation, editing, and deletion</li>
          <li>Persistent storage</li>
          <li>Responsive layout</li>
          <li>Accessible form controls</li>
          <li>Clean TypeScript types throughout</li>
        </ul>

        <h2>Tools & Technologies</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Vite</li>
          <li>CSS Modules</li>
          <li>Vercel Deployment</li>
        </ul>

        <h2>What I Learned</h2>
        <p>
          That sometimes the best thing for your project is to start over when
          it outgrows its initial scope. Building a scalable component
          structure, refining UI accessibility, and using TypeScript to create
          safer, more predictable code.
        </p>
      </div>
    </div>
  );
}
