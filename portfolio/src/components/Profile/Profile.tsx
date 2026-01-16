import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import '@/components/Profile/Profile.sass';
import ben from '@/assets/images/ben.webp';
import surf from '@/assets/images/surf.webp';
import ski from '@/assets/images/ski.webp';
import { useLanguage } from '@/i18n';

const images = [
  { src: ben, alt: 'Benjamin', rotation: 4, x: 0, y: 0 },
  { src: surf, alt: 'Surf', rotation: -10, x: -100, y: 35 },
  { src: ski, alt: 'Ski', rotation: 8, x: 90, y: 30 },
];

const Profile: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [zIndices, setZIndices] = useState([3, 1, 2]); // ben.webp au premier plan

  const handleClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else if (expandedIndex === null) {
      const newZIndices = [...zIndices];
      const maxZ = Math.max(...newZIndices) + 1;
      newZIndices[index] = maxZ;
      setZIndices(newZIndices);
      setExpandedIndex(index);
    }
  };

  const handleHover = (index: number) => {
    if (expandedIndex === null) {
      const newZIndices = [...zIndices];
      const maxZ = Math.max(...newZIndices) + 1;
      newZIndices[index] = maxZ;
      setZIndices(newZIndices);
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.8 },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  // Intersection Observer
  useEffect(() => {
    const element = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      {
        threshold: 0.5
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls]);

  return (
    <div ref={containerRef} className="profile-container profile-anim">
      <div className="profile-content">
        <motion.div
          className="profile-images"
          variants={imageContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <AnimatePresence>
            {expandedIndex !== null && (
              <motion.div
                className="polaroid-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedIndex(null)}
              />
            )}
          </AnimatePresence>

          {images.map((image, index) => {
            const isExpanded = expandedIndex === index;
            const isOther = expandedIndex !== null && expandedIndex !== index;

            return (
              <motion.div
                key={image.alt}
                className={`polaroid ${isExpanded ? 'expanded' : ''}`}
                initial={false}
                animate={{
                  x: isExpanded ? 0 : image.x,
                  y: isExpanded ? 0 : image.y,
                  rotate: isExpanded ? 0 : image.rotation,
                  scale: isExpanded ? 1.4 : 1,
                  opacity: isOther ? 0.3 : 1,
                  filter: isOther ? 'blur(4px)' : 'blur(0px)',
                }}
                whileHover={!isExpanded && expandedIndex === null ? {
                  scale: 1.08,
                  rotate: 0,
                  y: image.y - 15,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                style={{ zIndex: isExpanded ? 100 : zIndices[index] }}
                onClick={() => handleClick(index)}
                onHoverStart={() => handleHover(index)}
                data-cursor-color="white"
              >
                <div className="polaroid-frame">
                  <img src={image.src} alt={image.alt} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="profile-text"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <h2>{t.profile.title1}</h2>
          <h3>{t.profile.title2}</h3>
          <p>{t.profile.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
