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
                <h3>Lab Technician Intern</h3>
                <p className="company">UC Pavement Research Institute</p>
              </div>

              <div className="meta">
                <span> Sep 2025 - Jan 2026</span>
                <span>Richmond, CA</span>
              </div>
            </div>

            <ul>
              <li>Testing of varying material specimens to evaluate material performance.</li>
              <li>Find material's durability under varying load conditions</li>
              <li>Collected, analyzed, and documented laboratory data for the California Department of Transportation</li>
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
                <p className="company">Valley Electronic Service.</p>
              </div>

              <div className="meta">
                <span>May 2025 - August 2025</span>
                <span>San Jose, CA</span>
              </div>
            </div>

            <ul>
              <li>Inspecting reliability of printed circuit boards</li>
              <li>IPC-A-610 certified electronics assembler</li>
              <li>Verify compliance with industry standards</li>
            </ul>
          </div>
        </div>

        {/* ADD SAME FORMAT */}

        {/* ITEM 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3> Research Assistant</h3>
                <p className="company">Evergreen Valley College</p>
              </div>

              <div className="meta">
                <span>June 2024 - August 2024</span>
                <span>San Jose, CA</span>
              </div>
            </div>

            <ul>
              <li>Optimized sensor fusion techniques to reduce latency and improve signal accuracy with C++</li>
              <li>Conducted research on the impact of low-cost System on Chip (SoC) architectures with smart sensors in medical monitoring devices</li>
              <li>Experiment using ESP32 microcontrollers and compared performance with traditional Arduino-based sensor systems</li>
              <li>Designed and implemented real-time data acquisition algorithms</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}