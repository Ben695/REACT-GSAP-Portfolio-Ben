import '@/components/Footer/Footer.sass';
import { useLanguage } from '@/i18n';

const FooterComponent = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-container" data-cursor-color="white">
      <p className="footer-text" data-cursor-color="white">
        {t.footer.text1}
      </p>
      <p className="footer-text" data-cursor-color="white">{t.footer.text2}</p>
      <a
        data-cursor-color="white"
        href="mailto:benjamin@benkessas.fr"
        className="styled-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.footer.buttonText}
      </a>
    </footer>
  );
};

export default FooterComponent;
