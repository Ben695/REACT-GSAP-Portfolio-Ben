import LeftProjects from '@/components/LeftProjects/LeftProjects';
import RightProjects from '@/components/RightProjects/RightProjects';
import { useLanguage } from '@/i18n';

// Project main images
import BullDocImg from '@/assets/images/projects/react/bulldoc.webp';
import ImageOptimizerImg from '@/assets/images/projects/react/image-optimizer.webp';
import CoyoteEcommerceImg from '@/assets/images/projects/react/CoyoteE-commerce.webp';
import OptimmaImg from '@/assets/images/projects/react/optimma-website.webp';

// Screenshots BullDoc
import bulldocDashboard from '@/assets/images/projects/react/bulldoc/dashboard.webp';
import bulldocClients from '@/assets/images/projects/react/bulldoc/clients.webp';
import bulldocClientDetail from '@/assets/images/projects/react/bulldoc/client-detail.webp';
import bulldocInvoices from '@/assets/images/projects/react/bulldoc/invoices.webp';
import bulldocSettings from '@/assets/images/projects/react/bulldoc/settings.webp';
import bulldocAppearance from '@/assets/images/projects/react/bulldoc/appearance.webp';

// Screenshots Image Optimizer
import imageOptimizerDashboard from '@/assets/images/projects/react/imageoptimizer/dashboard.webp';
import imageOptimizerOptimization from '@/assets/images/projects/react/imageoptimizer/optimization.webp';
import imageOptimizerConfig from '@/assets/images/projects/react/imageoptimizer/config.webp';
import imageOptimizerOnpage from '@/assets/images/projects/react/imageoptimizer/onpage.webp';

// Screenshots Coyote E-commerce
import coyoteEcommerceHome from '@/assets/images/projects/Wordpress/coyote/coyote-ecommerce/home.webp';
import coyoteEcommerceProductApp from '@/assets/images/projects/Wordpress/coyote/coyote-ecommerce/product-app.webp';
import coyoteEcommerceProductSecure from '@/assets/images/projects/Wordpress/coyote/coyote-ecommerce/product-secure.webp';
import coyoteEcommerceServices from '@/assets/images/projects/Wordpress/coyote/coyote-ecommerce/services.webp';

// Screenshots Optimma
import optimmaDashboard from '@/assets/images/projects/react/optimma/dashboard.webp';
import optimmaFaq from '@/assets/images/projects/react/optimma/faq.webp';
import optimmaQuestionnaire from '@/assets/images/projects/react/optimma/questionnaire.webp';
import optimmaQuestionnaireDetail from '@/assets/images/projects/react/optimma/questionnaire-detail.webp';
import optimmaVisite from '@/assets/images/projects/react/optimma/visite.webp';

const bulldocScreenshots = [
  bulldocDashboard,
  bulldocClients,
  bulldocClientDetail,
  bulldocInvoices,
  bulldocSettings,
  bulldocAppearance,
];

const imageOptimizerScreenshots = [
  imageOptimizerDashboard,
  imageOptimizerOptimization,
  imageOptimizerConfig,
  imageOptimizerOnpage,
];

const coyoteEcommerceScreenshots = [
  coyoteEcommerceHome,
  coyoteEcommerceProductApp,
  coyoteEcommerceProductSecure,
  coyoteEcommerceServices,
];

const optimmaScreenshots = [
  optimmaDashboard,
  optimmaFaq,
  optimmaQuestionnaire,
  optimmaQuestionnaireDetail,
  optimmaVisite,
];

const ProjectsReact = () => {
  const { t } = useLanguage();

  return (
    <div>
      <LeftProjects
        imageUrl={BullDocImg}
        title={t.projects.bulldoc.title}
        description={t.projects.bulldoc.description}
        buttonText={t.projects.bulldoc.buttonText}
        buttonUrl={t.projects.bulldoc.buttonUrl}
        screenshots={bulldocScreenshots}
      />
      <RightProjects
        imageUrl={ImageOptimizerImg}
        title={t.projects.imageOptimizer.title}
        description={t.projects.imageOptimizer.description}
        buttonText={t.projects.imageOptimizer.buttonText}
        buttonUrl={t.projects.imageOptimizer.buttonUrl}
        screenshots={imageOptimizerScreenshots}
      />
      <LeftProjects
        imageUrl={CoyoteEcommerceImg}
        title={t.projects.coyoteEcommerce.title}
        description={t.projects.coyoteEcommerce.description}
        buttonText={t.projects.coyoteEcommerce.buttonText}
        buttonUrl={t.projects.coyoteEcommerce.buttonUrl}
        screenshots={coyoteEcommerceScreenshots}
      />
      <RightProjects
        imageUrl={OptimmaImg}
        title={t.projects.optimma.title}
        description={t.projects.optimma.description}
        buttonText={t.projects.optimma.buttonText}
        buttonUrl={t.projects.optimma.buttonUrl}
        screenshots={optimmaScreenshots}
      />
    </div>
  );
};

export default ProjectsReact;
