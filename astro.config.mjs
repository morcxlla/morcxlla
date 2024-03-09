import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Supports weights 100-900
import '@fontsource-variable/onest';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/ai-album': 'https://www.ai-album.art',
    '/blacklist': 'https://blacklist.morcxlla.xyz',
    '/foe': 'https://discord.gg/grZbJUsF3K',
  },
});