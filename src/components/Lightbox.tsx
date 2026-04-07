import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; title: string; category: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const current = images[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9000,
          background: 'rgba(0,0,0,0.95)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '2rem',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', borderRadius: '50%', width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 9001,
          }}
        >
          <X size={20} />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous image"
          style={{
            position: 'absolute', left: '1.5rem',
            background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', borderRadius: '50%', width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 9001,
          }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{ maxWidth: '90vw', maxHeight: '75vh', position: 'relative' }}
        >
          <img
            src={current.src}
            alt={current.title}
            style={{ maxWidth: '90vw', maxHeight: '75vh', objectFit: 'contain', display: 'block' }}
          />
        </motion.div>

        {/* Caption */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#fff' }} onClick={(e) => e.stopPropagation()}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>{current.category}</span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 400, fontFamily: 'var(--font-serif)' }}>{current.title}</h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{currentIndex + 1} / {images.length}</p>
        </div>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next image"
          style={{
            position: 'absolute', right: '1.5rem',
            background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', borderRadius: '50%', width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 9001,
          }}
        >
          <ChevronRight size={22} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
