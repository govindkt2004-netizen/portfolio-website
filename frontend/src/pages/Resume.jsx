import { Helmet } from 'react-helmet-async';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <>
      <Helmet><title>Resume | Govinda kt</title></Helmet>
      <section className="container">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <p className="muted">View and download my latest resume.</p>
        </div>
        <div className="glass-card card">
          <iframe src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" style={{ width: '100%', height: '700px', border: 'none', borderRadius: '18px' }} title="Resume Preview" />
          <div className="button-row" style={{ justifyContent: 'flex-start', marginTop: '1rem' }}>
            <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" className="btn btn-primary" download><Download size={16} style={{ marginRight: 8 }} />Download Resume</a>
          </div>
        </div>
      </section>
    </>
  );
}
