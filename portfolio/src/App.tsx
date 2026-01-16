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
import Footer from './components/Footer/Footer';
import ProjectsWordpress from './components/Projects/ProjectsWordpress';
import Skills from './components/Skills/Skills';
import { useLanguage } from '@/i18n';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo('.header-anim',
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.hero-anim',
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', delay: 0.2 });
    }
  }, [isLoading]);

  const reactText = `${t.sections.reactProjects} | `.repeat(40);
  const wordpressText = `${t.sections.wordpressProjects} | `.repeat(40);

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
          <TexteAnimationProjects texte={reactText} direction="left" />
          <ProjectsReact />
          <TexteAnimationProjects texte={wordpressText} direction="right" />
          <ProjectsWordpress />
          <Skills />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
