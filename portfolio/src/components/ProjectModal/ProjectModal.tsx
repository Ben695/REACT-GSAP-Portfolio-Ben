import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectModal.sass';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  screenshots: string[];
  websiteUrl: string;
  designVariant: 1 | 2 | 3 | 4 | 5;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  screenshots,
  websiteUrl,
  designVariant,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`modal-backdrop design-${designVariant}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          data-cursor-color="white"
        >
          <motion.div
            className={`modal-container design-${designVariant}`}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            data-cursor-color="white"
          >
            {/* Design 1: Minimal Clean */}
            {designVariant === 1 && (
              <>
                <div className="modal-header-1">
                  <button className="close-btn-1" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <h2>{title}</h2>
                  <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="visit-btn-1">
                    Découvrir le site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                <div className="modal-content-1">
                  <div className="carousel-1">
                    <button className="nav-btn-1 prev" onClick={prevSlide}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div className="screenshot-container-1">
                      <motion.img
                        key={currentIndex}
                        src={screenshots[currentIndex]}
                        alt={`Screenshot ${currentIndex + 1}`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <button className="nav-btn-1 next" onClick={nextSlide}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className="dots-1">
                    {screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        className={`dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                      />
                    ))}
                  </div>
                  <p className="description-1">{description}</p>
                </div>
              </>
            )}

            {/* Design 2: Split Layout */}
            {designVariant === 2 && (
              <>
                <button className="close-btn-2" onClick={onClose}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className="modal-split-2">
                  <div className="left-panel-2">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="visit-btn-2">
                      Découvrir le site
                      <span className="arrow">→</span>
                    </a>
                    <div className="thumbnails-2">
                      {screenshots.map((src, idx) => (
                        <button
                          key={idx}
                          className={`thumb ${idx === currentIndex ? 'active' : ''}`}
                          onClick={() => setCurrentIndex(idx)}
                        >
                          <img src={src} alt={`Thumb ${idx + 1}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="right-panel-2">
                    <div className="screenshot-container-2">
                      <motion.img
                        key={currentIndex}
                        src={screenshots[currentIndex]}
                        alt={`Screenshot ${currentIndex + 1}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Design 3: Full Screen Gallery */}
            {designVariant === 3 && (
              <>
                <div className="modal-header-3">
                  <div className="header-left-3">
                    <h2>{title}</h2>
                    <span className="counter-3">{currentIndex + 1} / {screenshots.length}</span>
                  </div>
                  <div className="header-right-3">
                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="visit-btn-3">
                      Visiter
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13V19C18 20.1 17.1 21 16 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <button className="close-btn-3" onClick={onClose}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="modal-content-3">
                  <button className="nav-btn-3 prev" onClick={prevSlide}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="screenshot-wrapper-3">
                    <motion.img
                      key={currentIndex}
                      src={screenshots[currentIndex]}
                      alt={`Screenshot ${currentIndex + 1}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <button className="nav-btn-3 next" onClick={nextSlide}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="modal-footer-3">
                  <p>{description}</p>
                </div>
              </>
            )}

            {/* Design 4: Card Stack */}
            {designVariant === 4 && (
              <>
                <div className="modal-top-4">
                  <button className="close-btn-4" onClick={onClose}>
                    ✕
                  </button>
                  <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="visit-btn-4">
                    Découvrir le site →
                  </a>
                </div>
                <div className="modal-body-4">
                  <div className="info-card-4">
                    <h2>{title}</h2>
                    <div className="divider-4"></div>
                    <p>{description}</p>
                  </div>
                  <div className="gallery-4">
                    <div className="main-image-4">
                      <motion.img
                        key={currentIndex}
                        src={screenshots[currentIndex]}
                        alt={`Screenshot ${currentIndex + 1}`}
                        initial={{ opacity: 0, rotateY: -10 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="gallery-nav-4">
                      <button onClick={prevSlide} className="nav-arrow-4">←</button>
                      <div className="progress-bar-4">
                        <div
                          className="progress-fill-4"
                          style={{ width: `${((currentIndex + 1) / screenshots.length) * 100}%` }}
                        />
                      </div>
                      <button onClick={nextSlide} className="nav-arrow-4">→</button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Design 5: Mix of 2 & 4 - Split Card */}
            {designVariant === 5 && (
              <>
                <div className="modal-header-5">
                  <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="visit-btn-5" data-cursor-color="black">
                    Découvrir le site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <button className="close-btn-5" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <div className="modal-body-5">
                  <div className="info-panel-5">
                    <div className="info-content-5">
                      <h2>{title}</h2>
                      <div className="divider-5"></div>
                      <p>{description}</p>
                    </div>
                    <div className="thumbnails-5">
                      {screenshots.map((src, idx) => (
                        <button
                          key={idx}
                          className={`thumb-5 ${idx === currentIndex ? 'active' : ''}`}
                          onClick={() => setCurrentIndex(idx)}
                        >
                          <img src={src} alt={`Thumb ${idx + 1}`} />
                          <span className="thumb-number">{idx + 1}</span>
                        </button>
                      ))}
                    </div>
                    <div className="progress-section-5">
                      <div className="progress-bar-5">
                        <div
                          className="progress-fill-5"
                          style={{ width: `${((currentIndex + 1) / screenshots.length) * 100}%` }}
                        />
                      </div>
                      <span className="progress-text-5">{currentIndex + 1} / {screenshots.length}</span>
                    </div>
                  </div>
                  <div className="gallery-panel-5">
                    <button className="nav-btn-5 prev" onClick={prevSlide}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div className="screenshot-container-5">
                      <motion.img
                        key={currentIndex}
                        src={screenshots[currentIndex]}
                        alt={`Screenshot ${currentIndex + 1}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <button className="nav-btn-5 next" onClick={nextSlide}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
