import { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ModalDemo.sass';

// Images Gustus
import gustusHome from '@/assets/images/projects/Wordpress/gustus/home.webp';
import gustusChef from '@/assets/images/projects/Wordpress/gustus/chef.webp';
import gustusMenus from '@/assets/images/projects/Wordpress/gustus/menus.webp';
import gustusTraiteur from '@/assets/images/projects/Wordpress/gustus/traiteur.webp';

const screenshots = [gustusHome, gustusChef, gustusMenus, gustusTraiteur];

const ModalDemo: React.FC = () => {
  const [openModal, setOpenModal] = useState<1 | 2 | 3 | 4 | 5 | null>(null);

  const projectData = {
    title: "Gustus Traiteur",
    description: "Thème WordPress sur mesure pour un traiteur haut de gamme à Genève. Navigation avancée avec Walkers personnalisés, templates multiples, chargement AJAX, design responsive. Campagne Google Ads générant +50 000€ de devis en 6 mois.",
    websiteUrl: "https://gustus-traiteur-geneve.ch",
  };

  return (
    <div className="modal-demo">
      <h1>Choisis ton design de modal</h1>
      <p className="demo-subtitle">Clique sur un bouton pour voir le rendu</p>

      <div className="demo-buttons">
        <button onClick={() => setOpenModal(1)} className="demo-btn">
          <span className="btn-number">1</span>
          <span className="btn-label">Minimal Clean</span>
        </button>
        <button onClick={() => setOpenModal(2)} className="demo-btn">
          <span className="btn-number">2</span>
          <span className="btn-label">Split Layout</span>
        </button>
        <button onClick={() => setOpenModal(3)} className="demo-btn">
          <span className="btn-number">3</span>
          <span className="btn-label">Full Screen</span>
        </button>
        <button onClick={() => setOpenModal(4)} className="demo-btn">
          <span className="btn-number">4</span>
          <span className="btn-label">Card Stack</span>
        </button>
        <button onClick={() => setOpenModal(5)} className="demo-btn featured">
          <span className="btn-number">5</span>
          <span className="btn-label">Mix 2 + 4</span>
        </button>
      </div>

      {[1, 2, 3, 4, 5].map((variant) => (
        <ProjectModal
          key={variant}
          isOpen={openModal === variant}
          onClose={() => setOpenModal(null)}
          title={projectData.title}
          description={projectData.description}
          screenshots={screenshots}
          websiteUrl={projectData.websiteUrl}
          designVariant={variant as 1 | 2 | 3 | 4 | 5}
        />
      ))}
    </div>
  );
};

export default ModalDemo;
