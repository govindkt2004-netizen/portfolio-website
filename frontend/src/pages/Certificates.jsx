import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Download } from 'lucide-react';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await axios.get('/api/certificates');
        setCertificates(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <>
      <Helmet><title>Certificates | Govinda kt</title></Helmet>
      <section className="container">
        <div className="section-header">
          <h2 className="section-title">Certificates</h2>
          <p className="muted">Professional certifications and achievements.</p>
        </div>
        <div className="grid two-col">
          {certificates.map((certificate, index) => (
            <motion.div key={certificate._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="glass-card card">
              <img src={certificate.image || 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80'} alt={certificate.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '18px' }} />
              <h3 style={{ marginTop: '1rem' }}>{certificate.name}</h3>
              <p className="muted">Issued by: {certificate.issuedBy}</p>
              <p className="muted">Date: {new Date(certificate.date).toLocaleDateString()}</p>
              <a href={certificate.fileUrl || '#'} className="btn btn-primary" target="_blank" rel="noreferrer"><Download size={16} style={{ marginRight: 8 }} />Download</a>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
