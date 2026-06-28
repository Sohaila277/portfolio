import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import "./Hero.css";

const HERO = {
  greeting: "Hi, I'm",
  name: "Sohaila Mohamed",
  role: "Software Engineer",
  tagline:
    "I build modern web applications using React, Node.js and SQL Server.",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  githubUrl: "https://github.com/Sohaila277", 
  linkedinUrl: "https://www.linkedin.com/in/sohaila-mohamed-a94bb429a/", 
};

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__greeting hero-anim hero-anim--1">{HERO.greeting}</p>

        <h1 className="hero__name hero-anim hero-anim--2">{HERO.name}</h1>

        <h2 className="hero__role hero-anim hero-anim--3">{HERO.role}</h2>

        <p className="hero__tagline hero-anim hero-anim--4">{HERO.tagline}</p>

        <div className="hero__actions hero-anim hero-anim--5">
          <a href={HERO.resumeUrl} className="btn btn--primary" download>
            <Download size={18} />
            Download CV
          </a>
          <a
            href={HERO.githubUrl}
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={HERO.linkedinUrl}
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Small scroll hint at the bottom of the viewport */}
      <div className="hero__scroll-hint hero-anim hero-anim--6" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
