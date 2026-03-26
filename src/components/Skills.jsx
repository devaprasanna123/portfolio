import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { icon: '⚛️', name: 'React.js' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🍃', name: 'MongoDB' },
    { icon: '🐘', name: 'PostgreSQL' },
    { icon: '🐍', name: 'Python' },
    { icon: '🐳', name: 'Docker' },
    { icon: '🔀', name: 'Git' },
    { icon: '🤖', name: 'Ollama / Llama' },
    { icon: '🎨', name: 'Frontend Dev' },
    { icon: '🔷', name: 'Express.js' },
    { icon: '©️', name: 'C Programming' },
    { icon: '🔥', name: 'Firebase' },
    { icon: '▲', name: 'Vercel' },
    { icon: '🔐', name: 'Data Privacy' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label">Tech Arsenal</div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills &amp; Technologies
        </motion.h2>
        <motion.div 
          className="skills-full-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-pill" 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(26, 111, 219, 0.15)',
                transition: { duration: 0.2 }
              }}
            >
              <div className="skill-pill-icon">{skill.icon}</div>
              <div className="skill-pill-name">{skill.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
