// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const ArchivedVersions = require("./archivedVersions.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  title: "Giga NFT-2.0",
  tagline: " Decentralized School Database",
  url: "https://docs.giga.rumsan.net",
  baseUrl: "/",
  projectName: "giga-documentation", // Usually your repo name.
  organizationName: "Giga", // Usually your GitHub org/user name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  plugins: [
    [
      "docusaurus-plugin-openapi",
      {
        openapiPath: require.resolve("./openApi/swagger.json"),
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/esatya?tab=repositories",
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
          src: "https://giga.global/nft-2-0-the-worlds-largest-decentralized-school-database/",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          {
            to: "api/",
            activeBasePath: "api",
            label: "API",
            position: "right",
          },
          { to: "blog", label: "Releases", position: "right" },
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
            href: "https://github.com/giga-nft2-0",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/Gigaglobal",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/giga-nft2-0",
              },
              {
                label: "Website",
                href: "https://giga.global/",
              },
            ],
          },
        ],
        copyright: `| <a href="/privacy-policy">Privacy Policy</a> | <br/> © ${new Date().getFullYear()} Giga. All rights reserved. Developed by Rumsan.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   indexName: "jest-v2",
      //   apiKey: "833906d7486e4059359fa58823c4ef56",
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
