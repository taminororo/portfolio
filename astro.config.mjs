import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://taminororo.net',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
