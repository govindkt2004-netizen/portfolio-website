import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

export default function AdminLogin({ setIsAuthenticated }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', form);
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      toast.success('Login successful');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return (
    <>
      <Helmet><title>Admin Login | Govinda kt</title></Helmet>
      <section className="container" style={{ paddingTop: '5rem' }}>
        <div className="glass-card card" style={{ maxWidth: '480px', margin: '0 auto' }}>
          <h2 className="section-title">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group"><label>Email</label><input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
            <div className="form-group"><label>Password</label><input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></div>
            <button className="btn btn-primary" type="submit">Login</button>
          </form>
        </div>
      </section>
    </>
  );
}
