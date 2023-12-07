import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  id?: string
}

export const Checkbox: FC<CheckboxProps> = ({ checked, disabled, id }) => {
  const classNames = {
    container: s.container,
    indicator: s.indicator,
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <CheckboxRadix.Root checked={checked} className={classNames.root} disabled={disabled} id={id}>
        {checked && (
          <CheckboxRadix.Indicator asChild className={classNames.indicator} forceMount>
            <svg
              fill={'none'}
              height={'14'}
              viewBox={'0 0 18 18'}
              width={'14'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              <path
                d={
                  'M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z'
                }
                fill={'currentcolor'}
              />
            </svg>
          </CheckboxRadix.Indicator>
        )}
      </CheckboxRadix.Root>
    </div>
  )
}
