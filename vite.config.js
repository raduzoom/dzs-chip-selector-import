import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        demo: 'demo-webcomponent.html'
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
}) 