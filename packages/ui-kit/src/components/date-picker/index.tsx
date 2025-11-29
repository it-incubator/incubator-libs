'use client'
import { ComponentProps, FC, ReactNode, forwardRef } from 'react'
import { ReactDatePickerCustomHeaderProps, registerLocale } from 'react-datepicker'
import * as RDP from 'react-datepicker'

import { clsx } from 'clsx'

const RDPC = (((RDP.default as any).default as any) ||
  (RDP.default as any) ||
  (RDP as any)) as typeof RDP.default

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import textFieldStyles from './../text-field/text-field.module.scss'
import s from './date-picker.module.scss'

import { CalendarToday, KeyboardArrowLeft, KeyboardArrowRight, Label } from '../../index'

export type DatePickerProps = {
  disabled?: boolean
  endDate?: Date | null
  errorMessage?: string
  label?: ReactNode
  placeholder?: string
  required?: boolean
  setEndDate?: (date: Date | null) => void
  setStartDate: (date: Date | null) => void
  startDate: Date | null
} & ComponentProps<'div'>
registerLocale('ru', ru)

export const DatePicker: FC<DatePickerProps> = ({
  className,
  disabled,
  endDate,
  errorMessage,
  label,
  placeholder,
  required,
  setEndDate,
  setStartDate,
  startDate,
  ...rest
}) => {
  const isRange = endDate !== undefined
  const showError = !!errorMessage && errorMessage.length > 0

  const classNames = {
    calendar: s.calendar,
    day: () => s.day,
    errorText: s.errorText,
    input: clsx(s.input, textFieldStyles.input, showError && s.error, isRange && s.range),
    inputContainer: s.inputContainer,
    popper: s.popper,
    root: clsx(s.root, className),
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
        calendarClassName={classNames.calendar}
        calendarStartDay={1}
        className={classNames.input}
        customInput={<CustomInput disabled={disabled} label={label} />}
        dateFormat={'dd/MM/yyyy'}
        dayClassName={classNames.day}
        disabled={disabled}
        endDate={endDate}
        formatWeekDay={formatWeekDay}
        locale={'ru'}
        onChange={DatePickerHandler}
        placeholderText={placeholder}
        popperClassName={classNames.popper}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, -11],
            },
          },
        ]}
        renderCustomHeader={CustomHeader}
        required={required}
        selected={startDate}
        selectsRange={isRange}
        showPopperArrow={false}
        startDate={startDate}
      />
      {showError && <p className={classNames.errorText}>{errorMessage}</p>}
    </div>
  )
}

type CustomInputProps = {
  disabled?: boolean
  label?: ReactNode
  required?: boolean
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ disabled, label, required, ...rest }, ref) => {
    const classNames = {
      icon: clsx(s.icon, disabled && s.disabled),
      inputContainer: s.inputContainer,
    }

    return (
      <Label label={label} required={required}>
        <div className={classNames.inputContainer}>
          <input disabled={disabled} ref={ref} {...rest} />
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
    button: s.button,
    buttonBox: s.buttonBox,
    header: s.header,
  }

  const headerText = capitalizeFirstLetter(format(date, 'LLLL Y', { locale: ru }))

  return (
    <div className={classNames.header}>
      <div>{headerText}</div>
      <div className={classNames.buttonBox}>
        <button className={classNames.button} onClick={decreaseMonth} type={'button'}>
          <KeyboardArrowLeft />
        </button>

        <button className={classNames.button} onClick={increaseMonth} type={'button'}>
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
