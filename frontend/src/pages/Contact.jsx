import { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/messages', form);
      toast.success('Message sent successfully');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Unable to send message');
    }
  };

  return (
    <>
      <Helmet><title>Contact | Govinda kt</title></Helmet>
      <section className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="muted">Let’s collaborate on your next project.</p>
        </div>
        <div className="grid two-col">
          <div className="glass-card card">
            <form onSubmit={handleSubmit}>
              <div className="form-group"><label>Name</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="form-group"><label>Email</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
              <div className="form-group"><label>Subject</label><input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} /></div>
              <div className="form-group"><label>Message</label><textarea required rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
              <button className="btn btn-primary" type="submit">Send Message</button>
            </form>
          </div>
          <div className="glass-card card">
            <h3>Reach Out</h3>
            <p className="muted">Email: govindkt2004@gmail.com</p>
            <p className="muted">Phone: +91 9591455953</p>
            <p className="muted">Location: Channagiri, Channagiri Tq Davanagere Dist Karnataka</p>
            <div style={{ marginTop: '1rem' }}>
              <a href="https://www.linkedin.com/in/govinda-k-t-5719b82a6/" className="btn btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com" className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div style={{ marginTop: '1rem' }}><iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.259867!3d40.6971494!2m3!1f0!2f0!3f0!3m2!1m1!2s!5e0!3m2!1m1!2s" style={{ border: 0, width: '100%', height: '250px', borderRadius: '16px' }} allowFullScreen loading="lazy" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
