import useInView from "../hooks/useInView";
import "./About.css";

const ABOUT_TEXT = [
  "Software Engineer passionate about building enterprise web applications, REST APIs, dashboards and database driven systems.",
  "Currently working on financial and capital market software.",
];

function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={ref} className={`about__inner reveal ${isInView ? "in-view" : ""}`}>
          <div className="about__photo-wrap">
            <img src="/profile.jpg" alt="Sohaila Mohammed" className="about__photo" />
          </div>

          <div className="about__text">
            <span className="section-eyebrow">About</span>
            <h2 className="section-title">About Me</h2>

            {ABOUT_TEXT.map((paragraph, i) => (
              <p key={i} className="about__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
