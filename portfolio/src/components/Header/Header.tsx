import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '@/components/Header/Header.sass';
import githubIcon from '@/assets/images/github.webp';
import mailIcon from '@/assets/images/mail.webp';
import { useLanguage } from '@/i18n';

const Header: React.FC = () => {
  const controlsB = useAnimation();
  const controlsE = useAnimation();
  const controlsN = useAnimation();
  const { language, toggleLanguage } = useLanguage();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const sequenceAnimations = () => {
      controlsB.start({
        y: [0, -10, 0],
        transition: { duration: 0.2, repeat: Infinity, repeatDelay: 10 }
      });

      setTimeout(() => {
        controlsE.start({
          y: [0, -10, 0],
          transition: { duration: 0.2, repeat: Infinity, repeatDelay: 10 }
        });
      }, 200);

      setTimeout(() => {
        controlsN.start({
          y: [0, -10, 0],
          transition: { duration: 0.2, repeat: Infinity, repeatDelay: 10 }
        });
      }, 400);
    };

    const timer = setTimeout(sequenceAnimations, 2000);
    return () => clearTimeout(timer);
  }, [controlsB, controlsE, controlsN]);

  return (
    <header data-cursor-color="black" className="header header-anim">
      <h1 className="header-title">
        <motion.span animate={controlsB} style={{ display: 'inline-block' }}>B</motion.span>
        <motion.span animate={controlsE} style={{ display: 'inline-block' }}>E</motion.span>
        <motion.span animate={controlsN} style={{ display: 'inline-block' }}>N</motion.span>
      </h1>
      <div className="social-icons">
        <button
          className="language-toggle"
          onClick={toggleLanguage}
          aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
        <a href="https://github.com/Ben695" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="mailto:benjamin@benkessas.fr">
          <img src={mailIcon} alt="Email" />
        </a>
      </div>
    </header>
  );
};

export default Header;
