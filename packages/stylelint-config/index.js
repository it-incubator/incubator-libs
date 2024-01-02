module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  rules: {
    'custom-property-pattern': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
