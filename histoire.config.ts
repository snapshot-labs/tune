/// <reference types="histoire" />

import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';

export default defineConfig({
  plugins: [HstVue()],
  setupFile: './src/histoire-setup.ts',
  theme: {
    defaultColorScheme: 'light',
    favicon: './public/favicon.png',
    title: 'Tune UI',
    colors: {
      gray: {
        50: '#FBFBFB',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#EDEDED',
        500: '#29282E',
        600: '#EDEDED',
        700: '#111111',
        750: '#29282E',
        800: '#29282E',
        850: '#29282E',
        900: '#29282E',
        950: '#29282E'
      },
      primary: {
        50: '#f3b04e',
        100: '#f3b04e',
        200: '#EDEDED',
        300: '#f3b04e',
        400: '#f3b04e',
        500: '#f3b04e',
        600: '#f3b04e',
        700: '#f3b04e',
        800: '#f3b04e',
        900: '#29282E'
      }
    }
  },
  backgroundPresets: []
});
