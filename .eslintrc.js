// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    requireConfigFile: false
    // "ecmaVersion": 5,
    // "sourceType": "module"
  },
  env: {
    node: true,
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-template-curly-in-string': 0,
    'no-useless-escape': 0,
    'no-mixed-operators': 0,
    'no-alert': 'warn',
    'no-debugger': 'warn',
    'array-callback-return': 0,
    'vue/no-v-html': 0,
    'vue/require-prop-type-constructor': 0,
    'vue/require-default-prop': 0,
    'vue/no-mutating-props': 0,
    'vue/valid-v-bind-sync': 0,
    'vue/require-prop-types': 0,
    'vue/order-in-components': ['error'],
    'vue/no-lone-template': 0,
    'vue/no-template-shadow': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/html-closing-bracket-spacing': 0,
    'vue/this-in-template': ['error'],
    'vue/component-definition-name-casing': 0,
    'vue/multiline-html-element-content-newline': 0
  }
}
