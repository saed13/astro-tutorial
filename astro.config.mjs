// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dreamy-horse-b7fd19.netlify.app/",
  integrations: [preact()]
});