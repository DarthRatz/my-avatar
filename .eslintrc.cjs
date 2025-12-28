module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue', '@typescript-eslint', 'prettier', 'eslint-comments'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'consistent-return': 'error',
    'no-implicit-coercion': 'error',
    'no-param-reassign': ['error', { props: true }],
    'vue/require-default-prop': 'error',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    // Disallow inline ESLint disables in source and tests
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-restricted-disable': [
      'error',
      'eslint-disable',
      'eslint-disable-line',
      'eslint-disable-next-line',
    ],
  },
};
