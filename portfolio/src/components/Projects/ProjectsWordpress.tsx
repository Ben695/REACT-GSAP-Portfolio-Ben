import LeftProjects from '@/components/LeftProjects/LeftProjects';
import RightProjects from '@/components/RightProjects/RightProjects';

import EyesWillSeeImg from '@/assets/images/projects/Wordpress/eyeswillseeright.png';
import VillaNoah from '@/assets/images/projects/Wordpress/VillaNoah.png';
import CoyoteCorporate from '@/assets/images/projects/Wordpress/CoyoteCorporate.png';
import ApixAnalytics from '@/assets/images/projects/Wordpress/apixAnalytics.png';
import OnlyCompta from '@/assets/images/projects/Wordpress/OnlyCompta.png';
import AtypikHouse from '@/assets/images/projects/Wordpress/AtypikHouse.png';


const ProjectsWordpress = () => {
  return (
    <div>
      <RightProjects
        imageUrl={EyesWillSeeImg}
        title="Eyes Will See"
        description="Independently, I crafted Eyes Will See, an online art gallery, leveraging WordPress and WooCommerce for an art-focused e-commerce experience. This project aimed at showcasing art in an attractive layout while streamlining the purchase process. My role involved customizing themes and integrating plugins to meet the gallery's unique needs, demonstrating my skill in creating specialized e-commerce platforms with an emphasis on user experience and visual presentation"
        buttonText="Discover the website"
        buttonUrl="https://eyeswillsee.com"
      />
      <LeftProjects
        imageUrl={CoyoteCorporate}
        title="Coyote Corporate"
        description="I spearheaded the Coyote corporate website's redesign, focusing on a seamless blend of technology and user-centric design. Starting with Figma for the initial design, I moved on to WordPress, where I developed a custom theme for enhanced flexibility. To simplify content updates, I integrated Advanced Custom Fields (ACFs), making site management straightforward. A significant addition was the Flatchr API integration, automating job offer displays and streamlining the recruitment process. This project not only refreshed Coyote's online presence but also demonstrated my ability to deliver comprehensive web solutions efficiently."
        buttonText="Discover the website"
        buttonUrl="https://corporate.moncoyote.com/"
      />
      <RightProjects
        imageUrl={VillaNoah}
        title="Villa Noa Canggu"
        description="With the support of WordPress, I created the website for Villa Noa Canggu, transforming the digital presence of this luxurious accommodation. My work focused on designing an inviting and informative online space that captures the essence of Villa Noah Canggu, making it easy for visitors to explore the property's features, amenities, and booking options. This project showcases my ability to utilize WordPress to develop custom websites that cater to the unique needs of hospitality businesses, ensuring a seamless and engaging user experience."
        buttonText="Discover the website"
        buttonUrl="https://villa-noa-canggu.com/"
      />
      <LeftProjects
        imageUrl={OnlyCompta}
        title="Only Compta"
        description="I led the development of OnlyCompta's website, transforming the accounting service experience with a focus on user-friendliness and innovation. Utilizing WordPress, I designed a platform that showcases OnlyCompta's commitment to combining technology with personalized service, catering to a wide range of clients in Lyon, Dardilly, and Montluel. My role included designing the interface in Figma before bringing it to life in WordPress, highlighting the ease and efficiency of OnlyCompta's accounting solutions. This project underscores my ability to create digital solutions that simplify and enhance user engagement."
        buttonText="Discover the website"
        buttonUrl="https://www.onlycompta.fr/"
      />
      <RightProjects
        imageUrl={ApixAnalytics}
        title="Apix Analytics"
        description="I led the development of the Apix Analytics website, a showcase for groundbreaking gas chromatography miniaturization technology. Utilizing WordPress, I created a platform that highlights their innovative products and proprietary Nano Gravimetric Detector®. The project focused on custom theme development to ensure a smooth user experience, enabling easy navigation and engagement with Apix Analytics' revolutionary offerings in energy and environmental sectors."
        buttonText="Discover the website"
        buttonUrl="https://apixanalytics.com/"
      />
      <LeftProjects
        imageUrl={AtypikHouse}
        title="Atypik House"
        description="
        I crafted the AtypikHouse website, a portal that curates unique lodging experiences for those yearning for unconventional stays. Utilizing WordPress, I designed and developed an engaging platform that showcases an array of AtypikHouses, from Safari Tents to Hobbit Homes, ensuring each listing is presented with vivid imagery and detailed descriptions to captivate and inform potential guests. My focus was on creating an intuitive user experience that encourages exploration and booking, complemented by a visually stunning design that reflects the unique nature of each property. This project highlights my ability to deliver bespoke digital solutions that connect adventurous travelers with extraordinary accommodations."
        buttonText="Discover the website"
        buttonUrl="https://atypik-house.web-b.fr"
      />
    </div>
  );
};

export default ProjectsWordpress;
