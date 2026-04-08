// src/components/Labs.jsx

import { Link } from "react-router-dom";
import labs from "../data/labs";

export default function Labs() {
  return (
    <section id="labs" className="labs-section">
      <div className="section-heading">
        <p className="section-kicker">research / build / test</p>
        <h2>Lab</h2>
        <p className="section-subtext">
          A separate space for experiments, prototypes, testing notes, and
          technical exploration.
        </p>
      </div>

      <div className="labs-grid">
        {labs.map((lab, index) => (
          <Link to={`/labs/${lab.id}`} key={lab.id} className="lab-card">
            <div className="lab-card-top">
              <span className="lab-index">0{index + 1}</span>
              <span className="lab-tag">{lab.tag}</span>
            </div>

            <div className="lab-card-body">
              <h3>{lab.title}</h3>
              <p>{lab.description}</p>
            </div>

            <div className="lab-card-bottom">
              <span>{lab.period}</span>
              <span className="lab-arrow">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}