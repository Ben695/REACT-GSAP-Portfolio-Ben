import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion, useAnimation } from 'framer-motion';
import '@/components/Profile/Profile.sass';
import ben from '@/assets/images/ben.webp';

const Profile: React.FC = () => {
  const controls = useAnimation();
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Hover Effect
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = image.getBoundingClientRect();
      const mouseX = e.clientX - left - width / 2;
      const mouseY = e.clientY - top - height / 2;
      const rotateY = mouseX / (width / 2) * 15;
      const rotateX = -(mouseY / (height / 2)) * 15;

      gsap.to(image, {
        duration: 0.5,
        rotateY,
        rotateX,
        ease: 'power1.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(image, {
        duration: 0.5,
        rotateY: 0,
        rotateX: 0,
        ease: 'power1.out',
      });
    };

    image.addEventListener('mousemove', onMouseMove);
    image.addEventListener('mouseleave', onMouseLeave);

    return () => {
      image.removeEventListener('mousemove', onMouseMove);
      image.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Framer Motion Variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.8 },
    },
  };

  // Intersection Observer
  useEffect(() => {
    const element = containerRef.current; // Copie de la référence dans une variable locale
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      {
        threshold: 0.8 // 60% visibility
      }
    );

    if (element) {
      observer.observe(element);
    }

    // Utilisation de la variable locale `element` dans la fonction de nettoyage
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls]);

  return (
    <div ref={containerRef} className="profile-container profile-anim">
      <div className="profile-content">
        <motion.img
          ref={imageRef}
          src={ben}
          alt="Photo de Benjamin"
          className="profile-image"
          variants={imageVariants}
          initial="hidden"
          animate={controls}
          data-cursor-color="white" 
        />
        <motion.div
          className="profile-text"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <h2>Front-end </h2>
          <h3>Developer</h3>
          <p>Passionate about web technologiesI advise companies and professionals looking to enhance their online presence, primarily focusing on French businesses while also collaborating with companies in Egypt, Bali, Dubai, Morocco, and beyond.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
