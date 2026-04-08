// components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>{"<Engineer />"}</h3>
          <p>
            Passionate engineer from the bay solving 
            problems one step at a time!
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>San Jose, CA</p>
          <p>kenlieu@berkeley.edu</p>
          <p>+1 (669) 208-8778</p>
        </div>

      </div>

      {/* SOCIAL */}
      <div className="footer-social">
        <a href="https://github.com/Subject3">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ken-lieu-259092267/">
            <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/kimchi_lie/">
            <FaInstagram />
        </a>
        <a href="mailto:kenlieu@berkeley.edu">
            <HiOutlineMail />
        </a>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        © 2026 Ken Lieu. Made with long nights and chronic back pains.
      </div>
    </footer>
  );
};

export default Footer;