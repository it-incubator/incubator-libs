import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { ru } from 'date-fns/locale'
import ReactDatePicker, { registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { KeyboardArrowLeft, KeyboardArrowRight } from '../../../assets'

import textFieldStyles from './../text-field/text-field.module.scss'
import s from './date-picker.module.scss'

// eslint-disable-next-line import/order
import { format } from 'date-fns'

registerLocale('ru', ru)

export type DatePickerProps = {
  placeholder: string
}

export const DatePicker: FC<DatePickerProps> = ({ placeholder }) => {
  const [startDate, setStartDate] = useState(new Date())

  const classNames = {
    input: clsx(s.input, textFieldStyles.input),
    calendar: s.calendar,
    header: s.header,
    buttonBox: s.buttonBox,
    button: s.button,
    popper: s.popper,
  }

  const onChange = (date: number) => {
    setStartDate(startDate)
  }

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
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
      formatWeekDay={day => getShortDayOfWeekName(day)}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <div className={classNames.header}>
          <div>{format(date, 'LLLL Y', { locale: ru })}</div>
          <div className={s.buttonBox}>
            <button className={classNames.button} onClick={decreaseMonth}>
              <KeyboardArrowLeft />
            </button>

            <button className={classNames.button} onClick={increaseMonth}>
              <KeyboardArrowRight />
            </button>
          </div>
        </div>
      )}
    />
  )
}

function getShortDayOfWeekName(dayOfWeek: string) {
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const fullDayNames = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье',
  ]

  const index = fullDayNames.indexOf(dayOfWeek)

  return index !== -1 ? dayNames[index] : ''
}

// TODO: попробовать иначе задавать formatWeekDay (использовать последнюю версию)
