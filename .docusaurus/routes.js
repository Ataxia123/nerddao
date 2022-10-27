import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '592'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '131'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'b96'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '2fc'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '621'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'e2f'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '005'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ff4'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '68a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'e62'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '705'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'fcb'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a29'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/NERD COMMUNITIES 🧠🧠🧠🤓',
        component: ComponentCreator('/docs/NERD COMMUNITIES 🧠🧠🧠🤓', '24a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Projects/miticushqui',
        component: ComponentCreator('/docs/Projects/miticushqui', '217'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Projects/NerdCon 🧠🧠🧠🤓',
        component: ComponentCreator('/docs/Projects/NerdCon 🧠🧠🧠🤓', '5b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Projects/rubixDAO',
        component: ComponentCreator('/docs/Projects/rubixDAO', '499'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '328'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
