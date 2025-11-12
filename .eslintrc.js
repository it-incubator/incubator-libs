module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:storybook/recommended'],
  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
