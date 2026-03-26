import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const containerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.nav 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a 
        className="nav-logo" 
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        DEV<span>.</span>
      </motion.a>
      <ul className="nav-links">
        {[
          { name: 'About', href: '#about' },
          { name: 'Projects', href: '#projects' },
          { name: 'Clients', href: 'http://localhost:5174' },
          { name: 'Skills', href: '#skills' },
          { name: 'Contact', href: '#contact' }
        ].map((link, idx) => (
          <motion.li key={idx} variants={itemVariants}>
            <motion.a 
              href={link.href}
              whileHover={{ color: 'var(--cyan)' }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          </motion.li>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ThemeToggle />
        <motion.a 
          className="nav-cta" 
          href="#contact"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 25px var(--glow)',
            backgroundColor: 'var(--blue)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk →
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
