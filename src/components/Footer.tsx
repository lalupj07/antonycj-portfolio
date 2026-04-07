import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className="text-gradient" style={{ marginBottom: '1rem' }}>Antony CJ</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Crafting impactful stories and digital experiences.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <a href="#" className="hover-scale"><Mail /></a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        
        <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Antony CJ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
