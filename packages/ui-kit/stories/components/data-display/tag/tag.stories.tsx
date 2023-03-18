import { Meta } from '@storybook/react'

import { Tag } from '../../../../src'

export default {
  title: 'Components/Data Display/Tag',
  component: Tag,
} as Meta<typeof Tag>

export const PrimaryClickable = {
  args: {
    label: 'Супер контент, спасибо 👍',
    onClick: () => {},
  },
}

export const PrimaryUnclickable = {
  args: {
    label: 'Супер контент, спасибо 👍',
  },
}

export const SecondaryClickable = {
  args: {
    label: 'Супер контент, спасибо 👍',
    variant: 'secondary',
    onClick: () => {},
  },
}

export const SecondaryUnclickable = {
  args: {
    label: 'Супер контент, спасибо 👍',
    variant: 'secondary',
  },
}
