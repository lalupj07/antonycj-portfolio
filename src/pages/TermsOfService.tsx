import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <PageTransition>
      <Helmet>
        <title>Terms of Service | Antony CJ</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container section" style={{ maxWidth: '800px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
          <div style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
            <p>Welcome to Antony CJ's portfolio website. By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations.</p>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Intellectual Property</h3>
            <p>All photographs, text, graphics, and other materials on this website are the intellectual property of Antony CJ. You may not distribute, modify, transmit, or use the contents of this site for public or commercial purposes without written permission.</p>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Disclaimer</h3>
            <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
