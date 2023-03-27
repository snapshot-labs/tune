/// <reference types="histoire" />

import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [HstVue()],
  setupFile: "./src/histoire-setup.ts",
  backgroundPresets: [
    {
      label: "Light",
      color: "#fff",
      contrastColor: "#333",
    },
    {
      label: "Dark",
      color: "#211f24",
      contrastColor: "#fff",
    },
  ],
});
