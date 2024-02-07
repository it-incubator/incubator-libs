const componentTemplate = require('./src/templates/componentTemplate')

module.exports = {
  icon: true,
  plugins: [
    // Clean SVG files using SVGO
    '@svgr/plugin-svgo',
    // Generate JSX
    '@svgr/plugin-jsx',
    // Format the result using Prettier
    '@svgr/plugin-prettier',
  ],
  replaceAttrValues: {
    '#000': 'currentColor',
    '#000000': 'currentColor',
    '#0D0B0C': 'currentColor',
    '#323232': 'currentColor',
    '#FFFEFE': 'var(--color-bg-icon)',
  },
  svgProps: {
    height: '100%',
    width: '100%',
  },
  svgoConfig: {
    plugins: [
      'preset-default',

      // Avoid collisions with ids in other SVGs,
      // which was causing incorrect gradient directions
      // https://github.com/svg/svgo/issues/1746#issuecomment-1803595909
      //
      // Previously, this was a problem where unique ids
      // could not be generated since svgo@3
      // https://github.com/svg/svgo/issues/674
      // https://github.com/svg/svgo/issues/1746
      {
        fn: ({ children }, _, info) => {
          const childAttributes = children[0].attributes
          const [fileName] = info.path.split('/').reverse()[0].split('.')

          childAttributes.id = fileName
        },
        name: 'createId',
      },
    ],
  },
  template: componentTemplate,
  typescript: true,
}
