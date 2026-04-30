/*About.tsx*/

import { useState } from "react";
import "./AboutPage.css";
import dragonfly from "/favicon.svg";

type BioVersion = "human" | "technical" | "short";

const bios: Record<BioVersion, string> = {
  human: `I’m a library professional turned junior software engineer who has spent nearly two decades designing systems that help people feel seen, supported, and connected. My background in library science, creative writing, and instructional leadership taught me to understand how people learn, how information flows, and where systems break down — long before I ever wrote my first line of code. While teaching computer science to elementary students, I realized technology isn’t just about computers; it’s about building better systems for real people. That insight led me to Coding Temple, where I strengthened my foundation in Python, JavaScript, React, SQL, and full‑stack development while building projects that emphasize accessibility, clean architecture, and human‑centered design.`,

  technical: `I’m a full‑stack developer with a background in library science and instructional leadership, now specializing in JavaScript, React, Python, SQL, and RESTful API development. Through Coding Temple, I built projects ranging from a full‑stack service ticket API to responsive React applications and custom UI systems, all with a focus on accessibility, clean architecture, and human‑centered design. I bring strong systems thinking, clear communication, and a user‑first mindset to every project.`,

  short: `I’m a full‑stack developer with experience in JavaScript, React, Python, SQL, and API development, combining technical skill with a background in library science and systems design to build accessible, thoughtful software.`,
};

export default function AboutPage() {
  const [version, setVersion] = useState<BioVersion>("human");
  const [fade, setFade] = useState<boolean>(false);

  const handleChange = (type: BioVersion) => {
    if (type === version) return;
    setFade(true);
    setTimeout(() => {
      setVersion(type);
      setFade(false);
    }, 250);
  };

  const tagLabels: Record<BioVersion, string> = {
    human: "Human",
    technical: "Technical",
    short: "Short",
  };

  const skills = [
    { icon: "💻", label: "JavaScript" },
    { icon: "⚛️", label: "React" },
    { icon: "🧩", label: "TypeScript" },
    { icon: "🌐", label: "HTML5" },
    { icon: "🎨", label: "CSS & UI Design" },
    { icon: "📱", label: "Responsive Websites" },
    { icon: "♿", label: "Web Accessibility" },
    { icon: "🐍", label: "Python" },
    { icon: "🗄️", label: "SQL" },
    { icon: "🔗", label: "REST APIs" },
    { icon: "🌱", label: "Firebase" },
    { icon: "🚀", label: "Vercel" },
    { icon: "🔁", label: "CI/CD Pipeline" },
    { icon: "🔧", label: "Git" },
    { icon: "📂", label: "GitHub" },
    { icon: "🖥️", label: "VS Code" },
    { icon: "📝", label: "WordPress" },
    { icon: "🎭", label: "Adobe Suite" },
    { icon: "⌨️", label: "Command Line" },
    { icon: "🧠", label: "Systems Thinking" },
    { icon: "📚", label: "Information Architecture" },
  ];

  return (
    <section className="about-page">
      <h1>About Me</h1>

      <div className="about-tags">
        {(Object.keys(tagLabels) as BioVersion[]).map((type) => (
          <button
            key={type}
            className={`about-tag ${version === type ? "active" : ""}`}
            onClick={() => handleChange(type)}
          >
            {version === type && (
              <img src={dragonfly} alt="" className="tag-icon" />
            )}
            {tagLabels[type]}
          </button>
        ))}
      </div>

      <p className={`about-text ${fade ? "fade-out" : "fade-in"}`}>
        {bios[version]}
      </p>

      {/* Resume Link */}
      <div className="resume-wrapper">
        <a
          href="/resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </a>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills & Tools</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.label}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-label">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
