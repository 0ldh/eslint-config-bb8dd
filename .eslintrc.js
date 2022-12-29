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
    project: ['./**/tsconfig.json', './tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
    'linebreak-style': 0, // Expected linebreaks to be 'LF' but found 'CRLF'
    'jsx-a11y/label-has-associated-control': 0, // label has associated control off
    '@typescript-eslint/member-delimiter-style': 'error', // interface, type need semi
    '@typescript-eslint/semi': 'error' // ts type에서 중괄호 끝 세미콜론 추가
  },
  ignorePatterns: ['.eslintrc.js']
}
