import { FC } from 'react'

import { clsx } from 'clsx'
import { ru } from 'date-fns/locale'
import ReactDatePicker, { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { KeyboardArrowLeft, KeyboardArrowRight } from '../../index'
import datePickerStyle from '../date-picker/date-picker.module.scss'

import textFieldStyles from './../text-field/text-field.module.scss'
import s from './date-range-picker.module.scss'

// eslint-disable-next-line import/order
import { format } from 'date-fns'

registerLocale('ru', ru)

export type DateRangePickerProps = {
  placeholder?: string
  startDate: Date | null
  setStartDate: (date: Date | null) => void
  endDate: Date | null
  setEndDate: (date: Date | null) => void
}

export const DateRangePicker: FC<DateRangePickerProps> = ({
  startDate,
  setStartDate,
  placeholder,
  endDate,
  setEndDate,
}) => {
  const classNames = {
    input: clsx(datePickerStyle.input, textFieldStyles.input, s.input),
    calendar: datePickerStyle.calendar,
    popper: datePickerStyle.popper,
    day: (date: Date) => s.day,
  }

  const formatWeekDay = (day: Date) => capitalizeFirstLetter(format(day, 'iiiiii', { locale: ru }))

  const DateRangePickerHandler = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates

    setStartDate(start)
    setEndDate(end)
  }

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={DateRangePickerHandler}
      startDate={startDate}
      endDate={endDate}
      placeholderText={placeholder}
      calendarClassName={classNames.calendar}
      className={classNames.input}
      dayClassName={classNames.day}
      popperClassName={classNames.popper}
      popperModifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, -11],
          },
        },
      ]}
      showPopperArrow={false}
      calendarStartDay={1}
      locale="ru"
      formatWeekDay={formatWeekDay}
      renderCustomHeader={CustomHeader}
      selectsRange
    />
  )
}

const CustomHeader = ({ date, decreaseMonth, increaseMonth }: ReactDatePickerCustomHeaderProps) => {
  const classNames = {
    header: datePickerStyle.header,
    buttonBox: datePickerStyle.buttonBox,
    button: datePickerStyle.button,
  }

  const headerText = capitalizeFirstLetter(format(date, 'LLLL Y', { locale: ru }))

  return (
    <div className={classNames.header}>
      <div>{headerText}</div>
      <div className={classNames.buttonBox}>
        <button className={classNames.button} onClick={decreaseMonth}>
          <KeyboardArrowLeft />
        </button>

        <button className={classNames.button} onClick={increaseMonth}>
          <KeyboardArrowRight />
        </button>
      </div>
    </div>
  )
}

const capitalizeFirstLetter = (text: string) => {
  return text[0].toUpperCase() + text.slice(1)
}
