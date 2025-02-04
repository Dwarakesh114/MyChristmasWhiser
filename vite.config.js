import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'date-fns']
  }
});
