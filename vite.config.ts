import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.tsx'],
      refresh: true,
    }),
    react(),
  ],

  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },

  build: {
    outDir: 'public/build',
    emptyOutDir: true,
    manifest: true,
  }
});
