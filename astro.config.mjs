// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      plugins: [starlightThemeNova()],
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
      sidebar: [
        {
          label: "Web development",
          autogenerate: { directory: "web-development" },
        },
        {
          label: "Spring Boot",
          autogenerate: { directory: "spring-boot" },
        },
        {
          label: "Databases",
          autogenerate: { directory: "databases" },
        },
      ],
    }),
  ],
});
