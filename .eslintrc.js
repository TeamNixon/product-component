module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-no-bind": [0, {
      "ignoreDOMComponents":true || false,
      "ignoreRefs": true || false,
      "allowArrowFunctions": true || false,
      "allowFunctions": true || false,
      "allowBind": true || false
    }],
    "camelcase": 'off',
  },
};
