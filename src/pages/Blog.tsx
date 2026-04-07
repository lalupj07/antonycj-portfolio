import PageTransition from '../components/PageTransition';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedImage from '../components/AnimatedImage';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      titleKey: 'blog.pub1_title',
      descKey: 'blog.pub1_desc',
      publisher: 'Financial Express',
      date: 'Sep 13, 2022',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
      link: 'https://www.financialexpress.com/jobs-career/education-back-to-school-programme-launched-to-support-re-enrolment-of-school-students-in-telangana-2664078/',
    },
    {
      id: 2,
      titleKey: 'blog.pub2_title',
      descKey: 'blog.pub2_desc',
      publisher: 'Millennium Post',
      date: 'Apr 14, 2021',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      link: 'https://www.millenniumpost.in/opinion/transform-schools-437162',
    },
    {
      id: 3,
      titleKey: 'blog.pub3_title',
      descKey: 'blog.pub3_desc',
      publisher: 'Times of India',
      date: 'Nov 01, 2017',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800',
      link: 'https://timesofindia.indiatimes.com/sports/more-sports/others/rafael-nadal-continues-to-support-rural-india-through-nets/articleshow/61399327.cms',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Featured In | Stories by Antony CJ</title>
        <meta name="description" content="Media features and published articles by Antony CJ." />
      </Helmet>

      <div className="container section">
        <div style={{ maxWidth: '600px', marginBottom: '5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem' }}>{t('blog.label')}</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, margin: '0 0 1.5rem' }}>
            {t('blog.title')} <strong style={{ fontWeight: 700 }}>{t('blog.bold')}</strong>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>{t('blog.subtitle')}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {articles.map((article, i) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
                gap: '2.5rem',
                padding: '2.5rem 0',
                borderTop: '1px solid var(--border-color)',
                textDecoration: 'none',
                color: 'inherit',
                alignItems: 'center',
              }}
              whileHover={{ x: 6 }}
            >
              <div style={{ height: '190px', overflow: 'hidden', flexShrink: 0 }}>
                <AnimatedImage src={article.image} alt={t(article.titleKey)} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', padding: '0.2rem 0.7rem' }}>
                    {article.publisher}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{article.date}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.7rem)', fontWeight: 500, lineHeight: 1.3, marginBottom: '1rem' }}>
                  {t(article.titleKey)}
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.5rem' }}>
                  {t(article.descKey)}
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-primary)', borderBottom: '1px solid var(--text-primary)', paddingBottom: '0.2rem' }}>
                  {t('blog.read')} <ExternalLink size={13} />
                </span>
              </div>
            </motion.a>
          ))}
          <div style={{ borderTop: '1px solid var(--border-color)' }} />
        </div>
      </div>
    </PageTransition>
  );
}
