import { defineConfig } from 'vite';
import { resolve } from 'path';

// Multi-page build: home + one dedicated page per role.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        epitech: resolve(__dirname, 'epitech.html'),
        sween: resolve(__dirname, 'sween.html'),
        troa: resolve(__dirname, 'troa.html'),
      },
    },
  },
});
