// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Ken Lieu</div>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a> 
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        
      </div>
    </nav>
  );
}