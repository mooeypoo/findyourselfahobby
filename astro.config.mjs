import { defineConfig } from 'astro/config';

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue()
  ],
  output: "server",
  adapter: netlify()
});