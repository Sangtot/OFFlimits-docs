import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "OFFlimits docs",
  description: "Official OFFlimits bot documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
      { text: "Api", link: "/api" },
    ],

    sidebar: [
      {
        text: "Guide",
        collapsed: true,
        items: [
          { text: "results", link: "/guide/results" },
          { text: "board", link: "/guide/board" },
          { text: "points system", link: "/guide/points-system" },
          { text: "custom board", link: "/guide/custom-board" },
        ],
      },
      {
        text: "Api",
        collapsed: true,
        items: [
          { text: "Results Api", link: "/api/results" },
          { text: "Board Api", link: "/api/board" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
