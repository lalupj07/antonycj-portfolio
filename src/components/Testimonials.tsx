import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { quoteKey: 'testimonials.q1', authorKey: 'testimonials.a1', orgKey: 'testimonials.o1' },
    { quoteKey: 'testimonials.q2', authorKey: 'testimonials.a2', orgKey: 'testimonials.o2' },
    { quoteKey: 'testimonials.q3', authorKey: 'testimonials.a3', orgKey: 'testimonials.o3' },
  ];

  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem' }}>{t('testimonials.heading_label')}</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
            {t('testimonials.heading_title')} <strong style={{ fontWeight: 700 }}>{t('testimonials.heading_bold')}</strong>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {testimonials.map((tl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{ padding: '2.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', position: 'relative' }}
            >
              <span style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', color: 'var(--border-color)', lineHeight: 0.8, display: 'block', marginBottom: '1.5rem' }}>"</span>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '2rem' }}>{t(tl.quoteKey)}</p>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem' }}>
                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t(tl.authorKey)}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{t(tl.orgKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
