module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'jest',
  ],
  rules: {
    'camelcase': "off",
    'max-len': "off",
    'quote-props': "off",
  },
};
