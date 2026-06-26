import { useState } from "react";
import { X } from "lucide-react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import useInView from "../hooks/useInView";
import "./Projects.css";

function Projects() {
  const [headerRef, headerInView] = useInView();

  const [activeVideo, setActiveVideo] = useState(null); 

  const openDemo = (src, title) => setActiveVideo({ src, title });
  const closeDemo = () => setActiveVideo(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerInView ? "in-view" : ""}`}>
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            A mix of enterprise dashboards, AI-powered tools, and full-stack systems
            I've built end to end.
          </p>
        </div>

      
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onWatchDemo={openDemo}
            />
          ))}
        </div>
      </div>
      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" onClick={closeDemo}>
          <div className="video-modal__panel" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal__header">
              <h3>{activeVideo.title}</h3>
              <button
                className="video-modal__close"
                onClick={closeDemo}
                aria-label="Close video"
              >
                <X size={22} />
              </button>
            </div>
            <video
              src={activeVideo.src}
              controls
              autoPlay
              className="video-modal__video"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
