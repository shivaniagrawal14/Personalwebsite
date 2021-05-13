module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'react/jsx-one-expression-per-line': 'on', // disable if necessary
    'react/static-property-placement': 'on', // disable if necessary
    'react/jsx-props-no-spreading': 'on', // disable if necessary
    'react/require-default-props': 'off',
  },
  parser: 'babel-eslint',
};
