import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import profileImg from '../assets/profile.jpg';

const stats = [
  { label: 'Projects Completed', value: '25+' },
  { label: 'Years Experience', value: '4' },
  { label: 'Happy Clients', value: '18' },
  { label: 'Certificates', value: '12' }
];

export default function Home() {
  
  return (
    <>
      <Helmet>
        <title>Home | Govinda kt</title>
        <meta name="description" content="Home page of Govinda kt, a full-stack developer with expertise in React, Node.js, and MongoDB." />
      </Helmet>
      <section className="container hero">
        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <p className="hero-subtitle">Hello, I’m</p>
            <h1>Govinda kt</h1>
            <h2>Full Stack Developer</h2>
            <p className="muted">I design and build modern, scalable web applications with React, Node.js, and MongoDB while creating polished digital experiences.</p>
            <div className="button-row">
              <a href="/resume" className="btn btn-primary"><Download size={16} style={{ marginRight: 8 }} />Download Resume</a>
              <Link to="/contact" className="btn btn-secondary"><Send size={16} style={{ marginRight: 8 }} />Contact Me</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="image-frame glass-card">
            <img
              src={profileImg}
              alt="Professional portrait"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'; }}
            />
          </motion.div>
        </div>
        <div className="grid three-col" style={{ marginTop: '2rem' }}>
          {stats.map((item, index) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="glass-card card">
              <h3>{item.value}</h3>
              <p className="muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
