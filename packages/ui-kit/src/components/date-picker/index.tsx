import { FC } from 'react'

import { clsx } from 'clsx'
import { ru } from 'date-fns/locale'
import ReactDatePicker, { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { KeyboardArrowLeft, KeyboardArrowRight } from '../../index'

import textFieldStyles from './../text-field/text-field.module.scss'
import s from './date-picker.module.scss'

// eslint-disable-next-line import/order
import { format } from 'date-fns'

registerLocale('ru', ru)

export type DatePickerProps = {
  placeholder?: string
  startDate: Date
  setStartDate: (date: Date) => void
}

export const DatePicker: FC<DatePickerProps> = ({ startDate, setStartDate, placeholder }) => {
  const classNames = {
    input: clsx(s.input, textFieldStyles.input),
    calendar: s.calendar,
    popper: s.popper,
  }

  const formatWeekDay = (day: Date) => capitalizeFirstLetter(format(day, 'iiiiii', { locale: ru }))

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={setStartDate}
      placeholderText={placeholder}
      calendarClassName={classNames.calendar}
      className={classNames.input}
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
    />
  )
}

const CustomHeader = ({ date, decreaseMonth, increaseMonth }: ReactDatePickerCustomHeaderProps) => {
  const classNames = {
    header: s.header,
    buttonBox: s.buttonBox,
    button: s.button,
  }

  const headerText = capitalizeFirstLetter(format(date, 'LLLL Y', { locale: ru }))

  return (
    <div className={classNames.header}>
      <div>{headerText}</div>
      <div className={s.buttonBox}>
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
