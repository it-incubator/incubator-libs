import { useState } from 'react'

import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import {
  Button,
  DeleteForever,
  Dropdown,
  Edit,
  Header,
  Loader,
  Select,
  ToolbarItemWithIcon,
} from '../../index'
import { Meta } from '@storybook/react'

export default {
  component: Loader,
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

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

export const Default = {
  render: () => {
    const [value, setValue] = useState('frontend')

    return (
      <VerticalContainer>
        <Header>
          <Loader />
          <div style={{ alignItems: 'center', display: 'flex', gap: '24px', marginLeft: 'auto' }}>
            <Button>Оставь отзыв</Button>
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
