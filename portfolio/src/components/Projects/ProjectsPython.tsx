import TexteAnimationProjects from '@/components/TexteAnimationProjects/TexteAnimationProjects';
import LeftProjects from '@/components/LeftProjects/LeftProjects';
import RightProjects from '@/components/RightProjects/RightProjects';

import LeftImage from '@/assets/images/eyeswillseeleft.png';
import RightImage from '@/assets/images/eyeswillseeright.png';

const ProjectsPython = () => {
  return (
    <div>
      <TexteAnimationProjects texte="Project with Python | Project with Python | Project with Python | Project with Python | Project with Python | Project with Python | Project with Python | Project with Python | Project with Python | Project with Python | " direction="left" />
      <LeftProjects
        imageUrl={LeftImage}
        title="Eyes Will See"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        buttonText="Cliquez Ici"
        buttonUrl="https://exemple.com"
      />
      <RightProjects
        imageUrl={RightImage}
        title="Votre Titre Ici"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        buttonText="Cliquez Ici"
        buttonUrl="https://exemple.com"
      />
    </div>
  );
};

export default ProjectsPython;
