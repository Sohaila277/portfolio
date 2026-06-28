import { ExternalLink, PlayCircle } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import useInView from "../hooks/useInView";
import "./ProjectCard.css";

function ProjectCard({ project, onWatchDemo, index }) {
  const [ref, isInView] = useInView();
  const { title, image, description, tech, github, live, demo } = project;

  return (
    <div
      ref={ref}
      className={`project-card reveal ${isInView ? "in-view" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }} 
    >
      <div className="project-card__image-wrap">
        <img src={image} alt={`${title} screenshot`} className="project-card__image" />
        <div className="project-card__image-overlay" aria-hidden="true" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        {/* Technology badges */}
        <div className="project-card__tech">
          {tech.map((item) => (
            <span key={item} className="project-card__badge">
              {item}
            </span>
          ))}
        </div>

        {/* Action buttons - only render the ones that have a value */}
        <div className="project-card__actions">
          {demo && (
            <button
              className="btn btn--primary btn--sm"
              onClick={() => onWatchDemo(demo, title)}
            >
              <PlayCircle size={16} />
              Watch Demo
            </button>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--sm"
            >
              <GithubIcon size={16} />
              Code
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
