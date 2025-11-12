'use client'
import { FC, ReactNode } from 'react'

import { CheckBoxSelected } from '../../'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: ReactNode
  onChange: (checked: boolean) => void
  required?: boolean
  tight?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  className,
  disabled,
  id,
  label,
  onChange,
  required,
  tight = false,
}) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, tight && s.tight),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled, tight && s.tight),
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
                    animate={'checked'}
                    exit={'unchecked'}
                    initial={'unchecked'}
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
                      <CheckBoxSelected size={24} />
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
