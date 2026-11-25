import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://imrabo.github.io",
  // GitHub Pages project sites are hosted under /<repository-name>/.
  // Vite/Astro uses this base when generating stylesheet and asset URLs.
  base: "/website/",

  integrations: [react(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
