import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience">
      <h2 className="section-title">{t.experience.title}</h2>
      <div className="experience-container">
        <div className="experience-tabs">
          {t.experience.jobs.map((job, i) => (
            <button
              key={i}
              className={`experience-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {job.company}
            </button>
          ))}
        </div>
        <div className="experience-content">
          <h3 className="experience-role">
            {t.experience.jobs[activeTab].role}{' '}
            <span className="company">@ {t.experience.jobs[activeTab].company}</span>
          </h3>
          <p className="experience-period">
            {t.experience.jobs[activeTab].period}
          </p>
          <ul className="experience-list">
            {t.experience.jobs[activeTab].description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
