import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // Bind mounts on Windows/macOS do not deliver inotify events reliably.
    watch: { usePolling: true },
    proxy: {
      '/api': { target: 'http://backend:8000', changeOrigin: true },
    },
  },
});
