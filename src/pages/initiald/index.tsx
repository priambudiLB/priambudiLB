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

const TITLE = 'Initial D';
const DESCRIPTION = 'Initial D journey showcase.';

const NOTES = [
  'Collecting run summaries and vehicle setups in one place.',
  'Highlighting progression by route, weather, and transmission preference.',
  'Adding post-race notes to document what improved and what needs work.',
];

function InitialD() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className={styles.page}>
        <section className="container">
          <h1>{TITLE}</h1>
          <p className={styles.lead}>{DESCRIPTION}</p>
          <ul className={styles.list}>
            {NOTES.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <p className={styles.footer}>
            For portfolio projects, jump to <Link to="/showcase">showcase</Link>.
          </p>
        </section>
      </main>
    </Layout>
  );
}

export default InitialD;
