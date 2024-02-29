import ExampleImage from '@/assets/images/ben.webp'; 
import { useRef } from 'react';
import gsap from 'gsap';
import '@/components/HoverImageAnimation/HoverImageAnimation.sass';

const HoverImageAnimation: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    // Réduire la durée à 0.3 secondes et utiliser une courbe d'assouplissement plus douce
    gsap.to(imageRef.current, { opacity: 1, scale: 1.05, duration: 0.1, ease: 'power1.inOut' });
  };

  const handleMouseLeave = () => {
    // Assurer une transition de sortie aussi fluide et rapide
    gsap.to(imageRef.current, { opacity: 0, scale: 1, duration: 0.3, ease: 'power1.inOut' });
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover-container">
      Survolez-moi pour voir l'image
      <img ref={imageRef} src={ExampleImage} className="hover-image" alt="Example" style={{opacity: 0}} />
    </div>
  );
};

export default HoverImageAnimation;
