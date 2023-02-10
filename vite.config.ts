import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  // Dev Server
  server: {
    host: "0.0.0.0",
    port: 7006,
    hmr: {
      host: "local.vue.wiki.mreschke.com",
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
      '@': path.resolve(__dirname, './src'),
      //'@uvicore': path.resolve(__dirname, './node_modules/@uvicore/vue3'),
    },
  },

  optimizeDeps: {
    exclude: [
      '@uvicore/vue3',
    ],
  },

})
