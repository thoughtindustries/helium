# Helium Base Template Essentials (ALPHA)

## About

Helium is an initiative to open up the Thought Industries architecture, providing customers and partners with rich capabilities and technologies to more easily customize and extend the Customer Learning Cloud to meet unique business needs. Helium enables designers and developers to fully customize front-end learning experiences and content types; extend learning delivery to more devices and applications; and eventually share learning courses and applications via a Thought Industries marketplace.

## Commands

### `authenticate`

```sh
$ npm run authenticate -- [-k]
```

Authenticates a new project by validating against your Thought Industries instance and writing your `ti-config.json`. Note: re-running the command will overwrite existing data in your `ti-config.json`

#### Options

`-k`, `-insecure` (optional)

Used when the Thought Industries instance is behind an untrusted SSL certificate (e.g., local development).

### `dev`

```sh
$ npm run dev -- [i] [p] [-k]
$ npm run dev -- sandbox 3000 -k
```

Starts up the development server for your project.

#### Options

`-i`, `-instance` (optional)

Which instance from your `ti-config.json` file to be used, as noted by the instance nickname provided during initialization. If no instance is specified, the first instance in the `instances` array will be used.

`-p`, `-port` (optional)

Which port the server should listen on. Default is `3000`.

`-k`, `-insecure` (optional)

Used when the Thought Industries instance is behind an untrusted SSL certificate (e.g., local development).

### `deploy`

```sh
$ npm run deploy -- <i> [-k]
$ npm run deploy -- sandbox -k
```

Builds and deploys the project

#### Options

`-i`, `-instance` (required)

Which instance from your `ti-config.json` file to be used, as noted by the instance nickname provided during initialization. If no instance is specified, the first instance in the `instances` array will be used.

`-k`, `-insecure` (optional)

Used when the Thought Industries instance is behind an untrusted SSL certificate (e.g., local development).
