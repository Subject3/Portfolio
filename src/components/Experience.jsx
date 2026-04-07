// components/Experience.jsx
export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Work Experience</h2>

      <div className="timeline">

        {/* ITEM 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Civil Engineer Inter</h3>
                <p className="company">TechCorp Solutions</p>
              </div>

              <div className="meta">
                <span> Sep 2025 - Jan 2026</span>
                <span>Richmond, CA</span>
              </div>
            </div>

            <ul>
              <li>Led development of responsive web applications</li>
              <li>Improved performance through optimization</li>
              <li>Mentored junior developers</li>
              <li>Collaborated with designers</li>
            </ul>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3> Assembly Worker</h3>
                <p className="company">Digital Innovations Inc.</p>
              </div>

              <div className="meta">
                <span>May 2025 - August 2025</span>
                <span>San Jose, CA</span>
              </div>
            </div>

            <ul>
              <li>Built client-facing applications</li>
              <li>Implemented responsive designs</li>
              <li>Integrated APIs</li>
              <li>Worked in agile teams</li>
            </ul>
          </div>
        </div>

        {/* ADD YOUR OTHER 2 HERE SAME FORMAT */}

      </div>
    </section>
  );
}