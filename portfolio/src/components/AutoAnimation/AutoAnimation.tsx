import React, { useState, useEffect } from 'react';
import carImage from '@/assets/images/auto.png';

const AutoAnimation: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const newPosition = scrollPosition * 1.5; 

  return <img src={carImage} className="auto-image" style={{ left: newPosition }} alt="Car" />;
};

export default AutoAnimation;
