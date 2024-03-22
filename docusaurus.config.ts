import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Electron Forge",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  url: "https://electronforge.io/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Electron Forge",
      logo: {
        alt: "Logo",
        src: "img/favicon.webp",
      },
      items: [
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
          className: "navItem",
        },
        {
          href: "https://discord.com/invite/APGC3k5yaH",
          label: "Discord",
          position: "right",
          className: "navItem",
        },
        {
          href: "https://js.electronforge.io/",
          label: "API",
          position: "right",
          className: "navItem",
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
