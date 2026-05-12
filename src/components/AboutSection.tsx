/*AboutSection.tsx*/

import "./AboutSection.css";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFirebase,
  SiVercel,
  SiWordpress,
} from "react-icons/si";
import { FaCss3Alt, FaCode } from "react-icons/fa";

export default function AboutSection() {
  const bio = `I’m a library professional turned junior software engineer who has spent nearly two decades designing systems that help people feel seen, supported, and connected. My background in library science, creative writing, and instructional leadership taught me to understand how people learn, how information flows, and where systems break down — long before I ever wrote my first line of code. While teaching computer science to elementary students, I realized technology isn’t just about computers; it’s about building better systems for real people. That insight led me to Coding Temple, where I strengthened my foundation in Python, JavaScript, React, SQL, and full‑stack development while building projects that emphasize accessibility, clean architecture, and human‑centered design.`;

  const skills = {
    Languages: [
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <SiPython />, label: "Python" },
      { icon: <SiHtml5 />, label: "HTML5" },
      { icon: <FaCss3Alt />, label: "CSS3" },
    ],
    Frameworks: [{ icon: <SiReact />, label: "React" }],
    Databases: [
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <SiFirebase />, label: "Firebase" },
    ],
    Tools: [
      { icon: <SiGit />, label: "Git" },
      { icon: <SiGithub />, label: "GitHub" },
      { icon: <FaCode />, label: "VS Code" },
      { icon: <SiVercel />, label: "Vercel" },
      { icon: <SiWordpress />, label: "WordPress" },
    ],
    Concepts: [
      { icon: "♿", label: "Accessibility" },
      { icon: "📱", label: "Responsive Design" },
      { icon: "🧠", label: "Systems Thinking" },
      { icon: "📚", label: "Information Architecture" },
      { icon: "🔗", label: "REST APIs" },
    ],
  };

  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <p className="about-text">{bio}</p>

      <div className="skills-section">
        <h2>Skills</h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {items.map((skill) => (
                <div className="skill-item" key={skill.label}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-label">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}