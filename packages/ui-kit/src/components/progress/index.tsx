import * as React from 'react'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import { clsx } from 'clsx'

import s from './progress.module.scss'
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    color?: string
    width?: string | number
    label?: string | false
  }
>(
  (
    {
      className,
      value = 0,
      width = '100%',
      max = 100,
      color = 'var(--color-accent-500)',
      style,
      label = `${value}/${max}`,
      ...props
    },
    ref
  ) => {
    const classNames = {
      container: s.container,
      root: clsx(s.root, className),
      indicator: s.indicator,
      label: s.label,
    }

    return (
      <div className={classNames.container} style={{ width, ...style }}>
        <ProgressPrimitive.Root ref={ref} className={classNames.root} value={value} {...props}>
          <ProgressPrimitive.Indicator
            className={classNames.indicator}
            style={{
              transform: `translateX(-${100 - ((value || 0) / max) * 100}%)`,
              backgroundColor: color,
            }}
          />
        </ProgressPrimitive.Root>
        {label && <div className={classNames.label}>{label}</div>}
      </div>
    )
  }
)

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
