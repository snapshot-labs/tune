# Tune Component Library

Tune is a Vue 3 component library and form generator.

## Installation

To install the Tune component library in your project:

```bash
yarn add @snapshot-labs/tune
```

```js
// Add css file to main.js
import "@snapshot-labs/tune/dist/style.css";
```

```js
// Using component in your project
import { TuneInput } from "@snapshot-labs/tune";
```

## Development

### Build Demo App

Form generation demo: https://tune-demo-app-tisa-mpfcq4dx7-samuveth.vercel.app/

To run the demo app, execute the following:

```bash
yarn tune:build && demo-app:start
```

This command will build the Tune component library and start the demo app.

### Histoire Component Stories

Tune uses Histoire for developing and previewing component stories in isolation. To run Histoire for component stories, execute the following:

```bash
yarn story:dev
```

This command will start the Histoire development server, enabling you to work on your component stories in an isolated environment.
