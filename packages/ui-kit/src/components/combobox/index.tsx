import { ChangeEvent, FC, Fragment, MouseEventHandler } from 'react'

import { Combobox as ComboboxHeadlessUI } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import { clsx } from 'clsx'

import { Close, KeyboardArrowDown, Scrollbar, Spinner, Typography } from '../../'
import { Label } from '../label'
import selectStyle from '../select/select.module.scss'
import textFieldStyle from '../text-field/text-field.module.scss'

import s from './combobox.module.scss'

type Option = {
  label: string
  value: string | number
}

export type ComboboxProps = {
  value: string
  /** The options to display.
   * {label: string, value: string | number} */
  options: Option[]
  disabled?: boolean
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  label?: string
  /** The function to call when a new option is selected. */
  onChange: (value: string | null) => void
  /** The value displayed in the textbox */
  inputValue: string
  onInputChange: (value: string) => void
  errorMessage?: string
  portal?: boolean
  isAsync?: boolean
  isLoading?: boolean
  placeholder?: string
  showClearButton?: boolean
  onClear?: () => void
}

export const Combobox: FC<ComboboxProps> = ({
  showClearButton = true,
  value,
  label,
  name,
  disabled,
  options,
  onChange,
  inputValue,
  onInputChange,
  errorMessage,
  portal = true,
  isAsync,
  isLoading,
  placeholder,
  onClear,
}) => {
  const showError = !!errorMessage && errorMessage.length > 0
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
    root: s.root,
    box: s.box,
    input: clsx(textFieldStyle.input, s.input, showError && textFieldStyle.error),
    button: clsx(s.button),
    clearButton: s.clearButton,
    icon: clsx(s.icon),
    content: clsx(selectStyle.content, filteredOptions.length === 0 && s.empty),
    item: selectStyle.item,
    scrollRoot: selectStyle.scrollRoot,
    scrollViewport: selectStyle.scrollViewport,
    scrollbar: selectStyle.scrollbar,
    scrollThumb: selectStyle.scrollThumb,
    spinner: s.spinner,
  }

  const getDisplayingValue = (value: string | number) =>
    options?.find(option => option.value === value)?.label || ''

  return (
    <ComboboxHeadlessUI
      {...{
        onChange,
        value,
        disabled,
        name,
      }}
      as="div"
      className={classNames.root}
    >
      <Float portal={portal} as="div" adaptiveWidth placement="bottom" floatingAs={Fragment}>
        <div className={classNames.box}>
          <Label label={label}>
            <ComboboxHeadlessUI.Button as="div">
              <ComboboxHeadlessUI.Input
                onChange={inputChangeHandler}
                className={classNames.input}
                displayValue={getDisplayingValue}
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
            </ComboboxHeadlessUI.Button>
          </Label>
          {showClearButton && !!value && (
            <div className={classNames.clearButton} onClick={onClear ?? handleClearButtonClicked}>
              <Close size={18} />
            </div>
          )}
        </div>
        <ComboboxHeadlessUI.Options as="div" className={classNames.content}>
          <Scrollbar maxHeight={200}>
            {filteredOptions.map(option => (
              <ComboboxHeadlessUI.Option
                key={option.value}
                value={option.value}
                as="button"
                type={'button'}
                className={classNames.item}
              >
                <span>{option.label}</span>
              </ComboboxHeadlessUI.Option>
            ))}
          </Scrollbar>
        </ComboboxHeadlessUI.Options>
      </Float>
      <>{showError && <Typography.Error>{errorMessage}</Typography.Error>}</>
    </ComboboxHeadlessUI>
  )
}
