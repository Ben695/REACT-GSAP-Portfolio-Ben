import { useState } from 'react';
import { motion } from 'framer-motion';
import '@/components/RightProjects/RightProjects.sass';
import ProjectModal from '@/components/ProjectModal/ProjectModal';

interface RightProjectsProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  screenshots?: string[];
}

const svgAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.5, ease: "easeInOut" }
  },
};

const RightProjects: React.FC<RightProjectsProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
  buttonUrl,
  screenshots = []
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    if (screenshots.length > 0) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div data-cursor-color="white" className="container-projects-right">
        <motion.div
          className="right-svg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}>
          <svg xmlns="http://www.w3.org/2000/svg" data-cursor-color="white" viewBox="0 0 413.9 130" width="413" height="130">
            <motion.path
              d="M1.8,29.1c0,0,11.1,13.8,12.5,15.4c3.2,3.7,10,2.4,10.7,0.9c0.7-1.5,0.8-4.5-0.4-10.6s-5.2-16.2-3.9-16.9  c1.2-0.7,32.7,5.8,50.5,5.5c17.8-0.3,85.7,0.8,87.7,1c2,0.2,21.7,2,27.7,2.3c7.3,0.4,76.7,3.8,92.7,3.5c16.1-0.3,41,1.4,43.4,2.1  c2.4,0.7,16.3,4.4,0.3,5.7s-46.9,4.9-56.6,2.7c-9.7-2.3-21-6.6-27.2-15.8c-6.2-9.2-14.9-25.6-7.4-21.3s22.1,17.3,38.2,45.6  s24.1,31.2,26.3,31.9c2.2,0.7,28.8,6.6,37.9,2.3c9.1-4.3,30.4-22.6,33.2-24.5c3.2-2.1,8.4-5.1,9.4,1s1.4,14.7-0.7,16  s-6.8-7.2,2.7-15.8s11.3-9.2,18.4-8.6c7.1,0.7,15.6,8.3,15,21.2c-0.6,12.9-11.1,21.2-16.5,25.4s-30.1,23.2-32.5,24.7  c-2.8,1.7-8.4,4.8-17.9,4.2c-9.4-0.6-14.4-1.1-15.3-12.9s1.4-26.3,5.7-38.2s12.3-30.4,20.9-40.7c8.8-10.6,17.8-19.2,34.2-25.7"
              fill="none"
              stroke="white"
              strokeWidth="1"
              variants={svgAnimation}
            />
          </svg>
        </motion.div>
        <div className="contentWrapper" data-cursor-color="white">
          <h2 data-cursor-color="white">{title}</h2>
          <p data-cursor-color="white">{description}</p>
          <a
            href={buttonUrl}
            className="styled-button"
            data-cursor-color="white"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            onClick={handleButtonClick}
          >
            {buttonText}
          </a>
        </div>
        <div data-cursor-color="white" className="imageWrapper-right">
          <img data-cursor-color="black" src={imageUrl} alt={title} />
        </div>
      </div>

      {screenshots.length > 0 && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          description={description}
          screenshots={screenshots}
          websiteUrl={buttonUrl}
          designVariant={5}
        />
      )}
    </>
  );
};

export default RightProjects;
