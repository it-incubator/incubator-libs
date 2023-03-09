import { FC } from 'react'

import { Switch } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './toggle.module.scss'

export type ToggleProps = {
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}

export const Toggle: FC<ToggleProps> = ({ label, checked, onChange }) => {
  const classNames = {
    toggle: clsx(s.toggle, checked && s.checked),
  }

  return (
    <Switch className={classNames.toggle} checked={checked} onChange={onChange}>
      {label}
    </Switch>
  )
}
