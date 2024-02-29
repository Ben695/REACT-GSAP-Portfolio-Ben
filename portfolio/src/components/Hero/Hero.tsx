import '@/components/Hero/Hero.sass';
import SvgAnimation from '@/components/SvgAnimation/SvgAnimation';
import chapeau from '@/assets/images/chapeau.png';
import AutoAnimation from '@/components/AutoAnimation/AutoAnimation';

const Hero: React.FC = () => {
  return (
    <div data-cursor-color="black" className="name-display hero">
      <div className='hero-title'>
        <p data-cursor-color="white" >Benjamin <span data-cursor-color="white">Benkessas</span></p>
        <img data-cursor-color="white" src={chapeau} alt="" className='chapeau-image' />
      </div>
      <SvgAnimation />
      <AutoAnimation/>
    </div>
  );
};

export default Hero;