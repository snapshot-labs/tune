import { resolve } from 'node:path'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    // Output compiled files to /dist.
    outDir: './dist',
    lib: {
      // Set the entry point (file that contains our components exported).
      entry: resolve(__dirname, 'src/index.ts'),
      // Name of the library.
      name: 'tune',
      // We are building for CJS and ESM, use a function to rename automatically files.
      fileName: (format) => `${'tune'}.${format}.js`,
    },
    rollupOptions: {
      // Vue is provided by the parent project, don't compile Vue source-code inside our library.
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },
});
