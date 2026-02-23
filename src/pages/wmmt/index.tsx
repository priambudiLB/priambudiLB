/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const TITLE = 'WMMT';
const DESCRIPTION = 'Wangan Midnight Maximum Tune (WMMT) journey showcase.';

const MILESTONES = [
  {
    title: 'Status',
    content: 'Active. This section is being refreshed with cleaner snapshots and logs.',
  },
  {
    title: 'Focus',
    content: 'Track records, car tuning notes, and milestone moments from each version.',
  },
  {
    title: 'Next',
    content: 'Add replay highlights and connect each run to short technical write-ups.',
  },
];

function WMMT() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className={styles.page}>
        <section className="container">
          <h1>{TITLE}</h1>
          <p className={styles.lead}>{DESCRIPTION}</p>
          <div className={styles.grid}>
            {MILESTONES.map((item) => (
              <article key={item.title} className={styles.card}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </article>
            ))}
          </div>
          <p className={styles.footer}>
            Looking for dev content instead? Visit the{' '}
            <Link to="/read">writing section</Link>.
          </p>
        </section>
      </main>
    </Layout>
  );
}

export default WMMT;
