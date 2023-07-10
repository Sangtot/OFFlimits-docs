import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import config from "../config";
import sidebar from "./components/sidebar";
import navbar from "./components/navbar";

export default defineUserConfig({
  lang: "en-US",
  title: "OFFlimits docs",
  description: "OFFicial OFFlimits bot documentation",
  theme: defaultTheme({
    logo: config.OFFlimits_logo,
    contributors: true,
    editLink: true,
    repoLabel: "OFFlimits-docs",
    docsDir: "docs",
    repo: "offchase/OFFlimits-docs",
    editLinkText: "Edit this page on GitHub",
    navbar: navbar,
    sidebarDepth: 1,
    sidebar: sidebar,
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
