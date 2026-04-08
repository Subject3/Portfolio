// App.jsx

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import LabPage from "./pages/LabPage";

export default function App() {
  return (
    <div className="page-fade-in">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/labs/:id" element={<LabPage />} />
      </Routes>
    </div>
  );
}