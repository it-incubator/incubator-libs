import { ChangeEvent, MouseEventHandler, ReactNode } from 'react'

import { Close, KeyboardArrowDown, Scrollbar, Spinner, Typography } from '../../'
import { Label } from '../label'
import {
  ComboboxButton,
  Combobox as ComboboxHeadlessUI,
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

  const classNames = {
    box: s.box,
    button: clsx(s.button),
    clearButton: s.clearButton,
    content: clsx(selectStyle.content, filteredOptions.length === 0 && s.empty),
    icon: clsx(s.icon),
    input: clsx(
      textFieldStyle.input,
      s.input,
      showError && textFieldStyle.error,
      isClearButtonVisible && s.hasClearButton
    ),
    item: selectStyle.item,
    root: s.root,
    scrollRoot: selectStyle.scrollRoot,
    scrollThumb: selectStyle.scrollThumb,
    scrollViewport: selectStyle.scrollViewport,
    scrollbar: selectStyle.scrollbar,
    spinner: s.spinner,
  }

  const getDisplayingValue = (value: number | string) =>
    options?.find(option => option.value === value)?.label || ''

  return (
    <ComboboxHeadlessUI
      {...{
        disabled,
        name,
        onChange,
        value,
      }}
      as={'div'}
      className={classNames.root}
    >
      <div className={classNames.box}>
        <Label label={label} required={required}>
          <ComboboxButton as={'div'}>
            <ComboboxInput
              className={classNames.input}
              displayValue={getDisplayingValue}
              onChange={inputChangeHandler}
              placeholder={placeholder}
            />

            <div className={classNames.button}>
              <KeyboardArrowDown className={classNames.icon} />
            </div>
            {isLoading && (
              <div className={classNames.spinner}>
                <Spinner size={22} />
              </div>
            )}
          </ComboboxButton>
        </Label>
        {isClearButtonVisible && (
          <div className={classNames.clearButton} onClick={onClear ?? handleClearButtonClicked}>
            <Close size={18} />
          </div>
        )}
      </div>
      <ComboboxOptions
        anchor={portal ? 'bottom' : undefined}
        as={'div'}
        className={classNames.content}
        modal={portal}
        portal={portal}
      >
        <Scrollbar maxHeight={200}>
          {filteredOptions.map(option => (
            <ComboboxOption
              as={'button'}
              className={classNames.item}
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
    </ComboboxHeadlessUI>
  )
}
