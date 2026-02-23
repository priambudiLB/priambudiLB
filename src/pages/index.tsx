import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Personal Website of Priambudi Lintang Bagaskara"
      description="Priambudi Lintang Bagaskara (Bagas) is a Software Engineer currently based in Singapore, having experience in Fullstack web development, DevOps, and Mobile Development."
    >
      <main className={styles.main}>
        <section className={clsx('container', styles.hero)}>
          <p className={styles.kicker}>Hi, I am Bagas.</p>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.lead}>Frontend enthusiast. I love to learn, share, and create.</p>
          <div className={styles.actions}>
            <Link className={clsx('button button--primary', styles.actionButton)} to="/read">
              Read
            </Link>
            <Link className={clsx('button button--secondary', styles.actionButton)} to="/showcase">
              Showcase
            </Link>
            <Link className={clsx('button button--outline button--primary', styles.actionButton)} to="/docs/intro">
              Docs
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
