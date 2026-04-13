// components/About.jsx
export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        {/* LEFT SIDE */}
        <div className="about-text">
          <h3>Hello! I'm Ken Lieu</h3>

          <p>
            I'm currently a student @ UC Berkeley Studying Electrical Engineering
            and Computer Science! 
          </p>

          <p>
            I specialize in circuit analysis, PCB design, Kicad.
            As for language, I'm familiar with C++, C, Java and
            Python.
          </p>

          <p>
            When I'm not in class, I love playing badminton, volleyball
            and watching anime!
          </p>

          {/* INFO GRID */}
          <div className="about-info">
            <div>
              <strong>Location:</strong> San Jose, CA
            </div>
            <div>
              <strong>Experience:</strong> 1 Year
            </div>
            <div>
              <strong>Email:</strong> kenlieu@berkeley.edu
            </div>
            <div>
              <strong>Phone:</strong> +1 (669) 208-8778
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-image-wrapper">
          <img
            src="/profile.jpg" // replace with your image
            alt="Profile"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}