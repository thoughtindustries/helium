<p align="center">
    <a href="https://developer.thoughtindustries.com/build/developer-guide/"><img src="./.github/images/helium_logo.png" alt="Helium Logo"/></a>
</p>

[![Test Suite](https://github.com/thoughtindustries/helium/actions/workflows/jest.yml/badge.svg)](https://github.com/thoughtindustries/helium/actions/workflows/jest.yml)

[![Storybook Pages](https://github.com/thoughtindustries/helium/actions/workflows/storybook.yml/badge.svg)](https://github.com/thoughtindustries/helium/actions/workflows/storybook.yml)

📚 [Developer Guide](https://developer.thoughtindustries.com/build/developer-guide/) | 🗣 [Discord](https://discord.gg/cTJBX4muVn) | 📝 [GraphQL Docs](https://thoughtindustries.github.io/helium-graphql/) | 🎨 [Storybook Docs](https://thoughtindustries.github.io/helium/?path=/story/example-featuredcontent--tile-standard-layout)

## About

Helium is a frontend web development framework for building highly contextual, dynamic and personalized learning experiences. Helium provides you with a complete library of UI Components, Hooks, and Utilities that make building custom learning experiences fast, easy, and fun.

Helium utilizes a modern technology stack that includes React, GraphQL, and Tailwind CSS to provide an exceptional developer experience. The out-of-the-box UI components make getting started easy and with GraphQL getting to the data you need is intuitive and fast.

## Getting Started
### Requirements:
`npm` and `node` are pinned to specific versions using [Volta](https://volta.sh/), so you will want to [install it](https://docs.volta.sh/guide/getting-started) before anything else.

### Installing Locally
To install and run this Helium repo locally, run the following commands:
```bash
$ git clone https://github.com/thoughtindustries/helium
```
```bash
$ npm install
```
```bash
$ cd tooling/helium-server
```
```bash
$ npm run build
```
```bash
$ cd ../template-base
```
```bash
$ npm run authenticate
```
```bash
$ npm run dev
```


## How to deploy a Helium App
### Step 1: Create a Helium App
Run the following command in your terminal
```bash npm2yarn
 npm init helium-app@latest
 ```
This will prompt you to install the `@thoughtindustries/helium` package if you do not already have it installed on your local machine.

### Step 2: Choose a Theme
Selete a theme to get started building your Helium app.
```bash npm2yarn
$  ? Which theme would you like to use (Use arrow keys)
$  > Starter App
$    Hello World
``` 

### Step 3: Install Packages
`cd` in to the name of your Helium app and install the packages
```bash npm2yarn
npm install
``` 

### Step 4: Connect to a Learning Instance
Next, you'll connect your learning instance to your Helium app with `npm run authenticate`

```bash npm2yarn
 npm run authenticate
 ```

After you run npm run authenticate, enter the following data:
* The URL of your learning instance
* The API key (located under Settings > Security > API Key)
* A nickname for this instance (sandbox, production, test-one)
* Determine if you want to add another instance

### Step 5: Start Your Development Server
This command will start a local develelopment server.
```bash npm2yarn
npm run dev
 ```

### Step 6: Deploy Your Helium App
This command will deploy your Helium app to Cloudflare workers managed by Thought Industries. The Helium feature flag must be turned on for you to deploy succesfully.
```bash npm2yarn
npm run deploy [nickname]
```

## Helium Development
How to Manage your Helium App

### Workspaces
The Helium Monorepo makes use of npm's [workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces), so the majority of `npm` commands (such as adding or removing package dependencies) will take place in the root directory. After cloning the repository, running `npm install` will install all necessary dependencies as well as link any local dependencies.

When installing/uninstalling a dependency within a specific component, you can specify which package the dependency should be installed to by utilizing the `-w` flag during install (Note: command should be run from root directory):

```bash
$ npm install example-dependency -w ./packages/example-component
```

This is especially helpful for internal library components, as it will allow you to see changes
to linked components without needing to publish changes.

### Developing in the Component Library
When adding a new component you'll want to be sure to define a new workspace with `npm init` (Note: command should be run from root directory):

```bash
$ npm init -w ./packages/new-example-component
```

This [Header component](https://github.com/thoughtindustries/helium/tree/staging/packages/header) is a helpful reference for the basic building blocks we'll need for each component.

First is the [component itself](https://github.com/thoughtindustries/helium/blob/staging/packages/header/src/header.tsx). While written in typescript, you'll notice there are no scripts to compile these during build/release. Vite will compile these during the build process, so no need to do it ourselves at the moment. For styling, we will want to utilize Tailwind as much as possible.

When it comes to translations, we are utilizing [i18next](https://www.i18next.com/). An `i18next` instance is passed down via a Provider in the [project template](https://github.com/thoughtindustries/helium/blob/5ad37a22e7e2c9071875ee3e95acec1c42470b17/tooling/template-base/renderer/_default.page.client.jsx#L36), so the component just needs to handle calling the `translate` function as seen [here](https://github.com/thoughtindustries/helium/blob/5ad37a22e7e2c9071875ee3e95acec1c42470b17/packages/content/src/utilities/hydrate-content/hydrate-content.ts#L124). Note: any translation keys used in components should also be added to the `resources` property used in Storybook's `i18n` instance seen [here](https://github.com/thoughtindustries/helium/blob/5ad37a22e7e2c9071875ee3e95acec1c42470b17/.storybook/i18next.js#L11).

Which brings us to [Stories](https://github.com/thoughtindustries/helium/blob/staging/packages/header/stories/Header.stories.tsx)! Helpful for seeing components without needing to add/link them to an existing Helium project, Storybook can be run from the root with (Note: command should be run from root directory):

```bash
$ npm run storybook
```

Once running, the Storybook will be visible at `localhost:6006`.

Beyond local development, the Storybook is also intended as a way for external users to preview the component library. Whenever component additions/changes are merged into `main` the Storybook is re-built and published here: [https://thoughtindustries.github.io/helium](https://thoughtindustries.github.io/helium).

Finally, [tests](https://github.com/thoughtindustries/helium/blob/staging/packages/header/__tests__/header.test.tsx)! Because these tools and components are intended for external consumption, it's imperative that each is accompanied with a test suite. These are straightforward enough to set up, and simple to run with the command `jest --watch` (Note: as with `npm` workspace commands, this should be run from root as well).

Note: Both Storybook and Jest are configured to find the necessary stories/tests under `/packages/*/stories/*.stories.tsx` and `/packages/*/__tests__/*.test.tsx`, so no need to register them with either service.
