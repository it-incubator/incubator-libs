import { useState } from 'react'

import { Meta } from '@storybook/react'

import { DateRangePicker } from '../../../../src/components/date-range-picker'

export default {
  title: 'Components/Inputs/Date Range Picker',
  component: DateRangePicker,
} as Meta<typeof DateRangePicker>

export const Default = {
  render() {
    const [startDate, setStartDate] = useState<Date | null>(new Date())
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <DateRangePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    )
  },

  args: {},
}
