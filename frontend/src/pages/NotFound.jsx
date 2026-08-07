import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 | Govinda kt</title></Helmet>
      <section className="container" style={{ textAlign: 'center', paddingTop: '5rem' }}>
        <h1 style={{ fontSize: '4rem' }}>404</h1>
        <p className="muted">The page you are looking for does not exist.</p>
        <Link className="btn btn-primary" to="/">Go Home</Link>
      </section>
    </>
  );
}
