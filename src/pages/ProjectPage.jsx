// src/pages/ProjectPage.jsx
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Project Not Found</h1>
        <Link to="/#projects">← Back to Projects</Link>
      </div>
    );

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Back button */}
      <div style={{ marginBottom: "1rem" }}>
        <Link to="/#projects">← Back to Projects</Link>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        {project.title}
      </h1>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1.5rem",
          }}
        />
      )}

      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "1rem" }}>
        {project.description}
      </p>

      {project.bullets && (
        <ul style={{ marginBottom: "1.5rem" }}>
          {project.bullets.map((bullet, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {project.tech && (
        <div>
          <strong>Tech Stack: </strong>
          {project.tech.join(", ")}
        </div>
      )}
    </div>
  );
}