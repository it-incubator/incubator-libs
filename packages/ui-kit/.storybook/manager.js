import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'IT-INCUBATOR',
    brandUrl: 'https://it-incubator.io',
    brandImage: '/assets/images/logo.svg',
    brandTarget: '_blank',
    colorPrimary: '#F51A51',
  },
})
