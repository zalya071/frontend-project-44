import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
    },
    languageOptions: {
      globals: globals.node,
    },
  },
]
