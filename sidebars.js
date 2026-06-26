module.exports = {
  tutorialSidebar: {
    "Introduction": ["intro", "tech-stack-overview", "architecture-overview"],
    "Getting Started": ["prerequisites", "run-locally"],
    "Development Guidelines": ["development-guide","project"],
    "Service Setup": ["contract", "subgraph", "giga-id"],
    "Deployment": ["deployment"],
    "Trouble Shooting": ["trouble-shooting"],
    "Community": ["contribution-guidelines", "code-of-conduct"],
  },
  apiSidebar: [],
  openApiSidebar: [
    {
      type: "category",
      label: "Giga",
      link: {
        type: "generated-index",
        title: "Giga API",
        description:
          "Giga API documentation for all available endpoints and operations.",
        slug: "/category/giga"
      },
      items: require("./docs/giga-api/sidebar.ts").default
    }
  ]
};
