import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '@/components/ImageScroller/ImageScroller.sass'; 
import ScrollImg from '@/assets/images/projects.webp';

const ImageScroller: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });
      // Calculer la durée de l'animation en fonction de la largeur de l'image pour une vitesse constante
      const duration = imageRef.current.offsetWidth / 100; // Ajustez le diviseur pour contrôler la vitesse

      tl.to(imageRef.current, {
        x: `-=${imageRef.current.offsetWidth - window.innerWidth}`, // Déplacer l'image jusqu'à ce que son bord droit soit aligné avec le bord droit de la fenêtre
        duration: duration,
      });
    }
  }, []);

  return (
    <div className="container-scroller">
      <img ref={imageRef} src={ScrollImg} className="image-scroller" alt="Défilement" />
    </div>
  );
};

export default ImageScroller;
