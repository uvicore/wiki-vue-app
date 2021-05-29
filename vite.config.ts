import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({

  // Plugins
  plugins: [
    vue()
  ],

  // Resolve paths and aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  }
})
