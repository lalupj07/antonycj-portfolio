import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';
import AnimatedImage from '../components/AnimatedImage';
import StatsCounter from '../components/StatsCounter';
import PartnerLogos from '../components/PartnerLogos';
import Testimonials from '../components/Testimonials';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200'
];

const FEATURED_IMAGES = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
];

export default function Home() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <Helmet>
        <title>Antony CJ | Visual Storyteller & Impact Photographer</title>
        <meta name="description" content="Antony CJ translates complex global development work into powerful, human-centered narratives. 9+ years of impact photography and communication strategy." />
        <meta property="og:title" content="Antony CJ | Visual Storyteller" />
        <meta property="og:description" content="Translating complex global development work into powerful, human-centered narratives." />
        <meta property="og:image" content={FEATURED_IMAGES[0]} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* 1. PREMIUM SPLIT-SCREEN HERO */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '80px',
        paddingBottom: '4rem',
        background: 'var(--bg-color)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-split">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 600, fontSize: '0.8rem', display: 'block', marginBottom: '1.5rem' }}>
                {t('home.tagline')}
              </span>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                {t('home.hero_title_1')} <br/>
                <strong style={{ fontWeight: 600 }}>{t('home.hero_title_2')}</strong>
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '450px', marginBottom: '3rem', lineHeight: 1.8 }}>
                {t('home.hero_desc')}
              </p>
              <Link to="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', borderBottom: '2px solid var(--text-primary)', paddingBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }} className="hover-scale">
                {t('home.hero_cta')} <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Right Photo Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', width: '100%', height: '70vh', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <div style={{ 
                position: 'absolute', width: '90%', height: '90%', 
                background: 'var(--border-color)', right: 0, top: '5%' 
              }} />
            <motion.div style={{ y: yParallax, width: '90%', height: '95%', position: 'relative', zIndex: 1, right: '5%' }}>
                {HERO_IMAGES.map((src, idx) => (
                  <motion.div
                    key={src}
                    animate={{ opacity: idx === currentHeroImage ? 1 : 0 }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: idx === currentHeroImage ? 2 : 1,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Featured Hero ${idx + 1}`}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED VIGNETTES — EDITORIAL GRID */}
      <section style={{ background: 'var(--bg-secondary)', padding: '7rem 0' }}>
        <div className="container">

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{t('home.vignettes_label')}</p>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, margin: 0 }}>{t('home.vignettes_title')} <strong style={{ fontWeight: 700 }}>{t('home.vignettes_bold')}</strong></h2>
            </div>
            <Link to="/portfolio" style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500, color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              {t('home.vignettes_link')} <ArrowRight size={13} />
            </Link>
          </div>

          {/* Row 1: Large left + two stacked right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>

            {/* Hero image — LaLiga kids */}
            <motion.div className="photo-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ overflow: 'hidden' }}>
              <div style={{ height: '520px', overflow: 'hidden' }} className="photo-card-inner">
                <AnimatedImage src="/vignette1.jpg" alt="LaLiga kids celebrating at sport for development event" objectPosition="center" />
              </div>
              <p style={{ marginTop: '0.8rem', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{t('home.caption_1')}</p>
            </motion.div>

            {/* Right stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <motion.div className="photo-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }} style={{ overflow: 'hidden', flex: 1 }}>
                <div style={{ height: '253px', overflow: 'hidden' }} className="photo-card-inner">
                  <AnimatedImage src="/vignette2.jpg" alt="School students smiling in classroom" objectPosition="top" />
                </div>
                <p style={{ marginTop: '0.8rem', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{t('home.caption_2')}</p>
              </motion.div>
              <motion.div className="photo-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.22 }} style={{ overflow: 'hidden', flex: 1 }}>
                <div style={{ height: '253px', overflow: 'hidden' }} className="photo-card-inner">
                  <AnimatedImage src="/vignette3.jpg" alt="Woman on bicycle in community" objectPosition="center" />
                </div>
                <p style={{ marginTop: '0.8rem', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{t('home.caption_3')}</p>
              </motion.div>
            </div>
          </div>

          {/* Row 2: wide banner */}
          <motion.div className="photo-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ overflow: 'hidden' }}>
            <div style={{ height: '360px', overflow: 'hidden' }} className="photo-card-inner">
              <AnimatedImage src="/vignette4.jpg" alt="Athletes playing volleyball at rural sports ground" objectPosition="center" />
            </div>
            <p style={{ marginTop: '0.8rem', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{t('home.caption_4')}</p>
          </motion.div>

        </div>
      </section>

      {/* 3. MINIMAL FOCUS PILLARS */}
      <section className="section" style={{ background: 'var(--bg-color)', padding: '6rem 0' }}>
         <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
               {[
                 { no: t('home.pillar_label_1'), title: t('home.pillar_title_1'), desc: t('home.pillar_desc_1') },
                 { no: t('home.pillar_label_2'), title: t('home.pillar_title_2'), desc: t('home.pillar_desc_2') },
                 { no: t('home.pillar_label_3'), title: t('home.pillar_title_3'), desc: t('home.pillar_desc_3') },
               ].map((item, idx) => (
                 <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)', opacity: 0.5 }}>{item.no}</span>
                    <h3 style={{ fontSize: '1.4rem', margin: '1rem 0', fontWeight: 600 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. STATS */}
      <StatsCounter />

      {/* 5. PARTNER LOGOS */}
      <PartnerLogos />

      {/* 6. TESTIMONIALS */}
      <Testimonials />

    </PageTransition>
  );
}
