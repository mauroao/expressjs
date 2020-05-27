module.exports = {
  env: {
    commonjs: true,
    es6: true,
    es2017: true,
    node: true,
    mocha: true
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
