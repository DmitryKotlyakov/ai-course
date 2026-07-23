import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        lesson1: resolve(__dirname, 'lesson-1/index.html'),
        lesson2: resolve(__dirname, 'lesson-2/index.html'),
        lesson3: resolve(__dirname, 'lesson-3/index.html'),
      },
    },
  },
});
