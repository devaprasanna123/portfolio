import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      icon: '🏥',
      tags: ['MERN Stack', 'AI/LLM', 'PostgreSQL', 'Ollama'],
      title: 'CareConnect Hub',
      desc: 'Privacy-preserving healthcare data system that integrates AI-driven query generation using Ollama & Llama models. Generates secure, anonymized database queries while protecting sensitive patient information. Deployed on Vercel.',
      link: 'https://careconnect-hub-nine.vercel.app/',
      github: 'https://github.com/devaprasanna123',
      bg: 'card-bg-1'
    },
    {
      id: 2,
      icon: '⚡',
      tags: ['Full-Stack', 'Docker', 'Firebase', 'AI/LLM'],
      title: 'Fheoy Web App',
      desc: 'Intelligent full-stack web application showcasing AI/LLM integration with real-time data processing. Built with scalable MERN Stack architecture, Docker containerization, and deployed on Firebase for high availability.',
      link: 'https://fheoy-4f41f.web.app/',
      github: 'https://github.com/devaprasanna123',
      bg: 'card-bg-2'
    },
    {
      id: 3,
      icon: '🤖',
      tags: ['Python', 'Llama', 'Privacy', 'NLP'],
      title: 'AI Query Engine',
      desc: 'Secure AI-driven database query system that generates PostgreSQL queries using natural language inputs. Implements privacy-preserving techniques to protect sensitive data while enabling powerful analytical capabilities.',
      github: 'https://github.com/devaprasanna123',
      bgStyle: { background: 'linear-gradient(135deg,#050E1C,#091530,#050E1C)' },
      glowStyle: { background: 'radial-gradient(circle at 50% 120%, rgba(0,212,255,0.2) 0%, transparent 60%)' }
    },
    {
      id: 4,
      icon: '💻',
      tags: ['Freelance', 'Full-Stack', 'Custom Solutions', 'MERN Stack'],
      title: 'Freelance Full-Stack Projects',
      desc: 'Actively building custom, scalable web applications and AI solutions for diverse clients. Specializing in complete project lifecycles spanning from architecture design to production deployment.',
      hireMe: true,
      bgStyle: { background: 'linear-gradient(135deg,#1A0B2E 0%, #3B1B54 50%, #1A0B2E 100%)' },
      glowStyle: { background: 'radial-gradient(circle at 50% 120%, rgba(138,43,226,0.2) 0%, transparent 60%)' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-label">What I've Built</div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectList.map((project) => (
            <motion.div 
              className="project-card" 
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={`project-card-top ${project.bg || ''}`} style={project.bgStyle}>
                <div className="card-lines"></div>
                <div className="card-glow" style={project.glowStyle}></div>
                <div className="card-icon">{project.icon}</div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-title">{project.title}</div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .31.22.68.82.56C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      {project.id === 3 ? 'View on GitHub' : 'GitHub'}
                    </a>
                  )}
                  {project.hireMe && (
                    <a href="#contact" className="proj-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      Hire Me
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
