import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Supports weights 100-900
import '@fontsource-variable/onest';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/ai-album': {
      to: 'http://www.ai-album.art',
    },
  },
});