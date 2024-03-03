import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './App.sass';
import '@/assets/fonts/fonts.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Profile from './components/Profile/Profile';
import ImageScroller from './components/ImageScroller/ImageScroller';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Preloader from './components/Preloader/Preloader';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ProjectsReact from './components/Projects/ProjectsReact';
import TexteAnimationProjects from '@/components/TexteAnimationProjects/TexteAnimationProjects';
import ProjectsJavascript from './components/Projects/ProjectsJavascript';
import Footer from './components/Footer/Footer';
import ProjectsWordpress from './components/Projects/ProjectsWordpress';


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des ressources
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Animer chaque élément séparément en utilisant ses classes spécifiques
      gsap.fromTo('.header-anim', 
                  { y: -30, autoAlpha: 0 }, 
                  { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.hero-anim', 
                  { y: -30, autoAlpha: 0 }, 
                  { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', delay: 0.2 });
    }
  }, [isLoading]);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <div className="App">
          <ProgressBar />
          <CustomCursor />
          <Header />
          <Hero />
          <Profile />
          <ImageScroller />
          <TexteAnimationProjects texte="Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React | Project with React |" direction="left" />
          <ProjectsReact />
          <TexteAnimationProjects texte="Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript | Project with Javascript |" direction="right" />
          <ProjectsJavascript />
          <TexteAnimationProjects texte="Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress | Project with Wordpress |" direction="left" />
          <ProjectsWordpress />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
