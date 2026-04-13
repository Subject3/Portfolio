// src/pages/ProjectPage.jsx
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Project Not Found</h1>
        <Link to="/#projects" style={{ textDecoration: "none", color: "#2563eb" }}>
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.8",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <Link to="/#projects" style={{ textDecoration: "none", color: "#2563eb" }}>
          ← Back to Projects
        </Link>
      </div>

      <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>
        {project.title}
      </h1>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            maxHeight: "720px",
            objectFit: "cover",
            borderRadius: "14px",
            marginBottom: "1.5rem",
          }}
        />
      )}

      <p
        style={{
          fontSize: "1.18rem",
          lineHeight: "1.9",
          marginBottom: "1.25rem",
        }}
      >
        {project.description}
      </p>

      {project.bullets && (
        <ul style={{ marginBottom: "2rem", paddingLeft: "1.25rem" }}>
          {project.bullets.map((bullet, index) => (
            <li key={index} style={{ marginBottom: "0.7rem" }}>
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {project.tech && (
        <div style={{ marginBottom: "2rem" }}>
          <strong>Tech Stack: </strong>
          {project.tech.join(", ")}
        </div>
      )}

      {project.overview && (
        <>
          <Section title="Overview">
            <p>{project.overview}</p>
          </Section>

          {project.sectionImages?.overview && (
            <FullImage image={project.sectionImages.overview} />
          )}
        </>
      )}

      {project.problem && (
        <>
          <Section title="The Problem">
            <p>{project.problem}</p>
          </Section>

          {project.sectionImages?.problem && (
            <FullImage image={project.sectionImages.problem} />
          )}
        </>
      )}

      {project.role && (
        <>
          <Section title="My Role">
            <p>{project.role}</p>
          </Section>

          {project.sectionImages?.role && (
            <FullImage image={project.sectionImages.role} />
          )}
        </>
      )}

      {project.contributions && (
        <>
          <Section title="Key Contributions">
            {project.contributions.map((item, index) => (
              <div key={index} style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.35rem" }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </Section>

          {project.sectionImages?.contributions && (
            <FullImage image={project.sectionImages.contributions} />
          )}
        </>
      )}

      {project.electrical && (
        <>
          <Section title="Electrical Work">
            <p>{project.electrical}</p>
          </Section>

          {project.sectionImages?.electrical && (
            <FullImage image={project.sectionImages.electrical} />
          )}
        </>
      )}

      {project.software && (
        <>
          <Section title="Software Work">
            <p>{project.software}</p>
          </Section>

          {project.sectionImages?.software && (
            <FullImage image={project.sectionImages.software} />
          )}
        </>
      )}

      {project.systemDesign && (
        <>
          <Section title="System Design Thinking">
            <p>{project.systemDesign}</p>
          </Section>

          {project.sectionImages?.systemDesign && (
            <FullImage image={project.sectionImages.systemDesign} />
          )}
        </>
      )}

      {project.challenges && (
        <>
          <Section title="Challenges">
            <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
              {project.challenges.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.7rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {project.sectionImages?.challenges && (
            <FullImage image={project.sectionImages.challenges} />
          )}
        </>
      )}

      {project.results && (
        <>
          <Section title="Results">
            <p>{project.results}</p>
          </Section>

          {project.sectionImages?.results && (
            <FullImage image={project.sectionImages.results} />
          )}
        </>
      )}

      {project.reflection && (
        <Section title="Reflection">
          <p>{project.reflection}</p>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.9rem", marginBottom: "0.85rem" }}>{title}</h2>
      <div style={{ fontSize: "1.05rem", color: "#222" }}>{children}</div>
    </section>
  );
}

function FullImage({ image }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <img
        src={image.src}
        alt={image.alt || ""}
        style={{
          width: "100%",
          display: "block",
          borderRadius: "14px",
          marginBottom: "0.6rem",
        }}
      />
      {image.caption && (
        <p
          style={{
            fontSize: "0.95rem",
            color: "#555",
            margin: 0,
          }}
        >
          {image.caption}
        </p>
      )}
    </div>
  );
}