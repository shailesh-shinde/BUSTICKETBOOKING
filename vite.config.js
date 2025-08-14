import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/busticketbooking/' : '/',
  plugins: [react(), splitVendorChunkPlugin()],
  server:{
    port:3000,
  },
  build: {
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'icons'
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('react-router-dom')) return 'router'
            if (id.includes('/react/')) return 'react'
          }
        }
      }
    }
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  }
}))
