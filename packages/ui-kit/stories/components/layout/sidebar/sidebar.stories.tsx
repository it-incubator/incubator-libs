import { useState } from 'react'

import { Meta } from '@storybook/react'

import {
  DeleteForever,
  Dropdown,
  Edit,
  Header,
  Select,
  Sidebar,
  ToolbarItemWithIcon,
} from '../../../../src'

export default {
  title: 'Components/Layout/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>

export const Default = {
  render: args => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <Sidebar open={open} onOpenChange={setOpen}>
          <ul
            style={{
              padding: '10px',
              width: '100%',
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
        <div
          style={{
            paddingLeft: open ? 'var(--sidebar-open-width)' : 'var(--sidebar-closed-width)',
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>
        </div>
      </div>
    )
  },
}
const options = [
  {
    value: 'frontend',
    label: 'Frontend',
  },
  {
    value: 'backend',
    label: 'Backend',
  },
]

export const FullLayout = {
  render: args => {
    const [open, setOpen] = useState(true)
    const [value, setValue] = useState('frontend')

    return (
      <div>
        <Header>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Select options={options} value={value} onChange={setValue} width={210} />
            <Dropdown>
              <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
              <ToolbarItemWithIcon icon={<DeleteForever />} text="Удалить" onSelect={() => {}} />
            </Dropdown>
          </div>
        </Header>
        <Sidebar open={open} onOpenChange={setOpen}>
          <ul
            style={{
              padding: '10px',
              width: '100%',
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
        <div
          style={{
            paddingLeft: open ? 'var(--sidebar-open-width)' : 'var(--sidebar-closed-width)',
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eligendi est et
            eum fugit harum ipsum iste, itaque magni nesciunt omnis porro quas quibusdam quidem
            quisquam quo recusandae soluta ut!
          </p>
        </div>
      </div>
    )
  },
}
