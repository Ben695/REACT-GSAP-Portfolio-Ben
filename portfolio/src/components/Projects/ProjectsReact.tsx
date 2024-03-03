import LeftProjects from '@/components/LeftProjects/LeftProjects';
import RightProjects from '@/components/RightProjects/RightProjects';

import ArgenBankImg from '@/assets/images/projects/react/argentBank.png';
import PortfolioBenImg from '@/assets/images/projects/react/portfolioBen.png';
import KaisaImg from '@/assets/images/projects/react/kaisa.png';

const ProjectsReact = () => {
  return (
    <div>
      <LeftProjects
        imageUrl={ArgenBankImg}
        title="Argent Bank"
        description="Argent Bank is a sleek web app designed for easy online banking. It uses Node.js for its behind-the-scenes magic and React for a smooth, interactive experience. This app lets you safely sign in, manage your profile, and get ready to handle money transactions. It's all about making bank account management straightforward and secure. With Argent Bank, checking your transactions, updating your info, or just keeping tabs on your account is a breeze, supported by detailed API docs for any tech-savvy users interested in the nuts and bolts."
        buttonText="Discover it on Github"
        buttonUrl="https://github.com/Ben695/Argent-Bank"
      />
      <RightProjects
        imageUrl={KaisaImg}
        title="Kasa"
        description="Kasa is an innovative web app for real estate rentals, made simple and dynamic with React. This platform enables smooth navigation through a variety of rental offerings, aiming to ease the search for accommodations. Kasa features an intuitive user interface, filters to refine your search, detailed pages for each property, and a straightforward booking process. Designed to be enjoyable on all types of devices, Kasa ensures a pleasant experience from start to finish. The project leverages React for the user interface, React Router for navigation, Sass for styling, and JSON to manage the property listings, ensuring a modern and efficient platform."
        buttonText="Discover it on Github"
        buttonUrl="https://github.com/Ben695/Kaisa"
      />
      <LeftProjects
        imageUrl={PortfolioBenImg}
        title="Portfolio"
        description="My portfolio is a creative web showcase built with React, TypeScript, GSAP, and Framer Motion. It highlights my journey and projects as a developer with a passion for design, even as I grow my skills in this area. The combination of React and TypeScript ensures a solid, smooth user experience, while GSAP and Framer Motion bring interactive animations that make the site visually engaging. Designed to stand out through its creativity, this portfolio reflects my venture into blending coding with design, showcasing my evolving development and design passion."
        buttonText="Discover it on Github"
        buttonUrl="https://github.com/Ben695/REACT-GSAP-Portfolio-Ben/tree/main/portfolio"
      />
    </div>
  );
};

export default ProjectsReact;
