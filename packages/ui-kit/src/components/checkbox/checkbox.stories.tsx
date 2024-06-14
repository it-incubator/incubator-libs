import { useState } from 'react'

import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { ValuePreview } from '../../../storybook-utils/components/previews/value-preview'
import { Checkbox } from './checkbox'
import { Meta } from '@storybook/react'

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
} as Meta<typeof Checkbox>

export const Default = {
  args: {
    disabled: false,
    label: 'Click here',
  },

  render: args => {
    const [checked, setChecked] = useState(true)

    return (
      <VerticalContainer>
        <Checkbox {...args} checked={checked} onChange={setChecked} />
        <ValuePreview>checked: {String(checked)}</ValuePreview>
      </VerticalContainer>
    )
  },
}

export const Disabled = {
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
  },
}

export const Tight = {
  args: {
    disabled: false,
    tight: true,
  },

  render: args => {
    return (
      <>
        <Checkbox
          {...args}
          label={
            'Указано направление, в котором хотел бы развиваться (более глубокое изучение React/изучение других front-end фреймворков/full-stack разработка/разработка для мобильных устройств/что-то другое). Указывай только одно направление желаемого развития'
          }
        />
        <Checkbox
          {...args}
          label={
            'Указано направление, в котором хотел бы развиваться (более глубокое изучение React/изучение других front-end фреймворков/full-stack разработка/разработка для мобильных устройств/что-то другое). Указывай только одно направление желаемого развития'
          }
        />
        <Checkbox {...args} label={'Указано направление,'} />
      </>
    )
  },
}
