import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import AnimatedImage from '../components/AnimatedImage';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (endpoint) {
      setStatus(t('contact.sending'));
      try {
        await fetch(endpoint, { method: 'POST' });
        setStatus(t('contact.sent'));
      } catch {
        setStatus(t('contact.error'));
      }
    } else {
      setStatus(t('contact.fallback'));
    }
  };

  return (
    <PageTransition>
      <Helmet><title>Contact | Stories by Antony CJ</title></Helmet>
      <div className="container section">

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Text Side */}
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 300 }}>{t('contact.title')}</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', lineHeight: 1.6 }}>{t('contact.subtitle')}</p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 500, marginBottom: '0.8rem' }}>{t('contact.process_title')}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t('contact.process_desc')}</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 500, marginBottom: '0.8rem' }}>{t('contact.quality_title')}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t('contact.quality_desc')}</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 500, marginBottom: '0.8rem' }}>{t('contact.time_title')}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t('contact.time_desc')}</p>
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <p style={{ fontWeight: 400, fontSize: '1.2rem' }}>
                {t('contact.send_query')}{' '}
                <a href="mailto:hello@antonycj.com" style={{ fontWeight: 600, borderBottom: '1px solid var(--text-primary)' }}>
                  hello@antonycj.com
                </a>
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <div style={{ height: '400px', marginBottom: '3rem' }}>
              <AnimatedImage src="https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=800" alt="Documentation Photography" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>{t('contact.form_title')}</h3>
            <form onSubmit={handleSubmit} style={{ background: 'var(--bg-secondary)', padding: '2rem', border: '1px solid var(--border-color)' }}>
              <div className="form-group">
                <input type="text" placeholder={t('contact.name')} required className="form-control" />
              </div>
              <div className="form-group">
                <input type="email" placeholder={t('contact.email')} required className="form-control" />
              </div>
              <div className="form-group">
                <textarea placeholder={t('contact.message')} required rows={4} className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>{t('contact.send')}</button>
              {status && <p style={{ marginTop: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
