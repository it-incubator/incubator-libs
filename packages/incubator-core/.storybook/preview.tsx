import '../src/styles/index.scss'
import { DecoratorFn } from '@storybook/react'
import { clsx } from 'clsx'
import './theme-block.scss'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
}

const withTheme: DecoratorFn = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  const theme = context.parameters.theme || context.globals.theme
  const className = theme === 'dark' ? 'dark-mode' : 'light-mode'
  if (theme === 'side-by-side') {
    return (
      <>
        <div className={clsx('themeBlock', 'dark-mode', 'left')}>
          <StoryFn />
        </div>
        <div className={clsx('themeBlock', 'light-mode')}>
          <StoryFn />
        </div>
      </>
    )
  }
  return (
    <div className={clsx('themeBlock', className, 'fill')}>
      <StoryFn />
    </div>
  )
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [withTheme]
