/// <reference types="histoire" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    vue(),
    dts(),
    Icons({
      compiler: 'vue3',
      customCollections: {
        tune: FileSystemIconLoader('./src/assets/icons', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    })
  ],
  build: {
    lib: {
      name: 'tune',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: format => `tune.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
