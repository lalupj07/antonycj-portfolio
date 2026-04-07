import { motion } from 'framer-motion';

const partners = [
  { name: 'UNDP', full: 'UNDP India' },
  { name: 'Transform\nSchools', full: 'Transform Schools' },
  { name: 'LaLiga', full: 'LaLiga Foundation' },
  { name: 'Rafael Nadal\nFoundation', full: 'Rafael Nadal Foundation' },
  { name: 'Martha Farrell\nFoundation', full: 'Martha Farrell Foundation' },
  { name: 'The\nCommonwealth', full: 'The Commonwealth' },
];

export default function PartnerLogos() {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '3rem' }}>
          Organizations I've Worked With
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '3rem 4rem' }}>
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              title={p.full}
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                whiteSpace: 'pre-line',
                lineHeight: 1.3,
                padding: '1rem 1.5rem',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              whileHover={{ color: 'var(--text-primary)', borderColor: 'var(--text-primary)' }}
            >
              {p.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
