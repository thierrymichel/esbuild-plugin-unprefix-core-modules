# esbuild-plugin-unprefix-core-modules

> An [esbuild](https://esbuild.github.io/) plugin to remove 'node:\*' prefix for older Node.js versions.

[![npm version](https://img.shields.io/npm/v/esbuild-plugin-unprefix-core-modules.svg?style=flat-square)](https://www.npmjs.org/package/esbuild-plugin-unprefix-core-modules)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![License](https://img.shields.io/badge/license-UNLICENSE-green.svg?style=flat-square)](https://github.com/thierrymichel/esbuild-plugin-unprefix-core-modules/blob/main/UNLICENSE)

## Install

```sh
yarn add -D esbuild-plugin-unprefix-core-modules
```

or

```sh
npm i -D esbuild-plugin-unprefix-core-modules
```

## Usage

```js
const esbuild = require('esbuild')
const unprefixNodeCoreModules = require('esbuild-plugin-unprefix-core-modules')

esbuild.build({
  plugins: [unprefixNodeCoreModules],
})
```
