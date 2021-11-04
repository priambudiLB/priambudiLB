/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {difference, sortBy} from '../utils/jsUtils';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiPython,
  SiDjango,
  SiGo,
  SiDocker,
  SiNodedotjs,
  SiCelery,
  SiRedis,
  SiAmazonaws,
  SiFlutter,
  SiGraphql,
  SiMaterialui,
  SiLine,
  SiPokemon,
  SiPostgresql,
  SiMysql,
  SiRollupdotjs,
  SiWebpack
} from 'react-icons/si';



/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain name (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - Use relevant tags to qualify your site (read the tag descriptions bellow)
 * - The image MUST be added to the GitHub repository, and use `require("image")`
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.js edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remains correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 *
 */

export type Tag = {
  label: string;
  description: string;
  icon: JSX.Element;
};

export type TagType =
  | 'opensource'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'svelte'
  | 'python'
  | 'django'
  | 'go'
  | 'docker'
  | 'nodejs'
  | 'celery'
  | 'redis'
  | 'amazonaws'
  | 'next'
  | 'flutter'
  | 'graphql'
  | 'materialui'
  | 'line'
  | 'pokemon'
  | 'postgresql'
  | 'mysql'
  | 'rollupjs'
  | 'webpack'
  ;

export type User = {
  title: string;
  description: string;
  preview: any;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose widely, we'll remove unappropriate tags
export const Tags: Record<TagType, Tag> = {
  // For open-source sites, a link to the source code is required
  opensource: {
    label: 'Open-Source',
    description: 'Open-Source Docusaurus sites can be useful for inspiration!',
    icon: <>👨‍💻</>,
  },
  javascript: {
    label: 'Javascript',
    description: 'Created using Javascript',
    icon: <SiJavascript />,
  },
  typescript: {
    label: 'Typescript',
    description: 'Created using Typescript',
    icon: <SiTypescript />,
  },
  react: {
    label: 'React',
    description: 'Created using React',
    icon: <SiReact />,
  },
  svelte: {
    label: 'Svelte',
    description: 'Created using Svelte',
    icon: <SiSvelte />,
  },
  python: {
    label: 'Python',
    description: 'Created using Python',
    icon: <SiPython />,
  },
  django: {
    label: 'Django',
    description: 'Created using Django',
    icon: <SiDjango />,
  },
  docker: {
    label: 'Docker',
    description: 'Created using Docker',
    icon: <SiDocker />,
  },
  nodejs: {
    label: 'Node.JS',
    description: 'Created using Node.JS',
    icon: <SiNodedotjs />,
  },
  go: {
    label: 'Go',
    description: 'Created using Go',
    icon: <SiGo />,
  },
  celery: {
    label: 'Celery',
    description: 'Created using Celery',
    icon: <SiCelery />,
  },
  redis: {
    label: 'Redis',
    description: 'Created using Redis',
    icon: <SiRedis />,
  },
  amazonaws: {
    label: 'Amazon AWS',
    description: 'Deployed using AWS',
    icon: <SiAmazonaws />,
  },
  next: {
    label: 'Next.JS',
    description: 'Created using Next.JS',
    icon: <SiNextdotjs />,
  },
  flutter: {
    label: 'Flutter',
    description: 'Created using Flutter',
    icon: <SiFlutter />,
  },
  graphql: {
    label: 'Graphql',
    description: 'Created using Graphql',
    icon: <SiGraphql />,
  },
  materialui: {
    label: 'MaterialUI',
    description: 'Created using MaterialUI',
    icon: <SiMaterialui />,
  },
  line: {
    label: 'Line',
    description: 'Deployed to Line',
    icon: <SiLine />,
  },
  pokemon: {
    label: 'Pokemon',
    description: 'Wow a Pokemon!',
    icon: <SiPokemon />,
  },
  postgresql: {
    label: 'PostgreSQL',
    description: 'Using PostgreSQL',
    icon: <SiPostgresql />,
  },
  mysql: {
    label: 'MySQL',
    description: 'Using MySQL',
    icon: <SiMysql />,
  },
  rollupjs: {
    label: 'Rollup.JS',
    description: 'Bundled with Rollup.JS',
    icon: <SiRollupdotjs />,
  },
  webpack: {
    label: 'Webpack',
    description: 'Bundled with Webpack',
    icon: <SiWebpack />,
  }
};

// Add your site to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'Arjuna',
    description: 'Math Chatbot.',
    preview: require('./showcase/arjuna.png'),
    website: 'https://timeline.line.me/user/_dVIuvfRKpnIF0fshFbeisWNMXSXo1yCFeUZWwFM',
    source: 'https://github.com/pandawa-tech/arjuna',
    tags: [
      'opensource',
      'go',
      'docker',
      'line'
    ],
  },
  {
    title: 'Bima',
    description: 'Algorithm Visualizer.',
    preview: require('./showcase/bima.png'),
    website: 'https://bima.priambudi.fyi/',
    source: 'https://github.com/pandawa-tech/bima',
    tags: [
      'opensource',
      'javascript',
      'svelte',
      'rollupjs'
    ],
  },
  {
    title: 'Pokédex',
    description: 'Pokédex and catch Pokémon!',
    preview: require('./showcase/pokedex.png'),
    website: 'https://pokedex.priambudi.fyi/',
    source: 'https://github.com/priambudiLB/pokedex',
    tags: [
      'opensource',
      'javascript',
      'react',
      'next',
      'materialui',
      'webpack',
      'pokemon'
    ],
  },
  {
    title: 'Mood Tracker',
    description: 'Mood & Activity Tracker App.',
    preview: require('./showcase/modi.png'),
    website: 'https://play.google.com/store/apps/details?id=id.ac.ui.cs.modi.ModiApp&hl=in&gl=US',
    source: null,
    tags: [
      'docker',
      'python',
      'django',
      'celery',
      'redis',
      'javascript',
      'nodejs',
      'flutter',
      'postgresql',
      'mysql'
    ],
  }

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  return result;
}

export const SortedUsers = sortUsers();

// Fail-fast on common errors
function ensureUserValid(user: User) {
  function checkFields() {
    const keys = Object.keys(user);
    const validKeys = [
      'title',
      'description',
      'preview',
      'website',
      'source',
      'tags',
    ];
    const unknownKeys = difference(keys, validKeys);
    if (unknownKeys.length > 0) {
      throw new Error(
        `Site contains unknown attribute names=[${unknownKeys.join(',')}]`,
      );
    }
  }

  function checkTitle() {
    if (!user.title) {
      throw new Error('Site title is missing');
    }
  }

  function checkDescription() {
    if (!user.description) {
      throw new Error('Site description is missing');
    }
  }

  function checkWebsite() {
    if (!user.website) {
      throw new Error('Site website is missing');
    }
    const isHttpUrl =
      user.website.startsWith('http://') || user.website.startsWith('https://');
    if (!isHttpUrl) {
      throw new Error(
        `Site website does not look like a valid url: ${user.website}`,
      );
    }
  }

  function checkPreview() {
    if (
      !user.preview ||
      (user.preview instanceof String &&
        (user.preview.startsWith('http') || user.preview.startsWith('//')))
    ) {
      throw new Error(
        `Site has bad image preview=[${user.preview}].\nThe image should be hosted on Docusaurus site, and not use remote HTTP or HTTPS URLs`,
      );
    }
  }

  function checkTags() {
    if (
      !user.tags ||
      !(user.tags instanceof Array) ||
      (user.tags as string[]).includes('')
    ) {
      throw new Error(`Bad showcase tags=[${JSON.stringify(user.tags)}]`);
    }
    const unknownTags = difference(user.tags, TagList);
    if (unknownTags.length > 0) {
      throw new Error(
        `Unknown tags=[${unknownTags.join(
          ',',
        )}\nThe available tags are ${TagList.join(',')}`,
      );
    }
  }

  function checkOpenSource() {
    if (typeof user.source === 'undefined') {
      throw new Error(
        "The source attribute is required.\nIf your Docusaurus site is not open-source, please make it explicit with 'source: null'",
      );
    } else {
      const hasOpenSourceTag = user.tags.includes('opensource');
      if (user.source === null && hasOpenSourceTag) {
        throw new Error(
          "You can't add the opensource tag to a site that does not have a link to source code.",
        );
      } else if (user.source && !hasOpenSourceTag) {
        throw new Error(
          "For open-source sites, please add the 'opensource' tag",
        );
      }
    }
  }

  try {
    checkFields();
    checkTitle();
    checkDescription();
    checkWebsite();
    checkPreview();
    checkTags();
    checkOpenSource();
  } catch (e) {
    throw new Error(
      `Showcase site with title=${user.title} contains errors:\n${e.message}`,
    );
  }
}

Users.forEach(ensureUserValid);
