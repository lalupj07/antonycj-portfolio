import { useState } from 'react';
import { motion } from 'framer-motion';

const FALLBACK = 'https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=800';

interface AnimatedImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  fallback?: string;
  objectPosition?: string;
}

export default function AnimatedImage({ src, alt = "", className = "", style = {}, fallback = FALLBACK, objectPosition = 'center' }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const imageSrc = errored ? fallback : src;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }} className={className}>
      {/* Loading Skeleton */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 0.8 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: "easeInOut" }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--border-color)',
            zIndex: 1,
          }}
        />
      )}

      {/* Actual Image */}
      <motion.img
        key={imageSrc}
        src={imageSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!errored) {
            setErrored(true);
            setIsLoaded(false);
          }
        }}
        initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 1.05,
          filter: isLoaded ? 'blur(0px)' : 'blur(10px)'
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition, display: 'block', position: 'relative', zIndex: 2 }}
      />
    </div>
  );
}
