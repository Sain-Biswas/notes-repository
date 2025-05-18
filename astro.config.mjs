// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import { createStarlightObsidianPlugin } from "starlight-obsidian";

const [webDevelopmentStarlightObsidian, webDevelopmentObsidianSidebarGroup] =
  createStarlightObsidianPlugin();
const [
  dataStructuresAndAlgorithmsStarlightObsidian,
  dataStructuresAndAlgorithmsObsidianSidebarGroup,
] = createStarlightObsidianPlugin();

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
        webDevelopmentObsidianSidebarGroup,
        dataStructuresAndAlgorithmsObsidianSidebarGroup,
      ],
      plugins: [
        webDevelopmentStarlightObsidian({
          vault: "obsidian/web-development",
          output: "obsidian-web-development",
          sidebar: { label: "Web Development", collapsedFolders: true },
        }),
        dataStructuresAndAlgorithmsStarlightObsidian({
          vault: "obsidian/data-structures-and-algorithms",
          output: "obsidian-data-structures-and-algorithms",
          sidebar: {
            label: "Data Structures & Algorithms",
            collapsedFolders: true,
          },
        }),
        starlightThemeObsidian(),
      ],
    }),
  ],
});
