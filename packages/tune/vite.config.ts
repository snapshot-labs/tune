import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    dts(),
    Components({
      /* options */
    }),
  ],
  build: {
    lib: {
      name: "tune",
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format) => `tune.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
