import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

function StatItem({ value, suffix, label }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1, color: '#ffffff' }}>
        {count}{suffix}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: '0.75rem', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500 }}>{label}</p>
    </motion.div>
  );
}

export default function StatsCounter() {
  const { t } = useLanguage();

  const stats = [
    { value: 12, suffix: 'M+', labelKey: 'stats.reached' },
    { value: 9, suffix: '+', labelKey: 'stats.experience' },
    { value: 50, suffix: '+', labelKey: 'stats.projects' },
    { value: 15, suffix: '+', labelKey: 'stats.orgs' },
  ];

  return (
    <section style={{ padding: '6rem 0', background: '#111111' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <StatItem value={s.value} suffix={s.suffix} label={t(s.labelKey)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
