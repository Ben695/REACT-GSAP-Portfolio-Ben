import '@/components/CustomCursor/CustomCursor.sass';
import { useState, useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const [cursorColor, setCursorColor] = useState('black');
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${positionRef.current.x}px`;
      cursorRef.current.style.top = `${positionRef.current.y}px`;
    }
    rafRef.current = null;
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };

      // Throttle avec requestAnimationFrame - max 60fps
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateCursorPosition);
      }
    };

    const handleMouseOver = (event: MouseEvent) => {
      let target = event.target as HTMLElement | null;
      let color: string | null = null;

      // Chercher data-cursor-color sur l'élément ou ses parents
      while (target && !color) {
        color = target.getAttribute('data-cursor-color');
        target = target.parentElement;
      }

      setCursorColor(color || 'black');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateCursorPosition]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ backgroundColor: cursorColor }}
    />
  );
};

export default CustomCursor;
