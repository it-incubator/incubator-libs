import { useState } from 'react'

import { Meta } from '@storybook/react'

import { DatePicker } from '../../../../src/components/date-picker'

export default {
  title: 'Components/Inputs/Date Picker',
  component: DatePicker,
} as Meta<typeof DatePicker>

export const Default = {
  render() {
    const [startDate, setStartDate] = useState(new Date())

    return <DatePicker startDate={startDate} setStartDate={setStartDate} />
  },

  args: {},
}
