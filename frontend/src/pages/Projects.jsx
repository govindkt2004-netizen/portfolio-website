import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PAGE_SIZE = 4;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  const filtered = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || project.category === category;
    return matchesSearch && matchesCategory;
  });

  const pages = Math.ceil(filtered.length / PAGE_SIZE);
  const visibleProjects = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => setPage(1), [search, category]);

  return (
    <>
      <Helmet><title>Projects | Govinda kt</title></Helmet>
      <section className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="muted">A showcase of work built with modern technologies.</p>
        </div>
        <div className="glass-card card" style={{ marginBottom: '1rem' }}>
          <div className="grid two-col">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search projects" />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="Web App">Web App</option>
              <option value="Mobile">Mobile</option>
              <option value="AI">AI</option>
            </select>
          </div>
        </div>
        <div className="grid two-col">
          {visibleProjects.map((project, index) => (
            <motion.div key={project._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="glass-card card">
              <img src={project.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'} alt={project.title} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '18px' }} />
              <h3 style={{ marginTop: '1rem' }}>{project.title}</h3>
              <p className="muted">{project.description}</p>
              <p><strong>Tech:</strong> {project.technology}</p>
              <p><strong>Category:</strong> {project.category}</p>
              <p><strong>Date:</strong> {new Date(project.date).toLocaleDateString()}</p>
              <div className="button-row" style={{ justifyContent: 'flex-start' }}>
                <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.liveDemo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="button-row" style={{ marginTop: '1.5rem' }}>
          {Array.from({ length: pages }, (_, i) => i + 1).map((num) => (
            <button key={num} className={`btn ${page === num ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setPage(num)}>{num}</button>
          ))}
        </div>
      </section>
    </>
  );
}
