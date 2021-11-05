const regex = new RegExp(/^node:/)
const unprefixNodeCoreModules = {
  name: 'esbuild-plugin-unprefix-core-modules',
  setup(build) {
    // Redirect all Node.js prefixed core modules (node:*)
    // to "legacy" path (*) and mark them as external
    build.onResolve({ filter: regex }, args => ({
      path: args.path.replace(regex, ''),
      external: true,
    }))
  },
}

module.exports = unprefixNodeCoreModules;
