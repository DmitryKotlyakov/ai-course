import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const lessonRoutes = {
  '/lesson-1': '/lessons/lesson-01.html',
  '/lesson-2': '/lessons/lesson-02.html',
  '/lesson-3': '/lessons/lesson-03.html',
};

export default defineConfig({
  plugins: [
    {
      name: 'clean-lesson-routes',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const path = req.url?.split('?')[0];
          if (path && lessonRoutes[path]) req.url = lessonRoutes[path];
          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        lesson1: resolve(__dirname, 'lessons/lesson-01.html'),
        lesson2: resolve(__dirname, 'lessons/lesson-02.html'),
        lesson3: resolve(__dirname, 'lessons/lesson-03.html'),
      },
    },
  },
});
