// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
//npm install --save-dev mini-css-extract-plugin [after installing this plugin I was able to add stylesheets object]

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MappedSwap',
  tagline: 'Documentation is a powerful tool!',
  url: 'https://localhost:3000/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/MappedSwap.png',
  organizationName: 'BitusLabs', // Usually your GitHub org/user name.
  projectName: 'MappedSwap Documentation', // Usually your repo name.
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
      type: 'text/css',
    },
  ],
  
  presets: [
    [
      '@docusaurus/preset-classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/farjanaHuq/Docusauraus.git',
       
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/farjanaHuq/Docusauraus.git',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MappedSwap',
        logo: {
          alt: 'My Site Logo',
          src: 'img/MappedSwap.png',
          href: 'https://www.mappedswap.io/'
       
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/farjanaHuq/Docusauraus.git',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Community',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'MappedSwap',
                to: 'https://www.mappedswap.io/',
              },
            ],
          },
          {
            title: 'Community',
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/farjanaHuq/Docusauraus.git',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MappedSwap. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
      },
    }),  

};

module.exports = config;
