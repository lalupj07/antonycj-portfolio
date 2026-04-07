import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.portfolio', path: '/portfolio' },
    { key: 'nav.blog', path: '/blog' },
    { key: 'nav.contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <NavLink to="/" className="logo text-gradient" style={{ fontSize: '1.5rem', fontWeight: 900 }}>
          Antony CJ
        </NavLink>

        {/* Desktop Menu */}
        <ul className="nav-links" style={{ display: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.key}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {t(link.key)}
              </NavLink>
            </li>
          ))}
        </ul>

        <style>{`
          @media (min-width: 768px) {
            .nav-links { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
          }
          .mobile-menu {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: var(--bg-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            z-index: 999;
          }
          .mobile-menu a { font-size: 1.5rem; font-weight: 700; }
          .lang-btn {
            font-family: var(--font-serif);
            font-size: 0.9rem;
            font-weight: 700;
            padding: 0.3rem 0.7rem;
            border: 1px solid var(--border-color);
            background: transparent;
            color: var(--text-primary);
            cursor: pointer;
            letter-spacing: 1px;
            transition: all 0.2s ease;
          }
          .lang-btn:hover {
            background: var(--text-primary);
            color: var(--bg-color);
          }
        `}</style>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Language Toggle */}
          <motion.button
            aria-label="Toggle language"
            className="lang-btn"
            onClick={toggleLang}
            whileTap={{ scale: 0.92 }}
            title={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
          >
            {lang === 'en' ? 'हि' : 'EN'}
          </motion.button>

          {/* Dark mode toggle */}
          <button aria-label="Toggle dark mode" onClick={toggleTheme} className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            aria-label="Open mobile menu"
            className="mobile-menu-btn btn-outline"
            style={{ padding: '0.5rem', borderRadius: '50%' }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: 'var(--text-primary)' }}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <NavLink
                key={link.key}
                to={link.path}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(link.key)}
              </NavLink>
            ))}
            <motion.button
              className="lang-btn"
              onClick={toggleLang}
              style={{ marginTop: '1rem', fontSize: '1.1rem' }}
              whileTap={{ scale: 0.92 }}
            >
              {lang === 'en' ? '🇮🇳 हिन्दी' : '🇬🇧 English'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
