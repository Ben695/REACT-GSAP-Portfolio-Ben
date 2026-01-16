import { motion } from 'framer-motion';
import '@/components/Skills/Skills.sass';
import { useLanguage } from '@/i18n';

const skills = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/000000' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/000000' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/000000' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/000000' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/000000' },
  { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/000000' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/000000' },
  { name: 'SASS', icon: 'https://cdn.simpleicons.org/sass/000000' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/000000' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/000000' },
  { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/000000' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/000000' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="skills-section" data-cursor-color="black">
      <h2 className="skills-title" data-cursor-color="black">{t.skills.title}</h2>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            variants={itemVariants}
            data-cursor-color="black"
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
