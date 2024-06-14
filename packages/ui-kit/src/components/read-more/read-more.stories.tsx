import { ReadMore } from '../../index'
import { Meta } from '@storybook/react'

export default {
  component: ReadMore,
  title: 'Components/Read more',
} satisfies Meta<typeof ReadMore>

export const Primary = {
  args: {
    maxLength: 100,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut sed eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed do.',
  },
}
