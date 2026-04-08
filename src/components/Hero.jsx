// components/Hero.jsx
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="hero" className="hero">
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
        <a href="https://github.com/Subject3" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ken-lieu-259092267/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a href="https://www.instagram.com/kimchi_lie/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="mailto:kenlieu@berkeley.edu">
          <HiOutlineMail />
        </a>
      </div>
    </section>
  );
}