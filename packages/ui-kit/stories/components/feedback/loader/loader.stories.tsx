import { useState } from 'react'

import { Meta } from '@storybook/react'

import {
  Button,
  DeleteForever,
  Dropdown,
  Edit,
  Header,
  Select,
  ToolbarItemWithIcon,
  Loader,
} from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'

export default {
  title: 'Components/Feedback/Loader',
  component: Loader,
} as Meta<typeof Loader>

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

export const Default = {
  render: () => {
    const [value, setValue] = useState('frontend')

    return (
      <VerticalContainer>
        <Header>
          <Loader />
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Button>Оставь отзыв</Button>
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
