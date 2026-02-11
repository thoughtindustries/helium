# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.1.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@2.0.0-beta.2...@thoughtindustries/dashboard-stats@2.1.0) (2026-02-06)

### Features

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

# [2.0.0-beta.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.5...@thoughtindustries/dashboard-stats@2.0.0-beta.2) (2025-12-05)

### Bug Fixes

- resolve Vike SSR issues and address code review feedback ([f9d9434](https://github.com/thoughtindustries/helium/commit/f9d94340bfa6427116c1c9d10e3ce6ac20de93b8))

# [2.0.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.5...@thoughtindustries/dashboard-stats@2.0.0-beta.1) (2025-10-15)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

# [2.0.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.5...@thoughtindustries/dashboard-stats@2.0.0-beta.0) (2025-09-24)

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

## [1.2.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.4...@thoughtindustries/dashboard-stats@1.2.5) (2023-11-01)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

## [1.2.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.3...@thoughtindustries/dashboard-stats@1.2.4) (2023-08-28)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

## [1.2.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.2...@thoughtindustries/dashboard-stats@1.2.3) (2023-07-19)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

## [1.2.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.1...@thoughtindustries/dashboard-stats@1.2.2) (2023-07-10)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

## [1.2.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0...@thoughtindustries/dashboard-stats@1.2.1) (2023-07-05)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

# [1.2.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.8...@thoughtindustries/dashboard-stats@1.2.0) (2023-06-28)

### Features

- remove dist tags ([#215](https://github.com/thoughtindustries/helium/issues/215)) ([7ec2bca](https://github.com/thoughtindustries/helium/commit/7ec2bca0750325fe2d6c2528973846d86c082844))

# [1.2.0-beta.8](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.7...@thoughtindustries/dashboard-stats@1.2.0-beta.8) (2023-06-26)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

# [1.2.0-beta.7](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.6...@thoughtindustries/dashboard-stats@1.2.0-beta.7) (2023-06-21)

### Features

- add story source ([#210](https://github.com/thoughtindustries/helium/issues/210)) ([8464d76](https://github.com/thoughtindustries/helium/commit/8464d768f557e74e61bf9e1ebf43605e9bcbd6bd))

# [1.2.0-beta.6](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.4...@thoughtindustries/dashboard-stats@1.2.0-beta.6) (2023-04-12)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

# [1.2.0-beta.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.4...@thoughtindustries/dashboard-stats@1.2.0-beta.5) (2023-04-06)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

# [1.2.0-beta.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.3...@thoughtindustries/dashboard-stats@1.2.0-beta.4) (2023-03-27)

### Bug Fixes

- add meta ([9e1855a](https://github.com/thoughtindustries/helium/commit/9e1855a035237e4005cb4cfeca0a62983c7d079e))

### Features

- dashboard stats ([f54ded1](https://github.com/thoughtindustries/helium/commit/f54ded159aad712ea91ef07bbd0e2b81bf63caf8))
- init ([a9e240c](https://github.com/thoughtindustries/helium/commit/a9e240c1dd472ba2fc6b6ced72492614abcbf6c9))

# [1.2.0-beta.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.1...@thoughtindustries/dashboard-stats@1.2.0-beta.3) (2023-02-16)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

# [1.2.0-beta.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.1...@thoughtindustries/dashboard-stats@1.2.0-beta.2) (2023-02-16)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

# [1.2.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.2.0-beta.0...@thoughtindustries/dashboard-stats@1.2.0-beta.1) (2023-01-25)

### Features

- add dist tag ([#178](https://github.com/thoughtindustries/helium/issues/178)) ([402c673](https://github.com/thoughtindustries/helium/commit/402c67371b68a72d488c977701551b8a91ef5959))

# [1.2.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.1.4...@thoughtindustries/dashboard-stats@1.2.0-beta.0) (2023-01-06)

### Features

- upgrade deps ([#169](https://github.com/thoughtindustries/helium/issues/169)) ([4442f35](https://github.com/thoughtindustries/helium/commit/4442f35f6013119bb5e9baf154bdab9a3583b543))

## [1.1.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.1.3...@thoughtindustries/dashboard-stats@1.1.4) (2022-10-14)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

## [1.1.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.1.2...@thoughtindustries/dashboard-stats@1.1.3) (2022-09-22)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

## [1.1.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.1.1...@thoughtindustries/dashboard-stats@1.1.2) (2022-08-10)

**Note:** Version bump only for package @thoughtindustries/dashboard-stats

## [1.1.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/dashboard-stats@1.1.0...@thoughtindustries/dashboard-stats@1.1.1) (2022-05-04)

### Bug Fixes

- prevent render of stats without current user ([378b9b6](https://github.com/thoughtindustries/helium/commit/378b9b6cfad169aaa590ff4e5102983aed24969f))
- update generated graphql ([45b55ea](https://github.com/thoughtindustries/helium/commit/45b55ea28bceff26d66fd43740c6625aeec4cf80))

# 1.1.0 (2022-04-11)

### Bug Fixes

- load data with useUserStatsQuery ([14172a5](https://github.com/thoughtindustries/helium/commit/14172a51c8e8234c4e72d525d6a4e082d69f2ac4))
- rename to UserStats ([c11f0c0](https://github.com/thoughtindustries/helium/commit/c11f0c09739faae73cd40d0e1bf13a9510b2a351))
- translations + unnest stat func + remove hidelabels ([2eebe28](https://github.com/thoughtindustries/helium/commit/2eebe280e7f07bb05c6a35bc285ed9a7a0dfdf94))
- update package.json ([39ab749](https://github.com/thoughtindustries/helium/commit/39ab749c876925fdbe6fb19574cb1b82365be081))

### Features

- add mocks for testing ([2ed6dd6](https://github.com/thoughtindustries/helium/commit/2ed6dd654213bc7bd5b5cab5880e534312859325))
- implement loading dots ([44c6311](https://github.com/thoughtindustries/helium/commit/44c63111fb9b31d6630511eb57e3496d180b82cd))
- user stats component ([fee03ca](https://github.com/thoughtindustries/helium/commit/fee03caa27ee5cade3664caac3ebd832c8fd421d))
