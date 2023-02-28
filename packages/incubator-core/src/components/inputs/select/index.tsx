import { FC, Fragment, useMemo } from 'react'

import { Listbox } from '@headlessui/react'
import { Float } from '@headlessui-float/react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import { ChevronDown } from '../../../assets/icons/chevron-down'

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

type ConditionalErrorProps =
  | {
      error?: true
      errorMessage: string
    }
  | {
      error?: false
      errorMessage?: never
    }

export type SelectProps = CommonProps & ConditionalMultipleProps & ConditionalErrorProps

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
  }
  const label = Array.isArray(value) ? value.map(v => optionsMap[v]).join(', ') : optionsMap[value]
  const adaptiveWidth = variant !== 'pagination'

  return (
    <Listbox {...{ disabled, value, multiple, onChange }}>
      <div className={classNames.root}>
        <Float
          portal={portal}
          as="div"
          adaptiveWidth={adaptiveWidth}
          placement="bottom"
          floatingAs={Fragment}
        >
          <Listbox.Button className={classNames.trigger}>
            <span className={classNames.value}>{label || placeholder}</span>
            <span className={classNames.icon}>
              <ChevronDown />
            </span>
          </Listbox.Button>

          <Listbox.Options className={classNames.content} as={'div'}>
            <ScrollArea.Root className={classNames.scrollRoot} type="auto">
              <ScrollArea.Viewport className={classNames.scrollViewport}>
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
              </ScrollArea.Viewport>
              {variant !== 'pagination' && (
                <ScrollArea.Scrollbar className={classNames.scrollbar} orientation="vertical">
                  <ScrollArea.Thumb className={classNames.scrollThumb} />
                </ScrollArea.Scrollbar>
              )}
            </ScrollArea.Root>
          </Listbox.Options>
        </Float>
        <>{error && <p className={classNames.error}>{errorMessage}</p>}</>
      </div>
    </Listbox>
  )
}
