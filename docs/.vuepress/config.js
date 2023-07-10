import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  lang: "en-US",
  title: "OFFlimits docs",
  description: "OFFicial OFFlimits bot documentation",
  theme: defaultTheme({
    logo: "https://cdn.discordapp.com/attachments/851632709527666708/868999341979869224/OFFlimits.png",
    contributors: true,
    editLink: true,
    repoLabel: "OFFlimits-docs",
    docsDir: "docs",
    repo: "offchase/OFFlimits-docs",
    editLinkText: "Edit this page on GitHub",
    navbar: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
      { text: "Api", link: "/api" },
    ],
    sidebarDepth: 1,
    sidebar: {
      "/": [
        {
          text: "Guide",
          collapsible: true,
          children: [
            "/guide/setup",
            "/guide/results",
            "/guide/board",
            "/guide/logo",
            "/guide/images",
            "/guide/points-system",
            "/guide/custom-board",
            "/guide/slots",
            "/guide/custom-slots",
            "/guide/delete-results",
          ],
        },
        {
          text: "Api",
          collapsible: true,
          children: ["/api/results", "/api/board"],
        },
      ],
    },
    themePlugins: [
      backToTopPlugin(),
      [
        "@vuepress/search",
        {
          searchMaxSuggestions: 10,
        },
      ],
      docsearchPlugin({
        // options
      }),
    ],
  }),
});
