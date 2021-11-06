/* eslint-disable id-length, quote-props */

module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/'],
  extends: ['eslint:recommended'],
  plugins: ['prettier', 'jest'],
  rules: {
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'array-bracket-spacing': 2,
    'arrow-body-style': 2,
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'block-scoped-var': 2,
    'block-spacing': 2,
    'brace-style': 2,
    camelcase: [
      2,
      {
        properties: 'always',
      },
    ],
    'capitalized-comments': [
      'warn',
      'always',
      {
        ignorePattern: 'console|webpack|prettier',
        ignoreConsecutiveComments: true,
      },
    ],
    'class-methods-use-this': 2,
    'comma-dangle': [0, 'always-multiline'],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'consistent-return': 2,
    'consistent-this': 2,
    curly: 2,
    'default-case': 2,
    'dot-location': [1, 'property'],
    'dot-notation': 2,
    'eol-last': 2,
    eqeqeq: 2,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'func-call-spacing': 2,
    'func-name-matching': 2,
    'func-names': 2,
    'global-require': 2,
    'guard-for-in': 2,
    'id-length': [
      2,
      {
        min: 1,
        max: 24,
      },
    ],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3,
        },
      },
    ],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': 2,
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
    'lines-around-directive': 2,
    'max-depth': 2,
    'max-len': [
      2,
      {
        code: 120,
      },
    ],
    'max-nested-callbacks': 2,
    'max-statements-per-line': [
      2,
      {
        max: 2,
      },
    ],
    'new-cap': 0,
    'new-parens': 2,
    'newline-before-return': 2,
    'newline-per-chained-call': 0,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-await-in-loop': 2,
    'no-caller': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-continue': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-div-regex': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-extra-parens': [
      0,
      'all',
      {
        nestedBinaryExpressions: false,
      },
    ],
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [
      0,
      {
        ignore: [0, 1],
        ignoreArrayIndexes: true,
      },
    ],
    'no-mixed-operators': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 3,
      },
    ],
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-restricted-properties': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-tabs': 2,
    'no-template-curly-in-string': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-unsafe-negation': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': 2,
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
      },
    ],
    'no-unused-vars': [
      2,
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': 2,
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'object-shorthand': 2,
    'object-property-newline': 0,
    'operator-assignment': 2,
    'operator-linebreak': 2,
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': [
      0,
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'quote-props': [2, 'consistent-as-needed'],
    quotes: [2, 'single'],
    radix: 2,
    'require-await': 2,
    'require-jsdoc': [
      2,
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    'rest-spread-spacing': 2,
    semi: [2, 'never'],
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': 2,
    strict: 2,
    'symbol-description': 2,
    'template-curly-spacing': 2,
    'valid-jsdoc': 0,
    'vars-on-top': 2,
    'wrap-iife': 2,
    'wrap-regex': 0,
    yoda: 2,
  },
}
