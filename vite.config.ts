import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  // Dev Server
  server: {
    host: "localhost",
    port: 9206,
    hmr: {
      host: "wiki-local.triglobal.io",
      port: 443,
    }
  },

  // Plugins
  plugins: [
    vue()
  ],

  // Resolve paths and aliases
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  }
})
