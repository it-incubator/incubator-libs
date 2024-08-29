import { useState } from 'react'

import {
  DeleteForever,
  Dropdown,
  Edit,
  Header,
  Menu,
  Select,
  Sidebar,
  ToolbarItemWithIcon,
} from '../../../../src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: Sidebar,
  title: 'Components/Layout/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  render: args => {
    return (
      <div>
        <Sidebar {...args}>
          <ul
            style={{
              listStyle: 'none',
              padding: '10px',
              paddingTop: 'var(--header-height)',
              width: '100%',
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
            paddingLeft: args.isOpen ? 'var(--sidebar-open-width)' : 'var(--sidebar-closed-width)',
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
    label: 'Frontend',
    value: 'frontend',
  },
  {
    label: 'Backend',
    value: 'backend',
  },
]

export const FullLayout: Story = {
  args: {
    children: null,
    isOpen: true,
  },
  render: args => {
    const [value, setValue] = useState('frontend')
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Header>
          <div style={{ alignItems: 'center', display: 'flex', gap: '24px', marginLeft: 'auto' }}>
            <Select onChange={setValue} options={options} value={value} width={210} />
            <Dropdown>
              <ToolbarItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Изменить'} />
              <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
            </Dropdown>
          </div>
        </Header>
        <Sidebar isOpen={open} onClose={() => setOpen(false)}>
          <Menu onClick={() => setOpen(!open)} />
          <ul
            style={{
              listStyle: 'none',
              padding: '10px',
              paddingTop: 'var(--header-height)',
              width: '100%',
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
            paddingLeft: args.isOpen ? 'var(--sidebar-open-width)' : 'var(--sidebar-closed-width)',
            paddingTop: 'var(--header-height)',
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
