import LeftProjects from '@/components/LeftProjects/LeftProjects';
import RightProjects from '@/components/RightProjects/RightProjects';
import { useLanguage } from '@/i18n';

// Project main images
import CoyoteCorporate from '@/assets/images/projects/Wordpress/CoyoteCorporate.webp';
import GustusImg from '@/assets/images/projects/Wordpress/gustus-website.webp';
import CalyviaImg from '@/assets/images/projects/Wordpress/calyvia-website.webp';

// Screenshots Gustus
import gustusHome from '@/assets/images/projects/Wordpress/gustus/home.webp';
import gustusChef from '@/assets/images/projects/Wordpress/gustus/chef.webp';
import gustusMenus from '@/assets/images/projects/Wordpress/gustus/menus.webp';
import gustusTraiteur from '@/assets/images/projects/Wordpress/gustus/traiteur.webp';

// Screenshots Calyvia
import calyviaHome from '@/assets/images/projects/Wordpress/calyvia/home.webp';
import calyviaParticuliers from '@/assets/images/projects/Wordpress/calyvia/particuliers.webp';
import calyviaProfessionnels from '@/assets/images/projects/Wordpress/calyvia/professionnels.webp';
import calyviaContact from '@/assets/images/projects/Wordpress/calyvia/contact.webp';

// Screenshots Coyote Corporate
import coyoteCorporateHome from '@/assets/images/projects/Wordpress/coyote/coyote-coporate/home.webp';
import coyoteCorporateAbout from '@/assets/images/projects/Wordpress/coyote/coyote-coporate/about.webp';
import coyoteCorporateEngagements from '@/assets/images/projects/Wordpress/coyote/coyote-coporate/engagements.webp';
import coyoteCorporatePresse from '@/assets/images/projects/Wordpress/coyote/coyote-coporate/presse.webp';
import coyoteCorporateEmplois from '@/assets/images/projects/Wordpress/coyote/coyote-coporate/emplois.webp';

const gustusScreenshots = [gustusHome, gustusChef, gustusMenus, gustusTraiteur];

const calyviaScreenshots = [
  calyviaHome,
  calyviaParticuliers,
  calyviaProfessionnels,
  calyviaContact,
];

const coyoteCorporateScreenshots = [
  coyoteCorporateHome,
  coyoteCorporateAbout,
  coyoteCorporateEngagements,
  coyoteCorporatePresse,
  coyoteCorporateEmplois,
];

const ProjectsWordpress = () => {
  const { t } = useLanguage();

  return (
    <div>
      <LeftProjects
        imageUrl={GustusImg}
        title={t.projects.gustus.title}
        description={t.projects.gustus.description}
        buttonText={t.projects.gustus.buttonText}
        buttonUrl={t.projects.gustus.buttonUrl}
        screenshots={gustusScreenshots}
      />
      <RightProjects
        imageUrl={CalyviaImg}
        title={t.projects.calyvia.title}
        description={t.projects.calyvia.description}
        buttonText={t.projects.calyvia.buttonText}
        buttonUrl={t.projects.calyvia.buttonUrl}
        screenshots={calyviaScreenshots}
      />
      <LeftProjects
        imageUrl={CoyoteCorporate}
        title={t.projects.coyote.title}
        description={t.projects.coyote.description}
        buttonText={t.projects.coyote.buttonText}
        buttonUrl={t.projects.coyote.buttonUrl}
        screenshots={coyoteCorporateScreenshots}
      />
    </div>
  );
};

export default ProjectsWordpress;
