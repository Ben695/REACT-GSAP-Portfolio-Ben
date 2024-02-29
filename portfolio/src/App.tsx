import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Profile from './components/Profile/Profile';
import TexteAnimationProjects from './components/TexteAnimationProjects/TexteAnimationProjects';
import ImageScroller from './components/ImageScroller/ImageScroller';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Preloader from './components/Preloader/Preloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule le chargement de ressources ou attendez que votre contenu soit prêt
    // Vous pouvez remplacer cette logique par un vrai test de chargement si nécessaire
    setTimeout(() => {
      setIsLoading(false); // Cache le preloader une fois le chargement terminé
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Animation GSAP
      const tl = gsap.timeline();
      tl.from(".Header-anim", { duration: 0.8, y: 30, opacity: 0, ease: "power3.out" })
        .from(".Hero-anim", { duration: 0.8, y: 30, opacity: 0, ease: "power3.out" }, "-=0.6")
        .from(".Profile-anim", { duration: 0.8, y: 30, opacity: 0, ease: "power3.out" }, "-=0.6")
        .from(".TexteAnimationProjects-anim", { duration: 0.8, y: 30, opacity: 0, ease: "power3.out" }, "-=0.6")
        .from(".ImageScroller-anim", { duration: 0.8, y: 30, opacity: 0, ease: "power3.out" }, "-=0.6");
    }
  }, [isLoading]);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <div className="App">
          <div className="Header-anim"><Header /></div>
          <div className="Hero-anim"><Hero /></div>
          <div className="Profile-anim"><Profile /></div>
          <div className="TexteAnimationProjects-anim">
            <TexteAnimationProjects texte="Project with React | Project with React | Project with React | Project with React | " direction="right" />
          </div>
          <div className="ImageScroller-anim"><ImageScroller /></div>
          <CustomCursor />
        </div>
      )}
    </>
  );
};

export default App;
