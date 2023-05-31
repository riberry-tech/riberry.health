/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/no-unused-components': 'warn',

    'vue/padding-lines-in-component-definition': 'warn',
  },
}
