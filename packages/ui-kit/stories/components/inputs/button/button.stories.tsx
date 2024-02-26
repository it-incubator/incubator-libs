import Button from '../../../../src/components/button/button'
import { Meta } from '@storybook/react'

export default {
  argTypes: {
    as: {
      control: {
        type: 'text',
      },
      description:
        'The component used for the root node. Either a string to use an HTML element or a component.',
      table: {
        defaultValue: { summary: '"button"' },
      },
    },
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'back'],
      table: {
        type: { summary: "'outlined' | 'primary' | 'secondary' | 'back'" },
      },
    },
  },
  args: {
    as: 'button',
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Accepts all props of the native button element.',
      },
    },
  },
  title: 'Components/Data Entry/Button',
} satisfies Meta<typeof Button>

export const Primary = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const Tertiary = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'outlined',
  },
}

export const Back = {
  args: {
    children: 'Назад к урокам',
    disabled: false,
    variant: 'back',
  },
}

export const PrimaryAsLink = {
  args: {
    as: 'a',
    children: 'Go to Google',
    disabled: false,
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary',
  },
}
