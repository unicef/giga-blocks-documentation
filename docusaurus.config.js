// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const ArchivedVersions = require("./archivedVersions.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  title: "Giga Blocks ",
  tagline: " Decentralized School Directory Platform",
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],
  url: "https://docs.giga.rumsan.net",
  baseUrl: "/doc",
  projectName: "giga-documentation", // Usually your repo name.
  organizationName: "Giga", // Usually your GitHub org/user name.
  onBrokenLinks: "warn", // Changed from "throw" to "warn" to help during development
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  plugins: [
      [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "default",
        config: {
          giga: {
            specPath: "openapi/giga-api.yaml",
            outputDir: "docs/giga-api",
            downloadUrl:
              "https://raw.githubusercontent.com/giga-nft2-0/Giga_Documentation/main/openapi/giga-api.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          }
        }
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          //showLastUpdateAuthor: true,
          lastVersion: '2.0',
          versions: {
            current: {
              label: '2.1 (Next)',
              path: 'next',
            }
          },
          editUrl: "https://github.com/giga-nft2-0/Giga_Documentation/edit/main/",
        },
        blog: {
          path: "blog",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Giga Logo",
          src: "img/giga-blocks.png",
        },
        items: [
          
            {
            label: "API",
            position: "right",
            to: "/category/giga",
          },

          {
            to: "/help",
            position: "right",
            label: "Help",
          },

          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              ...Object.entries(ArchivedVersions).map(
                ([versionName, versionUrl]) => ({
                  to: versionUrl,
                  label: versionName,
                })
              ),
              {
                to: "/versions",
                label: "All versions",
              },
            ],
          },
          { type: "localeDropdown", position: "right" },
          {
            href: "https://github.com/unicef/giga-blocks",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
              footer: {
          style: "dark",
          copyright: `
            <div style="text-align: center; margin-top: 2rem;">
              <div style="margin-bottom: 1rem;">
                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #fff; text-decoration: none; padding: 0.75rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); font-weight: 500; font-size: 0.9rem;">
                  <span style="font-size: 1.2rem; margin-right: 0.25rem;">©</span>
                  <span style="font-size: 1.2rem; margin-right: 0.25rem;">℗</span>
                  CC BY 4.0
                </a>
              </div>
              <div style="color: #fff; font-size: 0.9rem;">
                © ${new Date().getFullYear()} Giga. All rights reserved. 
                <br>
                Developed by <a href="https://rumsan.com" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: underline;">Rumsan</a>
              </div>
            </div>
          `,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      // algolia: {
      //   indexName: "jest-v2",
      //   apiKey: "833906d7486e4059359fa58823c4ef56",
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
