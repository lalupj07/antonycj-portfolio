import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <Helmet>
        <title>Privacy Policy | Antony CJ</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container section" style={{ maxWidth: '800px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
          <div style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>
            <p>Welcome to the Privacy Policy for Antony CJ. Your privacy is important.</p>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Information We Collect</h3>
            <p>If you use the contact form, we collect your name, email address, and message. This data is used solely to respond to your inquiry.</p>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Analytics Tools</h3>
            <p>We use Google Analytics and Microsoft Clarity to understand user behavior and optimize performance to provide a better user experience. These tools may use cookies.</p>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Data Security</h3>
            <p>All data submitted through our forms is secured using HTTPS and processed via a secure third-party provider (Formspree).</p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
