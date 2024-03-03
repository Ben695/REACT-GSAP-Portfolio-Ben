import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '@/components/TexteAnimationProjects/TexteAnimationProjects.sass';

interface TexteAnimationProjectsProps {
  texte: string;
  direction: 'left' | 'right';
}

const TexteAnimationProjects: React.FC<TexteAnimationProjectsProps> = ({ texte, direction }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  let lastScrollTop = 0;

  useEffect(() => {
    // Définir la position initiale du texte en fonction de la direction
    if (textRef.current) {
      const initialX = direction === 'left' ? -4000 : 0; // Démarre plus loin sur la gauche ou la droite
      gsap.set(textRef.current, { x: initialX });
    }

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = currentScroll > lastScrollTop ? 'down' : 'up';
      let xValue = '';

      if (direction === 'right') {
        xValue = scrollDirection === 'down' ? '-=50' : '+=50';
      } else { 
        xValue = scrollDirection === 'down' ? '+=50' : '-=50';
      }

      if (textRef.current) {
        gsap.to(textRef.current, {
          x: xValue,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [direction]); // Inclure direction comme dépendance pour réinitialiser la position si la direction change

  return (
    <div className="texte-animation-projects">
      <p ref={textRef}>
        {texte}
      </p>
    </div>
  );
};

export default TexteAnimationProjects;