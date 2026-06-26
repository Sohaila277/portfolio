import useInView from "../hooks/useInView";
import "./Skills.css";

const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST API", "Python", "Flask"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "OCR",
      "Computer Vision",
      "Deep Learning",
    ],
  },
  {
    category: "Database & Tools",
    skills: ["SQL Server", "Git", "GitHub"],
  },
];

function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">What I work with</h2>

        <div ref={ref} className={`skills__grid reveal ${isInView ? "in-view" : ""}`}>
          {SKILL_CATEGORIES.map((group) => (
            <div key={group.category} className="skills__card">
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
