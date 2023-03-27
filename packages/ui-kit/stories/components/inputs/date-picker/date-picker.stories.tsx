import { useState } from 'react'

import { Meta } from '@storybook/react'

import { DatePicker } from '../../../../src'

export default {
  title: 'Components/Inputs/Date Picker',
  component: DatePicker,
} as Meta<typeof DatePicker>

export const Default = {
  render(args) {
    const [startDate, setStartDate] = useState(null)

    return <DatePicker startDate={startDate} setStartDate={setStartDate} {...args} />
  },

  args: {
    label: 'Дата',
    placeholder: 'Выбрать дату',
    disabled: false,
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
  render(args) {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <DatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        {...args}
      />
    )
  },

  args: {
    placeholder: 'Выбрать период',
  },
}
