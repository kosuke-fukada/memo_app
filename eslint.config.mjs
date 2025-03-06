import { FlatCompat } from "@eslint/eslintrc"
import stylistic from '@stylistic/eslint-plugin'
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-console': ['error']
    }
  }
]

export default eslintConfig
