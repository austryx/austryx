import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://austryx.dev', // Replace with your final domain
  integrations: [
    tailwind(), 
    // mdx() and sitemap() removed
  ],
  // markdown: {} config block removed
});