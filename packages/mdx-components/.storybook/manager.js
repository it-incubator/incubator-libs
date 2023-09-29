import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'IT-INCUBATOR',
    brandUrl: 'https://it-incubator.io',
    brandImage: '/assets/images/logo.svg',
    brandTarget: '_blank',
    colorPrimary: '#F51A51',
  },
})
