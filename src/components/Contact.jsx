import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <p className="hero-overline" style={{ marginBottom: 10 }}>{t.contact.overline}</p>
      <h2 className="section-title" style={{ justifyContent: 'center', marginBottom: 20 }}>
        {t.contact.title}
      </h2>
      <p className="contact-description">{t.contact.description}</p>
      <a
        href="mailto:franzlarico19@gmail.com"
        className="btn-primary"
        style={{ margin: '0 auto' }}
      >
        {t.contact.button}
      </a>
    </section>
  );
}
