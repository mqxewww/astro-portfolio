import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mqxewww.dev",
  integrations: [
    tailwind(),
    sitemap({ filter: (page) => !page.startsWith("https://mqxewww.dev/static") })
  ],
  experimental: {
    svg: true
  }
});
