// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import { createStarlightObsidianPlugin } from "starlight-obsidian";

const [webDevelopmentStarlightObsidian, webDevelopmentObsidianSidebarGroup] =
  createStarlightObsidianPlugin();

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Notes",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Sain-Biswas",
        },
        {
          icon: "linkedin",
          label: "Linkedin",
          href: "https://linkedin.com/in/sainbiswas",
        },
        {
          icon: "seti:react",
          label: "Portfolio",
          href: "https://sainbiswas.vercel.app",
        },
      ],

      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        webDevelopmentObsidianSidebarGroup,
      ],
      plugins: [
        webDevelopmentStarlightObsidian({
          vault: "obsidian/web-development",
          output: "web-development",
          sidebar: { label: "Web Development", collapsedFolders: true },
        }),
        starlightThemeObsidian(),
      ],
    }),
  ],
});
