// src/data/projects.ts

import project1 from "../assets/project1.png";
import project2 from "../assets/ptd1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project2.avif";

// Import full project components
import MrFestin from "../components/projects/MrFestin";
import TodoApp from "../components/projects/TodoApp";
import TaskManager from "../components/projects/TaskManager";
import CommunityConnector from "../components/projects/CommunityConnector";

// Type for each project
export type Project = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  component: React.ComponentType; // ⭐ modal will render this
};

// All projects
export const projects: Project[] = [
  {
    title: "Local Artist Website",
    image: project1,
    description:
      "A custom‑built artist website designed for mr. festin, blending a neon‑editorial aesthetic with responsive layouts, dynamic galleries, and a playful, immersive brand experience.",
    tags: ["TypeScript", "React", "CSS", "Responsive Design"],
    component: MrFestin,
  },

  {
    title: "Energy‑Based Python To‑Do App",
    image: project2,
    description:
      "A smart, human‑centered command‑line productivity tool built in Python. It recommends tasks based on your energy level, available time, and focus.",
    tags: ["Python", "CLI", "Logic Design", "User‑Centered Systems"],
    component: TodoApp,
  },

  {
    title: "Enhanced TypeScript Task Manager",
    image: project3,
    description:
      "A polished, responsive task management app built with TypeScript and React. Includes task creation, editing, filtering, and a clean UI.",
    tags: ["TypeScript", "React", "Vite", "CSS Modules"],
    component: TaskManager,
  },

  {
    title: "Community Program Connector",
    image: project4,
    description:
      "A backend system designed for public libraries to connect community presenters with patrons. Features SQL, CRUD operations, and scalable data models.",
    tags: ["FastAPI", "SQL", "CRUD", "Data Modeling", "Backend Architecture"],
    component: CommunityConnector,
  },
];
