/* ProjectModal.tsx */

import "./ProjectsSection.css";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const Component = project.component; // ⭐ render full project component

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* ⭐ This renders the full project page (video, gallery, etc.) */}
        <Component />
      </div>
    </div>
  );
}
