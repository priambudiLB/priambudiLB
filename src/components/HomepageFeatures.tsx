import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
  link: string;
  action: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Practical Docs',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Curated notes and references from daily engineering work, organized by
        topic so they stay easy to revisit.
      </>
    ),
    link: '/docs/intro',
    action: 'Open docs',
  },
  {
    title: 'Project Showcase',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A portfolio of apps and tools, filterable by tech stack to quickly
        inspect implementation choices.
      </>
    ),
    link: '/showcase',
    action: 'Browse projects',
  },
  {
    title: 'Learning Journal',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Short write-ups on experiments, lessons learned, and things worth
        sharing with other developers.
      </>
    ),
    link: '/read',
    action: 'Read posts',
  },
];

function Feature({Svg, title, description, link, action}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          className={clsx('button button--outline button--primary', styles.featureAction)}
          to={link}>
          {action}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
