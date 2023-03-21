import { ComponentProps, FC, forwardRef } from 'react'

import { clsx } from 'clsx'
import { ru } from 'date-fns/locale'
import ReactDatePicker, { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.min.css'

import { CalendarToday, KeyboardArrowLeft, KeyboardArrowRight, Label } from '../../index'

import textFieldStyles from './../text-field/text-field.module.scss'
import s from './date-picker.module.scss'

// eslint-disable-next-line import/order
import { format } from 'date-fns'

registerLocale('ru', ru)

type CommonProps = {
  placeholder?: string
  startDate: Date | null
  setStartDate: (date: Date | null) => void
  label?: string
  error?: boolean
  errorMessage?: string
  disabled?: boolean
} & ComponentProps<'div'>

type ConditionalProps =
  | {
      endDate: Date | null
      setEndDate: (date: Date | null) => void
    }
  | {
      endDate: never
      setEndDate: never
    }

export type DatePickerProps = CommonProps & ConditionalProps

export const DatePicker: FC<DatePickerProps> = ({
  startDate,
  setStartDate,
  placeholder,
  label,
  error,
  errorMessage,
  endDate,
  setEndDate,
  disabled,
  ...rest
}) => {
  const isRange = endDate !== undefined

  const classNames = {
    inputContainer: s.inputContainer,
    input: clsx(s.input, textFieldStyles.input, error && s.error, isRange && s.range),
    icon: clsx(s.icon, disabled && s.disabled),
    calendar: s.calendar,
    popper: s.popper,
    errorText: s.errorText,
    day: () => s.day,
  }

  const DateRangeHandler = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates

      setStartDate(start)
      setEndDate(end)
    } else {
      setStartDate(dates)
    }
  }

  const CustomInput = forwardRef<HTMLInputElement>((props, ref) => (
    <Label label={label}>
      <div className={classNames.inputContainer}>
        <input ref={ref} className={classNames.input} {...props} />
        <div className={classNames.icon}>
          <CalendarToday />
        </div>
      </div>
    </Label>
  ))

  return (
    <div {...rest}>
      <ReactDatePicker
        startDate={startDate}
        endDate={endDate}
        onChange={DateRangeHandler}
        selected={startDate}
        selectsRange={isRange}
        formatWeekDay={formatWeekDay}
        placeholderText={placeholder}
        renderCustomHeader={CustomHeader}
        customInput={<CustomInput />}
        calendarClassName={classNames.calendar}
        className={classNames.input}
        popperClassName={classNames.popper}
        dayClassName={classNames.day}
        locale="ru"
        showPopperArrow={false}
        calendarStartDay={1}
        disabled={disabled}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, -11],
            },
          },
        ]}
      />
      {error && <p className={classNames.errorText}>{errorMessage}</p>}
    </div>
  )
}

export const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
}: ReactDatePickerCustomHeaderProps) => {
  const classNames = {
    header: s.header,
    buttonBox: s.buttonBox,
    button: s.button,
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

const formatWeekDay = (day: Date) => capitalizeFirstLetter(format(day, 'iiiiii', { locale: ru }))

const capitalizeFirstLetter = (text: string) => {
  return text[0].toUpperCase() + text.slice(1)
}
