import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Split vendor libs (react, react-dom, router) into their own chunk
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Increase chunk size warning limit (vendor chunk is expected to be large)
    chunkSizeWarningLimit: 600,
    // Target modern browsers for smaller output
    target: 'es2020',
    // Enable CSS code-splitting
    cssCodeSplit: true,
  },
})
