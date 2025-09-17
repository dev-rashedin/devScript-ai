// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
     alias: {
      'lottie-web': 'lottie-web/build/player/lottie_light.js',
    },  
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          react: ['react', 'react-dom', 'react-router'],

          // Motion / animation
          motion: ['motion', 'lottie-react', 'react-fast-marquee'],

          // Markdown + syntax highlight
          markdown: [
            'react-markdown',
            'remark-gfm',
            'rehype-highlight',
            'highlight.js',
          ],

          // Icons
          icons: [ 'react-icons'],

          // Small helpers
          utils: [
            'clsx',
            'tailwind-merge',
            '@number-flow/react',
            'react-error-boundary',
          ],
        },
      },
    },
  },
});
