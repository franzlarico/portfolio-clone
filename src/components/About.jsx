import { useLanguage } from '../contexts/LanguageContext';
import profileImg from '../assets/image.png';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-content">
        <div className="about-text">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="about-tech-list">
            {t.about.technologies.map((tech, i) => (
              <li key={i} className="about-tech-item">{tech}</li>
            ))}
          </ul>
        </div>
        <div className="about-image-wrapper">
          <img src={profileImg} alt="Franz" className="about-image" />
        </div>
      </div>
    </section>
  );
}
