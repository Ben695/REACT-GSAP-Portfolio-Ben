import Lottie from 'react-lottie';
import animationData from '@/assets/json/preloader.json';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  // Styles pour le conteneur du preloader
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    width: '100vw', 
    position: 'fixed', 
    top: 0,
    left: 0,
    zIndex: 9999, 
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
  };

  // Styles pour la div transparente de blocage
  const blockingLayerStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10000, // Plus élevé que le reste pour empêcher les clics
    cursor: 'wait', // Optionnel, change le curseur pour indiquer l'attente
  };

  return (
    <div style={isLoading ? containerStyles : { display: 'none' }}>
      <div style={blockingLayerStyles}></div> {/* Div transparente de blocage */}
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Preloader;
