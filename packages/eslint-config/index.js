module.exports = {
  env: {
    amd: true,
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier/prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:perfectionist/recommended-natural',
  ],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'no-console': 'off',
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'perfectionist'],
  rules: {
    'arrow-parens': 'off',
    'consistent-return': 'off',
    curly: ['error', 'all'],
    'import/extensions': [
      'error',
      { css: 'always', json: 'always', scss: 'always', svg: 'always' },
    ],
    'import/no-duplicates': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'max-lines': ['error', 300],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'off',
    'no-duplicate-imports': 'error',
    'no-empty-pattern': 'off',
    'no-nested-ternary': 'error',
    'no-undef': 'warn',
    'no-unused-vars': 'off',
    'no-var': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          type: {
            react: 'react',
          },
          value: {
            react: ['react', 'react-*'],
          },
        },
        groups: [
          'type',
          'react',
          'builtin',
          'external',
          'internal-type',
          'internal',
          'side-effect',
          'style',
        ],
        'newlines-between': 'always',
        order: 'asc',
        type: 'natural',
      },
    ],
    'prefer-const': 'error',
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['error'],
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'ignore', propElementValues: 'always', props: 'always' },
    ],
    'react/jsx-fragments': ['error'],
    'react/prop-types': 'off',
    'react/void-dom-elements-no-children': ['error'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },

    react: {
      version: 'detect',
    },
  },
}
