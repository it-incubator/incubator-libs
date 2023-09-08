import { ChangeEvent, FC, Fragment } from 'react'

import { Combobox as ComboboxHeadlessUI } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import { clsx } from 'clsx'

import { KeyboardArrowDown, Scrollbar, Spinner, Typography } from '../../'
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
}

export const Combobox: FC<ComboboxProps> = ({
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
}) => {
  const showError = !!errorMessage && errorMessage.length > 0
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') {
      onChange(null)
    }
    onInputChange(e.currentTarget.value)
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
      <Label label={label}>
        <Float portal={portal} as="div" adaptiveWidth placement="bottom" floatingAs={Fragment}>
          <ComboboxHeadlessUI.Button className={classNames.box} as="div">
            <ComboboxHeadlessUI.Input
              onChange={inputChangeHandler}
              className={classNames.input}
              displayValue={getDisplayingValue}
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
      </Label>
      <>{showError && <Typography.Error>{errorMessage}</Typography.Error>}</>
    </ComboboxHeadlessUI>
  )
}
