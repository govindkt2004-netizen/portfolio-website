import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const education = [
  {
    title: 'Bachelor of Engineering',
    subtitle: 'Information Science & Engineering',
    year: 'Rao Bahadur Y Mahabaleswarappa Engineering College, Ballari'
  },
  {
    title: 'University',
    subtitle: 'Visvesvaraya Technological University',
    year: 'Currently Pursuing Final Year'
  }
];

const experience = [
  {
    title: 'Full Stack Developer',
    subtitle: 'Student & Personal Projects',
    year: 'Currently'
  }
];

const skills = ['React', 'Node.js', 'MongoDB', 'UI/UX', 'Problem Solving'];
const interests = ['Photography', 'Travel', 'Open Source', 'Reading'];

export default function About() {
  return (
    <>
      <Helmet><title>About | Govinda kt</title></Helmet>
      <section className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="muted">A concise overview of my background, experience, and interests.</p>
        </div>
        <div className="grid two-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card card">
            <h3>Introduction</h3>
            <p className="muted">
              I’m an Information Science & Engineering student at Rao Bahadur Y Mahabaleswarappa Engineering College, Ballari, passionate about full-stack development and building modern web applications. I enjoy turning ideas into practical, reliable, and user-friendly digital experiences.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card card">
            <h3>Skills Snapshot</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
              {skills.map((skill) => <span key={skill} className="btn btn-secondary" style={{ padding: '.45rem .8rem' }}>{skill}</span>)}
            </div>
          </motion.div>
        </div>
        <div className="grid two-col" style={{ marginTop: '1.2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card card">
            <h3>Education</h3>
            {education.map((item) => <div key={item.title} style={{ marginBottom: '0.9rem' }}><strong>{item.title}</strong><div className="muted">{item.subtitle}</div><div className="muted">{item.year}</div></div>)}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card card">
            <h3>Experience</h3>
            {experience.map((item) => <div key={item.title} style={{ marginBottom: '0.9rem' }}><strong>{item.title}</strong><div className="muted">{item.subtitle}</div><div className="muted">{item.year}</div></div>)}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card card" style={{ marginTop: '1.2rem' }}>
          <h3>Interests</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
            {interests.map((interest) => <span key={interest} className="btn btn-secondary" style={{ padding: '.45rem .8rem' }}>{interest}</span>)}
          </div>
        </motion.div>
      </section>
    </>
  );
}
