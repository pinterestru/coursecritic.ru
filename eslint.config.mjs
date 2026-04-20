import js from '@eslint/js'
import globals from 'globals'
import nextConfig from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'coverage/**',
      'public/**',
      'next-env.d.ts',
      'src/app/**',
      'src/components/**',
      'src/content/**',
      'src/styles/active-theme.css',
      'src/config/sites/active.generated.ts',
      '*.config.{js,mjs,cjs}',
    ],
  },

  js.configs.recommended,

  ...nextConfig,

  prettier,

  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,mts}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        RequestInit: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'error',
      'no-unused-vars': 'off',
    },
    settings: {
      next: { rootDir: '.' },
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
]
