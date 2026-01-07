# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.5...@thoughtindustries/cart@2.0.0-beta.2) (2025-12-05)

### Bug Fixes

- resolve Vike SSR issues and address code review feedback ([f9d9434](https://github.com/thoughtindustries/helium/commit/f9d94340bfa6427116c1c9d10e3ce6ac20de93b8))

# [2.0.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.5...@thoughtindustries/cart@2.0.0-beta.1) (2025-10-15)

**Note:** Version bump only for package @thoughtindustries/cart

# [2.0.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.5...@thoughtindustries/cart@2.0.0-beta.0) (2025-09-24)

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

## [1.2.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.4...@thoughtindustries/cart@1.2.5) (2023-11-01)

**Note:** Version bump only for package @thoughtindustries/cart

## [1.2.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.3...@thoughtindustries/cart@1.2.4) (2023-08-28)

**Note:** Version bump only for package @thoughtindustries/cart

## [1.2.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.2...@thoughtindustries/cart@1.2.3) (2023-07-19)

**Note:** Version bump only for package @thoughtindustries/cart

## [1.2.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.1...@thoughtindustries/cart@1.2.2) (2023-07-10)

**Note:** Version bump only for package @thoughtindustries/cart

## [1.2.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.0...@thoughtindustries/cart@1.2.1) (2023-07-05)

### Bug Fixes

- hydration error ([#217](https://github.com/thoughtindustries/helium/issues/217)) ([6d27048](https://github.com/thoughtindustries/helium/commit/6d27048385eca0c6932f3d6c270ac9d9b522a8d1))

# [1.2.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.0-beta.6...@thoughtindustries/cart@1.2.0) (2023-06-28)

### Bug Fixes

- cart issues ([#213](https://github.com/thoughtindustries/helium/issues/213)) ([de4a3cd](https://github.com/thoughtindustries/helium/commit/de4a3cd415c70fa1815ce43561918f6cc70a6f93))

### Features

- remove dist tags ([#215](https://github.com/thoughtindustries/helium/issues/215)) ([7ec2bca](https://github.com/thoughtindustries/helium/commit/7ec2bca0750325fe2d6c2528973846d86c082844))

# [1.2.0-beta.6](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.0-beta.4...@thoughtindustries/cart@1.2.0-beta.6) (2023-04-12)

**Note:** Version bump only for package @thoughtindustries/cart

# [1.2.0-beta.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.0-beta.4...@thoughtindustries/cart@1.2.0-beta.5) (2023-04-06)

**Note:** Version bump only for package @thoughtindustries/cart

# [1.2.0-beta.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.0-beta.3...@thoughtindustries/cart@1.2.0-beta.4) (2023-03-27)

### Features

- cart ([4d45777](https://github.com/thoughtindustries/helium/commit/4d457773f28d84e0e41dc84f8e34add5232b0e9b))

# [1.2.0-beta.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.0-beta.1...@thoughtindustries/cart@1.2.0-beta.3) (2023-02-16)

**Note:** Version bump only for package @thoughtindustries/cart

# [1.2.0-beta.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.0-beta.1...@thoughtindustries/cart@1.2.0-beta.2) (2023-02-16)

**Note:** Version bump only for package @thoughtindustries/cart

# [1.2.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.2.0-beta.0...@thoughtindustries/cart@1.2.0-beta.1) (2023-01-25)

### Features

- add dist tag ([#178](https://github.com/thoughtindustries/helium/issues/178)) ([402c673](https://github.com/thoughtindustries/helium/commit/402c67371b68a72d488c977701551b8a91ef5959))

# [1.2.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.1.3...@thoughtindustries/cart@1.2.0-beta.0) (2023-01-06)

### Features

- upgrade deps ([#169](https://github.com/thoughtindustries/helium/issues/169)) ([4442f35](https://github.com/thoughtindustries/helium/commit/4442f35f6013119bb5e9baf154bdab9a3583b543))

## [1.1.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.1.2...@thoughtindustries/cart@1.1.3) (2022-10-14)

**Note:** Version bump only for package @thoughtindustries/cart

## [1.1.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.1.1...@thoughtindustries/cart@1.1.2) (2022-09-22)

**Note:** Version bump only for package @thoughtindustries/cart

## [1.1.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/cart@1.1.0...@thoughtindustries/cart@1.1.1) (2022-08-10)

**Note:** Version bump only for package @thoughtindustries/cart

# 1.1.0 (2022-06-23)

### Features

- port over shopping cart ([#124](https://github.com/thoughtindustries/helium/issues/124)) ([a2b1b9a](https://github.com/thoughtindustries/helium/commit/a2b1b9aecde97c34139ff1fe6821f49d8da35db9)), closes [#129](https://github.com/thoughtindustries/helium/issues/129)
