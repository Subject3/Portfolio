// src/pages/LabPage.jsx

import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import labs from "../data/labs";

export default function LabPage() {
  const { id } = useParams();
  const lab = labs.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!lab)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Lab Not Found</h1>
        <Link to="/#labs">← Back to Labs</Link>
      </div>
    );

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link to="/#labs">← Back to Labs</Link>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        {lab.title}
      </h1>

      {lab.cover && (
        <img
          src={lab.cover}
          alt={lab.title}
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
        {lab.longDescription}
      </p>

      {lab.highlights && (
        <ul style={{ marginBottom: "1.5rem" }}>
          {lab.highlights.map((highlight, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div>
        <strong>Category: </strong>
        {lab.tag}
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <strong>Year: </strong>
        {lab.period}
      </div>
    </div>
  );
}