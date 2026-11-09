import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_')
  // Dev only: forward API + uploads to the PHP backend (Apache/XAMPP or `php -S`)
  const backend = env.VITE_BACKEND_ORIGIN || 'http://localhost'

  return {
  plugins: [react()],
  server: {
    proxy: {
      '/backend/api': { target: backend, changeOrigin: true },
      '/backend/uploads': { target: backend, changeOrigin: true },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react', 'react-icons'],
        },
      },
    },
  },
  }
})
