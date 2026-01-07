# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.5...@thoughtindustries/content@2.0.0-beta.2) (2025-12-05)

### Bug Fixes

- resolve Vike SSR issues and address code review feedback ([f9d9434](https://github.com/thoughtindustries/helium/commit/f9d94340bfa6427116c1c9d10e3ce6ac20de93b8))

# [2.0.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.5...@thoughtindustries/content@2.0.0-beta.1) (2025-10-15)

**Note:** Version bump only for package @thoughtindustries/content

# [2.0.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.5...@thoughtindustries/content@2.0.0-beta.0) (2025-09-24)

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

## [1.2.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.4...@thoughtindustries/content@1.2.5) (2023-11-01)

**Note:** Version bump only for package @thoughtindustries/content

## [1.2.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.3...@thoughtindustries/content@1.2.4) (2023-08-28)

**Note:** Version bump only for package @thoughtindustries/content

## [1.2.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.2...@thoughtindustries/content@1.2.3) (2023-07-19)

**Note:** Version bump only for package @thoughtindustries/content

## [1.2.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.1...@thoughtindustries/content@1.2.2) (2023-07-10)

**Note:** Version bump only for package @thoughtindustries/content

## [1.2.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.0...@thoughtindustries/content@1.2.1) (2023-07-05)

**Note:** Version bump only for package @thoughtindustries/content

# [1.2.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.0-beta.3...@thoughtindustries/content@1.2.0) (2023-06-28)

### Features

- remove dist tags ([#215](https://github.com/thoughtindustries/helium/issues/215)) ([7ec2bca](https://github.com/thoughtindustries/helium/commit/7ec2bca0750325fe2d6c2528973846d86c082844))

# [1.2.0-beta.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.0-beta.1...@thoughtindustries/content@1.2.0-beta.3) (2023-02-16)

### Bug Fixes

- CLM-7401 Update Package Generated Queries ([#185](https://github.com/thoughtindustries/helium/issues/185)) ([19caf8c](https://github.com/thoughtindustries/helium/commit/19caf8c5c07cd63908b69ad4c2c1b2144bd08b28))

# [1.2.0-beta.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.0-beta.1...@thoughtindustries/content@1.2.0-beta.2) (2023-02-16)

### Bug Fixes

- CLM-7401 Update Package Generated Queries ([#185](https://github.com/thoughtindustries/helium/issues/185)) ([19caf8c](https://github.com/thoughtindustries/helium/commit/19caf8c5c07cd63908b69ad4c2c1b2144bd08b28))

# [1.2.0-beta.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.2.0-beta.0...@thoughtindustries/content@1.2.0-beta.1) (2023-01-25)

### Features

- add dist tag ([#178](https://github.com/thoughtindustries/helium/issues/178)) ([402c673](https://github.com/thoughtindustries/helium/commit/402c67371b68a72d488c977701551b8a91ef5959))

# [1.2.0-beta.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.1.0-alpha.5...@thoughtindustries/content@1.2.0-beta.0) (2023-01-06)

### Features

- upgrade deps ([#169](https://github.com/thoughtindustries/helium/issues/169)) ([4442f35](https://github.com/thoughtindustries/helium/commit/4442f35f6013119bb5e9baf154bdab9a3583b543))

# [1.1.0-alpha.5](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.1.0-alpha.4...@thoughtindustries/content@1.1.0-alpha.5) (2022-10-14)

**Note:** Version bump only for package @thoughtindustries/content

# [1.1.0-alpha.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.1.0-alpha.3...@thoughtindustries/content@1.1.0-alpha.4) (2022-09-22)

### Bug Fixes

- merge packages/content ([6c8be18](https://github.com/thoughtindustries/helium/commit/6c8be1817b7c9580fd53d0ccc2d83b5949c551dc))
- remove merge packages/learner-access ([df7527d](https://github.com/thoughtindustries/helium/commit/df7527dfd310f3bc223ebe9edfec89bd5d9432f4))

### Features

- merge packages/content/src/graphql/queries/ from learner-access branch ([e5c9897](https://github.com/thoughtindustries/helium/commit/e5c98976260dad60354e2fe5592c1104582f2ee4))

# [1.1.0-alpha.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.1.0-alpha.2...@thoughtindustries/content@1.1.0-alpha.3) (2022-08-10)

**Note:** Version bump only for package @thoughtindustries/content

# [1.1.0-alpha.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.1.0-alpha.1...@thoughtindustries/content@1.1.0-alpha.2) (2022-05-04)

### Features

- update content docs ([#120](https://github.com/thoughtindustries/helium/issues/120)) ([034c638](https://github.com/thoughtindustries/helium/commit/034c63874238878a2b68c8b3e006d34727cfa6c5))

# [1.1.0-alpha.1](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.1.0-alpha.0...@thoughtindustries/content@1.1.0-alpha.1) (2022-04-01)

### Bug Fixes

- add node types to template-base devDependencies ([#101](https://github.com/thoughtindustries/helium/issues/101)) ([ca45fe1](https://github.com/thoughtindustries/helium/commit/ca45fe17bed74c2f3cab2b1d11e728b7c1ece833))

# [1.1.0-alpha.0](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.0.1-alpha.4...@thoughtindustries/content@1.1.0-alpha.0) (2022-04-01)

### Bug Fixes

- add missing content fragment fields for content hydration ([ce9dd3a](https://github.com/thoughtindustries/helium/commit/ce9dd3a9c1773976791c9b18daca1cab4ad15258))

### Features

- add catalog content query ([9daa71e](https://github.com/thoughtindustries/helium/commit/9daa71e1c2762a70a6b05da0c7b7f464e6b1af9e))
- add languages query and typings ([ec326ad](https://github.com/thoughtindustries/helium/commit/ec326ad0648cd77a0279baccaa606cd10a469082))
- add loading dots to content ([3701f1d](https://github.com/thoughtindustries/helium/commit/3701f1d987c61c7d2004b8b49a1029d31a32db98))
- add location to catalog content query ([e8e8128](https://github.com/thoughtindustries/helium/commit/e8e81287ca879270b695dd0b17ea5a279a5c2131))
- add test and fix export ([0ad1dce](https://github.com/thoughtindustries/helium/commit/0ad1dce4c4ff0d709db238aa2b7ae752004165f8))
- update typings and schema for catalog content ([3d2d197](https://github.com/thoughtindustries/helium/commit/3d2d197892337ab5b58494edca3b22e58786b6d4))

## [1.0.1-alpha.4](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.0.1-alpha.3...@thoughtindustries/content@1.0.1-alpha.4) (2022-03-01)

### Bug Fixes

- cleanup ([f331deb](https://github.com/thoughtindustries/helium/commit/f331deb1e1b0963abd734888aa9a9086a2add468))

## [1.0.1-alpha.3](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.0.1-alpha.2...@thoughtindustries/content@1.0.1-alpha.3) (2022-02-14)

**Note:** Version bump only for package @thoughtindustries/content

## [1.0.1-alpha.2](https://github.com/thoughtindustries/helium/compare/@thoughtindustries/content@1.0.1-alpha.0...@thoughtindustries/content@1.0.1-alpha.2) (2022-02-04)

**Note:** Version bump only for package @thoughtindustries/content

## 1.0.1-alpha.1 (2022-02-04)

### Bug Fixes

- fix publishing workflow ([494eec4](https://github.com/thoughtindustries/helium/commit/494eec409faa1fed55618af1f6dd76ef6e3f9b8a))
