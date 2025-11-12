'use client'
import { ChangeEvent, MouseEventHandler, ReactNode } from 'react'

import { Close, KeyboardArrowDown, Scrollbar, Spinner, Typography } from '../../'
import { Label } from '../label'
import {
  Combobox as HeadlessCombobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { clsx } from 'clsx'

import selectStyle from '../select/select.module.scss'
import textFieldStyle from '../text-field/text-field.module.scss'
import s from './combobox.module.scss'

type Option<T> = {
  label: string
  value: T
}

export type ComboboxProps<T> = {
  disabled?: boolean
  errorMessage?: string
  /** The value displayed in the textbox */
  inputValue: string
  isAsync?: boolean
  isLoading?: boolean
  label?: ReactNode
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** The function to call when a new option is selected. */
  onChange: (value: T | null) => void
  onClear?: () => void
  onInputChange: (value: string) => void
  /** The options to display.
   * {label: string, value: string | number} */
  options: Option<T>[]
  placeholder?: string
  portal?: boolean
  required?: boolean
  showClearButton?: boolean
  value: T | null
}

export const Combobox = <T extends number | string>({
  disabled,
  errorMessage,
  inputValue,
  isAsync,
  isLoading,
  label,
  name,
  onChange,
  onClear,
  onInputChange,
  options,
  placeholder,
  portal = true,
  required,
  showClearButton = true,
  value,
}: ComboboxProps<T>) => {
  const showError = !!errorMessage && errorMessage.length > 0
  const isClearButtonVisible = showClearButton && !!value
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') {
      onChange(null)
    }
    onInputChange(e.currentTarget.value)
  }
  const handleClearButtonClicked: MouseEventHandler<HTMLDivElement> = () => {
    onInputChange('')
    onChange(null)
  }

  const filteredOptions =
    inputValue === '' && !isAsync
      ? options
      : options.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()))

  const getDisplayingValue = (value: number | string) =>
    options?.find(option => option.value === value)?.label || ''

  return (
    <HeadlessCombobox
      as={'div'}
      className={s.root}
      disabled={disabled}
      name={name}
      onChange={onChange}
      value={value}
    >
      {({ open }) => {
        const inputClassName = clsx(
          textFieldStyle.input,
          s.input,
          showError && textFieldStyle.error,
          isClearButtonVisible && s.hasClearButton
        )

        const contentClassName = clsx(
          selectStyle.content,
          s.content,
          filteredOptions.length === 0 && s.empty
        )

        return (
          <div data-open={open ? '' : undefined}>
            <div className={s.box}>
              <Label label={label} required={required}>
                <div>
                  <ComboboxInput
                    className={inputClassName}
                    data-open={open ? '' : undefined}
                    displayValue={getDisplayingValue}
                    onChange={inputChangeHandler}
                    placeholder={placeholder}
                  />
                  <ComboboxButton className={s.button} type={'button'}>
                    <KeyboardArrowDown
                      className={clsx(s.icon, selectStyle.icon, open && selectStyle.iconOpen)}
                    />
                  </ComboboxButton>
                  {isLoading && (
                    <div className={s.spinner}>
                      <Spinner size={22} />
                    </div>
                  )}
                </div>
              </Label>
              {isClearButtonVisible && (
                <div className={s.clearButton} onClick={onClear ?? handleClearButtonClicked}>
                  <Close size={18} />
                </div>
              )}
            </div>
            <ComboboxOptions
              anchor={'bottom'}
              as={'div'}
              className={contentClassName}
              modal={false}
              portal={portal}
            >
              <Scrollbar maxHeight={200}>
                {filteredOptions.map(option => (
                  <ComboboxOption
                    as={'button'}
                    className={selectStyle.item}
                    key={option.value}
                    type={'button'}
                    value={option.value}
                  >
                    <span>{option.label}</span>
                  </ComboboxOption>
                ))}
              </Scrollbar>
            </ComboboxOptions>
            <>{showError && <Typography.Error>{errorMessage}</Typography.Error>}</>
          </div>
        )
      }}
    </HeadlessCombobox>
  )
}
