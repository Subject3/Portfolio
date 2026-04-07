// components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I'm Ken Lieu</h1>

      <h2 className="subtitle">PCB Design & Embedded Systems</h2>

      <p>
        Designing intelligent systems with hardware, software, and control.
      </p>

      <div className="hero-buttons">
        <a href="#contact" className="btn-primary">Get In Touch</a>
        <a href="#projects" className="btn-secondary">View My Work</a>
      </div>

      <div className="hero-icons">
        {/* Replace with your actual icons (react-icons or similar) */}
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fas fa-envelope"></i></a>
      </div>
    </section>
  );
}