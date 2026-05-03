import { useLanguage } from '../contexts/LanguageContext';

export default function Work() {
  const { t } = useLanguage();

  return (
    <section id="work">
      <h2 className="section-title">{t.work.title}</h2>
      <div className="projects-grid">
        {t.work.projects.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-card-header">
              <span className="project-folder">&#128193;</span>
              <div className="project-links">
                <a href={project.github} className="project-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">&#128279;</a>
                <a href={project.external} className="project-link" aria-label="External link" target="_blank" rel="noopener noreferrer">&#128279;</a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-tech-list">
              {project.tech.map((tech, j) => (
                <li key={j}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
