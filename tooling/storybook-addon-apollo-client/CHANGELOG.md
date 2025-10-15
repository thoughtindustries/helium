# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/storybook-addon-apollo-client@1.2.3...@thoughtindustries/storybook-addon-apollo-client@2.0.0-beta.1) (2025-10-15)

**Note:** Version bump only for package @thoughtindustries/storybook-addon-apollo-client

# [2.0.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/storybook-addon-apollo-client@1.2.3...@thoughtindustries/storybook-addon-apollo-client@2.0.0-beta.0) (2025-09-24)

### chore

- update dependencies to resolve security vulnerabilities and deprecations ([0bc37e1](https://github.com/thoughtindustries/helium/commit/0bc37e1d7306d4701716f0670974ee7fad089fa4))

### BREAKING CHANGES

- Multiple major version updates that may affect consumers:

* Migrated from vite-plugin-ssr to vike (v0.4.195)
* Updated Storybook from v7 to v8.6.14
* Updated i18next from v21 to v23.16.8
* Updated react-i18next from v11 to v13.5.0

Security fixes (8 vulnerabilities resolved - 3 low, 5 moderate):

- graphql: 16.6.0 → 16.11.0 (uncontrolled resource consumption)
- universal-cookie: ^4.0.4 → ^7.2.2 (cookie vulnerability)
- remark-mdx-frontmatter: ^2.0.3 → ^5.2.0 (prototype pollution)
- tsup: various → ^8.5.0 (esbuild vulnerability)
- Removed unused patch-package (tmp vulnerability)

Package updates across all workspaces:

- vite: ^3.2.8 → ^5.4.11
- @vitejs/plugin-react: ^2.1.0 → ^4.3.4
- lerna: ^4.0.0 → ^8.1.9
- All Storybook packages updated to v8.6.14
- Consistent i18next versions across monorepo

Implementation changes:

- Fixed CJS/ESM compatibility with dynamic Vike imports
- Added deployment manifest generation scripts
- Updated Storybook Apollo addon for v8 compatibility
- Fixed React Hooks violations in i18next decorator
- Added Vite alias for NavBar import resolution
- Updated .gitignore with build artifacts and temp files

Affected packages:

- @thoughtindustries/helium-server
- @thoughtindustries/helium-template
- @thoughtindustries/helium-template-essentials
- @thoughtindustries/storybook-addon-apollo-client
- All @thoughtindustries component packages

## [1.2.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/storybook-addon-apollo-client@1.2.2...@thoughtindustries/storybook-addon-apollo-client@1.2.3) (2023-07-10)

**Note:** Version bump only for package @thoughtindustries/storybook-addon-apollo-client

## [1.2.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/storybook-addon-apollo-client@1.2.1...@thoughtindustries/storybook-addon-apollo-client@1.2.2) (2023-07-05)

**Note:** Version bump only for package @thoughtindustries/storybook-addon-apollo-client

## [1.2.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/storybook-addon-apollo-client@1.2.0...@thoughtindustries/storybook-addon-apollo-client@1.2.1) (2023-06-26)

**Note:** Version bump only for package @thoughtindustries/storybook-addon-apollo-client

# [1.2.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/storybook-addon-apollo-client@1.1.2...@thoughtindustries/storybook-addon-apollo-client@1.2.0) (2023-06-21)

### Features

- add story source ([#210](https://github.com/thoughtindustries/helium/issues/210)) ([8464d76](https://github.com/thoughtindustries/helium/commit/8464d768f557e74e61bf9e1ebf43605e9bcbd6bd))

## [1.1.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/storybook-addon-apollo-client@1.1.0...@thoughtindustries/storybook-addon-apollo-client@1.1.2) (2023-04-12)

**Note:** Version bump only for package @thoughtindustries/storybook-addon-apollo-client

## [1.1.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/storybook-addon-apollo-client@1.1.0...@thoughtindustries/storybook-addon-apollo-client@1.1.1) (2023-04-06)

**Note:** Version bump only for package @thoughtindustries/storybook-addon-apollo-client

# 1.1.0 (2023-03-27)

### Features

- port over storybook addon apollo client ([#194](https://github.com/thoughtindustries/helium/issues/194)) ([7845b55](https://github.com/thoughtindustries/helium/commit/7845b55144e452b8baab4e9bdae9510ebfb91819))
