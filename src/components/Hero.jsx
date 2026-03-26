import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="hero">
      <motion.div style={{ y: y1 }} className="hero-blob hero-blob-1"></motion.div>
      <motion.div style={{ y: y2 }} className="hero-blob hero-blob-2"></motion.div>
      <motion.div 
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        <div className="hero-left">
          <motion.div variants={itemVariants} className="hero-tag">Available for opportunities</motion.div>
          <motion.h1 variants={itemVariants}>
            <span className="name-blue">Full-Stack</span><br />
            <span className="name-cyan">Developer</span><br />
            &amp; AI Engineer
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-sub">
            Building intelligent, privacy-focused web applications with MERN Stack, Python, and cutting-edge AI/LLM
            technologies. Based in Erode, India.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </motion.div>
          <motion.div variants={itemVariants} className="hero-stats">
            <div className="stat">
              <div className="stat-n">2<span>+</span></div>
              <div className="stat-l">Live Projects</div>
            </div>
            <div className="stat">
              <div className="stat-n">9<span>+</span></div>
              <div className="stat-l">Tech Skills</div>
            </div>
            <div className="stat">
              <div className="stat-n">B<span>.Tech</span></div>
              <div className="stat-l">AI & Data Science</div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="hero-photo-wrap"
          variants={photoVariants}
        >
          <div className="photo-ring">
            <img 
              src={profileImg} 
              alt="Devaprasanna S"
              onError={(e) => {
                e.target.style.background = 'linear-gradient(135deg,#1A6FDB,#00D4FF)';
                e.target.removeAttribute('src');
              }} 
            />
            <motion.div 
              className="photo-badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚡ Open to Work
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
