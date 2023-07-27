/// <reference types="histoire" />

import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import { defaultColors } from 'histoire';

export default defineConfig({
  plugins: [HstVue()],
  setupFile: './src/histoire-setup.ts',
  theme: {
    defaultColorScheme: 'light',
    favicon: './public/favicon.png',
    title: 'Tune UI',
    colors: {
      gray: defaultColors.neutral,
      primary: defaultColors.yellow
    }
  },
  backgroundPresets: [
    {
      label: 'Light',
      color: '#fff',
      contrastColor: '#333'
    },
    {
      label: 'Dark',
      color: '#211f24',
      contrastColor: '#fff'
    }
  ]
});
