module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'vue/multi-word-component-names: off',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
}
