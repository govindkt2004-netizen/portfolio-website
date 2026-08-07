import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const skillGroups = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 95 }
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'React', level: 96 },
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'MySQL', level: 82 }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 89 }
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Leadership', level: 90 },
      { name: 'Communication', level: 94 },
      { name: 'Problem Solving', level: 96 }
    ]
  }
];

export default function Skills() {
  return (
    <>
      <Helmet><title>Skills | Govinda kt</title></Helmet>
      <section className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="muted">A blend of technical expertise and professional strengths.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="glass-card card">
              <h3>{group.title}</h3>
              {group.skills.map((item) => (
                <div key={item.name} style={{ marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
