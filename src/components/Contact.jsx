import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [btnText, setBtnText] = useState('Send Message →');
  const [btnStyle, setBtnStyle] = useState({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setBtnText('Sending...');
    
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          setBtnText('Message Sent ✓');
          setBtnStyle({ background: '#0e9e6b' });
          form.reset();
        } else {
          setBtnText('Error Sending');
          setBtnStyle({ background: '#e63946' });
        }
      })
      .catch(() => {
        setBtnText('Error Sending');
        setBtnStyle({ background: '#e63946' });
      })
      .finally(() => {
        setTimeout(() => {
          setBtnText('Send Message →');
          setBtnStyle({});
        }, 3000);
      });
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <motion.div 
          className="contact-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="contact-left">
            <motion.div variants={itemVariants} className="section-label">Get In Touch</motion.div>
            <motion.h2 variants={itemVariants}>Let's Build<br />Something Together</motion.h2>
            <motion.p variants={itemVariants}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
              Drop me a message!
            </motion.p>
            <div className="contact-links">
              {[
                { icon: '✉️', label: 'Email', val: 'devaprasanna0852@gmail.com', href: 'mailto:devaprasanna0852@gmail.com' },
                { icon: '📞', label: 'Phone', val: '+91 63 8133 0854', href: 'tel:+916381330854' },
                { icon: '💼', label: 'LinkedIn', val: 'devaprasanna-s-21a9573', href: 'https://www.linkedin.com/in/devaprasanna-s-21a9573' },
                { icon: '🐙', label: 'GitHub', val: 'github.com/devaprasanna123', href: 'https://github.com/devaprasanna123' }
              ].map((link, idx) => (
                <motion.a 
                  key={idx}
                  href={link.href} 
                  className="contact-link"
                  variants={itemVariants}
                  whileHover={{ x: 10, color: 'var(--cyan)' }}
                >
                  <div className="contact-icon">{link.icon}</div>
                  <div className="contact-info-text">
                    <span className="c-label">{link.label}</span>
                    <span className="c-val">{link.val}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          <motion.div variants={itemVariants}>
            <div className="skills-card">
              <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
              <form 
                id="contact-form" 
                action="https://formsubmit.co/devaprasanna0852@gmail.com" 
                method="POST"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_captcha" value="false" />
                <div className="form-field">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-field">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="form-field">
                  <label>Subject</label>
                  <input type="text" name="_subject" placeholder="Project opportunity..." />
                </div>
                <div className="form-field">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell me about your project or idea..." required></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  id="submit-btn" 
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ border: 'none', cursor: 'pointer', width: '100%', textAlign: 'center', padding: '0.9rem', ...btnStyle }}
                >
                  {btnText}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
