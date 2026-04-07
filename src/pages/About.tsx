import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedImage from '../components/AnimatedImage';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Helmet><title>About | Stories by Antony CJ</title></Helmet>
      <div className="container section">

        {/* Split Hero: Bio + Photo */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center', marginBottom: '6rem' }}>

          {/* Text Side */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 500, fontSize: '0.8rem', display: 'block', marginBottom: '1.5rem' }}>
              {t('about.label')}
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem' }}>
              Antony <strong style={{ fontWeight: 700 }}>CJ</strong>
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.8, fontWeight: 500 }}>
              {t('about.tagline')}
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {t('about.bio1')}
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {t('about.bio2')}
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {t('about.bio3')}
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {t('about.bio4')}
            </p>
          </motion.div>

          {/* Photo Side */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ height: '560px', position: 'relative' }}>
              <AnimatedImage src="/antony.jpg" alt="Antony CJ — Impact Photographer & Communications Specialist" objectPosition="top" />
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {t('about.photo_caption')}
            </p>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <h2 style={{ marginTop: '2rem', marginBottom: '3rem', textAlign: 'center', fontSize: '2rem', fontWeight: 300 }}>
          {t('about.timeline_title')} <strong style={{ fontWeight: 700 }}>{t('about.timeline_bold')}</strong>
        </h2>
        <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2.5rem', marginLeft: '1rem', position: 'relative' }}>
          {[
            { year: t('about.t1_year'), role: t('about.t1_role'), desc: t('about.t1_desc') },
            { year: t('about.t2_year'), role: t('about.t2_role'), desc: t('about.t2_desc') },
            { year: t('about.t3_year'), role: t('about.t3_role'), desc: t('about.t3_desc') },
          ].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.2 }}
              style={{ position: 'relative', marginBottom: '4rem' }}
            >
              <div style={{ position: 'absolute', left: '-2.9rem', top: '0.3rem', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--text-primary)', border: '3px solid var(--bg-color)' }} />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>{exp.year}</span>
              <h3 style={{ margin: '0.5rem 0 1rem 0', fontSize: '1.4rem', fontWeight: 500 }}>{exp.role}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
