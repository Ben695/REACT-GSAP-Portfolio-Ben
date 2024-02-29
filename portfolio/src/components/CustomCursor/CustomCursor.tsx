import '@/components/CustomCursor/CustomCursor.sass';
import  { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('black'); // Définit la couleur initiale du curseur

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // Conversion de type pour accéder à getAttribute
      const color = target.getAttribute('data-cursor-color');
      if (color) {
        setCursorColor(color); // Met à jour la couleur du curseur
      } else {
        setCursorColor('black'); // Ou une autre couleur par défaut
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorStyles = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    backgroundColor: cursorColor, // Utilise la couleur d'état
  };

  return <div className="custom-cursor" style={cursorStyles}></div>;
};

export default CustomCursor;
