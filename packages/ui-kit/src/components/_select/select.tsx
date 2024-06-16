import { CSSProperties, FC, ReactNode, useMemo } from 'react'

import { KeyboardArrowDown, Typography } from '../../'
import { Label } from '../label'
import { Scrollbar } from '../scrollbar'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './select.module.scss'

type Option =
  | { disabled?: boolean; label: number; value: number }
  | { disabled?: boolean; label: number; value: string }
  | { disabled?: boolean; label: string; value: number }
  | { disabled?: boolean; label: string; value: string }

interface CommonProps {
  /** applied to the trigger */
  className?: string
  disabled?: boolean
  errorMessage?: string
  label?: ReactNode
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** The options to display.
   * {label: string, value: string | number} */
  options: Array<Option>
  placeholder?: string
  portal?: boolean
  required?: boolean
  rootClassName?: string
  variant?: 'pagination' | 'primary' | 'secondary'
  width?: CSSProperties['width']
}

type ConditionalMultipleProps =
  | {
      multiple?: false
      /** Event handler called when the value changes.
       * The parameter is an Option object or an array of Options depending on the multiple prop.
       */
      onChange: (value: string) => void
      value: string
    }
  | {
      multiple?: false
      onChange: (value: number) => void
      value: number
    }
  | {
      multiple?: true
      /** Event handler called when the value changes.
       * The parameter is an Option object or an array of Options depending on the multiple prop.
       */
      onChange: (value: Array<number>) => void
      value: Array<number>
    }
  | {
      multiple?: true
      onChange: (value: Array<string>) => void
      value: Array<string>
    }

export type SelectProps = CommonProps & ConditionalMultipleProps

export const Select: FC<SelectProps> = ({
  className,
  disabled,
  errorMessage,
  label,
  multiple = false,
  name,
  onChange,
  options,
  placeholder,
  portal = true,
  required,
  rootClassName,
  value,
  variant = 'primary',
  width = '100%',
}) => {
  const isSecondary = variant === 'secondary'
  const showError = !!errorMessage && errorMessage.length > 0

  const optionsMap: Record<number | string, number | string> = useMemo(() => {
    return options.reduce(
      (acc, option) => {
        acc[option.value] = option.label

        return acc
      },
      {} as Record<number | string, number | string>
    )
  }, [options])

  const classNames = {
    content: clsx(s.content, isSecondary && s.secondary),
    icon: clsx(s.icon, s[variant]),
    item: clsx(s.item, s[variant]),
    label: s.label,
    popper: clsx(s.popper),
    root: rootClassName,
    scrollRoot: s.scrollRoot,
    scrollThumb: s.scrollThumb,
    scrollViewport: s.scrollViewport,
    scrollbar: s.scrollbar,
    trigger: clsx(s.trigger, showError && s.error, s[variant], className),
    value: clsx(s.value),
  }
  const selectedOptionsLabels = Array.isArray(value)
    ? value.map(v => optionsMap[v]).join(', ')
    : optionsMap[value]

  const rootStyles = { width }

  return (
    <Listbox {...{ disabled, multiple, name, onChange, value }}>
      <div className={classNames.root} style={rootStyles}>
        <Label label={label} required={required}>
          <ListboxButton className={classNames.trigger} type={'button'}>
            <span className={classNames.value}>{selectedOptionsLabels || placeholder}</span>
            <span className={classNames.icon}>
              <KeyboardArrowDown size={variant === 'pagination' ? 16 : 24} />
            </span>
          </ListboxButton>

          <ListboxOptions
            anchor={portal ? 'bottom' : undefined}
            as={'div'}
            className={classNames.content}
            modal={portal}
            portal={portal}
          >
            <Scrollbar maxHeight={158}>
              {options.map(option => {
                // todo: add checkboxes for multi-select
                return (
                  <ListboxOption
                    as={'button'}
                    className={classNames.item}
                    disabled={option.disabled}
                    key={option.value}
                    type={'button'}
                    value={option.value}
                  >
                    <span>{option.label}</span>
                  </ListboxOption>
                )
              })}
            </Scrollbar>
          </ListboxOptions>
        </Label>
        <>{showError && <Typography.Error>{errorMessage}</Typography.Error>}</>
      </div>
    </Listbox>
  )
}
