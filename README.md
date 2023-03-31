# Tune Component Library

Tune is a Vue 3 component library and form generator.

## Previews

Histoire: https://tune-kohl.vercel.app/

Demo app: https://tune-demo.vercel.app/

## Installation & Usage

```bash
yarn add @snapshot-labs/tune
```

```js
// Add css file to main.js
import "@snapshot-labs/tune/dist/style.css";
```

```js
// Use component in your project
import { TuneInput } from "@snapshot-labs/tune";
```

## Development

### Histoire Component Stories

Tune uses Histoire for developing and previewing component stories in isolation. To run Histoire for component stories, execute the following:

```bash
yarn story:dev
```

This command will start the Histoire development server, enabling you to work on your component stories in an isolated environment.
