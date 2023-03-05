import { Meta } from '@storybook/react'

import { ReadMore } from '../../../../src'

export default {
  title: 'Components/Disclosure/Read more',
  component: ReadMore,
} as Meta<typeof ReadMore>

export const Primary = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut sed eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed do.',
    maxLength: 100,
  },
}
