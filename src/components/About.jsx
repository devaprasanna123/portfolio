


import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const yLabel = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const skillsVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about">
      <div className="section-inner">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="section-label"
          style={{ y: yLabel }}
        >
          Who I Am
        </motion.div>
        <div className="about-grid">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="about-text"
            style={{ y: yText }}
          >
            <h2>Crafting Digital<br />Experiences with Purpose</h2>
            <p>
              I'm <strong>Devaprasanna S</strong>, a dynamic Full-Stack Developer pursuing a
              <strong>B.Tech in Artificial Intelligence &amp; Data Science</strong> at Bannari Amman
              Institute of Technology, Sathyamangalam.
            </p>
            <p>
              I specialize in building <strong>scalable web solutions</strong> that integrate AI and
              LLM technologies — particularly with <strong>Ollama and Llama models</strong>.
              My focus is on creating applications that are not just functional, but intelligent, secure, and
              privacy-preserving.
            </p>
            <p>
              I've worked on <strong>healthcare data systems</strong> that generate secure database
              queries while protecting sensitive patient information, and deployed full-stack apps
              using Docker, PostgreSQL, and modern cloud platforms.
            </p>
            <div className="about-info">
              {[
                { label: 'Location', val: 'Erode, India 638401' },
                { label: 'Degree', val: 'B.Tech AI & DS (2029)' },
                { label: 'Email', val: 'devaprasanna0852@gmail.com' },
                { label: 'Phone', val: '+91 63 8133 0854' }
              ].map((item, idx) => (
                <div className="info-item" key={idx}>
                  <span className="info-label">{item.label}</span>
                  <span className="info-val">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={skillsVariants}
            className="skills-card"
          >
            <h3>Core Proficiencies</h3>
            {[
              { name: 'MERN Stack', pct: 88 },
              { name: 'Frontend Development', pct: 85 },
              { name: 'Git & Docker', pct: 90 },
              { name: 'Python', pct: 72 },
              { name: 'PostgreSQL', pct: 78 },
              { name: 'AI/LLM Integration', pct: 75 },
              { name: 'C Programming', pct: 80 }
            ].map((skill, index) => (
              <div className="skill-row" key={index}>
                <div className="skill-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.pct}%</span>
                </div>
                <div className="skill-track">
                  <motion.div 
                    className="skill-fill" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
