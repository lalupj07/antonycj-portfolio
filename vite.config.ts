import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Strip console.* and debugger statements in production via esbuild (bundled with Vite)
  esbuild: {
    // @ts-expect-error — drop is a valid esbuild option, TS types may lag behind
    drop: ['console', 'debugger'] as unknown as [],
  },
  build: {
    minify: 'esbuild', // esbuild is bundled with Vite — no extra install needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            if (id.includes('sentry') || id.includes('react-ga4')) {
              return 'vendor-analytics';
            }
            return 'vendor-core';
          }
        }
      }
    }
  }
})

