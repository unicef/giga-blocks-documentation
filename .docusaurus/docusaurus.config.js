export default {
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "title": "Giga NFT-2.0",
  "tagline": " Decentralized School Database",
  "url": "https://docs.giga.rumsan.net",
  "baseUrl": "/",
  "projectName": "giga-documentation",
  "organizationName": "Giga",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "plugins": [
    [
      "docusaurus-plugin-openapi",
      {
        "openapiPath": "/Users/sarveshkarki/Documents/Rumsan/Giga_Documentation/openApi/swagger.json"
      }
    ]
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/sarveshkarki/Documents/Rumsan/Giga_Documentation/sidebars.js",
          "editUrl": "https://github.com/esatya?tab=repositories"
        },
        "blog": {
          "path": "blog",
          "blogSidebarCount": "ALL"
        },
        "theme": {
          "customCss": "/Users/sarveshkarki/Documents/Rumsan/Giga_Documentation/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "Giga Logo",
        "src": "https://giga.global/nft-2-0-the-worlds-largest-decentralized-school-database/"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "right",
          "label": "Docs"
        },
        {
          "to": "api/",
          "activeBasePath": "api",
          "label": "API",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Releases",
          "position": "right"
        },
        {
          "to": "/help",
          "position": "right",
          "label": "Help"
        },
        {
          "type": "docsVersionDropdown",
          "position": "left",
          "dropdownActiveClassDisabled": true,
          "dropdownItemsAfter": [
            {
              "to": "/versions",
              "label": "All versions"
            }
          ],
          "dropdownItemsBefore": []
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "href": "https://github.com/giga-nft2-0",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "href": "https://twitter.com/Gigaglobal"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/giga-nft2-0"
            },
            {
              "label": "Website",
              "href": "https://giga.global/"
            }
          ]
        }
      ],
      "copyright": "| <a href=\"/privacy-policy\">Privacy Policy</a> | <br/> © 2023 Giga. All rights reserved. Developed by Rumsan."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};