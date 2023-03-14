import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Sidebar } from '../../../../src'

export default {
  title: 'Components/Layout/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>

export const Default = {
  render: args => {
    const [open, setOpen] = useState(true)

    return (
      <Sidebar open={open} onOpenChange={setOpen}>
        <ul
          style={{
            padding: '10px',
            width: '240px',
            listStyle: 'none',
          }}
        >
          <li>Инфопанель</li>
          <li>Видеоконтент</li>
          <li>Библиотека решений</li>
          <li>Календарь</li>
          <li>Домашнее задание</li>
        </ul>
      </Sidebar>
    )
  },
}
