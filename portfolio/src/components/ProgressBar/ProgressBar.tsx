import { motion, useScroll } from 'framer-motion';

const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: 'black',
        height: '4px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1001,
      }}
    />
  );
};

export default ProgressBar;
