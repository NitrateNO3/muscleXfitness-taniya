import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Multi-page build: each entry becomes a real static .html file, so /classes/ and
// /gallery/ are crawlable pages with their own <title> and meta — not client-side routes.
// Photos live in public/ and are referenced by path; 56 files is more than the bundler
// needs to fingerprint, and the gallery builds its URLs from data.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        classes: resolve(__dirname, 'classes/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        reviews: resolve(__dirname, 'reviews/index.html'),
        visit: resolve(__dirname, 'visit/index.html'),
      },
    },
  },
})
