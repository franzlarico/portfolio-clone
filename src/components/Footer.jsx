import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-credit">
        <p>{t.footer.built}{' '}
          <a href="#">Tu Nombre</a>
        </p>
        <p>{t.footer.designed}{' '}
          <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">
            {t.footer.brittanyChiang}
          </a>
        </p>
      </div>
      <div className="footer-social">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">{t.footer.github}</a>
      </div>
    </footer>
  );
}
