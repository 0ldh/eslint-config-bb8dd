# eslint-config-bb8dd

## env

React + Typescript

## Usage
```
yarn add eslint-config-bb8dd
```
```
npm install eslint-config-bb8dd
```
```js
// eslintrc.js
// ...
  parser: '@typescript-eslint/parser',
  extends: [
    'bb8dd'
  ],
// ...
```
```js
// tsconfig.json
// ...
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
// ...
```

## code
```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'linebreak-style': 0,
    'jsx-a11y/label-has-associated-control': 0,
    '@typescript-eslint/member-delimiter-style': 'error', 
    '@typescript-eslint/semi': 'error'
    '@typescript-eslint/no-unused-vars': 1,
    'no-unused-vars': 1,
    '@typescript-eslint/max-len': 0,
    'max-len': 0,
    'react/require-default-props': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['.eslintrc.js']
}
```
