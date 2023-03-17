import { ChangeEvent, FC, Fragment, useState } from 'react'

import { Combobox as ComboboxHeadlessUI } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import { KeyboardArrowDown } from '../../../assets/icons'
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
  onChange: (value: string) => void
  /** The value displayed in the textbox */
  inputValue: string
  onInputChange: (value: string) => void
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
}) => {
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.currentTarget.value)
  }

  const filteredOptions =
    inputValue === ''
      ? options
      : options.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()))

  const classNames = {
    root: s.root,
    box: s.box,
    input: clsx(textFieldStyle.input, s.input),
    button: clsx(s.button),
    icon: clsx(s.icon),
    content: clsx(selectStyle.content, filteredOptions.length === 0 && s.empty),
    item: selectStyle.item,
    scrollRoot: selectStyle.scrollRoot,
    scrollViewport: selectStyle.scrollViewport,
    scrollbar: selectStyle.scrollbar,
    scrollThumb: selectStyle.scrollThumb,
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
        <Float as="div" adaptiveWidth placement="bottom" floatingAs={Fragment}>
          <div className={classNames.box}>
            <ComboboxHeadlessUI.Input
              onChange={inputChangeHandler}
              className={classNames.input}
              displayValue={getDisplayingValue}
            />
            <ComboboxHeadlessUI.Button className={classNames.button} as="div">
              <KeyboardArrowDown className={classNames.icon} />
            </ComboboxHeadlessUI.Button>
          </div>

          <ComboboxHeadlessUI.Options as="div" className={classNames.content}>
            <ScrollArea.Root className={classNames.scrollRoot} type="auto">
              <ScrollArea.Viewport className={classNames.scrollViewport}>
                {filteredOptions.map(option => (
                  <ComboboxHeadlessUI.Option
                    key={option.value}
                    value={option.value}
                    as="div"
                    className={classNames.item}
                  >
                    <span>{option.label}</span>
                  </ComboboxHeadlessUI.Option>
                ))}
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar className={classNames.scrollbar} orientation="vertical">
                <ScrollArea.Thumb className={classNames.scrollThumb} />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </ComboboxHeadlessUI.Options>
        </Float>
      </Label>
    </ComboboxHeadlessUI>
  )
}
