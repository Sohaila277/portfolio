import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import useInView from "../hooks/useInView";
import "./Contact.css";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "sohailamohameddd@gmail",
    href: "mailto:sohailamohameddd@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "sohaila-mohamed",
    href: "https://www.linkedin.com/in/sohaila-mohamed-a94bb429a/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "Sohaila277",
    href: "https://github.com/Sohaila277",
    icon: GithubIcon,
  },
];

function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={ref} className={`reveal ${isInView ? "in-view" : ""}`}>
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Reach out through
            any of the channels below.
          </p>

          <div className="contact__grid">
            {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact__card"
              >
                <span className="contact__icon">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="contact__label">{label}</span>
                  <span className="contact__value">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
