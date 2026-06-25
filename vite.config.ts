import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import sri from 'vite-plugin-sri';

// GitHub Pages serves project sites at https://<user>.github.io/<repo>/
// We allow overriding the base path via VITE_BASE_PATH env var so the same
// config works in dev (`/`) and on GitHub Pages (`/<repo>/`).
const BASE = process.env.VITE_BASE_PATH || '/';

export default defineConfig(() => {
  return {
    base: BASE,
    plugins: [
      react(),
      tailwindcss(),
      sri({
        algorithms: ['sha384'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      // Ensure deterministic, cache-friendly asset file names
      assetsDir: 'assets',
      // Slightly larger chunk size warning threshold — our app is small
      chunkSizeWarningLimit: 1200,
    },
  };
});
