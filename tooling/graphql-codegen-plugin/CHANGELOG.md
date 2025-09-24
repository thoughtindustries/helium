# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/graphql-codegen-plugin@1.1.2...@thoughtindustries/graphql-codegen-plugin@2.0.0-beta.0) (2025-09-24)

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

## [1.1.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/graphql-codegen-plugin@1.1.1...@thoughtindustries/graphql-codegen-plugin@1.1.2) (2022-09-06)

### Bug Fixes

- graphql codegen plugin to include enum variables ([#156](https://github.com/thoughtindustries/helium/issues/156)) ([30c0391](https://github.com/thoughtindustries/helium/commit/30c03914349cad1c26b81013b18e05fae4b9be65))

## [1.1.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/graphql-codegen-plugin@1.1.0...@thoughtindustries/graphql-codegen-plugin@1.1.1) (2022-08-10)

**Note:** Version bump only for package @thoughtindustries/graphql-codegen-plugin

# [1.1.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/graphql-codegen-plugin@1.0.1...@thoughtindustries/graphql-codegen-plugin@1.1.0) (2022-06-27)

### Features

- publish gql plugin ([#131](https://github.com/thoughtindustries/helium/issues/131)) ([86922f6](https://github.com/thoughtindustries/helium/commit/86922f608517eeaade3379dcf461c07798df4c7e))

## 1.0.1 (2022-05-04)

**Note:** Version bump only for package @thoughtindustries/graphql-codegen-plugin
