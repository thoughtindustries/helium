# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.5...@thoughtindustries/video-player@2.0.0-beta.2) (2025-12-05)

### Bug Fixes

- resolve Vike SSR issues and address code review feedback ([f9d9434](https://github.com/thoughtindustries/helium/commit/f9d94340bfa6427116c1c9d10e3ce6ac20de93b8))

# [2.0.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.5...@thoughtindustries/video-player@2.0.0-beta.1) (2025-10-15)

**Note:** Version bump only for package @thoughtindustries/video-player

# [2.0.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.5...@thoughtindustries/video-player@2.0.0-beta.0) (2025-09-24)

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

## [1.1.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.4...@thoughtindustries/video-player@1.1.5) (2023-11-01)

**Note:** Version bump only for package @thoughtindustries/video-player

## [1.1.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.3...@thoughtindustries/video-player@1.1.4) (2023-08-28)

**Note:** Version bump only for package @thoughtindustries/video-player

## [1.1.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.2...@thoughtindustries/video-player@1.1.3) (2023-07-19)

**Note:** Version bump only for package @thoughtindustries/video-player

## [1.1.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.1...@thoughtindustries/video-player@1.1.2) (2023-07-10)

**Note:** Version bump only for package @thoughtindustries/video-player

## [1.1.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.0...@thoughtindustries/video-player@1.1.1) (2023-07-05)

**Note:** Version bump only for package @thoughtindustries/video-player

# [1.1.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.0-beta.6...@thoughtindustries/video-player@1.1.0) (2023-06-28)

### Features

- remove dist tags ([#215](https://github.com/thoughtindustries/helium/issues/215)) ([7ec2bca](https://github.com/thoughtindustries/helium/commit/7ec2bca0750325fe2d6c2528973846d86c082844))

# [1.1.0-beta.6](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.0-beta.4...@thoughtindustries/video-player@1.1.0-beta.6) (2023-04-12)

**Note:** Version bump only for package @thoughtindustries/video-player

# [1.1.0-beta.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.0-beta.4...@thoughtindustries/video-player@1.1.0-beta.5) (2023-04-06)

**Note:** Version bump only for package @thoughtindustries/video-player

# [1.1.0-beta.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.0-beta.3...@thoughtindustries/video-player@1.1.0-beta.4) (2023-03-27)

### Features

- video player ([6408ec2](https://github.com/thoughtindustries/helium/commit/6408ec29be15cc647d8576fb87d17208e8c8bffb))

# [1.1.0-beta.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.0-beta.1...@thoughtindustries/video-player@1.1.0-beta.3) (2023-02-16)

**Note:** Version bump only for package @thoughtindustries/video-player

# [1.1.0-beta.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.0-beta.1...@thoughtindustries/video-player@1.1.0-beta.2) (2023-02-16)

**Note:** Version bump only for package @thoughtindustries/video-player

# [1.1.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.1.0-beta.0...@thoughtindustries/video-player@1.1.0-beta.1) (2023-01-25)

### Features

- add dist tag ([#178](https://github.com/thoughtindustries/helium/issues/178)) ([402c673](https://github.com/thoughtindustries/helium/commit/402c67371b68a72d488c977701551b8a91ef5959))

# [1.1.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.0.5...@thoughtindustries/video-player@1.1.0-beta.0) (2023-01-06)

### Features

- upgrade deps ([#169](https://github.com/thoughtindustries/helium/issues/169)) ([4442f35](https://github.com/thoughtindustries/helium/commit/4442f35f6013119bb5e9baf154bdab9a3583b543))

## [1.0.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.0.4...@thoughtindustries/video-player@1.0.5) (2022-10-14)

**Note:** Version bump only for package @thoughtindustries/video-player

## [1.0.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.0.3...@thoughtindustries/video-player@1.0.4) (2022-09-22)

**Note:** Version bump only for package @thoughtindustries/video-player

## [1.0.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.0.2...@thoughtindustries/video-player@1.0.3) (2022-08-10)

**Note:** Version bump only for package @thoughtindustries/video-player

## [1.0.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/video-player@1.0.1...@thoughtindustries/video-player@1.0.2) (2022-05-04)

**Note:** Version bump only for package @thoughtindustries/video-player

## 1.0.1 (2022-04-18)

**Note:** Version bump only for package @thoughtindustries/video-player
