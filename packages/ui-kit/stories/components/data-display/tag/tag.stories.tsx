import { Tag } from '../../../../src'
import { Meta } from '@storybook/react'

export default {
  component: Tag,
  title: 'Components/Data Display/Tag',
} as Meta<typeof Tag>

export const PrimaryClickable = {
  args: {
    children: 'Супер контент, спасибо 👍',
    onClick: () => {},
  },
}
export const PrimaryClickablePressed = {
  args: {
    children: 'Супер контент, спасибо 👍',
    defaultPressed: true,
    onClick: () => {},
  },
}

export const PrimaryUnclickable = {
  args: {
    children: 'Супер контент, спасибо 👍',
  },
}
export const PrimaryUnclickablePressed = {
  args: {
    children: 'Супер контент, спасибо 👍',
    defaultPressed: true,
  },
}

export const SecondaryClickable = {
  args: {
    children: 'Супер контент, спасибо 👍',
    onClick: () => {},
    variant: 'secondary',
  },
}
export const SecondaryClickablePressed = {
  args: {
    children: 'Супер контент, спасибо 👍',
    defaultPressed: true,
    onClick: () => {},
    variant: 'secondary',
  },
}

export const SecondaryUnclickable = {
  args: {
    children: 'Супер контент, спасибо 👍',
    variant: 'secondary',
  },
}
