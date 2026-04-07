import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';
import AnimatedImage from '../components/AnimatedImage';
import Lightbox from '../components/Lightbox';
import { useLanguage } from '../context/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: t('portfolio.cat_all') },
    { key: 'sport', label: t('portfolio.cat_sport') },
    { key: 'edu', label: t('portfolio.cat_edu') },
    { key: 'video', label: t('portfolio.cat_video') },
    { key: 'gender', label: t('portfolio.cat_gender') },
    { key: 'pub', label: t('portfolio.cat_pub') },
  ];

  const items = [
    { id: 1, titleKey: 'portfolio.item1_title', cat: 'sport', image: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&q=80&w=800' },
    { id: 2, titleKey: 'portfolio.item2_title', cat: 'edu', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800' },
    { id: 3, titleKey: 'portfolio.item3_title', cat: 'gender', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800' },
    { id: 4, titleKey: 'portfolio.item4_title', cat: 'video', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800' },
    { id: 5, titleKey: 'portfolio.item5_title', cat: 'pub', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800' },
    { id: 6, titleKey: 'portfolio.item6_title', cat: 'video', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' },
  ];

  const filtered = items.filter(item => filter === 'all' || item.cat === filter);
  const lightboxImages = filtered.map(item => ({ src: item.image, title: t(item.titleKey), category: categories.find(c => c.key === item.cat)?.label ?? '' }));

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex(i => i !== null ? (i + 1) % filtered.length : 0);
  const prevImage = () => setLightboxIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : 0);

  return (
    <PageTransition>
      <Helmet><title>Work | Stories by Antony CJ</title></Helmet>

      {lightboxIndex !== null && (
        <Lightbox images={lightboxImages} currentIndex={lightboxIndex} onClose={closeLightbox} onNext={nextImage} onPrev={prevImage} />
      )}

      <div className="container section">
        <h1 style={{ textAlign: 'center', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
          {t('portfolio.title')} <strong style={{ fontWeight: 700 }}>{t('portfolio.bold')}</strong>
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '0' }}>{t('portfolio.subtitle')}</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', margin: '3rem 0' }}>
          {categories.map(c => (
            <button key={c.key} onClick={() => setFilter(c.key)} className={filter === c.key ? 'btn btn-primary' : 'btn btn-outline'} style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>
              {c.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid-3">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden', cursor: 'pointer', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}
                whileHover={{ y: -6 }}
                onClick={() => openLightbox(i)}
              >
                <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                  <AnimatedImage src={item.image} alt={t(item.titleKey)} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {categories.find(c => c.key === item.cat)?.label}
                  </span>
                  <h3 style={{ marginTop: '0.5rem', fontSize: '1.2rem', fontWeight: 500 }}>{t(item.titleKey)}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
