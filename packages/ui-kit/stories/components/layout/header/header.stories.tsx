import { useState } from 'react'

import { Meta } from '@storybook/react'

import { DeleteForever, Dropdown, Edit, Header, Select, ToolbarItemWithIcon } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'

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

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as Meta<typeof Header>

export const Default = {
  render: () => {
    const [value, setValue] = useState('frontend')

    return (
      <VerticalContainer>
        <Header>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Select options={options} value={value} onChange={setValue} width={210} />
            <Dropdown>
              <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
              <ToolbarItemWithIcon icon={<DeleteForever />} text="Удалить" onSelect={() => {}} />
            </Dropdown>
          </div>
        </Header>
      </VerticalContainer>
    )
  },
}

export const LoaderActive = {
  render: () => {
    const [value, setValue] = useState('frontend')

    return (
      <VerticalContainer>
        <Header isLoading={true}>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Select options={options} value={value} onChange={setValue} width={210} />
            <Dropdown>
              <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
              <ToolbarItemWithIcon icon={<DeleteForever />} text="Удалить" onSelect={() => {}} />
            </Dropdown>
          </div>
        </Header>
      </VerticalContainer>
    )
  },
}
