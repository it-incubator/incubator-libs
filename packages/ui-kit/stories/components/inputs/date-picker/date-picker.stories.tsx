import { useState } from 'react'

import { DatePicker } from '../../../../src'
import { Meta } from '@storybook/react'

export default {
  component: DatePicker,
  title: 'Components/Data Entry/Date Picker',
} as Meta<typeof DatePicker>

export const Default = {
  args: {
    disabled: false,
    label: 'Дата',
    placeholder: 'Выбрать дату',
  },

  render(args) {
    const [startDate, setStartDate] = useState(null)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <DatePicker setStartDate={setStartDate} startDate={startDate} {...args} />
        <div>
          Start Date (en-GB locale date string):{' '}
          <strong>{startDate?.toLocaleDateString('en-GB')}</strong>
        </div>
      </div>
    )
  },
}
export const Required = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
  },
}
export const DefaultWithErrors = {
  ...Default,
  args: {
    ...Default.args,
    error: true,
    errorMessage: 'Some error',
  },
}

export const DefaultDisabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Range = {
  args: {
    placeholder: 'Выбрать период',
  },

  render(args) {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <DatePicker
          endDate={endDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          startDate={startDate}
          {...args}
        />
        <div>
          Start Date (en-GB locale date string):{' '}
          <strong>{startDate?.toLocaleDateString('en-GB')}</strong>
        </div>
        <div>
          End Date (en-GB locale date string):{' '}
          <strong>{endDate?.toLocaleDateString('en-GB')}</strong>
        </div>
      </div>
    )
  },
}
