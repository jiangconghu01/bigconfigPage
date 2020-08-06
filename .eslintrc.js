module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'vue/no-unused-components': 'off',
    'vue/valid-v-for': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/attribute-hyphenation': 0,
    'vue/max-attributes-per-line': [5, { singleline: 10, multiline: { max: 1, allowFirstLine: false } }], // 每行最大属性
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 0,
    'accessor-pairs': 2, // 应同时设置setter和getter
    'arrow-spacing': [2, { before: true, after: true }], // 箭头间距
    'vue/require-default-prop': 0, // 不检查默认属性
    'vue/require-prop-types': 0, // 不检查默认类型
    // eslint-disable-next-line no-dupe-keys
    'vue/max-attributes-per-line': 0,
    // 'comma-dangle': [2, 'never'], //对象字面量项尾不能有逗号
  },
}
