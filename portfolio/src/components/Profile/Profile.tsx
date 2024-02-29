import  { useRef, useEffect } from 'react';
import gsap from 'gsap';
import '@/components/Profile/Profile.sass';
import ben from '@/assets/images/ben.webp';

const Profile: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;

    const onMouseMove = (e: MouseEvent) => {
      if (image) {
        const { left, top, width, height } = image.getBoundingClientRect();
        const mouseX = e.clientX - left - width / 2;
        const mouseY = e.clientY - top - height / 2;

        // Intensifier l'effet de rotation
        const rotateY = mouseX / (width / 2) * 30;
        const rotateX = -(mouseY / (height / 2)) * 30;

        gsap.to(image, {
          duration: 0.5,
          rotateY: rotateY,
          rotateX: rotateX,
          ease: "power1.out",
        });
      }
    };

    const onMouseLeave = () => {
      if (image) {
        // Réinitialiser l'animation pour que l'image revienne à son point de départ
        gsap.to(image, {
          duration: 0.5,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          ease: "power1.out",
        });
      }
    };

    if (image) {
      image.addEventListener('mousemove', onMouseMove);
      image.addEventListener('mouseleave', onMouseLeave);
    }

    // Nettoyage des événements au démontage
    return () => {
      if (image) {
        image.removeEventListener('mousemove', onMouseMove);
        image.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-content">
        <img ref={imageRef} src={ben} data-cursor-color="white" alt="Photo de Benjamin" className="profile-image" />
        <div className="profile-text">
          <h2 data-cursor-color="white">Front-end</h2>
          <h3 data-cursor-color="white">Developer</h3>
          <p data-cursor-color="white">I advise companies and professionals looking to enhance their online presence, primarily focusing on French businesses while also collaborating with companies in Egypt, Bali, Dubai, Morocco, and beyond.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
