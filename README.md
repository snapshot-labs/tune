# Tune Component Library

Tune is a Vue 3 component library and form generator.

## Previews

Histoire: https://tune-histoire.vercel.app/

## Installation & Usage

```bash
yarn add @snapshot-labs/tune
```

Import CSS
```js
// main.ts
import "@snapshot-labs/tune/dist/style.css";
```

Import components
```js
import { TuneInput } from "@snapshot-labs/tune";
```

Or use [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) for auto import and add
```js
componentName => {
  if (componentName.startsWith('Tune'))
    return { name: componentName, from: '@snapshot-labs/tune' };
  }
      
```

## Development

### Histoire Component Stories

Tune uses Histoire for developing and previewing component stories in isolation. To run Histoire for component stories, execute the following:

```bash
yarn story:dev
```

This command will start the Histoire development server, enabling you to work on your component stories in an isolated environment.
