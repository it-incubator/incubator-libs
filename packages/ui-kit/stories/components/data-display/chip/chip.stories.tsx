import { Meta } from '@storybook/react'

import { Chip, Tag } from '../../../../src'

export default {
  title: 'Components/Data Display/Chip',
  component: Chip,
  argTypes: {
    color: {
      options: ['brown', 'blue', 'green'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Chip>

export const Default = {
  args: {
    label: 'Read',
    color: 'brown',
  },
}

export const AllColors = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Chip label="Read" color="brown" />
        <Chip label="Course" color="green" />
        <Chip label="Watch" color="blue" />
      </div>
    )
  },
}
