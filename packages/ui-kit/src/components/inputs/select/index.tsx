import { FC, Fragment, useMemo } from 'react'

import { Listbox } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import { clsx } from 'clsx'

import { Label, Scrollbar } from '../../'
import { KeyboardArrowDown } from '../../../assets/icons'

import s from './select.module.scss'

type Option =
  | { label: string; value: string }
  | { label: string; value: number }
  | { label: number; value: string }
  | { label: number; value: number }

interface CommonProps {
  /** applied to the trigger */
  className?: string
  disabled?: boolean
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  placeholder?: string
  required?: boolean
  variant?: 'primary' | 'secondary' | 'pagination'
  /** The options to display.
   * {label: string, value: string | number} */
  options: Array<Option>
  portal?: boolean
  error?: boolean
  errorMessage?: string
  label?: string
  /** width in pixels */
  width?: string
}

type ConditionalMultipleProps =
  | {
      multiple?: false
      value: string
      /** Event handler called when the value changes.
       * The parameter is an Option object or an array of Options depending on the multiple prop.
       */
      onChange: (value: string) => void
    }
  | {
      multiple?: false
      value: number
      onChange: (value: number) => void
    }
  | {
      multiple?: true
      value: Array<string>
      onChange: (value: Array<string>) => void
    }
  | {
      multiple?: true
      value: Array<number>
      /** Event handler called when the value changes.
       * The parameter is an Option object or an array of Options depending on the multiple prop.
       */
      onChange: (value: Array<number>) => void
    }

export type SelectProps = CommonProps & ConditionalMultipleProps

export const Select: FC<SelectProps> = ({
  variant = 'primary',
  placeholder,
  value,
  error,
  errorMessage,
  disabled,
  className,
  onChange,
  options,
  multiple = false,
  portal = true,
  label,
  width,
}) => {
  const isSecondary = variant === 'secondary'

  const optionsMap: Record<string | number, string | number> = useMemo(() => {
    return options.reduce((acc, option) => {
      acc[option.value] = option.label

      return acc
    }, {} as Record<string | number, string | number>)
  }, [options])

  const classNames = {
    root: clsx(s.root),
    trigger: clsx(s.trigger, error && s.error, s[variant], className),
    value: clsx(s.value),
    icon: clsx(s.icon, s[variant]),
    item: clsx(s.item),
    popper: clsx(s.popper),
    content: clsx(s.content, isSecondary && s.secondary),
    error: s.errorText,
    scrollRoot: s.scrollRoot,
    scrollViewport: s.scrollViewport,
    scrollbar: s.scrollbar,
    scrollThumb: s.scrollThumb,
    label: s.label,
  }
  const selectedOptionsLabels = Array.isArray(value)
    ? value.map(v => optionsMap[v]).join(', ')
    : optionsMap[value]

  const triggerStyles = { width: `${width}px` }

  return (
    <Listbox {...{ disabled, value, multiple, onChange }}>
      <div className={classNames.root}>
        <Label label={label}>
          <Float portal={portal} as="div" adaptiveWidth placement="bottom" floatingAs={Fragment}>
            <Listbox.Button className={classNames.trigger} style={triggerStyles}>
              <span className={classNames.value}>{selectedOptionsLabels || placeholder}</span>
              <span className={classNames.icon}>
                <KeyboardArrowDown size={variant === 'pagination' ? 16 : 24} />
              </span>
            </Listbox.Button>

            <Listbox.Options className={classNames.content} as={'div'}>
              <Scrollbar maxHeight={158}>
                {options.map(option => {
                  // todo: add checkboxes for multi-select
                  return (
                    <Listbox.Option
                      key={option.value}
                      className={classNames.item}
                      value={option.value}
                      as={'div'}
                    >
                      <span>{option.label}</span>
                    </Listbox.Option>
                  )
                })}
              </Scrollbar>
            </Listbox.Options>
          </Float>
        </Label>
        <>{error && <p className={classNames.error}>{errorMessage}</p>}</>
      </div>
    </Listbox>
  )
}
