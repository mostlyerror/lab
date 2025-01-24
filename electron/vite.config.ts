import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tell vite we want to serve the files from the root, which is relative, not
  // absolute '/'
  base: "./",
  build: {
    outDir: 'dist-react',
  },
  server: {
    port: 5123,
    strictPort: true
  }
})
