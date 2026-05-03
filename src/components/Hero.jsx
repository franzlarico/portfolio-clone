import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero">
      <p className="hero-overline">{t.hero.greeting}</p>
      <h1 className="hero-name">{t.hero.name}</h1>
      <h2 className="hero-tagline">{t.hero.tagline}</h2>
      <p className="hero-description">{t.hero.description}</p>
      <a href="#contact" className="btn-primary">
        {t.hero.cta}
      </a>
    </section>
  );
}
