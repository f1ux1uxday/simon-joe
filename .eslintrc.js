module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': [
      1,
      2,
    ],
    'linebreak-style': [
      2,
      'unix',
    ],
    'quotes': [
      2,
      'single',
    ],
    'semi': [
      1,
      'never',
    ],
    'no-console':
      0,
    'no-unused-vars':
      1,
    'max-len':
      1,
    },
};
