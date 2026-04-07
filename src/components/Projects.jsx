// components/Projects.jsx
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <Link key={p.id} to={`/projects/${p.id}`} className="project-link">
            <div className="project-card">
              {p.image && <img src={p.image} alt={p.title} className="project-image" />}
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}