import { Chip } from './chip'
import { Meta } from '@storybook/react'

export default {
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['brown', 'blue', 'green'],
    },
  },
  component: Chip,
  title: 'Components/Chip',
} as Meta<typeof Chip>

export const Default = {
  args: {
    color: 'brown',
    label: 'Read',
  },
}

export const AllColors = {
  render() {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Chip color={'brown'} label={'Read'} />
        <Chip color={'green'} label={'Course'} />
        <Chip color={'blue'} label={'Watch'} />
      </div>
    )
  },
}
