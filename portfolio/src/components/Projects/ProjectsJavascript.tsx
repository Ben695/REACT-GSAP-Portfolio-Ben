import LeftProjects from '@/components/LeftProjects/LeftProjects';
import RightProjects from '@/components/RightProjects/RightProjects';

import CoyoteEcom from '@/assets/images/projects/Javascript/CoyoteE-commerce.png';
import CoyoteDoc from '@/assets/images/projects/Javascript/coyoteDoc.png';

const ProjectsJavascript = () => {
  return (
    <div>
      <RightProjects
        imageUrl={CoyoteEcom}
        title="Coyote E-commerce"
        description="Over the course of one year, I had the opportunity to work on the redesign of the e-commerce sites for Spain, Italy, Luxembourg, and Belgium for the company Coyote. This challenging and rewarding project allowed me to collaborate closely with a talented team consisting of two front-end developers and two back-end developers. Our collective effort focused on enhancing user experience, streamlining the purchasing process, and modernizing the overall aesthetic to align with Coyote's brand identity and strategic goals. This experience not only honed my skills in web development but also enriched my understanding of working within a diverse, multidisciplinary team to achieve success across different markets."
        buttonText="Discover the website"
        buttonUrl="https://www.moncoyote.com/"
      />
      <LeftProjects
        imageUrl={CoyoteDoc}
        title="Coyote Documentation"
        description="Working independently, I revamped the entire Coyote documentation website, a mandatory and regulatory project. This overhaul was aimed at making the documentation more accessible and user-friendly, ensuring compliance with industry standards. Through meticulous planning and execution, I transformed the site into an efficient, navigable resource, demonstrating my capability to manage and execute complex web development tasks autonomously."
        buttonText="Discover the website"
        buttonUrl="https://docs.moncoyote.com/"
      />
    </div>
  );
};

export default ProjectsJavascript;
