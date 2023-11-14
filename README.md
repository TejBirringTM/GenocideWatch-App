# Genocide Watch App

## Structure

Application source code is stored in the `src` folder.

Structure of the `src` folder is inspired by [this](https://blog.webdevsimplified.com/2022-07/react-folder-structure/) guide:

* `assets` contains anything that isn't code:
  * `images`
  * `fonts`
  * `styles` (SCSS stylesheets)
  * `icons`
* `components` should be used to store components used across pages, organised into the following subfolders:
  * `ui` to store UI components like cards, modals, and buttons.
  * `form` to store components specifically used in forms such as checkboxes, inputs, date pickers, etc.
* `data` should be used to store data assets such as JSON files (store items, theme information, constants, etc.); also environment variable exporters.
* `features` should contain one folder for each feature in the application. In each folder:
  * (all folders listed here, apart from `features`, `plugins` and `state`)
* `plugins` should contain Vue plugins; Vue plugins are always applied globally.
* `layouts` should be used to store layout-based components such as sidebars, navigation bars, containers, etc.
* `libs` should contain facades for the various different libraries used in the project. Using facades means libraries don't have to be directly imported into rest of application codebase multiple times, making it easier to update/replace library or customise it for own use.
* `state` should contain global state as Pinia stores.
* `pages` should contain one folder for each page in the application. In each folder:
  * `<component-name>.vue` should be the Vue component that represents the page.
  * other files (such as components, slices, and hooks) only ever used in the page should be placed here.
* `services` contains code used to interface with external APIs (instead of litering rest of application codebase with API interaction code).
* `utils` should contain files that export simple [pure functions](https://blog.webdevsimplified.com/2020-09/pure-functions) such as formatters that do not cause side effects.

## Things To Do

* [ ] Fix GitHub Actions for automagic frontend deployment.

## Framework

The app uses [Vue 3](https://vuejs.org/) with [TypeScript](https://www.typescriptlang.org/), with the [Vite](https://vitejs.dev/) development server and tooling.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize Configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
