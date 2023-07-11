import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import config from "../config";
import sidebar from "./components/sidebar";
import navbar from "./components/navbar";

export default defineUserConfig({
  lang: "en-US",
  title: "OFFlimits docs",
  description: "MultiFunction bot for scrims and tournaments",
  head: [
    ["link", { rel: "icon", href: `../images/OFFlimits.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `../images/OFFlimits.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "../images/OFFlimits.png",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "../images/OFFlimits.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
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
      nprogressPlugin(),
    ],
  }),
});
