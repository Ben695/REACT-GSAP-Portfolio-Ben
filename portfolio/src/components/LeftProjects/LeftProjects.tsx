import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '@/components/LeftProjects/LeftProjects.sass';
import { gsap } from 'gsap';

interface LeftProjectsProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

// Utiliser la même définition d'animation que dans RightProjects
const svgAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.5, ease: "easeInOut" }
  },
};

const LeftProjects: React.FC<LeftProjectsProps> = ({ imageUrl, title, description, buttonText, buttonUrl }) => {
  useEffect(() => {
    const button = document.querySelector('.styled-button');
    if (button) {
      const tl = gsap.timeline();
      tl.to(button, { borderColor: 'white', duration: 0.2 });
      const onMouseEnter = () => tl.play();
      const onMouseLeave = () => tl.reverse();
      button.addEventListener('mouseenter', onMouseEnter);
      button.addEventListener('mouseleave', onMouseLeave);
      return () => {
        button.removeEventListener('mouseenter', onMouseEnter);
        button.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, []);

  return (
    <div data-cursor-color="white" className="container-projects-left">
      <motion.div 
        className="left-svg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}>
        <svg xmlns="http://www.w3.org/2000/svg"  data-cursor-color="white" viewBox="0 0 413.9 130" width="413" height="130">
          <motion.path
            d="M4.5,70.4c0,0,4.9,32.8,13.6,46s12.3,20.7,12.3,17.2c0.1-3.4-3.8-18.5-6-38.9s-4-41.2-3.3-49.1s0.1-6.6,1.9-4.4  c1.8,2.2,27.4,49.2,33.6,59.7s22.1,32.8,22.8,31.7s1.4-26.9,1.4-33.1c0-6.2,1-53.3,2.3-64.5c1.3-11.2,0.7-22,1.8-21.8  s56.5,67.2,57.7,67.7c1.2,0.5,4.7,6.9,1.6-3.7c-3.1-10.7-12.9-39.9-11.8-39.7c1.1,0.2,18.8,15.7,25.4,27s32.1,41.3,34.1,36.2  c2-5.1,10.4-33.4,11.4-34.6s1.4-2.2,4.3,0.8c2.9,2.9,15.3,15.3,19.9,13.2c4.6-2.1,5.1-8.2,7.4-12.9s25.3-30.7,33.4-35.9  s26.5-20,39.8-20.2s14.2,3.4,21.6,4.2c2.6,0.3,8.2,0.6,12-1.4s13.2-11,13.2-11"
            fill="none"
            stroke="white"
            strokeWidth="1"
            variants={svgAnimation}
            
          />
        </svg>
      </motion.div>
      <div className="imageWrapper" data-cursor-color="white">
        <img data-cursor-color="black" src={imageUrl} alt="Section image" />
      </div>
      <div className="contentWrapper" data-cursor-color="white">
        <h2 data-cursor-color="white">{title}</h2>
        <p data-cursor-color="white">{description}</p>
        <a href={buttonUrl} className="styled-button" data-cursor-color="white" target='_blank' role="button">{buttonText}</a>
      </div>
    </div>
  );
};

export default LeftProjects;
