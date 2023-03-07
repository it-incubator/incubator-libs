import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Header, Select, Toolbar, ToolbarItemWithIcon } from '../../../../src'
import { DeleteForever, Edit } from '../../../../src/assets/icons'
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
  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Header>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Select options={options} value={value} onChange={setValue} />
            <Toolbar>
              <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
              <ToolbarItemWithIcon icon={<DeleteForever />} text="Удалить" onSelect={() => {}} />
            </Toolbar>
          </div>
        </Header>
      </VerticalContainer>
    )
  },
}
