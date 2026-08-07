import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ theme, toggleTheme, isAuthenticated, setIsAuthenticated }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/admin/login');
  };

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" style={{ fontWeight: 700, fontSize: '1.1rem' }}>Govinda kt</Link>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/certificates" onClick={() => setOpen(false)}>Certificates</Link>
          <Link to="/resume" onClick={() => setOpen(false)}>Resume</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          {isAuthenticated ? <button className="btn btn-secondary" onClick={logout}>Logout</button> : <Link to="/admin/login" className="btn btn-secondary">Admin</Link>}
          <button className="btn btn-secondary" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>
        </div>
        <button className="nav-toggle btn btn-secondary" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu"><Menu size={16} /></button>
      </div>
    </header>
  );
}
