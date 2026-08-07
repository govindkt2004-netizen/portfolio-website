import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

export default function AdminDashboard({ setIsAuthenticated }) {
  const [stats, setStats] = useState({ projects: 0, certificates: 0, messages: 0 });
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [messages, setMessages] = useState([]);
  const [projectForm, setProjectForm] = useState({ title: '', description: '', technology: '', githubLink: '', liveDemo: '', image: '', category: '', date: '' });
  const [certificateForm, setCertificateForm] = useState({ name: '', issuedBy: '', date: '', image: '', fileUrl: '' });
  const navigate = useNavigate();

  const loadData = async () => {
    const token = localStorage.getItem('token');
    try {
      const [pRes, cRes, mRes] = await Promise.all([
        axios.get('/api/projects', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('/api/certificates', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('/api/messages', { headers: { Authorization: `Bearer ${token}` } })
      ]);
      setProjects(pRes.data);
      setCertificates(cRes.data);
      setMessages(mRes.data);
      setStats({ projects: pRes.data.length, certificates: cRes.data.length, messages: mRes.data.length });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { loadData(); }, []);

  const addProject = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/projects', projectForm, { headers: { Authorization: `Bearer ${token}` } });
      toast.success('Project added');
      setProjectForm({ title: '', description: '', technology: '', githubLink: '', liveDemo: '', image: '', category: '', date: '' });
      loadData();
    } catch (error) {
      toast.error('Failed to add project');
    }
  };

  const addCertificate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/certificates', certificateForm, { headers: { Authorization: `Bearer ${token}` } });
      toast.success('Certificate added');
      setCertificateForm({ name: '', issuedBy: '', date: '', image: '', fileUrl: '' });
      loadData();
    } catch (error) {
      toast.error('Failed to add certificate');
    }
  };

  const deleteMessage = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`/api/messages/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      toast.success('Message deleted');
      loadData();
    } catch (error) {
      toast.error('Failed to delete message');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/admin/login');
  };

  return (
    <>
      <Helmet><title>Admin Dashboard | Govinda kt</title></Helmet>
      <section className="container">
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 className="section-title">Admin Dashboard</h2>
            <p className="muted">Manage portfolio content and viewer messages.</p>
          </div>
          <button className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
        <div className="admin-grid">
          <div className="glass-card stat-card"><h3>{stats.projects}</h3><p className="muted">Projects</p></div>
          <div className="glass-card stat-card"><h3>{stats.certificates}</h3><p className="muted">Certificates</p></div>
          <div className="glass-card stat-card"><h3>{stats.messages}</h3><p className="muted">Messages</p></div>
        </div>
        <div className="grid two-col" style={{ marginTop: '1.2rem' }}>
          <div className="glass-card card">
            <h3>Add Project</h3>
            <form onSubmit={addProject}>
              <div className="form-group"><input placeholder="Title" required value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} /></div>
              <div className="form-group"><textarea placeholder="Description" required value={projectForm.description} onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} /></div>
              <div className="form-group"><input placeholder="Technology" required value={projectForm.technology} onChange={(e) => setProjectForm({ ...projectForm, technology: e.target.value })} /></div>
              <div className="form-group"><input placeholder="GitHub Link" value={projectForm.githubLink} onChange={(e) => setProjectForm({ ...projectForm, githubLink: e.target.value })} /></div>
              <div className="form-group"><input placeholder="Live Demo" value={projectForm.liveDemo} onChange={(e) => setProjectForm({ ...projectForm, liveDemo: e.target.value })} /></div>
              <div className="form-group"><input placeholder="Image URL" value={projectForm.image} onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })} /></div>
              <div className="form-group"><input placeholder="Category" value={projectForm.category} onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })} /></div>
              <div className="form-group"><input type="date" value={projectForm.date} onChange={(e) => setProjectForm({ ...projectForm, date: e.target.value })} /></div>
              <button className="btn btn-primary" type="submit">Save Project</button>
            </form>
          </div>
          <div className="glass-card card">
            <h3>Add Certificate</h3>
            <form onSubmit={addCertificate}>
              <div className="form-group"><input placeholder="Certificate Name" required value={certificateForm.name} onChange={(e) => setCertificateForm({ ...certificateForm, name: e.target.value })} /></div>
              <div className="form-group"><input placeholder="Issued By" required value={certificateForm.issuedBy} onChange={(e) => setCertificateForm({ ...certificateForm, issuedBy: e.target.value })} /></div>
              <div className="form-group"><input type="date" value={certificateForm.date} onChange={(e) => setCertificateForm({ ...certificateForm, date: e.target.value })} /></div>
              <div className="form-group"><input placeholder="Image URL" value={certificateForm.image} onChange={(e) => setCertificateForm({ ...certificateForm, image: e.target.value })} /></div>
              <div className="form-group"><input placeholder="File URL" value={certificateForm.fileUrl} onChange={(e) => setCertificateForm({ ...certificateForm, fileUrl: e.target.value })} /></div>
              <button className="btn btn-primary" type="submit">Save Certificate</button>
            </form>
          </div>
        </div>
        <div className="glass-card card" style={{ marginTop: '1.2rem' }}>
          <h3>Projects</h3>
          <table className="table">
            <thead><tr><th>Title</th><th>Category</th><th>Date</th></tr></thead>
            <tbody>{projects.map((project) => <tr key={project._id}><td>{project.title}</td><td>{project.category}</td><td>{new Date(project.date).toLocaleDateString()}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="glass-card card" style={{ marginTop: '1.2rem' }}>
          <h3>Messages</h3>
          <table className="table">
            <thead><tr><th>Name</th><th>Email</th><th>Subject</th><th>Action</th></tr></thead>
            <tbody>{messages.map((msg) => <tr key={msg._id}><td>{msg.name}</td><td>{msg.email}</td><td>{msg.subject}</td><td><button className="btn btn-secondary" onClick={() => deleteMessage(msg._id)}>Delete</button></td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}
