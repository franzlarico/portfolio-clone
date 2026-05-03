import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'experience', 'work', 'contact'], 100);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'work', label: t.nav.work },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="header-logo">{'>'}</a>

      <nav className="nav-desktop">
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
          >
            <span className="nav-number">0{i + 1}.</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-controls">
        <button
          className="btn-lang"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          aria-label="Toggle language"
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        <button
          className="btn-icon"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
          title={theme === 'dark' ? t.theme.light : t.theme.dark}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </header>
  );
}
