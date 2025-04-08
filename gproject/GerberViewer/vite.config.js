import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  output: "export", 
  
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  define: {
    'global.Uint8Array': undefined,
    'process.env': {},
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'ant-design-vue'],
          'three': ['three', 'three-spritetext'],
          'gerber': ['pcb-stackup', 'whats-that-gerber', 'gerber-to-svg']
        }
      }
    }
  },
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
  ],
});
