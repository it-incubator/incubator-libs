import { ComponentProps, FC, forwardRef } from 'react'

import { clsx } from 'clsx'
import { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'
import * as RDP from 'react-datepicker'

const RDPC = (((RDP.default as any).default as any) ||
  (RDP.default as any) ||
  (RDP as any)) as typeof RDP.default

import 'react-datepicker/dist/react-datepicker.min.css'

import { CalendarToday, KeyboardArrowLeft, KeyboardArrowRight, Label } from '../../index'

import textFieldStyles from './../text-field/text-field.module.scss'
import s from './date-picker.module.scss'

// eslint-disable-next-line import/order
import { format } from 'date-fns'
// eslint-disable-next-line import/order
import { ru } from 'date-fns/locale'

export type DatePickerProps = {
  placeholder?: string
  startDate: Date | null
  setStartDate: (date: Date | null) => void
  label?: string
  errorMessage?: string
  disabled?: boolean
  endDate?: Date | null
  setEndDate?: (date: Date | null) => void
} & ComponentProps<'div'>
registerLocale('ru', ru)

export const DatePicker: FC<DatePickerProps> = ({
  startDate,
  setStartDate,
  placeholder,
  label,
  errorMessage,
  endDate,
  setEndDate,
  disabled,
  className,
  ...rest
}) => {
  const isRange = endDate !== undefined
  const showError = !!errorMessage && errorMessage.length > 0

  const classNames = {
    root: clsx(s.root, className),
    inputContainer: s.inputContainer,
    input: clsx(s.input, textFieldStyles.input, showError && s.error, isRange && s.range),
    calendar: s.calendar,
    popper: s.popper,
    errorText: s.errorText,
    day: () => s.day,
  }

  const DatePickerHandler = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates

      setStartDate(start)
      setEndDate?.(end)
    } else {
      setStartDate(dates)
    }
  }

  return (
    <div className={classNames.root} {...rest}>
      <RDPC
        startDate={startDate}
        endDate={endDate}
        onChange={DatePickerHandler}
        selected={startDate}
        selectsRange={isRange}
        // @ts-expect-error The type of the function is wrong, it will always return a string, not a Date
        formatWeekDay={formatWeekDay}
        placeholderText={placeholder}
        renderCustomHeader={CustomHeader}
        customInput={<CustomInput disabled={disabled} label={label} />}
        calendarClassName={classNames.calendar}
        className={classNames.input}
        popperClassName={classNames.popper}
        dayClassName={classNames.day}
        locale="ru"
        dateFormat={'dd/MM/yyyy'}
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
      {showError && <p className={classNames.errorText}>{errorMessage}</p>}
    </div>
  )
}

type CustomInputProps = {
  disabled?: boolean
  label?: string
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, disabled, ...rest }, ref) => {
    const classNames = {
      inputContainer: s.inputContainer,
      icon: clsx(s.icon, disabled && s.disabled),
    }

    return (
      <Label label={label}>
        <div className={classNames.inputContainer}>
          <input ref={ref} disabled={disabled} {...rest} />
          <div className={classNames.icon}>
            <CalendarToday />
          </div>
        </div>
      </Label>
    )
  }
)

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
      <div className={classNames.buttonBox}>
        <button className={classNames.button} type={'button'} onClick={decreaseMonth}>
          <KeyboardArrowLeft />
        </button>

        <button className={classNames.button} onClick={increaseMonth}>
          <KeyboardArrowRight />
        </button>
      </div>
    </div>
  )
}

// const formatWeekDay = (day: Date) => capitalizeFirstLetter(format(day, 'iiiiii', { locale: ru }))
const formatWeekDay = (day: string) => capitalizeFirstLetter(day.substring(0, 1))

const capitalizeFirstLetter = (text: string) => {
  return text[0].toUpperCase() + text.slice(1)
}
