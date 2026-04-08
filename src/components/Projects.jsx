// components/Projects.jsx
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-featured-list">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="project-feature-card"
          >
            <div className="project-feature-image-wrap">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-feature-image"
                />
              ) : (
                <div className="project-feature-image-placeholder">
                  Project Preview
                </div>
              )}
            </div>

            <div className="project-feature-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.tech && (
                <div className="project-feature-tags">
                  {project.tech.slice(0, 4).map((item) => (
                    <span key={item} className="project-feature-tag">
                      {item}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-feature-link">View project ↗</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}