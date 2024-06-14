import { useState } from 'react'

import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { DeleteForever, Dropdown, Edit, Header, Select, ToolbarItemWithIcon } from '../../index'
import { Meta } from '@storybook/react'

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

export default {
  component: Header,
  title: 'Components/Header',
} as Meta<typeof Header>

export const Default = {
  render: () => {
    const [value, setValue] = useState('frontend')

    return (
      <VerticalContainer>
        <Header>
          <div style={{ alignItems: 'center', display: 'flex', gap: '24px', marginLeft: 'auto' }}>
            <Select onChange={setValue} options={options} value={value} width={210} />
            <Dropdown>
              <ToolbarItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Изменить'} />
              <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
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
        <Header isLoading>
          <div style={{ alignItems: 'center', display: 'flex', gap: '24px', marginLeft: 'auto' }}>
            <Select onChange={setValue} options={options} value={value} width={210} />
            <Dropdown>
              <ToolbarItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Изменить'} />
              <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
            </Dropdown>
          </div>
        </Header>
      </VerticalContainer>
    )
  },
}
