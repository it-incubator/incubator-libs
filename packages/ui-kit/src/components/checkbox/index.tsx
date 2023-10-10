import { FC } from 'react'

import { Check } from '../../'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange: (checked: boolean) => void
  required?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  disabled,
  id,
  label,
  onChange,
  required,
}) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: s.container,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            id={id}
            onCheckedChange={onChange}
            required={required}
          >
            <AnimatePresence initial={false}>
              {checked && (
                <CheckboxRadix.Indicator asChild className={classNames.indicator} forceMount>
                  <motion.div
                    animate="checked"
                    exit="unchecked"
                    initial="unchecked"
                    variants={{
                      checked: { scale: 1 },
                      unchecked: { scale: 0.5 },
                    }}
                  >
                    <motion.div
                      variants={{
                        checked: {
                          opacity: 1,
                          strokeDashoffset: 0,
                          transition: { duration: 0.1 },
                        },
                        unchecked: {
                          opacity: 0,
                          transition: { duration: 0.1 },
                        },
                      }}
                    >
                      <Check color={'var(--color-text-primary)'} size={18} />
                    </motion.div>
                  </motion.div>
                </CheckboxRadix.Indicator>
              )}
            </AnimatePresence>
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
