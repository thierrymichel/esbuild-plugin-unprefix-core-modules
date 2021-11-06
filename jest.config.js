const config = {
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testRegex: '(/__tests__/.*\\.(test|spec))\\.[jt]sx?$',
}

module.exports = config
