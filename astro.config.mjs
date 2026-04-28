import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.taminororo.net',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
